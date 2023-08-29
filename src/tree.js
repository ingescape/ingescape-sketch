// TODO: add all reserved keywords
let forbiddenNames = [
  "bool",
  "true",
  "false",
  "double",
  "float",
  "real",
  "int",
  "long",
  "short",
  "string",
  "url",
  "var",
  "let",
  "function",
  "if",
  "else",
  "for",
  "while",
  "do",
  "break",
  "switch",
  "case",
  "default",
  "continue",
  "root",
  "delete",
  "bottom",
  "top",
  "left",
  "right",
  "baseline"
];


let diacriticsMap = {
    A: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g,
    AE: /[\u00C6]/g,
    E: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g,
    I: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g,
    O: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g,
    OE: /[\u0152]/g,
    U: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g,
    a: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g,
    ae: /[\u00E6\u01FD\u01E3]/g,
    c: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g,
    e: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g,
    i: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g,
    o: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g,
    oe: /[\u0153]/g,
    u: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
  };


let numberOfImagesPerLayerExport = 2; // 2 => (original size, @2x), 4 => (original size, @2x, @3x, @4x)

let maximumImageWidthOrHeight = 16384;

let GLOBALNAMESINDEX_UNIQUENAME = 0;
let GLOBALNAMESINDEX_TYPE = 1;
let GLOBALNAMESINDEX_KEYVALUES = 2;
let GLOBALNAMESINDEX_RAWNAME = 3;
let GLOBALNAMESINDEX_PARENTTYPE = 4;

let TEMP_CONTEXT = {};


let POINT_DECIMAL_PRECISION = 5; // Number of decimals to export abscissa and ordinate of points
let ANGLE_DECIMAL_PRECISION = 3; 


function getUniqueNameFromIndexedData(data) {
    return data[GLOBALNAMESINDEX_UNIQUENAME];
}


function getTypeFromIndexedData(data) {
    return data[GLOBALNAMESINDEX_TYPE];
}


function getKeyValuesFromIndexedData(data) {
    return data[GLOBALNAMESINDEX_KEYVALUES];
}


function getRawNameFromIndexedData(data) {
    return data[GLOBALNAMESINDEX_RAWNAME];
}


function getParentTypeFromIndexedData(data) {
    return data[GLOBALNAMESINDEX_PARENTTYPE];
}


function clearTempContext() {
    TEMP_CONTEXT = {
        availableSwatchIDs: [],
        missingSwatches: {},
        imageHashToFilePath: {}
    };
}


function initDocumentContext(libraryImagesSubDir) {
    clearTempContext();

    let documentContext = {
        libraryImagesSubDir: libraryImagesSubDir,
        fontFiles: [],
        sharedLayerStylesIndex: {},
        sharedTextStylesIndex: {},
        globalNamesIndex: {},
        textsWithOutOfSyncStyle: {}
    };

    let sketch = require('sketch/dom');
    let document = sketch.getSelectedDocument();

    document.sharedLayerStyles.forEach(style => {
        documentContext.sharedLayerStylesIndex[style.id] = style;
    });

    document.sharedTextStyles.forEach(style => {
        documentContext.sharedTextStylesIndex[style.id] = style;
    });

    treePopulateGlobalNamesIndex(documentContext);
    let nb = Object.keys(documentContext.globalNamesIndex).length;
    log("Indexed elements : " + nb);

    let usedNativeSwatches = document.sketchObject.documentData().allSwatches();
    if (usedNativeSwatches.length > 0) {
        usedNativeSwatches.forEach(nativeSwatch => {
            TEMP_CONTEXT.availableSwatchIDs.push(String(nativeSwatch.objectID()));
        });
    }

    return documentContext;
}


function addFontFileToContext(context, fontFilePath) {
    if (context && context.fontFiles && fontFilePath && !context.fontFiles.includes(fontFilePath))
        context.fontFiles.push(fontFilePath);
}


function getFontFilesUsedByLayer(layer, result) {
    if (layer) {
        let fontFilePath = layerFontFilePath(layer);
        if (fontFilePath && !result.includes(fontFilePath)) {
            result.push(fontFilePath);
        }

        if (layer.layers && (layer.layers.length > 0)) {
            layer.layers.forEach(subLayer => {
                getFontFilesUsedByLayer(subLayer, result);
            });
        }
    }
}


function addSymbolMasterOverridesToXml(symbolMaster, xmlRoot, documentContext){
    if (symbolMaster.overrides){
        let Xml = require("./xml.js");
        symbolMaster.overrides.forEach(overR => {
            // NB: Since october 2022, Sketch allows to override font properties (weight, alignment, etc.) and colors
            //     within Symbol instances without creating a text style or layer style for each variation
            //     This plugin only supports the old overridable properties
            if (overR.editable
                && ((overR.property == "image") || (overR.property == "textStyle") || (overR.property == "stringValue") 
                    || (overR.property == "layerStyle") || (overR.property == "symbolID"))
                ) {
                let overrideTargetPath = treeBuildOverrideTargetPath(overR, documentContext.globalNamesIndex)
                Xml.xmlAddElement(xmlRoot, "overridable", ["property", overR.property, "on", overrideTargetPath], null);
            }
        });
    }
}


function treeIterateLayers(layers, parent, shallIgnoreSymbolMasters, rootDirPath, imagesSubDir, xmlRoot,
                            documentContext, mask){
    let Xml = require("./xml.js");
    let sketch = require('sketch/dom');
    let document = sketch.getSelectedDocument();
    let actualParent = parent; //parent may change during iteration (when finding masks)
    let currentMask = null;
    
    for (let i = 0; layers && (i < layers.length); i++){
        let l = layers[i]
        let type = l.sketchObject.class()
        let name = l.name;

        // We skip special elements
        if (name.startsWith("#"))
            continue

        if ((type == "MSSymbolMaster") && shallIgnoreSymbolMasters){
            continue;
        } else if ((type == "MSArtboardGroup") || (type == "MSSliceLayer") || (type == "MSHotspotLayer")) {
            continue;
        } 
        
        let indexedData = documentContext.globalNamesIndex[l.id];
        if (!indexedData){
            log("ERROR: could not find indexed data for " + l.name + " (" + l.id + ") : ignore this element.");
            continue;
        }
        let actualName = getUniqueNameFromIndexedData(indexedData);
        let actualType = getTypeFromIndexedData(indexedData);
        let keyValues = getKeyValuesFromIndexedData(indexedData);

        let isCustomClass = false;
        
        //handle special types that will add specific beacons in XML or require specific logics
        if (actualType == "includeLibrary"){
            let rawName = getRawNameFromIndexedData(indexedData);
            let xmlCurrent = Xml.xmlAddElement(actualParent, "include", ["name", rawName], null);
            if (keyValues.length > 0)
                Xml.xmlAddCustomPropertiesToElement(xmlCurrent, keyValues);

        } else if (actualType == "includeExternal") {
            let xmlCurrent = Xml.xmlAddElement(actualParent, "external", ["name", actualName], null);
            if (keyValues.length > 0)
                Xml.xmlAddCustomPropertiesToElement(xmlCurrent, keyValues);
            
        } else if ((type == "MSTextLayer") && (actualType == "includeData")) {
            let xmlCurrent = Xml.xmlAddElement(actualParent, "data", ["name", actualName], l.text);
            if (keyValues.length > 0)
                Xml.xmlAddCustomPropertiesToElement(xmlCurrent, keyValues);
                
        } else {
            //FIXME: using internal Sketch API that might change in future versions
            if (l._object.shouldBreakMaskChain()){
                actualParent = parent; //restore original parent because we break mask chain with this element
                currentMask = null;
            }
            
            let xmlCurrent = Xml.xmlAddElement(actualParent, "item", ["name", actualName], null);

            addFontFileToContext(documentContext, layerFontFilePath(l));
            
            if (type == "MSSymbolInstance") {
                if (!l.master) {
                    log("could not find the symbol master used by " + l.name);
                    log("\t->Please check that it does not use an external symbol master that has not been made local.")
                    continue;
                }

                //Instance is from a specific class and will be handled as a future software component instance
                let indexedDataSymbolMaster = documentContext.globalNamesIndex[l.master.id];
                if (!indexedDataSymbolMaster) {
                    log("could not find indexed data for " + l.master.name);
                    log("\t->Please check that it is not an external symbol master that has not been made local.")
                    continue;
                }
                
                actualType = getTypeFromIndexedData(indexedDataSymbolMaster); //get resolved type from master symbol
                isCustomClass = true;
                type = actualType; //this will relevantly block iteration on subelements at the end of this function
                
                //Symbol instances require specific management around overrides
                //Overrides are stored "as-is" to be applied as property values during code generation.
                if (l.overrides) {
                    const sketchVersion = require('sketch/dom').version.sketch;
                    let nb = l.overrides.length;
                    let symbolOverridesHash = {};

                    for (let j = 0; j < nb; j++) {
                        let overR = l.overrides[j];
                        let isEditable = overR.editable;
                        let isDefault = overR.isDefault;

                        // NB: Since october 2022, Sketch allows to override font properties (weight, alignment, etc.) and colors
                        //     within Symbol instances without creating a text style or layer style for each variation
                        //     This plugin only supports the old overridable properties
                        if ((overR.property == "image") || (overR.property == "textStyle") || (overR.property == "stringValue") 
                            || (overR.property == "layerStyle") || (overR.property == "symbolID")) {
                            let indexedDataOverride = documentContext.globalNamesIndex[overR.affectedLayer.id];
                            let originalOverrideTargetPath = treeBuildOverrideTargetPath(overR, documentContext.globalNamesIndex);
                            let overrideTargetPath = originalOverrideTargetPath;
                            if (!indexedDataOverride){
                                log("ERROR: could not find indexed data for " + overR.affectedLayer.name + " (" + overR.affectedLayer.id + "). Please check that this element is not rendered as an image.");
                                continue;
                            }
                            //log("handling override for " + overR.affectedLayer.id + " - " + overR.affectedLayer.name + " - " +  + " (" + indexedDataOverride + ")");

                            // NB: Sketch 96 uses a new API: MSOverridePoint instead of MSAvailableOverride
                            if (sketchVersion < 96) {
                                // isDefault flag: handle false positive i.e. overrides that use the default value even if isDefault returns false
                                // => it happens when:
                                //  - a symbol overrides a text and this symbol is instantiated in other symbols
                                //  - a graphic designer changes the style of an instance and then reselect the default style
                                if (overR.sketchObject && (!overR.sketchObject.overrideValue() || (overR.sketchObject.defaultValue() == overR.sketchObject.currentValue()))) {
                                    isDefault = true;
                                }
                            }

                            //handle possible nesting of overrides
                            let overrideParent = xmlCurrent; //set default parent for override data (may change with symbol overrides)

                            let prefix = overrideTargetPath;
                            let dotIndex = overrideTargetPath.lastIndexOf(".");
                            while (dotIndex >= 0) {
                                prefix = prefix.substring(0, dotIndex);
                                //log("check prefix " + prefix + " for " + overrideTargetPath);
                                if ((prefix.length > 0) & symbolOverridesHash.hasOwnProperty(prefix)) {
                                    //log("found prefix " + prefix + " for " + overrideTargetPath);
                                    overrideParent = symbolOverridesHash[prefix];
                                    overrideTargetPath = overrideTargetPath.substring(dotIndex + 1, overrideTargetPath.length);
                                    break;
                                } else {
                                    dotIndex = prefix.lastIndexOf(".");
                                }
                            }
                            
                            if (overR.property == "image") {
                                let imgHash = overR.value.sketchObject.hash();
                                let imgRelativePath = "";
                                if (TEMP_CONTEXT.imageHashToFilePath.hasOwnProperty(imgHash)) {
                                    imgRelativePath = TEMP_CONTEXT.imageHashToFilePath[imgHash];
                                } else if (!isDefault) {
                                    let imgUid = overR.affectedLayer.id + "__" + imgHash;
                                    imgRelativePath = imagesSubDir + imgUid + ".png";
                                    let imgData = overR.value.nsdata;
                                    imgData.writeToFile_atomically(NSString.stringWithFormat("%@/%@", rootDirPath, imgRelativePath), false);
                                    TEMP_CONTEXT.imageHashToFilePath[imgHash] = imgRelativePath;
                                } else {
                                    let targetName = getUniqueNameFromIndexedData(indexedDataOverride);
                                    imgRelativePath = documentContext.libraryImagesSubDir + camelize(targetName) + "__" + overR.affectedLayer.id;
                                }
                                Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", imgRelativePath, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                            } else if (overR.property == "textStyle") {
                                let currentOver =Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", overR.value, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                                if (documentContext.sharedTextStylesIndex[overR.value]) {
                                    let affectedLayerUsesAnOutOfSyncStyle = documentContext.textsWithOutOfSyncStyle.hasOwnProperty(overR.affectedLayer.id);
                                    let overrideStyle = documentContext.sharedTextStylesIndex[overR.value].style;

                                    if (affectedLayerUsesAnOutOfSyncStyle) {
                                       Xml.xmlAddElement(currentOver, "textStyle", ["sharedStyleId", overR.value, "affectedLayerStyleIsOutOfSync", true], null);
                                    } else {
                                       Xml.xmlAddElement(currentOver, "textStyle", ["sharedStyleId", overR.value], null);
                                    }

                                    addFontFileToContext(documentContext, styleFontFilePath(overrideStyle));
                                } else {
                                    log("could not find textStyle" + overR.value + " to override a symbol instance of "
                                        + l.name + ". This override will be ignored");
                                    log("\t->Please check that it is not an external text style that has not been made local.")
                                    continue;
                                }
                            } else if (overR.property == "layerStyle") {
                                let currentOver =Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", overR.value, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                                if (documentContext.sharedLayerStylesIndex[overR.value]) {
                                    let styleXML =Xml.xmlAddElement(currentOver, "layerStyle", null, null);
                                    treeAddAttributesFromLayerStyle(styleXML, type, documentContext.sharedLayerStylesIndex[overR.value].style);
                                } else {
                                    log("could not find layerStyle" + overR.value + " to override a symbol instance of "
                                        + l.name + ". This override will be ignored");
                                    log("\t->Please check that it is not an external layer style that has not been made local.")
                                    continue;
                                }
                            } else if (overR.property == "stringValue") {
                               Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", escapeCharactersInUnicodePrivateUseArea(overR.value), "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                            } else if (overR.property == "symbolID") {
                                let indexexDataOldSymbol = documentContext.globalNamesIndex[overR.affectedLayer.master.id];
                                if (!indexexDataOldSymbol){
                                    log("could not find indexed data for SymbolMaster " + overR.affectedLayer.master.name + " to override a symbol instance of "
                                        + l.name + ". This override will be ignored");
                                    log("\t->Please check that it is not an external master that has not been made local.")
                                    continue;
                                }
                                
                                let oldType = getTypeFromIndexedData(indexexDataOldSymbol);
                                let newType = ""; //may be empty id "no symbol" override
                                if (overR.value.length > 0) {
                                    let newSymbol = document.getSymbolMasterWithID(overR.value);
                                    if (newSymbol) {
                                        let indexedDataNewSymbol = documentContext.globalNamesIndex[newSymbol.id];
                                        if (!indexedDataNewSymbol){
                                            log("could not find indexed data for SymbolMaster " + newSymbol.name + " to override a symbol instance of "
                                                + l.name + ". This override will be ignored");
                                            log("\t->Please check that it is not an external master that has not been made local.")
                                            break;
                                        }
                                        newType = getTypeFromIndexedData(indexedDataNewSymbol); //symbol extracted class
                                    } else {
                                        log("could not find SymbolMaster with ID " + overR.value + " to override a symbol instance of "
                                        + l.name + ". This override will be ignored");
                                        log("\t->Please check that it is not an external master that has not been made local.")
                                        break;
                                    }
                                }

                                let xmlSymbolOverride = Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "newType", newType, "oldType", oldType, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                                if (!isDefault)
                                    symbolOverridesHash[originalOverrideTargetPath] = xmlSymbolOverride;
                            }
                        }
                    }
                }
                Xml.xmlAddAttributesToElement(xmlCurrent, ["symbolMaster", getUniqueNameFromIndexedData(indexedDataSymbolMaster), "type", actualType]);
                
                let parentType = getParentTypeFromIndexedData(indexedDataSymbolMaster);
                if (parentType)
                    Xml.xmlAddAttributesToElement(xmlCurrent, ["symbolMasterParentType", parentType]);
                
            } else {
                //other types are handled without anything specific
                Xml.xmlAddAttributesToElement(xmlCurrent, ["type", actualType]);
                //NB: overrides are applied if necessary when calling treeAddAttributesFromLayerData & co. below.
                //We do not apply overrides on the model directly as it would modify
                //the original Sketch file...
            }
            
            //Masks
            //FIXME: using internal Sketch API that might change in future versions
            if (l._object.hasClippingMask()) {
                //log("" + actualName + " is a mask");
                Xml.xmlAddAttributesToElement(xmlCurrent, ["isMask", 1]);
                actualParent = xmlCurrent;
                currentMask = l;
            }
            
            //Add custom keys and values extracted from layer name
            if (keyValues.length > 0)
                Xml.xmlAddCustomPropertiesToElement(xmlCurrent, keyValues);
            
            //add layer data
            //FIXME: compute x/y/width/height changes due to masks and mask chains breaks reparenting
            //FIXME: also handle proper size for clipped images
            let shallBlockBecauseExportExists = treeAddAttributesFromLayerData(actualName, xmlCurrent, type, l, rootDirPath, imagesSubDir, isCustomClass, currentMask, actualType);

            if (!shallBlockBecauseExportExists && l && (type == "MSArtboardGroup" || type == "MSLayerGroup" || type == "MSShapeGroup"
                      || type == "MSSymbolMaster" || type == "MSSymbolInstance")){
                treeIterateLayers(l.layers, xmlCurrent, shallIgnoreSymbolMasters, rootDirPath, imagesSubDir, xmlRoot, documentContext, currentMask);
            }
        }
    }
}


function treeAddAttributesFromPointData(currentXMLElement, point){
    if (point && point.sketchObject) {
        let Xml = require("./xml.js");
        let Utils = require("./utils.js");
        
        let pointType = point.pointType;

        let pointAttributes = [];
        pointAttributes.push("pointType");
        pointAttributes.push(point.pointType);
        pointAttributes.push("x");
        pointAttributes.push(Utils.roundWithDecimalPrecision(point.point.x, POINT_DECIMAL_PRECISION));
        pointAttributes.push("y");
        pointAttributes.push(Utils.roundWithDecimalPrecision(point.point.y, POINT_DECIMAL_PRECISION));

        if (pointType == 'Straight') {
            pointAttributes.push("cornerRadius");
            pointAttributes.push(point.cornerRadius);

        } else if (pointType == 'Undefined') {
            //TODO: check if we can really obtain a point with an undefined type
            let nativePoint = point.sketchObject;

            if (nativePoint.hasCurveFrom()) {
                pointAttributes.push("curveFromX");
                pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveFrom.x, POINT_DECIMAL_PRECISION));
                pointAttributes.push("curveFromY");
                pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveFrom.y, POINT_DECIMAL_PRECISION));
            }

            if (nativePoint.hasCurveTo()) {
                pointAttributes.push("curveToX");
                pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveTo.x, POINT_DECIMAL_PRECISION));
                pointAttributes.push("curveToY");
                pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveTo.y, POINT_DECIMAL_PRECISION));
            }
            
            pointAttributes.push("cornerRadius");
            pointAttributes.push(point.cornerRadius);

        } else if (pointType != 'Undefined') {
            pointAttributes.push("curveFromX");
            pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveFrom.x, POINT_DECIMAL_PRECISION));
            pointAttributes.push("curveFromY");
            pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveFrom.y, POINT_DECIMAL_PRECISION));
            pointAttributes.push("curveToX");
            pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveTo.x, POINT_DECIMAL_PRECISION));
            pointAttributes.push("curveToY");
            pointAttributes.push(Utils.roundWithDecimalPrecision(point.curveTo.y, POINT_DECIMAL_PRECISION));
        }

       Xml.xmlAddElement(currentXMLElement, "point", pointAttributes, null);

    }  else console.warn("treeAddAttributesFromPointData: invalid argument 'point'");
}


function treeAddTextBehaviour(currentXMLElement, layer) {
    if (!isTextLayer(layer))
        return;

    let Xml = require("./xml.js");
    Xml.xmlAddAttributesToElement(currentXMLElement, ["textBehaviour", layerTextBehaviour(layer)]);
}


function treeAddAttributesFromTextStyle(currentXMLElement, layerOrSharedTextStyle, sharedTextStyle) {
    let Xml = require("./xml.js");

    if (!layerOrSharedTextStyle)
        return;

    let isText = isTextLayer(layerOrSharedTextStyle);
    let style = layerOrSharedTextStyle.style;
    let sharedStyle = (sharedTextStyle ? sharedTextStyle.style : null); 
    if (!style)
        return;

    let attributes = [];

    if (!sharedStyle || (style.opacity !== sharedStyle.opacity)) {
        attributes.push("opacity");
        attributes.push(style.opacity);
    }

    if (!sharedStyle || (style.blendingMode !== sharedStyle.blendingMode)) {
        attributes.push("blendingMode");
        attributes.push(style.blendingMode);
    }

    let textBehaviour = "autoWidth";
    if (isText) {
        textBehaviour = layerTextBehaviour(layerOrSharedTextStyle);

        attributes.push("textBehaviour");
        attributes.push(textBehaviour);
    }

    if (!sharedStyle || (style.alignment != sharedStyle.alignment)) {
        attributes.push("alignment");
        attributes.push(style.alignment);
    }
    
    // Special case: Sketch does not reset the value of verticalAlignment when we switch from "fixedSize" to "autoWidth" or "autoHeight"
    let verticalAlignment = (!isText || (textBehaviour === "fixedSize")) ? style.verticalAlignment : "top";
    if (!sharedStyle || (verticalAlignment != sharedStyle.verticalAlignment)) {
        attributes.push("verticalAlignment");
        attributes.push(verticalAlignment);
    }

    if (!sharedStyle || (style.textColor != sharedStyle.textColor)) {
        attributes.push("textColor");
        attributes.push(getTextColorAsHexValueOrSwatchReference(style));
    }

    if (!sharedStyle || (style.lineHeight != sharedStyle.lineHeight)) {
        if (style.lineHeight) {
            attributes.push("lineHeight");
            attributes.push(style.lineHeight);
        }
    }

    if (!sharedStyle || (style.paragraphSpacing != sharedStyle.paragraphSpacing)) {
        attributes.push("paragraphSpacing");
        attributes.push(style.paragraphSpacing);
    }

    // The following properties define our font
    let needFontFamily = (!sharedStyle || (style.fontFamily != sharedStyle.fontFamily));
    let needFontSize = (!sharedStyle || (style.fontSize != sharedStyle.fontSize));
    let needFontWeight = (!sharedStyle || (style.fontWeight != sharedStyle.fontWeight));
    let needFontStyle = (!sharedStyle || (style.fontStyle != sharedStyle.fontStyle));
    let needFontVariant = (!sharedStyle || (style.fontVariant != sharedStyle.fontVariant));
    let needFontStretch = (!sharedStyle || (style.fontStretch != sharedStyle.fontStretch));
    let needKerning = (!sharedStyle || (style.kerning != sharedStyle.kerning));
    let needTextTransform = (!sharedStyle || (style.textTransform != sharedStyle.textTransform));
    let needTextUnderline = (!sharedStyle || (style.textUnderline != sharedStyle.textUnderline));
    let needTextStrikethrough = (!sharedStyle || (style.textStrikethrough != sharedStyle.textStrikethrough));

    if (needFontFamily || needFontSize || needFontWeight || needFontStyle || needFontVariant
        || needFontStretch || needKerning || needTextTransform || needTextUnderline || needTextStrikethrough) {
        attributes.push("fontFamily");
        attributes.push(style.fontFamily);

        attributes.push("fontSize");
        attributes.push(style.fontSize);

        attributes.push("fontWeight");
        attributes.push(style.fontWeight);

        if (style.fontStyle) {
            attributes.push("fontStyle");
            attributes.push(style.fontStyle);
        }

        if (style.fontVariant) {
            attributes.push("fontVariant");
            attributes.push(style.fontVariant);
        }

        if (style.fontStretch) {
            attributes.push("fontStretch");
            attributes.push(style.fontStretch);
        }

         // NB: we also need to export raw properties to help translation from Sketch to UI toolkits
        attributes.push("fontPostscriptName");
        attributes.push(fontPostscriptNameFromStyle(style));
        attributes.push("fontStyleName");
        attributes.push(fontStyleNameFromStyle(style));

        if (style.kerning) {
            attributes.push("kerning");
            attributes.push(style.kerning);
        }

        attributes.push("textTransform");
        attributes.push(style.textTransform);

        if (style.textUnderline) {
            attributes.push("textUnderline");
            attributes.push(style.textUnderline);
        }

        if (style.textStrikethrough) {
            attributes.push("textStrikethrough");
            attributes.push(style.textStrikethrough);
        }
    }

    Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
}


function treeAddAttributesFromLayerStyle(currentXMLElement, type, style) {
    if (!style)
        return;

    let Xml = require("./xml.js");
    let attributes = [];

    attributes.push("opacity");
    attributes.push(style.opacity);
    
    attributes.push("blendingMode");
    attributes.push(style.blendingMode);

    //TODO: blur, shadows, innershadows
    
    if (style.borderOptions) {
        if (style.borderOptions.startArrowhead != 'None') {
            attributes.push("startArrowhead");
            attributes.push(style.borderOptions.startArrowhead);
        }
        if (style.borderOptions.endArrowhead != 'None') {
            attributes.push("endArrowhead");
            attributes.push(style.borderOptions.endArrowhead);
        }
        let dashPatternLength = style.borderOptions.dashPattern.length;
        if (dashPatternLength != 0) {
            attributes.push("dashPattern");
            let dashPatternString = style.borderOptions.dashPattern.join(',');
            if (dashPatternLength % 2 == 0) {
                attributes.push(dashPatternString);
            } else {
                //NB: In most UI toolkits, the dash pattern must be specified as an even 
                // number of values that specify the lengths of alternating dashes and gaps
                attributes.push(dashPatternString + "," + dashPatternString);
            }
        }
        if (style.borderOptions.lineEnd != 'Butt') {
            attributes.push("lineEnd");
            attributes.push(style.borderOptions.lineEnd);
        }
        if (style.borderOptions.lineJoin != 'Miter') {
            attributes.push("lineJoin");
            attributes.push(style.borderOptions.lineJoin);
        }
    }

    if (style.fills.length > 0) {
        style.fills.forEach(fill => {
            let xmlFill =Xml.xmlAddElement(currentXMLElement, "fill", null, null);
            let fillAttributes = [];
            let fillType = fill.fillType;
            fillAttributes.push("fillType");
            fillAttributes.push(fillType);
            fillAttributes.push("enabled");
            fillAttributes.push(fill.enabled);

            if (fillType == "Color") {
                fillAttributes.push("color");
                fillAttributes.push(getFillColorAsHexValueOrSwatchReference(fill));

            } else if (fillType == "Gradient") {
                let gradient = fill.gradient;
                let gradientType = gradient.gradientType;
                fillAttributes.push("gradientType");
                fillAttributes.push(gradientType);
                fillAttributes.push("fromX");
                fillAttributes.push(gradient.from.x);
                fillAttributes.push("fromY");
                fillAttributes.push(gradient.from.y);
                fillAttributes.push("toX");
                fillAttributes.push(gradient.to.x);
                fillAttributes.push("toY");
                fillAttributes.push(gradient.to.y);

                if (gradientType == "Radial") {
                    fillAttributes.push("aspectRatio");
                    fillAttributes.push(gradientType.aspectRatio);
                }

                gradient.stops.forEach(stop => {
                    let stopAttributes = [];
                    stopAttributes.push("position");
                    stopAttributes.push(stop.position);
                    stopAttributes.push("color");
                    stopAttributes.push(rgbaToArgbOrRgb(stop.color));
                    
                   Xml.xmlAddElement(xmlFill, "stop", stopAttributes, null);
                });

            } else if (fillType == "Pattern") {
                fillAttributes.push("patternType");
                fillAttributes.push(fill.pattern.patternType);
                fillAttributes.push("tileScale");
                fillAttributes.push(fill.pattern.tileScale);
                //TODO: image
            }

            Xml.xmlAddAttributesToElement(xmlFill, fillAttributes);     
        });
    }
   
    if (style.borders.length > 0) {
        style.borders.forEach(border => {
            let xmlBorder =Xml.xmlAddElement(currentXMLElement, "border", null, null);
            let borderAttributes = [];
            let fillType = border.fillType;
            borderAttributes.push("fillType");
            borderAttributes.push(fillType);
            borderAttributes.push("thickness");
            borderAttributes.push(border.thickness);
            borderAttributes.push("position");
            borderAttributes.push(border.position);
            borderAttributes.push("enabled");
            borderAttributes.push(border.enabled);

            if (fillType == "Color") {
                borderAttributes.push("color");
                borderAttributes.push(getFillColorAsHexValueOrSwatchReference(border));

            } else if (fillType == "Gradient") {
                let gradient = border.gradient;
                let gradientType = gradient.gradientType;
                borderAttributes.push("gradientType");
                borderAttributes.push(gradientType);
                borderAttributes.push("fromX");
                borderAttributes.push(gradient.from.x);
                borderAttributes.push("fromY");
                borderAttributes.push(gradient.from.y);
                borderAttributes.push("toX");
                borderAttributes.push(gradient.to.x);
                borderAttributes.push("toY");
                borderAttributes.push(gradient.to.y);

                if (gradientType == "Radial") {
                    borderAttributes.push("aspectRatio");
                    borderAttributes.push(gradientType.aspectRatio);
                }

                gradient.stops.forEach(stop => {
                    let stopAttributes = [];
                    stopAttributes.push("position");
                    stopAttributes.push(stop.position);
                    stopAttributes.push("color");
                    stopAttributes.push(rgbaToArgbOrRgb(stop.color));
                    
                   Xml.xmlAddElement(xmlBorder, "stop", stopAttributes, null);
                });
            }

            Xml.xmlAddAttributesToElement(xmlBorder, borderAttributes);
        });
    }

    Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
}


function treeAddAttributesFromLayerData(name, currentXMLElement, type, layer, rootDirPath, imagesSubDir,
                                        isCustomClass, currentMask, actualType){
    /*
    return true if item shall stop iteration, generally because it is renderer as an image or has exports
    return false if item allows iterations
    */
    let Xml = require("./xml.js");
    let Utils = require("./utils.js");
    let attributes = [];
    
    attributes.push("id");
    attributes.push(layer.id);
    
    //generic attributes
    if (layer.locked){
        attributes.push("locked");
        attributes.push("1");
    }
    if (layer.hidden){
        attributes.push("hidden");
        attributes.push("1");
    }
    if (layer.transform){
        //NB: layer.transform.rotation wraps layer.sketchObject.userVisibleRotation() 
        //     that matches what users see in the inspector which may be different 
        //     from the raw `rotation` value
        //     Here, we need the raw rotation because the generated code will apply a rotation
        //
        //NB: layer.sketchObject.userVisibleRotation and layer.sketchObject.rotation don't use the same rotation direction
        //    layer.sketchObject.userVisibleRotation  is clockwise, layer.sketchObject.rotation is counterclockwise
        let rotation = Utils.roundWithDecimalPrecision(-layer.sketchObject.rotation(), ANGLE_DECIMAL_PRECISION);

        if (rotation !== 0) {
            attributes.push("rotation");
            attributes.push(rotation);
        }
        if (layer.transform.flippedHorizontally){
            attributes.push("flippedHorizontally");
            attributes.push("1");
        }
        if (layer.transform.flippedVertically){
            attributes.push("flippedVertically");
            attributes.push("1");
        }
    }
    if (layer.sketchObject.hasFixedWidth()){
        attributes.push("hasFixedWidth");
        attributes.push("1");
    }
    if (layer.sketchObject.hasFixedHeight()){
        attributes.push("hasFixedHeight");
        attributes.push("1");
    }
    if (layer.sketchObject.hasFixedLeft()){
        attributes.push("hasFixedLeft");
        attributes.push("1");
        // NB: fixedLeft is x
    }
    if (layer.sketchObject.hasFixedTop()){
        attributes.push("hasFixedTop");
        attributes.push("1");
        // NB: fixedTop is y
    }
    if (layer.sketchObject.hasFixedRight()){
        attributes.push("hasFixedRight");
        attributes.push("1");
        attributes.push("fixedRight");
        attributes.push(layer.parent ? Utils.roundBy(layer.parent.frame.width - (layer.frame.x + layer.frame.width), 0.5) : 0);
    }
    if (layer.sketchObject.hasFixedBottom()){
        attributes.push("hasFixedBottom");
        attributes.push("1");
        attributes.push("fixedBottom");
        attributes.push(layer.parent ? Utils.roundBy(layer.parent.frame.height - (layer.frame.y + layer.frame.height), 0.5) : 0);
    }


    if (layer.frame){
        // NB: one decimal precision to allow sharp rendering if we use a centered border (BorderPosition = Centered) with an odd thickness value
        //     If the thickness value is even (2, 4, etc.), x and y must be integer values; whereas if the thickness value is off (1, 3, etc.), 
        //     x and y must be decimal values ending with '.5' (half pixel offset)
        attributes.push("x");
        attributes.push(Utils.roundBy(layer.frame.x, 0.5));
        attributes.push("y");
        attributes.push(Utils.roundBy(layer.frame.y, 0.5));
        attributes.push("width");
        attributes.push(Math.ceil(layer.frame.width));
        attributes.push("height");
        attributes.push(Math.ceil(layer.frame.height));
    }

    //flows
    if (layer.flow && layer.flow.target){
       Xml.xmlAddElement(currentXMLElement, "flow",
                      ["targetName", layer.flow.target.name,
                       "targetId", layer.flow.targetId,
                       "type", layer.flow.animationType], null);
    }
    
    let renderingAsImage = false;
    //handle unsupported types by rendering them as an image
    //NB: supported types are at the moment : text, rectangle, image, group, window
    //NB: groups come from MSLayerGroup and MSSymbolInstance
    //See type conversions at the beginning of treeParseName
    if (!isCustomClass && !isSupportedLayer(layer)){
        //we have an unsupported type => render it as an image
        treeForceImageExport(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type);
        renderingAsImage = true;
    }
    
    //handle images with no export by manually generating image
    if ((type == "MSBitmapLayer") && layer.exportFormats && (layer.exportFormats.length == 0)){
        treeExportBitmapLayer(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type);
        renderingAsImage = true;
    }

    if (renderingAsImage){
        Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
        return true;
    }
    
    //exports
    let hasExports = false;
    // NB: we don't want to export artboards or symbol masters as images
    if (layer.exportFormats && (layer.exportFormats.length > 0) && canExportTypeAsImage(type)) {
        hasExports = treeAddImageExport(name, layer, currentXMLElement, rootDirPath, imagesSubDir);
    }

    if (hasExports){
        //this part of the tree will be rendered as an image
        //=> add already collected elements and return now
        Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
        //log("abort style inspection because layer has exports (" + layer.name + ")");
        return true;
    }
    
    //style
    if (type == "MSArtboardGroup" || type == "MSLayerGroup" || type == "MSShapeGroup"
        || type == "MSOvalShape" || type == "MSRectangleShape" || type == "MSPolygonShape" || type == "MSStarShape" || type == "MSTriangleShape"
        || type == "MSShapePathLayer" || type == "MSBitmapLayer" || type == "MSTextLayer" || type == "MSSliceLayer"
        || isCustomClass){

        let style = layer.style;
        if (style) {
            if (type == "MSTextLayer") {
                if (layer.sharedStyle) {
                    attributes.push("useSharedStyle");
                    attributes.push(1);
                    attributes.push("sharedStyleId");
                    attributes.push(layer.sharedStyleId);
    
                    if (layer.sketchObject.isSharedStyleOutOfSync()) {
                        attributes.push("isSharedStyleOutOfSync");
                        attributes.push(1);
                        treeAddAttributesFromTextStyle(currentXMLElement, layer, layer.sharedStyle);
                    } else {
                        // textBehaviour is not defined by shared styles
                        treeAddTextBehaviour(currentXMLElement, layer);
                    }
                } 
                else {
                    treeAddAttributesFromTextStyle(currentXMLElement, layer, null);
                }
            }
            else {
                if (layer.sharedStyle) {
                    attributes.push("useSharedStyle");
                    attributes.push(1);
                } 
                treeAddAttributesFromLayerStyle(currentXMLElement, type, style);
            }
        }
    }
    
    //points
    if (type == "MSShapePathLayer" || type == "MSOvalShape" || type == "MSRectangleShape" || type == "MSPolygonShape" || type == "MSStarShape" || type == "MSTriangleShape" || type == "MSShapeGroup"){
        attributes.push("shapeType");
        attributes.push(layer.shapeType);
        attributes.push("closed");
        if (layer.closed){
            attributes.push("1");
        }else{
            attributes.push("0");
        }
        let points = layer.points;
        if (points){
            points.forEach(point => {
                treeAddAttributesFromPointData(currentXMLElement, point);
            });
        }
    }
    
    //specific attributes per type
    if (type == "MSTextLayer"){
        let text = layer.text;
        if (text)
           Xml.xmlAddElement(currentXMLElement, "content", null, escapeCharactersInUnicodePrivateUseArea(text));
    } else if (type == "MSArtboardGroup"){
        if (layer.background && layer.background.enabled && layer.background.includedInExport){
            attributes.push("hasBackground");
            attributes.push("1");
            attributes.push("backgroundColor");
            attributes.push(getBackgroundColorAsHexValueOrSwatchReference(layer));        
        }        
    }
    
    Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
    return false;
}


function treeExportBitmapLayer(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type){
    if (isBitmapLayer(layer) && layer.image && isEmptyStyle(layer.style)){
        // No style => we can directly export the source of this bitmap layer
        let Xml = require("./xml.js");

        let imgHash = layer.image.sketchObject.hash();
        let imgRelativePath = "";
        if (TEMP_CONTEXT.imageHashToFilePath.hasOwnProperty(imgHash)) {
            imgRelativePath = TEMP_CONTEXT.imageHashToFilePath[imgHash];
        } else {
            if (!rootDirPath.endsWith("/")) {
                rootDirPath += "/";
            }
        
            if ((imagesSubDir.length > 0) && !imagesSubDir.endsWith("/")) {
                imagesSubDir += "/";
            }
        
            //NB: strange behavior - layer.id is undefined is we try to build a string BUT exists if we use console.log
            //let toto  = layer.id;console.log("Exists " + layer.id + " -- " + toto);
            // We add our objectID to avoid conflict between different symbols and/or artboards
            let imgUid = camelize(name) + "__" + layer.sketchObject.objectID();
            imgRelativePath = imagesSubDir + imgUid + ".png";

            let imgData = layer.image.nsdata;
            imgData.writeToFile_atomically(NSString.stringWithFormat("%@%@", rootDirPath, imgRelativePath), false);
            TEMP_CONTEXT.imageHashToFilePath[imgHash] = imgRelativePath;
        }

        Xml.xmlAddAttributesToElement(currentXMLElement, ["hasExport", 1, 
                                                          "type", "image", 
                                                          "opacity", layer.style.opacity,
                                                          "topInset", 0, 
                                                          "bottomInset", 0, 
                                                          "leftInset", 0,  
                                                          "rightInset", 0
                                                         ]);
                         
        Xml.xmlAddElement(currentXMLElement, "export", ["format", "png",
                                                        "size", "1x",
                                                        "prefix", "",
                                                        "suffix", "",
                                                        "file", imgRelativePath
                                                       ] , null);                                                   
    } else {
        // Our layer has a style (fill, border, shadow, blur)
        // => we export it as an image to obtain an image with style applied
        treeForceImageExport(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type);
    }
}


function treeForceImageExport(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type){
    let Xml = require("./xml.js");
    let Utils = require("./utils.js");

    if (!rootDirPath.endsWith("/")) {
        rootDirPath += "/";
    }

    if ((imagesSubDir.length > 0) && !imagesSubDir.endsWith("/")) {
        imagesSubDir += "/";
    }

    let exportPath = rootDirPath + imagesSubDir;

    //NB: strange behavior - layer.id is undefined is we try to build a string BUT exists if we use console.log
    //let toto  = layer.id;console.log("Exists " + layer.id + " -- " + toto);
    // We add our objectID to avoid conflict between different symbols and/or artboards
    name = camelize(name) + "__" + layer.sketchObject.objectID();

    // NB: Sketch fails to generate big images. Thus, we must ensure that we don't try to export big images
    let numberOfImages = 1;
    let layerWidth = layer.frame.width;
    let layerHeight = layer.frame.height;
    for (let currentAtN = 2; currentAtN <= numberOfImagesPerLayerExport; currentAtN++) {
        if (
            ((layerWidth * currentAtN) > maximumImageWidthOrHeight)
            ||
            ((layerHeight * currentAtN) > maximumImageWidthOrHeight)
            )
            {
                break;
            }
        numberOfImages = currentAtN;
    }


    let insets = Utils.exportLayerAsPNG(layer, numberOfImages, exportPath, name, false, false);

    Xml.xmlAddAttributesToElement(currentXMLElement, ["hasExport", numberOfImages, 
                                                  "type", "image", 
                                                  "opacity", layer.style.opacity,
                                                  "topInset", Utils.roundBy(insets[0], 0.5), 
                                                  "bottomInset", Utils.roundBy(insets[1], 0.5), 
                                                  "leftInset", Utils.roundBy(insets[2], 0.5),  
                                                  "rightInset", Utils.roundBy(insets[3], 0.5)
                                                 ]);

    for (let currentAtN = 1; currentAtN <= numberOfImages; currentAtN++) {
        let exportAttr = [];
        let fileName = name + ((currentAtN !== 1) ? "@" + currentAtN + "x" : "") + ".png";

        exportAttr.push("format");
        exportAttr.push("png");
        exportAttr.push("size");
        exportAttr.push(currentAtN + "x");
        exportAttr.push("prefix");
        exportAttr.push("");
        exportAttr.push("suffix");
        exportAttr.push((currentAtN !== 1) ? "@" + currentAtN + "x" : "");
        exportAttr.push("file");
        exportAttr.push(imagesSubDir + fileName);

        Xml.xmlAddElement(currentXMLElement, "export", exportAttr, null);
    }
}


function treeAddImageExport(name, layer, currentXMLElement, rootDirPath, imagesSubDir){
    let succeeded = false;

    if (layer.exportFormats.length > 0) 
    {
        let Xml = require("./xml.js");
        let Utils = require("./utils.js");

        if (!rootDirPath.endsWith("/")) {
            rootDirPath += "/";
        }
    
        if ((imagesSubDir.length > 0) && !imagesSubDir.endsWith("/")) {
            imagesSubDir += "/";
        }

        let exportPath = rootDirPath + imagesSubDir;
        // We add our objectID to avoid conflict between different symbols and/or artboards
        name = camelize(name) + "__" + layer.sketchObject.objectID(); 

        let insets = Utils.exportLayerWithUserDefinedExportOptions(layer, exportPath, name, false, false);

        Xml.xmlAddAttributesToElement(currentXMLElement, ["hasExport", layer.exportFormats.length, 
                                                      "type", "image",  //force type as image
                                                      "opacity", layer.style.opacity,
                                                      "topInset", insets[0], "bottomInset", insets[1], 
                                                      "leftInset", insets[2], "rightInset", insets[3]
                                                     ]);

        const sketchVersion = require('sketch/dom').version.sketch;
        if (sketchVersion >= 97) {
            // Sketch 97 crashes when we call MSExportFormat.exportableFilenameForLayerName_exportFormat
            layer.exportFormats.forEach(format => {
                let prefix = "";
                let suffix = "";

                //NB: Sketch 97 bug: when we use a 'primary prefix', suffix has the same value than our prefix
                if (format.prefix)
                    prefix = format.prefix;
                else if (format.suffix)
                    suffix = format.suffix;

                let fileFormat = format.fileFormat;

                let fileName = prefix + name + suffix + "." + fileFormat;
                let sizeText = format.size;

                let exportAttr = [];
                exportAttr.push("format");
                exportAttr.push(fileFormat);
                exportAttr.push("size");
                exportAttr.push(sizeText);
                exportAttr.push("prefix");
                exportAttr.push(prefix);
                exportAttr.push("suffix");
                exportAttr.push(suffix);
                exportAttr.push("file");
                exportAttr.push(imagesSubDir + fileName);

                Xml.xmlAddElement(currentXMLElement, "export", exportAttr, null);
            });
        } else {
            // Sketch 96 and below
            layer.exportFormats.forEach(format => {
                let exportFormat = format.sketchObject;
        
                let fileName = MSExportFormat.exportableFilenameForLayerName_exportFormat(name, exportFormat);

                let sizeText = format.size;
                let fileFormat = format.fileFormat;
                let prefix = (format.prefix) ? format.prefix : "";
                let suffix = (format.suffix) ? format.suffix : "";
            
                let exportAttr = [];
                exportAttr.push("format");
                exportAttr.push(fileFormat);
                exportAttr.push("size");
                exportAttr.push(sizeText);
                exportAttr.push("prefix");
                exportAttr.push(prefix);
                exportAttr.push("suffix");
                exportAttr.push(suffix);
                exportAttr.push("file");
                exportAttr.push(imagesSubDir + fileName);
                
                Xml.xmlAddElement(currentXMLElement, "export", exportAttr, null);
            });
        }

        succeeded = true;
    }

    return succeeded;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
// TREE INDEXING


/*
We use names to add metadata inside Sketch objects.
Here is the syntax:
actualName -> actualType |key1|value1|key2|value2|...
This function returns an array with:
- XML beacon name serving as type
- element name
- set of keys and values (possibly empty and possibly including legacy class information)
*/
function treeAddLayerInGlobalNamesIndex(layer, documentContext, layerNamesUnicityByContext, layersStack, contextStack){
    let type = layer.sketchObject.class();

    //extracting keys and values
    let elements = layer.name.split("|");
    let nameAndType = elements.shift().split("->");

    let actualType = "" + type;
    let useActualNameAsType = false;
    let extractedTypeIsParentType = false;
    if (type == "MSLayerGroup" || type == "MSShapeGroup"){
        actualType = "group";
    }else if (type == "MSBitmapLayer"){
        actualType = "image";
    }else if (type == "MSRectangleShape"){
        actualType = "rectangle";
    }else if (type == "MSOvalShape"){
        actualType = "oval";
    }else if (type == "MSShapePathLayer"){
        if (isLine(layer)) {
            actualType = "line";
        }
        //TODO: path
    }else if (type == "MSTextLayer"){
        actualType = "text";
    }else if (type == "MSArtboardGroup"){
        actualType = "window";
        extractedTypeIsParentType = true;
    }else if (type == "MSSymbolMaster"){
        useActualNameAsType = true;
        extractedTypeIsParentType = true;
    }

    let rawName;
    let parentType = null;
    if (nameAndType.length == 1){ //no type specified in name
        rawName = nameAndType[0].trim();
    } else if (nameAndType.length == 2){ //type is specified in name
        rawName = nameAndType[0].trim();
        let extractedType = nameAndType[1].trim();
        if (extractedTypeIsParentType){
            parentType = extractedType;
        } else {
            actualType = extractedType;
        }
    } else { //name is empty
        log("treeAddLayerInGlobalNamesIndex: format error in layer's name - " + layer.name);
        return;
    }
    
    //TODO: not only clean rawName but all captured elements

    //clean possible forbidden characters
    rawName = rawName.replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s{2,}/g, ' ').trim();

    if (rawName.match(/^\d/)) {
        rawName = "n " + rawName;
    }

    if (rawName.length == 0) {
        rawName = "invalidName";
    } else if (forbiddenNames.includes(rawName.toLowerCase())) {
        rawName = "n " + rawName;
    }


    let contextKey = contextStack[0];
    let localLayerNamesUnicityHash = layerNamesUnicityByContext[contextKey];

    /*
     Ensure name unicity
     We manage a stack of context (contextStack) because, in the end,
     we define QML files and we want id unicity in each QML file. 
     This optimization avoids useless suffix addition to layer names and thus makes generated code clearer.
     */
    //log("checking " + rawName + "(" + contextKey + ")");
    let actualName = rawName;
    let counter = 0;
    let hashKey = camelize(actualName).toLowerCase();

    if (localLayerNamesUnicityHash.hasOwnProperty(hashKey)){
        counter = localLayerNamesUnicityHash[hashKey] + 1;
        while (localLayerNamesUnicityHash.hasOwnProperty(hashKey + " i" + counter)) {
            counter++;
        }

        actualName = actualName + " i" + counter;
        localLayerNamesUnicityHash[camelize(actualName).toLowerCase()] = 1;
    } else {
        counter = 1;
    }
    localLayerNamesUnicityHash[hashKey] = counter;

    if (useActualNameAsType) {
        actualType = actualName;
    }
    
    actualType = actualType.trim();
    actualName = lowerCaseFirstCharater(actualName);

    if (elements.length %2 !== 0) {
        //NB: we arbitrarily remove the last element to get an even number
        elements.pop();
        log("treeAddLayerInGlobalNamesIndex: odd number of key-values in layer's name - " + layer.name);
    }

    documentContext.globalNamesIndex[layer.id] = [actualName, 
                                                  actualType,
                                                  elements, 
                                                  rawName,
                                                  parentType];

    if ((type == "MSTextLayer") && layer.sharedStyle && layer.sketchObject.isSharedStyleOutOfSync()) {
        documentContext.textsWithOutOfSyncStyle[layer.id] = true;
    }

    if ((type == "MSSymbolMaster") || (type == "MSArtboardGroup")) {
        let layerId = layer.id;
        layerNamesUnicityByContext[layerId] = {};
        contextStack.unshift(layerId);
        layersStack.unshift("endOfContextScope");
    } 

    //exclude hidden layers and layers rendered as images
    if (
        !(layer.exportFormats && (layer.exportFormats.length > 0) && canExportTypeAsImage(type))
        && !layer.hidden 
        &&  (type == "MSArtboardGroup" || type == "MSLayerGroup" || type == "MSShapeGroup" || type == "MSSymbolMaster")
        ) {
        for (let i = 0; layer.layers && i < layer.layers.length; i++) {
            layersStack.unshift(layer.layers[i].id);
        }
    }
}


function treePopulateGlobalNamesIndex(documentContext){
    let sketch = require('sketch/dom');
    let document = sketch.getSelectedDocument();
    let layerNamesUnicityByContext = {};
    let layersStack = [];
    
    document.pages.forEach(page => {
        if (page.name.startsWith("#")) {
            // Special case: we don't want to export this page
            // BUT it may contain relevant information (symbol masters)
            // that are required to export the content of other pages
            page.layers.forEach(layer => {
                let type = layer.sketchObject.class();
                if (type ==  "MSSymbolMaster")
                    layersStack.unshift(layer.id);
            });
        }
        else {
            page.layers.forEach(layer => {
                let type = layer.sketchObject.class();
                if (
                     // We don't want to export slices and hotspots
                     ((type != "MSSliceLayer") && (type != "MSHotspotLayer")) 
                     &&
                     // We don't want to export "private" layers, BUT we need to list
                     // all symbol masters to define overrides
                     (!layer.name.startsWith("#") || (type ==  "MSSymbolMaster"))
                    )
                {
                    layersStack.unshift(layer.id);
                }
            });
        }
    });

    let rootKey = "DocumentRoot";
    let contextStack = [rootKey];
    layerNamesUnicityByContext[rootKey] = {};
    while (layersStack.length > 0) {
        let myId = layersStack.shift();
        if (myId == "endOfContextScope"){
            let layerId = contextStack.shift();
            delete layerNamesUnicityByContext[layerId];
            continue;
        }

        let layer = document.getLayerWithID(myId);
        if (layer)
            treeAddLayerInGlobalNamesIndex(layer, documentContext, layerNamesUnicityByContext, layersStack, contextStack);
    }
}


function treeBuildOverrideTargetPath(overR, globalNamesIndex){
    let elmts = overR.path.split("/");
    let result = "";
    for (let i = 0; i < elmts.length; i++){
        let index = elmts[i];
        if (globalNamesIndex[index]){
            let str = camelize(getUniqueNameFromIndexedData(globalNamesIndex[index]));
            result = result + str + ((i + 1 < elmts.length) ? "." : "");
        }else{
            log("undefined index on overriden layer " + overR.affectedLayer.name + " that may also be exportable")
        }
    }
    return result;
}


function addFontFilesToXml(xmlParent, rootDirPath, fontsSubDir, fontFiles, excludeSystemFonts) {
    if (xmlParent && fontFiles && (fontFiles.length > 0)) {
        let Xml = require("./xml.js");
        let Utils = require("./utils.js");

        if (!rootDirPath.endsWith("/")) {
            rootDirPath += "/";
        }

        if ((fontsSubDir.length > 0) && !fontsSubDir.endsWith("/")) {
            fontsSubDir += "/";
        }

        let exportPath = rootDirPath + fontsSubDir;
        Utils.createDirectoryIfNeeded(exportPath);

        let fontFileNames = [];
        fontFiles.sort().forEach(fontFilePath => {
            if (!excludeSystemFonts || !fontFilePath.startsWith("/System/Library/Fonts")) {
                let fileName = fontFilePath.substring(fontFilePath.lastIndexOf('/') + 1);
                if (!fontFileNames.includes(fileName)) {
                    fontFileNames.push(fileName);
                   Xml.xmlAddElement(xmlParent, "font", ["name", fileName.replace(/\.[^/.]+$/, ""), "file",  fontsSubDir + fileName], null);
                    Utils.copyFile(fontFilePath, exportPath + fileName);
                }
            } 
        });
    }
}


function swatchNameKey(name) {
    return name.toLowerCase().replace(/\s+/g, '');
}


function validSwatchName(rawName, colorNames) {
    let name = rawName.replace(/[^a-zA-Z0-9_]/g, ' ').replace(/\s{2,}/g, ' ').trim();
    if (name.match(/^\d/))
        name = "swatch " + name;
            
    if (name.length == 0) {
        name = "swatch " + color.replace(/#/g, '');
    } else if (forbiddenNames.includes(name.toLowerCase())) {
        name = "swatch " + name;
    }

    let keyName = swatchNameKey(name);
    let validName = name;
    if (colorNames.has(keyName)) {
        let index = colorNames.get(keyName);
        validName = name + " i" + (++index);

        while (colorNames.has(swatchNameKey(validName))) {
            validName = name + " i" + (++index);
        }

        colorNames.set(keyName, index);
    }

    validName = lowerCaseFirstCharater(validName);
    colorNames.set(swatchNameKey(validName), 0);

    return validName;
}


function addColorVariablesToXml(xmlParent) {
    let sketch = require('sketch/dom');
    if (sketch.version.sketch >= 69) {
        let Xml = require("./xml.js");

        let colorNames = new Map();
        let document = sketch.getSelectedDocument();

        let swatchesData = [];

        // V1: swatches defined by our document
        /*
        document.swatches.forEach(swatch => {
            let color = rgbaToArgbOrRgb(swatch.color);
            let validName = validSwatchName(swatch.name, colorNames);
  
            swatchesData.push({id: swatch.sketchObject.objectID(), name: validName, color: color});
        });
        */

        // V2: document swatches and imported swatches
        let usedNativeSwatches = document.sketchObject.documentData().allSwatches();
        if (usedNativeSwatches.length > 0) {
            usedNativeSwatches.forEach(nativeSwatch => {
                let swatch = sketch.fromNative(nativeSwatch);

                let color = rgbaToArgbOrRgb(swatch.color);
                let validName = validSwatchName(swatch.name, colorNames);

                swatchesData.push({id: swatch.sketchObject.objectID(), name: validName, color: color});
            });
        }


        // Add missing swatches
        for (const key in TEMP_CONTEXT.missingSwatches) {
            let color = TEMP_CONTEXT.missingSwatches[key];
            let validName = validSwatchName("missingSwatch " + color, colorNames);
            log("Adding missing swatch " + key + " with name '" + validName + "' (color: " + color + ")");
            swatchesData.push({id: key, name: validName, color: color});
        }

        // Sort swatches by name before exporting them
        swatchesData.sort((a, b) => {
            return ((a.name !== b.name) ? ((a.name < b.name) ? -1 : 1) : 0); // NB: faster than a.name.localCompare(b.name)
        }).forEach(swatchData => {
           Xml.xmlAddElement(xmlParent, "swatch", ["id", swatchData.id, "name", swatchData.name, "color", swatchData.color], null);
        });

    } else {
        console.warn("addColorVariablesToXml: can not export color variables - Sketch " + sketch.version.sketch + " is too old (required version is 69 or newer)")
    }
}


function addSharedTextStylesToXml(xmlParent) {
    let Xml = require("./xml.js");
    let sketch = require('sketch/dom');
    let document = sketch.getSelectedDocument();

    let styleNames = new Map();
    let stylesData = [];

    // Step 1: get data of all text styles
    document.sharedTextStyles.forEach(sharedTextStyle => {
        let name = sharedTextStyle.name.replace(/[^a-zA-Z0-9_]/g, ' ').replace(/\s{2,}/g, ' ').trim();
        if (name.match(/^\d/))
            name = "textStyle " + name;
        
        if (name.length == 0) {
            name = "textStyle";
        } else if (forbiddenNames.includes(name.toLowerCase())) {
            name = "textStyle " + name;
        }

        let validName = name;
        if (styleNames.has(validName.toLowerCase())) {
            let index = styleNames.get(validName.toLowerCase());
            validName = name + " i" + (++index);

            while (styleNames.has(validName.toLowerCase())) {
                validName = name + " i" + (++index);
            }

            styleNames.set(name.toLowerCase(), index);
        }
        
        validName = lowerCaseFirstCharater(validName);
        styleNames.set(validName.toLowerCase(), 0);

        stylesData.push({id: sharedTextStyle.id, name: validName, sharedTextStyle: sharedTextStyle});
    });

    // Step 2: export text styles
    stylesData.sort((a, b) => {
        return ((a.name !== b.name) ? ((a.name < b.name) ? -1 : 1) : 0); // NB: faster than a.name.localCompare(b.name)
    }).forEach(textStyleData => {
        let sharedTextStyleXml =Xml.xmlAddElement(xmlParent, "sharedtextstyle", ["id", textStyleData.id, "name", textStyleData.name], null);
        treeAddAttributesFromTextStyle(sharedTextStyleXml, textStyleData.sharedTextStyle, null);
    });
}


function camelize(str) {
    str = removeDiacritics(str);
    str = str.replace(/[^a-zA-Z0-9\-_\s]/g, "")
    str = str.trim();

    if (firstCharIsInvalid(str))
      str = "n" + str;

    return str.replace(/^([A-Z])|[\-_\s]+(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
}

function pascalize(str) {
    return capitalize(camelize(str));
}


function firstCharIsInvalid(str) {
    return ((str.length > 0) && /[^a-z_]/i.test(str.charAt(0)));
}


function removeDiacritics(str) {
    return Object.keys(diacriticsMap).reduce(function (str, key) {
        let replaceRegexp = diacriticsMap[key];
        return str.replace(replaceRegexp, key)
      }, str);
}


function removeIllegalXmlCharacters(str) {
    // Of the first 31 characters only the horizontal tab (9), line feed (10 => x0A) and carriage return (13 => x0D) may appear in XML
    return str.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '')
}


function capitalize(str) {
  if (typeof str !== 'string') return '';
  std = str.trim();
  if (str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1)
}


function lowerCaseFirstCharater(str) {
    return (str ? str[0].toLowerCase() + str.slice(1) : "");
}


function escapeCharactersInUnicodePrivateUseArea(str) {
    let temp = removeIllegalXmlCharacters(str);
    temp = temp.replace(/\\/g,"\\\\")
    // NB: escape special characters used by custom icon fonts generated by Fontello
    //     see https://www.compart.com/fr/unicode/block/U+E000
    return temp.replace(/[\uE000-\uF8FF]/gu, function (c) {
      return "\\u" + ("000" + c.charCodeAt().toString(16)).slice(-4)
    });
}


function fontPostscriptNameFromStyle(style) {
    if (!style || !style.sketchObject)
        return null;

    return style.sketchObject.textStyle().fontPostscriptName();
}


function fontStyleNameFromStyle(style) {
    if (!style || !style.sketchObject)
        return null;

    let fontDisplayName = style.sketchObject.textStyle().attributes().NSFont.displayName();
    let fontStyleName = fontDisplayName.replace(style.fontFamily, "").trim();
    if (fontStyleName === "")
        fontStyleName = "Regular";

    return fontStyleName;
}


function getFillColorAsHexValueOrSwatchReference(fill) {
    if (fill.sketchObject) {
        return mscolorToHexValueOrSwatchReference(fill.sketchObject.color());
    }
    else {
        return rgbaToArgbOrRgb(fill.color);
    }
}


function getTextColorAsHexValueOrSwatchReference(style) {
    if (style.sketchObject && style.sketchObject.textStyle() && style.sketchObject.textStyle().attributes() 
        && style.sketchObject.textStyle().attributes().MSAttributedStringColorAttribute) {
        return mscolorToHexValueOrSwatchReference(style.sketchObject.textStyle().attributes().MSAttributedStringColorAttribute);
    } else {
       return rgbaToArgb(style.textColor);
    }
}


function getBackgroundColorAsHexValueOrSwatchReference(layer) {
    if (layer.sketchObject) {
        return mscolorToHexValueOrSwatchReference(layer.sketchObject.backgroundColor());
    } else {
        return rgbaToArgbOrRgb(layer.background.color);
    }
}


function mscolorToHexValueOrSwatchReference(mscolor) {
    let swatchID = mscolor.swatchID();
    if (swatchID) {
        let key = String(swatchID);
        if (!TEMP_CONTEXT.availableSwatchIDs.includes(key)) {
            if (!TEMP_CONTEXT.missingSwatches.hasOwnProperty(key)) {
                let color = mscolorToArgbOrRgb(mscolor);
                log("Swatch with ID " + key + " not found (color: " + color + "). Please check that all named colors are imported");
                TEMP_CONTEXT.missingSwatches[key] = color;
            }
        }

        return "swatch(" + swatchID + ")";
    } else {
        return mscolorToArgbOrRgb(mscolor);
    }
}


function mscolorToArgbOrRgb(mscolor) {
    return rgbaToArgbOrRgb(
        "#" +mscolor.immutableModelObject().hexValue() 
        + ("0" + Math.round(mscolor.alpha() * 255).toString(16).toUpperCase()).slice(-2)
    );
}


function rgbaToArgb(color){
    return color.replace(/#(......)(..)/, '#$2$1');
}


function rgbaToArgbOrRgb(color){
    if (color.slice(-2).toUpperCase() === "FF") {
        return color.slice(0, -2);
    } else {
        return rgbaToArgb(color);
    }
}


function layerTextBehaviour(layer) {
    if (!isTextLayer(layer))
        return "";

    let textBehaviourValue = layer.sketchObject.textBehaviour();
    if (textBehaviourValue == 0) {
        return "autoWidth";
    } else if (textBehaviourValue == 1) {
        return "autoHeight";
    } else {
        return "fixedSize";
    }
}


function layerFontFilePath(layer) {
    return ((layer && isTextLayer(layer)) ? styleFontFilePath(layer.style) : null);
}


function styleFontFilePath(style) {
    let fontFilePath = null;

    if (style && style.sketchObject) {
        let nsFont = style.sketchObject.textStyle().attributes().NSFont;
        if (nsFont) {
            let urlAttribute = nsFont.fontDescriptor().objectForKey("NSCTFontFileURLAttribute");
            if (urlAttribute) {
                fontFilePath = String(urlAttribute.path());
            }
        }
    } 

    return fontFilePath;
}


function canExportTypeAsImage(type) {
    return ((type != "MSArtboardGroup") && (type != "MSSymbolMaster"));
}


function isLayerGroup(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSLayerGroup.class()) 
            && !layer.sketchObject.isKindOfClass(MSShapeGroup.class()));
}


function isBitmapLayer(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSBitmapLayer.class()));
}


function isTextLayer(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSTextLayer.class()));
}


function isShapeLayer(layer) {
    return (layer && layer.sketchObject 
            && (
                layer.sketchObject.isKindOfClass(MSRectangleShape.class())  
                || 
                layer.sketchObject.isKindOfClass(MSOvalShape.class())  
                ||
                layer.sketchObject.isKindOfClass(MSPolygonShape.class())  
                ||
                layer.sketchObject.isKindOfClass(MSStarShape.class())  
                ||
                layer.sketchObject.isKindOfClass(MSTriangleShape.class())  
                ||
                layer.sketchObject.isKindOfClass(MSShapePathLayer.class())
               ) 
            );
}


function isRectangleShape(layer) {
    return (layer && layer.sketchObject.isKindOfClass(MSRectangleShape.class()) && layer.sketchObject.isRectangle());
    /*
            && layer.points && (layer.points.length == 4)
            && (layer.points[0].pointType == "Straight") && (layer.points[0].point.x == 0) && (layer.points[0].point.y == 0)
            && (layer.points[1].pointType == "Straight") && (layer.points[1].point.x == 1) && (layer.points[1].point.y == 0)
            && (layer.points[2].pointType == "Straight") && (layer.points[2].point.x == 1) && (layer.points[2].point.y == 1)
            && (layer.points[3].pointType == "Straight") && (layer.points[3].point.x == 0) && (layer.points[3].point.y == 1)
            );
    */        
}


function isOvalShape(layer) {
    return (layer && layer.sketchObject.isKindOfClass(MSOvalShape.class()));
}


function isLine(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isLine());
};


function isSliceLayer(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSSliceLayer.class()));
}


function isArtboard(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSArtboardGroup.class()));
}


function isSymbolMaster(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSSymbolMaster.class()));
}


function isSymbolInstance(layer) {
    return (layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSSymbolInstance.class()));
}


function isSupportedLayer(layer) {
    return (
            isTextLayer(layer) || isBitmapLayer(layer) 
            || (
                 (isRectangleShape(layer) || isOvalShape(layer) || isSupportedLine(layer))
                 && 
                 isSupportedShapeStyle(layer.style)
                )
            || isLayerGroup(layer) 
            || isArtboard(layer) || isSymbolInstance(layer)
            );
}


function isSupportedLine(layer) {
    return (isLine(layer) && layer.style && layer.style.borderOptions 
            && (layer.style.borderOptions.startArrowhead == 'None') 
            && (layer.style.borderOptions.endArrowhead == 'None'));
}


function isSupportedShapeStyle(style) {
    let isSupported = true;

    if (style) {
        isSupported = (
                       !(style.blur.enabled)
                       &&
                       (style.shadows.filter(item => { return item.enabled; }).length == 0)
                       &&
                       (style.innerShadows.filter(item => { return item.enabled; }).length == 0)
                      );

        if (isSupported) {
            let activeItems = style.fills.filter(item => { return item.enabled; });
            let numberOfActiveItems = activeItems.length;
            if (numberOfActiveItems > 0) {
                let lastItem = activeItems[numberOfActiveItems - 1];
                isSupported = (
                               (lastItem.fillType == "Color")
                               &&
                               ((numberOfActiveItems == 1) || (lastItem.color.slice(-2) === "ff")) // "ff" => fill is opaque
                               );
            }
        }

        if (isSupported) {
            let activeItems = style.borders.filter(item => { return item.enabled; });
            let numberOfActiveItems = activeItems.length;
            if (numberOfActiveItems > 0) {
                let lastItem = activeItems[numberOfActiveItems - 1];
                isSupported = (
                               (lastItem.fillType == "Color")
                               && 
                               (numberOfActiveItems == 1)
                              );            
            }
        }
    }

    return isSupported;
}


function isEmptyStyle(style) {
    let isEmpty = true;

    if (style) {
        isEmpty = (
                   (style.blendingMode == "Normal")
                   && (style.fills.filter(item => { return item.enabled; }).length == 0)
                   && (style.borders.filter(item => { return item.enabled; }).length == 0)
                   && (style.shadows.filter(item => { return item.enabled; }).length == 0)
                   && (style.innerShadows.filter(item => { return item.enabled; }).length == 0)
                   && !(style.blur.enabled)
                  );
    }

    return isEmpty;
}


module.exports = {
    addColorVariablesToXml,
    addFontFilesToXml,
    addSharedTextStylesToXml,
    clearTempContext,
    getBackgroundColorAsHexValueOrSwatchReference,
    getFontFilesUsedByLayer,
    getKeyValuesFromIndexedData,
    getParentTypeFromIndexedData,
    getTypeFromIndexedData,
    getUniqueNameFromIndexedData,
    initDocumentContext,
    pascalize,
    treeIterateLayers,
    addSymbolMasterOverridesToXml
};