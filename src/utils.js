let Utils = {};


//NB: Sound files in /System/Library/Sounds
Utils.Sounds = {
    Basso: "Basso",
    Blow: "Blow",
    Bottle: "Bottle",
    Frog: "Frog",
    Funk: "Funk",
    Glass: "Glass",
    Hero: "Hero",
    Morse: "Morse",
    Ping: "Ping",
    Pop: "Pop",
    Purr: "Purr",
    Sosumi: "Sosumi",
    Submarine: "Submarine",
    Tink: "Tink"
};


Utils.playSoundNamed = function(name) {
    let sound = NSSound.soundNamed(name);
    if (sound) 
        sound.play();
};


Utils.chooseFolder = function() {
    let panel = NSOpenPanel.openPanel();
    panel.setCanChooseDirectories(true);
    panel.setCanChooseFiles(false);
    panel.setCanCreateDirectories(true);
    
    if (panel.runModal() == NSModalResponseOK) 
    {
        let path = panel.URL().path();
        if (0 == path.indexOf("file://")) 
        {
            //remove the file:// path from string
            path = path.substring(7);
        }

        if (!path.endsWith("/"))
            path += "/";

        return path;
    }
    else
    {
        return null;
    }
};


Utils.showDialog = function(message) {
    let app = NSApplication.sharedApplication();
    if (app)
        app.displayDialog_withTitle(message, "Sketch2QML");
};


Utils.showInFinder = function(directoryPathOrFilePath) {
    let errorPointer = MOPointer.alloc().init();
    let fileManager = NSFileManager.defaultManager();
    let result = fileManager.attributesOfItemAtPath_error(directoryPathOrFilePath, errorPointer);
    if (result)
    {
        if (result.isDirectory()) 
            NSWorkspace.sharedWorkspace().openFile_withApplication(directoryPathOrFilePath, "Finder");
        else 
            NSWorkspace.sharedWorkspace().selectFile_inFileViewerRootedAtPath(directoryPathOrFilePath, nil);
    }
    else
        console.warn("Utils.showInFinder: " + directoryPathOrFilePath + " does not exist or can't be read");
};


Utils.runCommand = function (command, args, currentDirectoryPath) {
    var task = NSTask.alloc().init();
    task.setLaunchPath_(command);
    if (currentDirectoryPath)
        task.setCurrentDirectoryPath(currentDirectoryPath);
    
    task.arguments = args;
    task.launch();
    task.waitUntilExit();
    return (task.terminationStatus() == 0)
};


Utils.copyFile = function (source, destination) {
    const manager = NSFileManager.defaultManager();
    if (manager.fileExistsAtPath(source))
        manager.copyItemAtPath_toPath_error(source, destination, null);
    else
        console.warn("Utils.copyFile: file '" + source + "` does not exist");
};


Utils.fileExists = function (filePath) {
    return NSFileManager.defaultManager().fileExistsAtPath(filePath);
};


Utils.expandTildeInPath = function (filePath) {
    return String(NSString.stringWithString(filePath).stringByExpandingTildeInPath());
};


Utils.createDirectoryIfNeeded = function(path) {
    const manager = NSFileManager.defaultManager();
    if (manager.fileExistsAtPath(path)) {
        return true;
    } else {
        if (manager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, true, nil, nil)) {
            return true;
        } else {
            console.warn("Utils.createDirectoryIfNeeded: failed to create directory " + path);
            return false;
        }
    }
};


Utils.forceNewDirectory = function(path) {
    const manager = NSFileManager.defaultManager();
    if (manager.fileExistsAtPath(path))
        manager.removeItemAtPath_error(path, nil);
        
    if (manager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, true, nil, nil)) {
        return true;
    } else {
        console.warn("Utils.forceNewDirectory: failed to create directory " + path);
        return false;
    }
};


Utils.roundWithDecimalPrecision = function (value, precision){
    let multiplier = Math.pow(10, precision || 0);
    return Math.round((value + Number.EPSILON) * multiplier)/multiplier;
};


Utils.roundBy = function(value, rounder) {
    let multiplier = 1/(rounder || 0.5);
    return Math.round(value * multiplier)/multiplier;
}


Utils.isLine = function(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isLine());
};


Utils.layerAbsoluteRect = function(layer) {log("test")
    const sketchVersion = require('sketch/dom').version.sketch;
    
    if (sketchVersion >= 97) {
       let absoluteRect = layer.frame.changeBasis({ from: layer.parent});

       return absoluteRect.asCGRect();
    } else {
        // Sketch 96 and below
        let nativeLayer = layer.sketchObject;
        return nativeLayer.absoluteRect().rect();
    }
};


Utils.layerAbsoluteInfluenceRect = function(layer) {
    const sketchVersion = require('sketch/dom').version.sketch;

    if (sketchVersion >= 97) {
        //NB: method influenceRectForBoundsInDocument() of MSLayer removed in Sketch 97
        log("No implementation to get absoluteInfluenceRect in Sketch >= 97");
        let absoluteRect = layer.frame.changeBasis({ from: layer.parent});
        return absoluteRect.asCGRect();
    } else if (sketchVersion >= 96) {
        //NB: method absoluteInfluenceRect() of MSLayer removed in Sketch 96
        let nativeLayer = layer.sketchObject;
        const document = nativeLayer.documentData();
        const immutable = nativeLayer.immutableModelObject();
        const relativeInfluenceRect = immutable.influenceRectForBoundsInDocument(document);
        return nativeLayer.convertRect_toLayer_(relativeInfluenceRect, null);
    } else {
        // Sketch 95 and below
        let nativeLayer = layer.sketchObject;
        return nativeLayer.absoluteInfluenceRect();
    }
};


Utils.exportLayerWithFormats = function(layer, exportPath, exportName, formats, preserveFrameSize, applyTransformAndOpacity) {
    let topInset = 0;
    let bottomInset = 0;
    let leftInset = 0;
    let rightInset = 0;

    if (!layer || !exportPath)
    {
        console.warn("Utils.exportLayerWithFormats: layer or exportPath is not defined");
        return [topInset, bottomInset, leftInset, rightInset];
    }

    if (formats.length > 0) 
    {
        let sketchDom = require('sketch/dom');
        let document = sketchDom.getSelectedDocument();
        let layerToExport = layer;

        if (!exportName)
            exportName = layer.name;

        if (!exportPath.endsWith("/"))
            exportPath += "/";

        //NB: layer.transform.rotation wraps layer.sketchObject.userVisibleRotation() 
        //     that matches what users see in the inspector which may be different 
        //     from the raw `rotation` value
        //     Here, we need the raw rotation because the generated code will apply a rotation
        //
        //NB: layer.sketchObject.userVisibleRotation and layer.sketchObject.rotation don't use the same rotation direction
        //    layer.sketchObject.userVisibleRotation  is clockwise, layer.sketchObject.rotation is counterclockwise
        let rotation = Utils.roundWithDecimalPrecision(-layer.sketchObject.rotation(), 3);

        let isRotated = (rotation != 0);
        let isFlippedHorizontally = layer.transform.flippedHorizontally;
        let isFlippedVertically = layer.transform.flippedVertically;
        let parentIsGroup = (layer.parent && layer.parent.sketchObject && layer.parent.sketchObject.isKindOfClass(MSLayerGroup.class()));

        // Duplicate our layer if needed
        let useDuplicate = false;
        if (
            !applyTransformAndOpacity 
            && 
            ((layer.style.opacity != 1) || isRotated || isFlippedHorizontally || isFlippedVertically || parentIsGroup)
            )
        {
            useDuplicate = true;
            layerToExport = layer.duplicate();
            layerToExport.parent = document.selectedPage;

            layerToExport.style.opacity = 1;
            
             if (isFlippedHorizontally)
                layerToExport.transform.flippedHorizontally = false;
 
             if (isFlippedVertically)
                 layerToExport.transform.flippedVertically = false;
 
            if (isRotated) {
                if (Utils.isLine(layer)) {
                    // Special case: Sketch updates the points of a line when we set its rotation
                    // Rotation = 0 => horizontal line
                   let frame = layerToExport.frame;
                   let point0 = layerToExport.points[0];
                   let pt0X = point0.point.x * frame.width;
                   let pt0Y = point0.point.y * frame.height;
                   let point1 = layerToExport.points[1];
                   let pt1X = point1.point.x * frame.width;
                   let pt1Y = point1.point.y * frame.height;
                   let angleInDegrees = Math.atan2(pt1Y - pt0Y, pt1X - pt0X) * 180 / Math.PI;

                   layerToExport.transform.rotation = angleInDegrees;
                } else {
                    layerToExport.transform.rotation = 0;
                }
            }
        }

        let absoluteRect = Utils.layerAbsoluteRect(layerToExport);
        let absoluteInfluenceRect = Utils.layerAbsoluteInfluenceRect(layerToExport);
        let exportRect = absoluteRect;

        if (!preserveFrameSize && !CGRectContainsRect(absoluteRect, absoluteInfluenceRect))
        {
            //TODO: decide if it's better to use the influence rectangle OR to use the union of both rectangles
            //     - influence rectangle: we export the smallest possible image BUT we can have rather high inset values
            //     - union: we can have small inset values BUT we export a larger image
            //exportRect = CGRectUnion(absoluteRect, absoluteInfluenceRect); 
            exportRect = absoluteInfluenceRect;

            let absoluteRectX = Utils.roundBy(absoluteRect.origin.x, 0.5);
            let absoluteRectY = Utils.roundBy(absoluteRect.origin.y, 0.5);
            let absoluteRectWidth = Math.ceil(absoluteRect.size.width);
            let absoluteRectHeight = Math.ceil(absoluteRect.size.height);

            topInset = exportRect.origin.y - absoluteRectY;
            bottomInset = (absoluteRectY + absoluteRectHeight) - (exportRect.origin.y + exportRect.size.height);
            leftInset = exportRect.origin.x - absoluteRectX;
            rightInset = (absoluteRectX + absoluteRectWidth) - (exportRect.origin.x + exportRect.size.width);

//         log("Utils.exportLayerWithFormats: we don't use the frame size of our layer, we will use insets to extend the visual size of our layer. Layer=" + layer.name + ", top=" + topInset + ", bottom=" + bottomInset + ", left=" + leftInset + ", right=" + rightInset);
        }
//      else log("Utils.exportLayerWithFormats: we use the frame size of our layer to avoid trimming of transparent pixels. Layer=" + layer.name);

        //log("Export " + exportName + " rect " + exportRect.origin.x + ", " + exportRect.origin.y + ", " + exportRect.size.width + ", " + exportRect.size.height)
        //log(" => insets top=" + topInset + ", bottom=" + bottomInset + " -- left=" + leftInset + ", right=" + rightInset)
     

        let nativeLayer = layerToExport.sketchObject;
        const sketchVersion = require('sketch/dom').version.sketch;
        if (sketchVersion >= 97) {
            console.warn("Utils.exportLayerWithFormats: can not export images - Sketch >= 97 is not yet supported")
        } else if (sketchVersion >= 79) {
            // Version 79 of Sketch-Headers does not contain
            // -(id)exportRequestFromExportFormat:(id)arg1 layer:(id)arg2 inRect:(struct CGRect)arg3 useIDForName:(BOOL)arg4;
            formats.forEach(format => {
                let exportFormat = (format.sketchObject ? format.sketchObject : format);
                let exportRequest = MSExportRequest.exportRequestsFromExportableLayer_exportFormats_inRect_useIDForName(nativeLayer, [exportFormat], exportRect, false).firstObject();
                exportRequest.setShouldTrim(false);
                document.sketchObject.saveArtboardOrSlice_toFile(exportRequest, exportPath + MSExportFormat.exportableFilenameForLayerName_exportFormat(exportName, exportFormat));
            });
        } else {
            formats.forEach(format => {
                let exportFormat = (format.sketchObject ? format.sketchObject : format);
                let exportRequest = MSExportRequest.exportRequestFromExportFormat_layer_inRect_useIDForName(exportFormat, nativeLayer, exportRect, false);
                exportRequest.setShouldTrim(false);
                document.sketchObject.saveArtboardOrSlice_toFile(exportRequest, exportPath + MSExportFormat.exportableFilenameForLayerName_exportFormat(exportName, exportFormat));
            });
        }

        if (useDuplicate)
            layerToExport.remove();
    }
    else
        console.warn("Utils.exportLayerWithFormats: no export format to export layer " + layer.name);

    return [topInset, bottomInset, leftInset, rightInset];
}



Utils.exportLayerAsPNG = function(layer, maxAtN, exportPath, exportName, preserveFrameSize, applyTransformAndOpacity) {
    if (!layer || !exportPath)
    {
        console.warn("Utils.exportLayerAsPNG: layer or exportPath is not defined");
        return [0, 0, 0, 0];
    }

    maxAtN = Math.max(1, maxAtN);

    let exportFormats = [];
    for (let index = 1; index <= maxAtN; index++) 
    {
        let pngFormat = MSExportFormat.alloc().init();
        pngFormat.setFileFormat("png");
        pngFormat.setScale(index);
        pngFormat.setName((index === 1) ? "" : "@" + index + "x");
        
        exportFormats.push(pngFormat);
    }

    return Utils.exportLayerWithFormats(layer, exportPath, exportName, exportFormats, preserveFrameSize, applyTransformAndOpacity);
};


Utils.exportLayerAsSVG = function(layer, exportPath, exportName, preserveFrameSize, applyTransformAndOpacity) {
    if (!layer || !exportPath)
    {
        console.warn("Utils.exportLayerAsSVG: layer or exportPath is not defined");
        return [0, 0, 0, 0];
    }

    let svgFormat = MSExportFormat.alloc().init();
    svgFormat.setFileFormat("svg");
    svgFormat.setScale(1);

    return Utils.exportLayerWithFormats(layer, exportPath, exportName, [svgFormat], preserveFrameSize, applyTransformAndOpacity);
};


Utils.exportLayerWithUserDefinedExportOptions = function(layer, exportPath, exportName, preserveFrameSize, applyTransformAndOpacity) {
    if (!layer || !exportPath)
    {
        console.warn("Utils.exportLayerWithUserDefinedExportOptions: layer or exportPath is not defined");
        return [0, 0, 0, 0];
    }

    return Utils.exportLayerWithFormats(layer, exportPath, exportName, layer.exportFormats, preserveFrameSize, applyTransformAndOpacity);
};



module.exports = Utils;
