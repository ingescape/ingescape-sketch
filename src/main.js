export function onShowAboutDialog(context) {
    let iconPath = context.plugin.urlForResourceNamed('icon.png').path();
    let icon = NSImage.alloc().initByReferencingFile(iconPath);
    let dialog = NSAlert.alloc().init();
    dialog.setMessageText("Ingescape plugin");
    dialog.setInformativeText("This plugin exports a Sketch file to an Ingescape Pivot format for code generation in Qt/QML, etc. to be used in Ingescape Circle");
    dialog.icon = icon;
    dialog.addButtonWithTitle("Get Circle");
    dialog.addButtonWithTitle("Close");

    let responseCode = dialog.runModal();
    if (responseCode == NSAlertFirstButtonReturn) {
        NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("https://ingescape.com/circle/"));
    }  
}


export function onOpenFileAndExportWholeAsXml(context) {
    if(context.file) 
    {
        let Document = require('sketch/dom').Document;
        let filePath = String(context.file);
        let fileName = filePath.substring(filePath.lastIndexOf("/")+1, filePath.indexOf("."));
        fileName = fileName.replace(/[^a-zA-Z0-9\-_\s]/g, "")
        fileName = fileName.trim();
        let fileDir = filePath.substring(0, filePath.lastIndexOf("/")+1) + fileName + "_export/";

        // because of a bug, we can't call context.file directly, we must cast it as a string
        Document.open(String(context.file), (err, document) => {
            if (err) {
                console.warn("Can't open file ", filePath, true)
            }
            else {
                exportWhole(context, fileDir, false);
                let document = require('sketch/dom').getSelectedDocument();
                document.close();
            }
        });
    }
}

/*
 Exporting file as a library consists in looking for the symbol masters
 declared as components (using the -> symbol) and exposing their
 inner parts in XML structures.
*/
export function onExportLibraryAsXml(context) {
    let Tree = require("./tree.js");
    let Xml = require("./xml.js");
    let Utils = require("./utils.js");
    let sketch = require('sketch/dom');
    let document = sketch.getSelectedDocument();
    let settings = require("sketch/settings");
    let UI = require('sketch/ui');

    if (!document.path) {
        UI.alert("Sketch2QML: can not export library as XML", "You must save your Sketch file first")
        return;
    }

    let path = Utils.chooseFolder();
    if (!path) {
        log("onExportLibraryAsXml: action cancelled by user");
        return;
    }

    let docPath = decodeURI(document.path);
    let docPathElements = docPath.split('/');
    let documentName = "Default";
    if (docPathElements.length > 0) {
        documentName = Tree.pascalize(docPathElements[docPathElements.length - 1].replace(/.sketch/g,""));
    }

    let libraryName = documentName;

    // Init directories
    let libraryFontsSubDir = "resources/" + libraryName + "_library/fonts/";
    let libraryImagesSubDir = "resources/" + libraryName + "_library/images/";
    Utils.createDirectoryIfNeeded(path + libraryFontsSubDir);
    Utils.forceNewDirectory(path + libraryImagesSubDir);

    UI.message("⚙️ Exporting library as Ingescape Pivot format. Please wait...");

    let documentContext = Tree.initDocumentContext(libraryImagesSubDir);

    //init lib
    let xmlLibraryRoot = NSXMLElement.alloc().initWithName("library");
    Xml.xmlAddAttributesToElement(xmlLibraryRoot, ["name", libraryName, "sketchVersion", settings.version.sketch]);

    //export lib
    let symbols = document.getSymbols();
    let symbolsIDs = [];
    for (let i = 0; symbols && (i < symbols.length); i++){
        let currentSymbol = symbols[i];

        if (currentSymbol.name.startsWith("#")){
            continue;
        }

        if (symbolsIDs.includes(currentSymbol.id)){
            log("WARNING: symbol already included (ID=" + currentSymbol.id + ", name " + currentSymbol.name + ")");
            continue;
        } else {
            symbolsIDs.push(currentSymbol.id);
        }

        let indexedData = documentContext.globalNamesIndex[currentSymbol.id];
        if (!indexedData){
            log("could not find indexed data for " + currentSymbol.name + ". This element will be ignored");
            log("\t->Please check that it is not an external master that has not been made local.")
            continue;
        }
        let actualName = Tree.getUniqueNameFromIndexedData(indexedData);
        let actualType = Tree.getTypeFromIndexedData(indexedData);
        let keyValues = Tree.getKeyValuesFromIndexedData(indexedData);
        let parentType = Tree.getParentTypeFromIndexedData(indexedData);

        let xmlComponent = Xml.xmlAddElement(xmlLibraryRoot, "component", 
                                        ["type", actualType, "name", actualName, 
                                        "width", currentSymbol.frame.width, "height", currentSymbol.frame.height,
                                        "hasBackground", (currentSymbol.background.enabled && currentSymbol.background.includedInInstance),
                                        "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(currentSymbol)],
                                        null);

        if (parentType)
            Xml.xmlAddAttributesToElement(xmlComponent, ["parentType", parentType]);

        if (keyValues.length > 0)
            Xml.xmlAddCustomPropertiesToElement(xmlComponent, keyValues);

        Tree.addSymbolMasterOverridesToXml(currentSymbol, xmlComponent, documentContext);
        Tree.treeIterateLayers(currentSymbol.layers, xmlComponent, false, path, libraryImagesSubDir, xmlLibraryRoot, documentContext, null);
    }

    Tree.addSharedTextStylesToXml(xmlLibraryRoot);
    Tree.addFontFilesToXml(xmlLibraryRoot, path, libraryFontsSubDir, documentContext.fontFiles, false);
    Tree.addColorVariablesToXml(xmlLibraryRoot); // NB: it must be done after all exports because styles and items may use not imported swatches
    Tree.clearTempContext();
    
    //export model to XML
    let xmlFilePath = path + libraryName + "_library.xml";
    Xml.exportXMLToPath(xmlFilePath, xmlLibraryRoot);

    Utils.playSoundNamed(Utils.Sounds.Glass);
    UI.message("✅ Library export completed to " + xmlFilePath);
    Utils.showInFinder(xmlFilePath); 
}


/*
 Exports all artboards and orphan layers as windows
 */
export function onExportApplicationAsXml(context) {
    let Tree = require("./tree.js");
    let Xml = require("./xml.js");
    let Utils = require("./utils.js");
    let sketch = require('sketch/dom')
    let document = sketch.getSelectedDocument();
    let settings = require("sketch/settings");
    let UI = require('sketch/ui');

    if (!document.path) {
        UI.alert("Sketch2QML: can not export application as XML", "You must save your Sketch file first")
        return;
    }

    let path = Utils.chooseFolder();
    if (!path){
        log("onExportApplicationAsXml: action cancelled by user");
        return;
    }

    let docPath = decodeURI(document.path);
    let docPathElements = docPath.split('/');
    let documentName = "Default";
    if (docPathElements.length > 0){
        documentName = Tree.pascalize(docPathElements[docPathElements.length - 1].replace(/.sketch/g,""));
    }

    let appName = documentName;

    // Init directories
    let appFontsSubDir = "resources/" + appName + "_app/fonts/";
    let appImagesSubDir = "resources/" + appName + "_app/images/";
    let libraryImagesSubDir = "resources/" + libraryName + "_library/images/";
    Utils.createDirectoryIfNeeded(path + appFontsSubDir);
    Utils.forceNewDirectory(path + appImagesSubDir);
 

    UI.message("⚙️ Exporting application as Ingescape Pivot format. Please wait...");

    let documentContext = Tree.initDocumentContext(libraryImagesSubDir);

    //init app
    let xmlAppRoot = NSXMLElement.alloc().initWithName("app");
    Xml.xmlAddAttributesToElement(xmlAppRoot, ["name", appName, "sketchVersion", settings.version.sketch]);
    

    //export app
    for (let i = 0; i < document.pages.length; i++){
        let page = document.pages[i]
        if (page.name.startsWith("#")){
            continue;
        }

        let xmlPage = Xml.xmlAddElement(xmlAppRoot, "page", ["name", page.name], null);
        
        // Artboard and elements outside of artboards
        let artboards = [];
        let layers = [];
        for (let j = 0; j < page.layers.length; j++){
            let artboardOrlayer = page.layers[j];
            let type = artboardOrlayer.sketchObject.class();
            if (type != "MSArtboardGroup"){
                layers.push(artboardOrlayer);
            } else {
                artboards.push(artboardOrlayer);
            }
        }

        Tree.treeIterateLayers(layers, xmlPage, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
        
        for (let j = 0; j < artboards.length; j++) {
            let artboard = artboards[j];

            if (artboard.name.startsWith("#")){
                continue;
            }

            let indexedData = documentContext.globalNamesIndex[artboard.id];
            if (!indexedData){
                log("could not find indexed data for " + artboard.name + ". This artboard will be ignored");
                continue;
            }

            let actualName = Tree.getUniqueNameFromIndexedData(indexedData);
            let actualType = Tree.getTypeFromIndexedData(indexedData);
            let keyValues = Tree.getKeyValuesFromIndexedData(indexedData);
            let parentType = Tree.getParentTypeFromIndexedData(indexedData);

            let xmlScreen = Xml.xmlAddElement(xmlPage, "screen", 
                                        ["type", actualType, "name", actualName, 
                                        "width", artboard.frame.width, "height", artboard.frame.height,
                                        "hasBackground", (artboard.background.enabled && artboard.background.includedInExport),
                                        "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(artboard)],
                                         null);

            if (parentType)
                Xml.xmlAddAttributesToElement(xmlScreen, ["parentType", parentType]);                                         

            if (keyValues.length > 0)
                Xml.xmlAddCustomPropertiesToElement(xmlScreen, keyValues);

            Tree.treeIterateLayers(artboard.layers, xmlScreen, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
        }
     }

    Tree.addSharedTextStylesToXml(xmlAppRoot);
    Tree.addFontFilesToXml(xmlAppRoot, path, appFontsSubDir, documentContext.fontFiles, false);
    Tree.addColorVariablesToXml(xmlAppRoot); // NB: it must be done after all exports because styles and items may use not imported swatches
    Tree.clearTempContext();
    
    let xmlFilePath = path + appName + "_app.xml"
    Xml.exportXMLToPath(xmlFilePath, xmlAppRoot);

    Utils.playSoundNamed(Utils.Sounds.Glass);
    UI.message("✅ App export completed to " + xmlFilePath);
    Utils.showInFinder(xmlFilePath); 
};


function exportWhole(context, exportDir = "", interactionsAllowed = true) {
    let Tree = require("./tree.js");
    let Xml = require("./xml.js");
    let Utils = require("./utils.js");
    let sketch = require('sketch/dom');
    let document = sketch.getSelectedDocument();
    let settings = require("sketch/settings");
    let UI = require('sketch/ui');

    let path = (interactionsAllowed && (exportDir === "")) ? Utils.chooseFolder() : exportDir;
    if (!path){
        log("exportWhole: action cancelled by user");
        return;
    }

    let docPath = decodeURI(document.path);
    let docPathElements = docPath.split('/');
    let documentName = "Default";
    if (docPathElements.length > 0){
        documentName = Tree.pascalize(docPathElements[docPathElements.length - 1].replace(/.sketch/g,""));
    }

    let appName = documentName;
    let libraryName = documentName;

    // Init directories
    let appFontsSubDir = "resources/" + appName + "_app/fonts/";
    let appImagesSubDir = "resources/" + appName + "_app/images/";
    let libraryFontsSubDir = "resources/" + libraryName + "_library/fonts/";
    let libraryImagesSubDir = "resources/" + libraryName + "_library/images/";
    Utils.createDirectoryIfNeeded(path + appFontsSubDir);
    Utils.forceNewDirectory(path + appImagesSubDir);
    Utils.createDirectoryIfNeeded(path + libraryFontsSubDir);
    Utils.forceNewDirectory(path + libraryImagesSubDir);
        

    let maxNumberOfSteps = 2;
    UI.message("⚙️ [1/" + maxNumberOfSteps+ "] Exporting library as Ingescape Pivot format. Please wait...");

    let documentContext = Tree.initDocumentContext(libraryImagesSubDir);

    //export library
    let xmlLibraryRoot = NSXMLElement.alloc().initWithName("library");
    Xml.xmlAddAttributesToElement(xmlLibraryRoot, ["name", libraryName, "sketchVersion", settings.version.sketch]);
    
    let symbols = document.getSymbols();
    let symbolsIDs = [];
    for (let i = 0; symbols && (i < symbols.length); i++){
        let currentSymbol = symbols[i];

        if (currentSymbol.name.startsWith("#")){
            continue;
        }

        if (symbolsIDs.includes(currentSymbol.id)){
            log("WARNING: symbol already included (ID=" + currentSymbol.id + ", name " + currentSymbol.name + ")");
            continue;
        } else {
            symbolsIDs.push(currentSymbol.id);
        }

        let indexedData = documentContext.globalNamesIndex[currentSymbol.id];
        if (!indexedData){
            log("could not find indexed data for " + currentSymbol.name + ". This element will be ignored");
            log("\t->Please check that it is not an external master that has not been made local.")
            continue;
        }

        let actualName = Tree.getUniqueNameFromIndexedData(indexedData);
        let actualType = Tree.getTypeFromIndexedData(indexedData);
        let keyValues = Tree.getKeyValuesFromIndexedData(indexedData);
        let parentType = Tree.getParentTypeFromIndexedData(indexedData);

        let xmlComponent = Xml.xmlAddElement(xmlLibraryRoot, "component", 
                                        ["type", actualType, "name", actualName, 
                                        "width", currentSymbol.frame.width, "height", currentSymbol.frame.height,
                                        "hasBackground", (currentSymbol.background.enabled && currentSymbol.background.includedInInstance),
                                        "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(currentSymbol)], 
                                        null);

        if (parentType)
            Xml.xmlAddAttributesToElement(xmlComponent, ["parentType", parentType]);

        if (keyValues.length > 0)
            Xml.xmlAddCustomPropertiesToElement(xmlComponent, keyValues);

        Tree.addSymbolMasterOverridesToXml(currentSymbol, xmlComponent, documentContext);
        Tree.treeIterateLayers(currentSymbol.layers, xmlComponent, false, path, libraryImagesSubDir, xmlLibraryRoot, documentContext, null);
    }

    Tree.addSharedTextStylesToXml(xmlLibraryRoot);
    Tree.addFontFilesToXml(xmlLibraryRoot, path, libraryFontsSubDir, documentContext.fontFiles, false);
    Tree.addColorVariablesToXml(xmlLibraryRoot); // NB: it must be done after all exports because styles and items may use not imported swatches

    Xml.exportXMLToPath(path+libraryName+"_library.xml", xmlLibraryRoot);


    
    //export app
    UI.message("⚙️ [2/" + maxNumberOfSteps + "] Exporting application as Ingescape Pivot format. Please wait...");

    let xmlAppRoot = NSXMLElement.alloc().initWithName("app");
    Xml.xmlAddAttributesToElement(xmlAppRoot, ["name", appName, "sketchVersion", settings.version.sketch]);

    for (let i = 0; i < document.pages.length; i++){
        let page = document.pages[i]
        if (page.name.startsWith("#")){
            continue;
        }

        let xmlPage = Xml.xmlAddElement(xmlAppRoot, "page", ["name", page.name], null);

        // Artboard and elements outside of artboards
        let artboards = [];
        let layers = [];
        for (let j = 0; j < page.layers.length; j++) {
            let artboardOrlayer = page.layers[j];
            let type = artboardOrlayer.sketchObject.class();
            if (type != "MSArtboardGroup"){
                layers.push(artboardOrlayer);
            } else {
                artboards.push(artboardOrlayer);
            }
        }
        
        Tree.treeIterateLayers(layers, xmlPage, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
        
        for (let j = 0; j < artboards.length; j++) {
            let artboard = artboards[j];

            if (artboard.name.startsWith("#")){
                continue;
            }

            let indexedData = documentContext.globalNamesIndex[artboard.id];
            if (!indexedData){
                log("could not find indexed data for " + artboard.name + ". This artboard will be ignored");
                continue;
            }

            let actualName = Tree.getUniqueNameFromIndexedData(indexedData);
            let actualType = Tree.getTypeFromIndexedData(indexedData);
            let keyValues = Tree.getKeyValuesFromIndexedData(indexedData);
            let parentType = Tree.getParentTypeFromIndexedData(indexedData);

            let xmlScreen = Xml.xmlAddElement(xmlPage, "screen", 
                                        ["type", actualType, "name", actualName, 
                                        "width", artboard.frame.width, "height", artboard.frame.height,
                                        "hasBackground", (artboard.background.enabled && artboard.background.includedInExport),
                                        "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(artboard)],
                                         null);
            
            if (parentType)
                Xml.xmlAddAttributesToElement(xmlScreen, ["parentType", parentType]);

            if (keyValues.length > 0)
                Xml.xmlAddCustomPropertiesToElement(xmlScreen, keyValues);

            Tree.treeIterateLayers(artboard.layers, xmlScreen, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
        }
    }

    Tree.addSharedTextStylesToXml(xmlAppRoot);
    Tree.addFontFilesToXml(xmlAppRoot, path, appFontsSubDir, documentContext.fontFiles, false);
    Tree.addColorVariablesToXml(xmlAppRoot); // NB: it must be done after all exports because styles and items may use not imported swatches
    Tree.clearTempContext();

    Xml.exportXMLToPath(path+appName+"_app.xml", xmlAppRoot);

    if (interactionsAllowed) 
    {
        Utils.playSoundNamed(Utils.Sounds.Glass);
        UI.message("✅ Export of app and lib completed to " + path);
        Utils.showInFinder(path);
    }
};


export function onExportWholeAsXml(context) {
    exportWhole(context);
};



/** 
 * ----------------------------------------------------
 * DEBUG ONLY
 * ----------------------------------------------------  
*/


export function onExportFonts(context) {
    let Utils = require("./utils.js");

    let path = Utils.chooseFolder();
    if (path)
    {
        let Tree = require("./tree.js");
        let document = require('sketch/dom').getSelectedDocument();
        let UI = require('sketch/ui');
        let fontFiles = [];

        document.pages.forEach(page => {
            Tree.getFontFilesUsedByLayer(page, fontFiles);     
        });

        if (fontFiles.length > 0) 
        {
            fontFiles.forEach(fontFile => {
                let fileName = fontFile.substring(fontFile.lastIndexOf('/') + 1);
                Utils.copyFile(fontFile, path + fileName);
            });

            UI.message("✅ Export completed - " + fontFiles.length + " font(s) exported to " + path);
            Utils.showInFinder(path);
        } 
        else 
        {
            UI.alert("Sketch2QML: can not export fonts", "❌ No font found in your Sketch document");
        }
    } 
    else 
    {
        log("onExportFonts: action cancelled by user");
    } 
};


export function onExportSelectedLayersAsPNG(context) {
    let Utils = require("./utils.js");
    let document = require('sketch/dom').getSelectedDocument();
    let UI = require('sketch/ui');

    let selectedLayers = document.selectedLayers;
    if (selectedLayers.length == 0) 
    {
        UI.alert("Sketch2QML: can not export PNG", "❌ No layers are selected ‼️\n=> Please select one or multiple layers before exporting.");
        NSBeep();
		return;
	}

    let path = Utils.chooseFolder();
    if (path)
    {
        selectedLayers.forEach(layer => {
            Utils.exportLayerAsPNG(layer, 4, path, layer.name, false, false);
            //Utils.exportLayerAsPNG(layer, 4, path, layer.name + "--frame-opacityAndTransform", true, true);
            //Utils.exportLayerAsPNG(layer, 4, path, layer.name + "--noframe-opacityAndTransform", false, true);
            //Utils.exportLayerAsPNG(layer, 4, path, layer.name + "--frame-noopacityAndTransform", true, false);
        });

        UI.message("✅ Export completed to " + path);
        Utils.showInFinder(path);
    } 
    else 
    {
        log("onExportSelectedLayersAsPNG: action cancelled by user");
    } 
};


export function onExportSelectedLayersAsSVG(context) {
    let Utils = require("./utils.js");
    let document = require('sketch/dom').getSelectedDocument();
    let UI = require('sketch/ui');

    let selectedLayers = document.selectedLayers;
    if (selectedLayers.length == 0) 
    {
        UI.alert("Sketch2QML: can not export SVG", "❌ No layers are selected ‼️\n=> Please select one or multiple layers before exporting.");
        NSBeep();
		return;
	}

    let path = Utils.chooseFolder();
    if (path)
    {
        selectedLayers.forEach(layer => {
            Utils.exportLayerAsSVG(layer, path, layer.name, false, false);
            //Utils.exportLayerAsSVG(layer, path, layer.name + "--frame-opacityAndTransform", true, true);
            //Utils.exportLayerAsSVG(layer, path, layer.name + "--noframe-opacityAndTransform", false, true);
            //Utils.exportLayerAsSVG(layer, path, layer.name + "--frame-noopacityAndTransform", true, false);
        });

        UI.message("✅ Export completed to " + path);
        Utils.showInFinder(path);
    } 
    else 
    {
        log("onExportSelectedLayersAsSVG: action cancelled by user");
    } 
};


export function onExportSelectedLayersWithUserPredefinedExportOptions(context) {
    let Utils = require("./utils.js");
    let document = require('sketch/dom').getSelectedDocument();
    let UI = require('sketch/ui');
   
    let selectedLayers = document.selectedLayers;
    if (selectedLayers.length == 0) 
    {
        UI.alert("Sketch2QML: can not export images", "❌ No layers are selected ‼️\n=> Please select one or multiple layers before exporting.");
        NSBeep();
		return;
	}

    let path = Utils.chooseFolder();
    if (path)
    {
        selectedLayers.forEach(layer => {
            Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name, false, false);
            //Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name + "--frame-opacityAndTransform", true, true);
            //Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name + "--noframe-opacityAndTransform", false, true);
            //Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name + "--frame-noopacityAndTransform", true, false);
        });

        UI.message("✅ Export completed to " + path);
        Utils.showInFinder(path);
    } 
    else 
    {
        log("onExportSelectedLayersWithUserPredefinedExportOptions: action cancelled by user");
    } 
};


