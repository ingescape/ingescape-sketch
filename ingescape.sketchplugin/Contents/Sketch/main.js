var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: onShowAboutDialog, onOpenFileAndExportWholeAsXml, onExportLibraryAsXml, onExportApplicationAsXml, onExportWholeAsXml, onExportFonts, onExportSelectedLayersAsPNG, onExportSelectedLayersAsSVG, onExportSelectedLayersWithUserPredefinedExportOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShowAboutDialog", function() { return onShowAboutDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onOpenFileAndExportWholeAsXml", function() { return onOpenFileAndExportWholeAsXml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onExportLibraryAsXml", function() { return onExportLibraryAsXml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onExportApplicationAsXml", function() { return onExportApplicationAsXml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onExportWholeAsXml", function() { return onExportWholeAsXml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onExportFonts", function() { return onExportFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onExportSelectedLayersAsPNG", function() { return onExportSelectedLayersAsPNG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onExportSelectedLayersAsSVG", function() { return onExportSelectedLayersAsSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onExportSelectedLayersWithUserPredefinedExportOptions", function() { return onExportSelectedLayersWithUserPredefinedExportOptions; });
function onShowAboutDialog(context) {
  var iconPath = context.plugin.urlForResourceNamed('icon.png').path();
  var icon = NSImage.alloc().initByReferencingFile(iconPath);
  var dialog = NSAlert.alloc().init();
  dialog.setMessageText("Ingescape plugin");
  dialog.setInformativeText("This plugin exports a Sketch file to an Ingescape Pivot format for code generation in Qt/QML, etc. to be used in Ingescape Circle");
  dialog.icon = icon;
  dialog.addButtonWithTitle("Get Circle");
  dialog.addButtonWithTitle("Close");
  var responseCode = dialog.runModal();
  if (responseCode == NSAlertFirstButtonReturn) {
    NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("https://ingescape.com/circle/"));
  }
}
function onOpenFileAndExportWholeAsXml(context) {
  if (context.file) {
    var Document = __webpack_require__(/*! sketch/dom */ "sketch/dom").Document;
    var filePath = String(context.file);
    var fileName = filePath.substring(filePath.lastIndexOf("/") + 1, filePath.indexOf("."));
    fileName = fileName.replace(/[^a-zA-Z0-9\-_\s]/g, "");
    fileName = fileName.trim();
    var fileDir = filePath.substring(0, filePath.lastIndexOf("/") + 1) + fileName + "_export/";

    // because of a bug, we can't call context.file directly, we must cast it as a string
    Document.open(String(context.file), function (err, document) {
      if (err) {
        console.warn("Can't open file ", filePath, true);
      } else {
        exportWhole(context, fileDir, false);
        var _document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();
        _document.close();
      }
    });
  }
}

/*
 Exporting file as a library consists in looking for the symbol masters
 declared as components (using the -> symbol) and exposing their
 inner parts in XML structures.
*/
function onExportLibraryAsXml(context) {
  var Tree = __webpack_require__(/*! ./tree.js */ "./src/tree.js");
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  var document = sketch.getSelectedDocument();
  var settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
  if (!document.path) {
    UI.alert("Sketch2QML: can not export library as XML", "You must save your Sketch file first");
    return;
  }
  var path = Utils.chooseFolder();
  if (!path) {
    log("onExportLibraryAsXml: action cancelled by user");
    return;
  }
  var docPath = decodeURI(document.path);
  var docPathElements = docPath.split('/');
  var documentName = "Default";
  if (docPathElements.length > 0) {
    documentName = Tree.pascalize(docPathElements[docPathElements.length - 1].replace(/.sketch/g, ""));
  }
  var libraryName = documentName;

  // Init directories
  var libraryFontsSubDir = "resources/" + libraryName + "_library/fonts/";
  var libraryImagesSubDir = "resources/" + libraryName + "_library/images/";
  Utils.createDirectoryIfNeeded(path + libraryFontsSubDir);
  Utils.forceNewDirectory(path + libraryImagesSubDir);
  UI.message("⚙️ Exporting library as Ingescape Pivot format. Please wait...");
  var documentContext = Tree.initDocumentContext();

  //init lib
  var xmlLibraryRoot = NSXMLElement.alloc().initWithName("library");
  Xml.xmlAddAttributesToElement(xmlLibraryRoot, ["name", libraryName, "sketchVersion", settings.version.sketch]);

  //export lib
  var symbols = document.getSymbols();
  var symbolsIDs = [];
  for (var i = 0; symbols && i < symbols.length; i++) {
    var currentSymbol = symbols[i];
    if (currentSymbol.name.startsWith("#")) {
      continue;
    }
    if (symbolsIDs.includes(currentSymbol.id)) {
      log("WARNING: symbol already included (ID=" + currentSymbol.id + ", name " + currentSymbol.name + ")");
      continue;
    } else {
      symbolsIDs.push(currentSymbol.id);
    }
    var indexedData = documentContext.globalNamesIndex[currentSymbol.id];
    if (!indexedData) {
      log("could not find indexed data for " + currentSymbol.name + ". This element will be ignored");
      log("\t->Please check that it is not an external master that has not been made local.");
      continue;
    }
    var actualName = Tree.getUniqueNameFromIndexedData(indexedData);
    var actualType = Tree.getTypeFromIndexedData(indexedData);
    var keyValues = Tree.getKeyValuesFromIndexedData(indexedData);
    var parentType = Tree.getParentTypeFromIndexedData(indexedData);
    var xmlComponent = Xml.xmlAddElement(xmlLibraryRoot, "component", ["type", actualType, "name", actualName, "width", currentSymbol.frame.width, "height", currentSymbol.frame.height, "hasBackground", currentSymbol.background.enabled && currentSymbol.background.includedInInstance, "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(currentSymbol)], null);
    if (parentType) Xml.xmlAddAttributesToElement(xmlComponent, ["parentType", parentType]);
    if (keyValues.length > 0) Xml.xmlAddCustomPropertiesToElement(xmlComponent, keyValues);
    Tree.addSymbolMasterOverridesToXml(currentSymbol, xmlComponent, documentContext);
    Tree.treeIterateLayers(currentSymbol.layers, xmlComponent, false, path, libraryImagesSubDir, xmlLibraryRoot, documentContext, null);
  }
  Tree.addSharedTextStylesToXml(xmlLibraryRoot);
  Tree.addFontFilesToXml(xmlLibraryRoot, path, libraryFontsSubDir, documentContext.fontFiles, false);
  Tree.addColorVariablesToXml(xmlLibraryRoot); // NB: it must be done after all exports because styles and items may use not imported swatches
  Tree.clearTempContext();

  //export model to XML
  var xmlFilePath = path + libraryName + "_library.xml";
  Xml.exportXMLToPath(xmlFilePath, xmlLibraryRoot);
  Utils.playSoundNamed(Utils.Sounds.Glass);
  UI.message("✅ Library export completed to " + xmlFilePath);
  Utils.showInFinder(xmlFilePath);
}

/*
 Exports all artboards and orphan layers as windows
 */
function onExportApplicationAsXml(context) {
  var Tree = __webpack_require__(/*! ./tree.js */ "./src/tree.js");
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  var document = sketch.getSelectedDocument();
  var settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
  if (!document.path) {
    UI.alert("Sketch2QML: can not export application as XML", "You must save your Sketch file first");
    return;
  }
  var path = Utils.chooseFolder();
  if (!path) {
    log("onExportApplicationAsXml: action cancelled by user");
    return;
  }
  var docPath = decodeURI(document.path);
  var docPathElements = docPath.split('/');
  var documentName = "Default";
  if (docPathElements.length > 0) {
    documentName = Tree.pascalize(docPathElements[docPathElements.length - 1].replace(/.sketch/g, ""));
  }
  var appName = documentName;

  // Init directories
  var appFontsSubDir = "resources/" + appName + "_app/fonts/";
  var appImagesSubDir = "resources/" + appName + "_app/images/";
  Utils.createDirectoryIfNeeded(path + appFontsSubDir);
  Utils.forceNewDirectory(path + appImagesSubDir);
  UI.message("⚙️ Exporting application as Ingescape Pivot format. Please wait...");
  var documentContext = Tree.initDocumentContext();

  //init app
  var xmlAppRoot = NSXMLElement.alloc().initWithName("app");
  Xml.xmlAddAttributesToElement(xmlAppRoot, ["name", appName, "sketchVersion", settings.version.sketch]);

  //export app
  for (var i = 0; i < document.pages.length; i++) {
    var page = document.pages[i];
    if (page.name.startsWith("#")) {
      continue;
    }
    var xmlPage = Xml.xmlAddElement(xmlAppRoot, "page", ["name", page.name], null);

    // Artboard and elements outside of artboards
    var artboards = [];
    var layers = [];
    for (var j = 0; j < page.layers.length; j++) {
      var artboardOrlayer = page.layers[j];
      var type = artboardOrlayer.sketchObject.class();
      if (type != "MSArtboardGroup") {
        layers.push(artboardOrlayer);
      } else {
        artboards.push(artboardOrlayer);
      }
    }
    Tree.treeIterateLayers(layers, xmlPage, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
    for (var _j = 0; _j < artboards.length; _j++) {
      var artboard = artboards[_j];
      if (artboard.name.startsWith("#")) {
        continue;
      }
      var indexedData = documentContext.globalNamesIndex[artboard.id];
      if (!indexedData) {
        log("could not find indexed data for " + artboard.name + ". This artboard will be ignored");
        continue;
      }
      var actualName = Tree.getUniqueNameFromIndexedData(indexedData);
      var actualType = Tree.getTypeFromIndexedData(indexedData);
      var keyValues = Tree.getKeyValuesFromIndexedData(indexedData);
      var parentType = Tree.getParentTypeFromIndexedData(indexedData);
      var xmlScreen = Xml.xmlAddElement(xmlPage, "screen", ["type", actualType, "name", actualName, "width", artboard.frame.width, "height", artboard.frame.height, "hasBackground", artboard.background.enabled && artboard.background.includedInExport, "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(artboard)], null);
      if (parentType) Xml.xmlAddAttributesToElement(xmlScreen, ["parentType", parentType]);
      if (keyValues.length > 0) Xml.xmlAddCustomPropertiesToElement(xmlScreen, keyValues);
      Tree.treeIterateLayers(artboard.layers, xmlScreen, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
    }
  }
  Tree.addSharedTextStylesToXml(xmlAppRoot);
  Tree.addFontFilesToXml(xmlAppRoot, path, appFontsSubDir, documentContext.fontFiles, false);
  Tree.addColorVariablesToXml(xmlAppRoot); // NB: it must be done after all exports because styles and items may use not imported swatches
  Tree.clearTempContext();
  var xmlFilePath = path + appName + "_app.xml";
  Xml.exportXMLToPath(xmlFilePath, xmlAppRoot);
  Utils.playSoundNamed(Utils.Sounds.Glass);
  UI.message("✅ App export completed to " + xmlFilePath);
  Utils.showInFinder(xmlFilePath);
}
;
function exportWhole(context) {
  var exportDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var interactionsAllowed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var Tree = __webpack_require__(/*! ./tree.js */ "./src/tree.js");
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  var document = sketch.getSelectedDocument();
  var settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
  var path = interactionsAllowed && exportDir === "" ? Utils.chooseFolder() : exportDir;
  if (!path) {
    log("exportWhole: action cancelled by user");
    return;
  }
  var docPath = decodeURI(document.path);
  var docPathElements = docPath.split('/');
  var documentName = "Default";
  if (docPathElements.length > 0) {
    documentName = Tree.pascalize(docPathElements[docPathElements.length - 1].replace(/.sketch/g, ""));
  }
  var appName = documentName;
  var libraryName = documentName;

  // Init directories
  var appFontsSubDir = "resources/" + appName + "_app/fonts/";
  var appImagesSubDir = "resources/" + appName + "_app/images/";
  var libraryFontsSubDir = "resources/" + libraryName + "_library/fonts/";
  var libraryImagesSubDir = "resources/" + libraryName + "_library/images/";
  Utils.createDirectoryIfNeeded(path + appFontsSubDir);
  Utils.forceNewDirectory(path + appImagesSubDir);
  Utils.createDirectoryIfNeeded(path + libraryFontsSubDir);
  Utils.forceNewDirectory(path + libraryImagesSubDir);
  var maxNumberOfSteps = 2;
  UI.message("⚙️ [1/" + maxNumberOfSteps + "] Exporting library as Ingescape Pivot format. Please wait...");
  var documentContext = Tree.initDocumentContext();

  //export library
  var xmlLibraryRoot = NSXMLElement.alloc().initWithName("library");
  Xml.xmlAddAttributesToElement(xmlLibraryRoot, ["name", libraryName, "sketchVersion", settings.version.sketch]);
  var symbols = document.getSymbols();
  var symbolsIDs = [];
  for (var i = 0; symbols && i < symbols.length; i++) {
    var currentSymbol = symbols[i];
    if (currentSymbol.name.startsWith("#")) {
      continue;
    }
    if (symbolsIDs.includes(currentSymbol.id)) {
      log("WARNING: symbol already included (ID=" + currentSymbol.id + ", name " + currentSymbol.name + ")");
      continue;
    } else {
      symbolsIDs.push(currentSymbol.id);
    }
    var indexedData = documentContext.globalNamesIndex[currentSymbol.id];
    if (!indexedData) {
      log("could not find indexed data for " + currentSymbol.name + ". This element will be ignored");
      log("\t->Please check that it is not an external master that has not been made local.");
      continue;
    }
    var actualName = Tree.getUniqueNameFromIndexedData(indexedData);
    var actualType = Tree.getTypeFromIndexedData(indexedData);
    var keyValues = Tree.getKeyValuesFromIndexedData(indexedData);
    var parentType = Tree.getParentTypeFromIndexedData(indexedData);
    var xmlComponent = Xml.xmlAddElement(xmlLibraryRoot, "component", ["type", actualType, "name", actualName, "width", currentSymbol.frame.width, "height", currentSymbol.frame.height, "hasBackground", currentSymbol.background.enabled && currentSymbol.background.includedInInstance, "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(currentSymbol)], null);
    if (parentType) Xml.xmlAddAttributesToElement(xmlComponent, ["parentType", parentType]);
    if (keyValues.length > 0) Xml.xmlAddCustomPropertiesToElement(xmlComponent, keyValues);
    Tree.addSymbolMasterOverridesToXml(currentSymbol, xmlComponent, documentContext);
    Tree.treeIterateLayers(currentSymbol.layers, xmlComponent, false, path, libraryImagesSubDir, xmlLibraryRoot, documentContext, null);
  }
  Tree.addSharedTextStylesToXml(xmlLibraryRoot);
  Tree.addFontFilesToXml(xmlLibraryRoot, path, libraryFontsSubDir, documentContext.fontFiles, false);
  Tree.addColorVariablesToXml(xmlLibraryRoot); // NB: it must be done after all exports because styles and items may use not imported swatches

  Xml.exportXMLToPath(path + libraryName + "_library.xml", xmlLibraryRoot);

  //export app
  UI.message("⚙️ [2/" + maxNumberOfSteps + "] Exporting application as Ingescape Pivot format. Please wait...");
  var xmlAppRoot = NSXMLElement.alloc().initWithName("app");
  Xml.xmlAddAttributesToElement(xmlAppRoot, ["name", appName, "sketchVersion", settings.version.sketch]);
  for (var _i = 0; _i < document.pages.length; _i++) {
    var page = document.pages[_i];
    if (page.name.startsWith("#")) {
      continue;
    }
    var xmlPage = Xml.xmlAddElement(xmlAppRoot, "page", ["name", page.name], null);

    // Artboard and elements outside of artboards
    var artboards = [];
    var layers = [];
    for (var j = 0; j < page.layers.length; j++) {
      var artboardOrlayer = page.layers[j];
      var type = artboardOrlayer.sketchObject.class();
      if (type != "MSArtboardGroup") {
        layers.push(artboardOrlayer);
      } else {
        artboards.push(artboardOrlayer);
      }
    }
    Tree.treeIterateLayers(layers, xmlPage, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
    for (var _j2 = 0; _j2 < artboards.length; _j2++) {
      var artboard = artboards[_j2];
      if (artboard.name.startsWith("#")) {
        continue;
      }
      var _indexedData = documentContext.globalNamesIndex[artboard.id];
      if (!_indexedData) {
        log("could not find indexed data for " + artboard.name + ". This artboard will be ignored");
        continue;
      }
      var _actualName = Tree.getUniqueNameFromIndexedData(_indexedData);
      var _actualType = Tree.getTypeFromIndexedData(_indexedData);
      var _keyValues = Tree.getKeyValuesFromIndexedData(_indexedData);
      var _parentType = Tree.getParentTypeFromIndexedData(_indexedData);
      var xmlScreen = Xml.xmlAddElement(xmlPage, "screen", ["type", _actualType, "name", _actualName, "width", artboard.frame.width, "height", artboard.frame.height, "hasBackground", artboard.background.enabled && artboard.background.includedInExport, "backgroundColor", Tree.getBackgroundColorAsHexValueOrSwatchReference(artboard)], null);
      if (_parentType) Xml.xmlAddAttributesToElement(xmlScreen, ["parentType", _parentType]);
      if (_keyValues.length > 0) Xml.xmlAddCustomPropertiesToElement(xmlScreen, _keyValues);
      Tree.treeIterateLayers(artboard.layers, xmlScreen, true, path, appImagesSubDir, xmlAppRoot, documentContext, null);
    }
  }
  Tree.addSharedTextStylesToXml(xmlAppRoot);
  Tree.addFontFilesToXml(xmlAppRoot, path, appFontsSubDir, documentContext.fontFiles, false);
  Tree.addColorVariablesToXml(xmlAppRoot); // NB: it must be done after all exports because styles and items may use not imported swatches
  Tree.clearTempContext();
  Xml.exportXMLToPath(path + appName + "_app.xml", xmlAppRoot);
  if (interactionsAllowed) {
    Utils.playSoundNamed(Utils.Sounds.Glass);
    UI.message("✅ Export of app and lib completed to " + path);
    Utils.showInFinder(path);
  }
}
;
function onExportWholeAsXml(context) {
  exportWhole(context);
}
;

/** 
 * ----------------------------------------------------
 * DEBUG ONLY
 * ----------------------------------------------------  
*/

function onExportFonts(context) {
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var path = Utils.chooseFolder();
  if (path) {
    var Tree = __webpack_require__(/*! ./tree.js */ "./src/tree.js");
    var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();
    var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
    var fontFiles = [];
    document.pages.forEach(function (page) {
      Tree.getFontFilesUsedByLayer(page, fontFiles);
    });
    if (fontFiles.length > 0) {
      fontFiles.forEach(function (fontFile) {
        var fileName = fontFile.substring(fontFile.lastIndexOf('/') + 1);
        Utils.copyFile(fontFile, path + fileName);
      });
      UI.message("✅ Export completed - " + fontFiles.length + " font(s) exported to " + path);
      Utils.showInFinder(path);
    } else {
      UI.alert("Sketch2QML: can not export fonts", "❌ No font found in your Sketch document");
    }
  } else {
    log("onExportFonts: action cancelled by user");
  }
}
;
function onExportSelectedLayersAsPNG(context) {
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
  var selectedLayers = document.selectedLayers;
  if (selectedLayers.length == 0) {
    UI.alert("Sketch2QML: can not export PNG", "❌ No layers are selected ‼️\n=> Please select one or multiple layers before exporting.");
    NSBeep();
    return;
  }
  var path = Utils.chooseFolder();
  if (path) {
    selectedLayers.forEach(function (layer) {
      Utils.exportLayerAsPNG(layer, 4, path, layer.name, false, false);
      //Utils.exportLayerAsPNG(layer, 4, path, layer.name + "--frame-opacityAndTransform", true, true);
      //Utils.exportLayerAsPNG(layer, 4, path, layer.name + "--noframe-opacityAndTransform", false, true);
      //Utils.exportLayerAsPNG(layer, 4, path, layer.name + "--frame-noopacityAndTransform", true, false);
    });

    UI.message("✅ Export completed to " + path);
    Utils.showInFinder(path);
  } else {
    log("onExportSelectedLayersAsPNG: action cancelled by user");
  }
}
;
function onExportSelectedLayersAsSVG(context) {
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
  var selectedLayers = document.selectedLayers;
  if (selectedLayers.length == 0) {
    UI.alert("Sketch2QML: can not export SVG", "❌ No layers are selected ‼️\n=> Please select one or multiple layers before exporting.");
    NSBeep();
    return;
  }
  var path = Utils.chooseFolder();
  if (path) {
    selectedLayers.forEach(function (layer) {
      Utils.exportLayerAsSVG(layer, path, layer.name, false, false);
      //Utils.exportLayerAsSVG(layer, path, layer.name + "--frame-opacityAndTransform", true, true);
      //Utils.exportLayerAsSVG(layer, path, layer.name + "--noframe-opacityAndTransform", false, true);
      //Utils.exportLayerAsSVG(layer, path, layer.name + "--frame-noopacityAndTransform", true, false);
    });

    UI.message("✅ Export completed to " + path);
    Utils.showInFinder(path);
  } else {
    log("onExportSelectedLayersAsSVG: action cancelled by user");
  }
}
;
function onExportSelectedLayersWithUserPredefinedExportOptions(context) {
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
  var selectedLayers = document.selectedLayers;
  if (selectedLayers.length == 0) {
    UI.alert("Sketch2QML: can not export images", "❌ No layers are selected ‼️\n=> Please select one or multiple layers before exporting.");
    NSBeep();
    return;
  }
  var path = Utils.chooseFolder();
  if (path) {
    selectedLayers.forEach(function (layer) {
      Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name, false, false);
      //Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name + "--frame-opacityAndTransform", true, true);
      //Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name + "--noframe-opacityAndTransform", false, true);
      //Utils.exportLayerWithUserDefinedExportOptions(layer, path, layer.name + "--frame-noopacityAndTransform", true, false);
    });

    UI.message("✅ Export completed to " + path);
    Utils.showInFinder(path);
  } else {
    log("onExportSelectedLayersWithUserPredefinedExportOptions: action cancelled by user");
  }
}
;

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: add all reserved keywords
var forbiddenNames = ["bool", "true", "false", "double", "float", "real", "int", "long", "short", "string", "url", "var", "let", "function", "if", "else", "for", "while", "do", "break", "switch", "case", "default", "continue", "root", "delete", "bottom", "top", "left", "right", "baseline"];
var diacriticsMap = {
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
var numberOfImagesPerLayerExport = 2; // 2 => (original size, @2x), 4 => (original size, @2x, @3x, @4x)

var maximumImageWidthOrHeight = 16384;
var GLOBALNAMESINDEX_UNIQUENAME = 0;
var GLOBALNAMESINDEX_TYPE = 1;
var GLOBALNAMESINDEX_KEYVALUES = 2;
var GLOBALNAMESINDEX_RAWNAME = 3;
var GLOBALNAMESINDEX_PARENTTYPE = 4;
var TEMP_CONTEXT = {};
var POINT_DECIMAL_PRECISION = 5; // Number of decimals to export abscissa and ordinate of points
var ANGLE_DECIMAL_PRECISION = 3;
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
    missingSwatches: {}
  };
}
function initDocumentContext() {
  clearTempContext();
  var documentContext = {
    fontFiles: [],
    sharedLayerStylesIndex: {},
    sharedTextStylesIndex: {},
    globalNamesIndex: {},
    textsWithOutOfSyncStyle: {}
  };
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  var document = sketch.getSelectedDocument();
  document.sharedLayerStyles.forEach(function (style) {
    documentContext.sharedLayerStylesIndex[style.id] = style;
  });
  document.sharedTextStyles.forEach(function (style) {
    documentContext.sharedTextStylesIndex[style.id] = style;
  });
  treePopulateGlobalNamesIndex(documentContext);
  var nb = Object.keys(documentContext.globalNamesIndex).length;
  log("Indexed elements : " + nb);
  var usedNativeSwatches = document.sketchObject.documentData().allSwatches();
  if (usedNativeSwatches.length > 0) {
    usedNativeSwatches.forEach(function (nativeSwatch) {
      TEMP_CONTEXT.availableSwatchIDs.push(String(nativeSwatch.objectID()));
    });
  }
  return documentContext;
}
function addFontFileToContext(context, fontFilePath) {
  if (context && context.fontFiles && fontFilePath && !context.fontFiles.includes(fontFilePath)) context.fontFiles.push(fontFilePath);
}
function getFontFilesUsedByLayer(layer, result) {
  if (layer) {
    var fontFilePath = layerFontFilePath(layer);
    if (fontFilePath && !result.includes(fontFilePath)) {
      result.push(fontFilePath);
    }
    if (layer.layers && layer.layers.length > 0) {
      layer.layers.forEach(function (subLayer) {
        getFontFilesUsedByLayer(subLayer, result);
      });
    }
  }
}
function addSymbolMasterOverridesToXml(symbolMaster, xmlRoot, documentContext) {
  if (symbolMaster.overrides) {
    var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
    symbolMaster.overrides.forEach(function (overR) {
      // NB: Since october 2022, Sketch allows to override font properties (weight, alignment, etc.) and colors
      //     within Symbol instances without creating a text style or layer style for each variation
      //     This plugin only supports the old overridable properties
      if (overR.editable && (overR.property == "image" || overR.property == "textStyle" || overR.property == "stringValue" || overR.property == "layerStyle" || overR.property == "symbolID")) {
        var overrideTargetPath = treeBuildOverrideTargetPath(overR, documentContext.globalNamesIndex);
        Xml.xmlAddElement(xmlRoot, "overridable", ["property", overR.property, "on", overrideTargetPath], null);
      }
    });
  }
}
function treeIterateLayers(layers, parent, shallIgnoreSymbolMasters, rootDirPath, imagesSubDir, xmlRoot, documentContext, mask) {
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  var document = sketch.getSelectedDocument();
  var actualParent = parent; //parent may change during iteration (when finding masks)
  var currentMask = null;
  for (var i = 0; layers && i < layers.length; i++) {
    var l = layers[i];
    var type = l.sketchObject.class();
    var name = l.name;

    // We skip special elements
    if (name.startsWith("#")) continue;
    if (type == "MSSymbolMaster" && shallIgnoreSymbolMasters) {
      continue;
    } else if (type == "MSArtboardGroup" || type == "MSSliceLayer" || type == "MSHotspotLayer") {
      continue;
    }
    var indexedData = documentContext.globalNamesIndex[l.id];
    if (!indexedData) {
      log("ERROR: could not find indexed data for " + l.name + " (" + l.id + ") : ignore this element.");
      continue;
    }
    var actualName = getUniqueNameFromIndexedData(indexedData);
    var actualType = getTypeFromIndexedData(indexedData);
    var keyValues = getKeyValuesFromIndexedData(indexedData);
    var isCustomClass = false;

    //handle special types that will add specific beacons in XML or require specific logics
    if (actualType == "includeLibrary") {
      var rawName = getRawNameFromIndexedData(indexedData);
      var xmlCurrent = Xml.xmlAddElement(actualParent, "include", ["name", rawName], null);
      if (keyValues.length > 0) addCustomPropertiesToXml(xmlCurrent, keyValues);
    } else if (actualType == "includeExternal") {
      var _xmlCurrent = Xml.xmlAddElement(actualParent, "external", ["name", actualName], null);
      if (keyValues.length > 0) addCustomPropertiesToXml(_xmlCurrent, keyValues);
    } else if (type == "MSTextLayer" && actualType == "includeData") {
      var _xmlCurrent2 = Xml.xmlAddElement(actualParent, "data", ["name", actualName], l.text);
      if (keyValues.length > 0) addCustomPropertiesToXml(_xmlCurrent2, keyValues);
    } else {
      //FIXME: using internal Sketch API that might change in future versions
      if (l._object.shouldBreakMaskChain()) {
        actualParent = parent; //restore original parent because we break mask chain with this element
        currentMask = null;
      }
      var _xmlCurrent3 = Xml.xmlAddElement(actualParent, "item", ["name", actualName], null);
      addFontFileToContext(documentContext, layerFontFilePath(l));
      if (type == "MSSymbolInstance") {
        if (!l.master) {
          log("could not find the symbol master used by " + l.name);
          log("\t->Please check that it does not use an external symbol master that has not been made local.");
          continue;
        }

        //Instance is from a specific class and will be handled as a future software component instance
        var indexedDataSymbolMaster = documentContext.globalNamesIndex[l.master.id];
        if (!indexedDataSymbolMaster) {
          log("could not find indexed data for " + l.master.name);
          log("\t->Please check that it is not an external symbol master that has not been made local.");
          continue;
        }
        actualType = getTypeFromIndexedData(indexedDataSymbolMaster); //get resolved type from master symbol
        isCustomClass = true;
        type = actualType; //this will relevantly block iteration on subelements at the end of this function

        //Symbol instances require specific management around overrides
        //Overrides are stored "as-is" to be applied as property values during code generation.
        if (l.overrides) {
          var sketchVersion = __webpack_require__(/*! sketch/dom */ "sketch/dom").version.sketch;
          var nb = l.overrides.length;
          var symbolOverridesHash = {};
          for (var j = 0; j < nb; j++) {
            var overR = l.overrides[j];
            var isEditable = overR.editable;
            var isDefault = overR.isDefault;

            // NB: Since october 2022, Sketch allows to override font properties (weight, alignment, etc.) and colors
            //     within Symbol instances without creating a text style or layer style for each variation
            //     This plugin only supports the old overridable properties
            if (overR.property == "image" || overR.property == "textStyle" || overR.property == "stringValue" || overR.property == "layerStyle" || overR.property == "symbolID") {
              var indexedDataOverride = documentContext.globalNamesIndex[overR.affectedLayer.id];
              var originalOverrideTargetPath = treeBuildOverrideTargetPath(overR, documentContext.globalNamesIndex);
              var overrideTargetPath = originalOverrideTargetPath;
              if (!indexedDataOverride) {
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
                if (overR.sketchObject && (!overR.sketchObject.overrideValue() || overR.sketchObject.defaultValue() == overR.sketchObject.currentValue())) {
                  isDefault = true;
                }
              }

              //handle possible nesting of overrides
              var overrideParent = _xmlCurrent3; //set default parent for override data (may change with symbol overrides)

              var prefix = overrideTargetPath;
              var dotIndex = overrideTargetPath.lastIndexOf(".");
              while (dotIndex >= 0) {
                prefix = prefix.substring(0, dotIndex);
                //log("check prefix " + prefix + " for " + overrideTargetPath);
                if (prefix.length > 0 & symbolOverridesHash.hasOwnProperty(prefix)) {
                  //log("found prefix " + prefix + " for " + overrideTargetPath);
                  overrideParent = symbolOverridesHash[prefix];
                  overrideTargetPath = overrideTargetPath.substring(dotIndex + 1, overrideTargetPath.length);
                  break;
                } else {
                  dotIndex = prefix.lastIndexOf(".");
                }
              }
              if (overR.property == "image") {
                //we generate image file from data
                var imgData = overR.value.nsdata;
                var imgName = NSString.stringWithFormat("%@.png", overR.id.replace(/\//g, "_"));
                var imgRelativePath = NSString.stringWithFormat("%@%@", imagesSubDir, imgName);
                imgData.writeToFile_atomically(NSString.stringWithFormat("%@/%@", rootDirPath, imgRelativePath), false);
                Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", imgRelativePath, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
              } else if (overR.property == "textStyle") {
                var currentOver = Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", overR.value, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                if (documentContext.sharedTextStylesIndex[overR.value]) {
                  var affectedLayerUsesAnOutOfSyncStyle = documentContext.textsWithOutOfSyncStyle.hasOwnProperty(overR.affectedLayer.id);
                  var overrideStyle = documentContext.sharedTextStylesIndex[overR.value].style;
                  if (affectedLayerUsesAnOutOfSyncStyle) {
                    Xml.xmlAddElement(currentOver, "textStyle", ["sharedStyleId", overR.value, "affectedLayerStyleIsOutOfSync", true], null);
                  } else {
                    Xml.xmlAddElement(currentOver, "textStyle", ["sharedStyleId", overR.value], null);
                  }
                  addFontFileToContext(documentContext, styleFontFilePath(overrideStyle));
                } else {
                  log("could not find textStyle" + overR.value + " to override a symbol instance of " + l.name + ". This override will be ignored");
                  log("\t->Please check that it is not an external text style that has not been made local.");
                  continue;
                }
              } else if (overR.property == "layerStyle") {
                var _currentOver = Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", overR.value, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                if (documentContext.sharedLayerStylesIndex[overR.value]) {
                  var styleXML = Xml.xmlAddElement(_currentOver, "layerStyle", null, null);
                  treeAddAttributesFromLayerStyle(styleXML, type, documentContext.sharedLayerStylesIndex[overR.value].style);
                } else {
                  log("could not find layerStyle" + overR.value + " to override a symbol instance of " + l.name + ". This override will be ignored");
                  log("\t->Please check that it is not an external layer style that has not been made local.");
                  continue;
                }
              } else if (overR.property == "stringValue") {
                Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "value", overR.value, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
              } else if (overR.property == "symbolID") {
                var indexexDataOldSymbol = documentContext.globalNamesIndex[overR.affectedLayer.master.id];
                if (!indexexDataOldSymbol) {
                  log("could not find indexed data for SymbolMaster " + overR.affectedLayer.master.name + " to override a symbol instance of " + l.name + ". This override will be ignored");
                  log("\t->Please check that it is not an external master that has not been made local.");
                  continue;
                }
                var oldType = getTypeFromIndexedData(indexexDataOldSymbol);
                var newType = ""; //may be empty id "no symbol" override
                if (overR.value.length > 0) {
                  var newSymbol = document.getSymbolMasterWithID(overR.value);
                  if (newSymbol) {
                    var indexedDataNewSymbol = documentContext.globalNamesIndex[newSymbol.id];
                    if (!indexedDataNewSymbol) {
                      log("could not find indexed data for SymbolMaster " + newSymbol.name + " to override a symbol instance of " + l.name + ". This override will be ignored");
                      log("\t->Please check that it is not an external master that has not been made local.");
                      break;
                    }
                    newType = getTypeFromIndexedData(indexedDataNewSymbol); //symbol extracted class
                  } else {
                    log("could not find SymbolMaster with ID " + overR.value + " to override a symbol instance of " + l.name + ". This override will be ignored");
                    log("\t->Please check that it is not an external master that has not been made local.");
                    break;
                  }
                }
                var xmlSymbolOverride = Xml.xmlAddElement(overrideParent, "override", ["property", overR.property, "newType", newType, "oldType", oldType, "on", overrideTargetPath, "editable", isEditable, "isDefault", isDefault], null);
                if (!isDefault) symbolOverridesHash[originalOverrideTargetPath] = xmlSymbolOverride;
              }
            }
          }
        }
        Xml.xmlAddAttributesToElement(_xmlCurrent3, ["symbolMaster", getUniqueNameFromIndexedData(indexedDataSymbolMaster), "type", actualType]);
        var parentType = getParentTypeFromIndexedData(indexedDataSymbolMaster);
        if (parentType) Xml.xmlAddAttributesToElement(_xmlCurrent3, ["symbolMasterParentType", parentType]);
      } else {
        //other types are handled without anything specific
        Xml.xmlAddAttributesToElement(_xmlCurrent3, ["type", actualType]);
        //NB: overrides are applied if necessary when calling treeAddAttributesFromLayerData & co. below.
        //We do not apply overrides on the model directly as it would modify
        //the original Sketch file...
      }

      //Masks
      //FIXME: using internal Sketch API that might change in future versions
      if (l._object.hasClippingMask()) {
        //log("" + actualName + " is a mask");
        Xml.xmlAddAttributesToElement(_xmlCurrent3, ["isMask", 1]);
        actualParent = _xmlCurrent3;
        currentMask = l;
      }

      //Add custom keys and values extracted from layer name
      if (keyValues.length > 0) addCustomPropertiesToXml(_xmlCurrent3, keyValues);

      //add layer data
      //FIXME: compute x/y/width/height changes due to masks and mask chains breaks reparenting
      //FIXME: also handle proper size for clipped images
      var shallBlockBecauseExportExists = treeAddAttributesFromLayerData(actualName, _xmlCurrent3, type, l, rootDirPath, imagesSubDir, isCustomClass, currentMask, actualType);
      if (!shallBlockBecauseExportExists && l && (type == "MSArtboardGroup" || type == "MSLayerGroup" || type == "MSShapeGroup" || type == "MSSymbolMaster" || type == "MSSymbolInstance")) {
        treeIterateLayers(l.layers, _xmlCurrent3, shallIgnoreSymbolMasters, rootDirPath, imagesSubDir, xmlRoot, documentContext, currentMask);
      }
    }
  }
}
function treeAddAttributesFromPointData(currentXMLElement, point) {
  if (point && point.sketchObject) {
    var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
    var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
    var pointType = point.pointType;
    var pointAttributes = [];
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
      var nativePoint = point.sketchObject;
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
  } else console.warn("treeAddAttributesFromPointData: invalid argument 'point'");
}
function treeAddTextBehaviour(currentXMLElement, layer) {
  if (!isTextLayer(layer)) return;
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  Xml.xmlAddAttributesToElement(currentXMLElement, ["textBehaviour", layerTextBehaviour(layer)]);
}
function treeAddAttributesFromTextStyle(currentXMLElement, layerOrSharedTextStyle, sharedTextStyle) {
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  if (!layerOrSharedTextStyle) return;
  var isText = isTextLayer(layerOrSharedTextStyle);
  var style = layerOrSharedTextStyle.style;
  var sharedStyle = sharedTextStyle ? sharedTextStyle.style : null;
  if (!style) return;
  var attributes = [];
  if (!sharedStyle || style.opacity !== sharedStyle.opacity) {
    attributes.push("opacity");
    attributes.push(style.opacity);
  }
  if (!sharedStyle || style.blendingMode !== sharedStyle.blendingMode) {
    attributes.push("blendingMode");
    attributes.push(style.blendingMode);
  }
  var textBehaviour = "autoWidth";
  if (isText) {
    textBehaviour = layerTextBehaviour(layerOrSharedTextStyle);
    attributes.push("textBehaviour");
    attributes.push(textBehaviour);
  }
  if (!sharedStyle || style.alignment != sharedStyle.alignment) {
    attributes.push("alignment");
    attributes.push(style.alignment);
  }

  // Special case: Sketch does not reset the value of verticalAlignment when we switch from "fixedSize" to "autoWidth" or "autoHeight"
  var verticalAlignment = !isText || textBehaviour === "fixedSize" ? style.verticalAlignment : "top";
  if (!sharedStyle || verticalAlignment != sharedStyle.verticalAlignment) {
    attributes.push("verticalAlignment");
    attributes.push(verticalAlignment);
  }
  if (!sharedStyle || style.textColor != sharedStyle.textColor) {
    attributes.push("textColor");
    attributes.push(getTextColorAsHexValueOrSwatchReference(style));
  }
  if (!sharedStyle || style.lineHeight != sharedStyle.lineHeight) {
    if (style.lineHeight) {
      attributes.push("lineHeight");
      attributes.push(style.lineHeight);
    }
  }
  if (!sharedStyle || style.paragraphSpacing != sharedStyle.paragraphSpacing) {
    attributes.push("paragraphSpacing");
    attributes.push(style.paragraphSpacing);
  }

  // The following properties define our font
  var needFontFamily = !sharedStyle || style.fontFamily != sharedStyle.fontFamily;
  var needFontSize = !sharedStyle || style.fontSize != sharedStyle.fontSize;
  var needFontWeight = !sharedStyle || style.fontWeight != sharedStyle.fontWeight;
  var needFontStyle = !sharedStyle || style.fontStyle != sharedStyle.fontStyle;
  var needFontVariant = !sharedStyle || style.fontVariant != sharedStyle.fontVariant;
  var needFontStretch = !sharedStyle || style.fontStretch != sharedStyle.fontStretch;
  var needKerning = !sharedStyle || style.kerning != sharedStyle.kerning;
  var needTextTransform = !sharedStyle || style.textTransform != sharedStyle.textTransform;
  var needTextUnderline = !sharedStyle || style.textUnderline != sharedStyle.textUnderline;
  var needTextStrikethrough = !sharedStyle || style.textStrikethrough != sharedStyle.textStrikethrough;
  if (needFontFamily || needFontSize || needFontWeight || needFontStyle || needFontVariant || needFontStretch || needKerning || needTextTransform || needTextUnderline || needTextStrikethrough) {
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
  if (!style) return;
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var attributes = [];
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
    var dashPatternLength = style.borderOptions.dashPattern.length;
    if (dashPatternLength != 0) {
      attributes.push("dashPattern");
      var dashPatternString = style.borderOptions.dashPattern.join(',');
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
    style.fills.forEach(function (fill) {
      var xmlFill = Xml.xmlAddElement(currentXMLElement, "fill", null, null);
      var fillAttributes = [];
      var fillType = fill.fillType;
      fillAttributes.push("fillType");
      fillAttributes.push(fillType);
      fillAttributes.push("enabled");
      fillAttributes.push(fill.enabled);
      if (fillType == "Color") {
        fillAttributes.push("color");
        fillAttributes.push(getFillColorAsHexValueOrSwatchReference(fill));
      } else if (fillType == "Gradient") {
        var gradient = fill.gradient;
        var gradientType = gradient.gradientType;
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
        gradient.stops.forEach(function (stop) {
          var stopAttributes = [];
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
    style.borders.forEach(function (border) {
      var xmlBorder = Xml.xmlAddElement(currentXMLElement, "border", null, null);
      var borderAttributes = [];
      var fillType = border.fillType;
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
        var gradient = border.gradient;
        var gradientType = gradient.gradientType;
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
        gradient.stops.forEach(function (stop) {
          var stopAttributes = [];
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
function treeAddAttributesFromLayerData(name, currentXMLElement, type, layer, rootDirPath, imagesSubDir, isCustomClass, currentMask, actualType) {
  /*
  return true if item shall stop iteration, generally because it is renderer as an image or has exports
  return false if item allows iterations
  */
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  var attributes = [];
  attributes.push("id");
  attributes.push(layer.id);

  //generic attributes
  if (layer.locked) {
    attributes.push("locked");
    attributes.push("1");
  }
  if (layer.hidden) {
    attributes.push("hidden");
    attributes.push("1");
  }
  if (layer.transform) {
    //NB: layer.transform.rotation wraps layer.sketchObject.userVisibleRotation() 
    //     that matches what users see in the inspector which may be different 
    //     from the raw `rotation` value
    //     Here, we need the raw rotation because the generated code will apply a rotation
    //
    //NB: layer.sketchObject.userVisibleRotation and layer.sketchObject.rotation don't use the same rotation direction
    //    layer.sketchObject.userVisibleRotation  is clockwise, layer.sketchObject.rotation is counterclockwise
    var rotation = Utils.roundWithDecimalPrecision(-layer.sketchObject.rotation(), ANGLE_DECIMAL_PRECISION);
    if (rotation !== 0) {
      attributes.push("rotation");
      attributes.push(rotation);
    }
    if (layer.transform.flippedHorizontally) {
      attributes.push("flippedHorizontally");
      attributes.push("1");
    }
    if (layer.transform.flippedVertically) {
      attributes.push("flippedVertically");
      attributes.push("1");
    }
  }
  if (layer.sketchObject.hasFixedWidth()) {
    attributes.push("hasFixedWidth");
    attributes.push("1");
  }
  if (layer.sketchObject.hasFixedHeight()) {
    attributes.push("hasFixedHeight");
    attributes.push("1");
  }
  if (layer.sketchObject.hasFixedLeft()) {
    attributes.push("hasFixedLeft");
    attributes.push("1");
    // NB: fixedLeft is x
  }

  if (layer.sketchObject.hasFixedTop()) {
    attributes.push("hasFixedTop");
    attributes.push("1");
    // NB: fixedTop is y
  }

  if (layer.sketchObject.hasFixedRight()) {
    attributes.push("hasFixedRight");
    attributes.push("1");
    attributes.push("fixedRight");
    attributes.push(layer.parent ? Utils.roundBy(layer.parent.frame.width - (layer.frame.x + layer.frame.width), 0.5) : 0);
  }
  if (layer.sketchObject.hasFixedBottom()) {
    attributes.push("hasFixedBottom");
    attributes.push("1");
    attributes.push("fixedBottom");
    attributes.push(layer.parent ? Utils.roundBy(layer.parent.frame.height - (layer.frame.y + layer.frame.height), 0.5) : 0);
  }
  if (layer.frame) {
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
  if (layer.flow && layer.flow.target) {
    Xml.xmlAddElement(currentXMLElement, "flow", ["targetName", layer.flow.target.name, "targetId", layer.flow.targetId, "type", layer.flow.animationType], null);
  }
  var renderingAsImage = false;
  //handle unsupported types by rendering them as an image
  //NB: supported types are at the moment : text, rectangle, image, group, window
  //NB: groups come from MSLayerGroup and MSSymbolInstance
  //See type conversions at the beginning of treeParseName
  if (!isCustomClass && !isSupportedLayer(layer)) {
    //we have an unsupported type => render it as an image
    treeForceImageExport(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type);
    renderingAsImage = true;
  }

  //handle images with no export by manually generating image
  if (type == "MSBitmapLayer" && layer.exportFormats && layer.exportFormats.length == 0) {
    //we have an unsupported type => render it as an image
    treeForceImageExport(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type);
    //log("force export on image " + layer.name);
    renderingAsImage = true;
  }
  if (renderingAsImage) {
    Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
    return true;
  }

  //exports
  var hasExports = false;
  // NB: we don't want to export artboards or symbol masters as images
  if (layer.exportFormats && layer.exportFormats.length > 0 && canExportTypeAsImage(type)) {
    hasExports = treeAddImageExport(name, layer, currentXMLElement, rootDirPath, imagesSubDir);
  }
  if (hasExports) {
    //this part of the tree will be rendered as an image
    //=> add already collected elements and return now
    Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
    //log("abort style inspection because layer has exports (" + layer.name + ")");
    return true;
  }

  //style
  if (type == "MSArtboardGroup" || type == "MSLayerGroup" || type == "MSShapeGroup" || type == "MSOvalShape" || type == "MSRectangleShape" || type == "MSPolygonShape" || type == "MSStarShape" || type == "MSTriangleShape" || type == "MSShapePathLayer" || type == "MSBitmapLayer" || type == "MSTextLayer" || type == "MSSliceLayer" || isCustomClass) {
    var style = layer.style;
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
        } else {
          treeAddAttributesFromTextStyle(currentXMLElement, layer, null);
        }
      } else {
        if (layer.sharedStyle) {
          attributes.push("useSharedStyle");
          attributes.push(1);
        }
        treeAddAttributesFromLayerStyle(currentXMLElement, type, style);
      }
    }
  }

  //points
  if (type == "MSShapePathLayer" || type == "MSOvalShape" || type == "MSRectangleShape" || type == "MSPolygonShape" || type == "MSStarShape" || type == "MSTriangleShape" || type == "MSShapeGroup") {
    attributes.push("shapeType");
    attributes.push(layer.shapeType);
    attributes.push("closed");
    if (layer.closed) {
      attributes.push("1");
    } else {
      attributes.push("0");
    }
    var points = layer.points;
    if (points) {
      points.forEach(function (point) {
        treeAddAttributesFromPointData(currentXMLElement, point);
      });
    }
  }

  //specific attributes per type
  if (type == "MSTextLayer") {
    var text = layer.text;
    if (text) {
      Xml.xmlAddElement(currentXMLElement, "content", null, escapeCharactersInUnicodePrivateUseArea(text));
    }
  } else if (type == "MSArtboardGroup") {
    if (layer.background && layer.background.enabled && layer.background.includedInExport) {
      attributes.push("hasBackground");
      attributes.push("1");
      attributes.push("backgroundColor");
      attributes.push(getBackgroundColorAsHexValueOrSwatchReference(layer));
    }
  }
  Xml.xmlAddAttributesToElement(currentXMLElement, attributes);
  return false;
}
function treeForceImageExport(layer, currentXMLElement, rootDirPath, imagesSubDir, name, type) {
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
  if (!rootDirPath.endsWith("/")) {
    rootDirPath += "/";
  }
  if (imagesSubDir.length > 0 && !imagesSubDir.endsWith("/")) {
    imagesSubDir += "/";
  }
  var exportPath = rootDirPath + imagesSubDir;

  //NB: strange behavior - layer.id is undefined is we try to build a string BUT exists if we use console.log
  //let toto  = layer.id;console.log("Exists " + layer.id + " -- " + toto);
  // We add our objectID to avoid conflict between different symbols and/or artboards
  name = name + "__" + layer.sketchObject.objectID();

  // NB: Sketch fails to generate big images. Thus, we must ensure that we don't try to export big images
  var numberOfImages = 1;
  var layerWidth = layer.frame.width;
  var layerHeight = layer.frame.height;
  for (var currentAtN = 2; currentAtN <= numberOfImagesPerLayerExport; currentAtN++) {
    if (layerWidth * currentAtN > maximumImageWidthOrHeight || layerHeight * currentAtN > maximumImageWidthOrHeight) {
      break;
    }
    numberOfImages = currentAtN;
  }
  var insets = Utils.exportLayerAsPNG(layer, numberOfImages, exportPath, name, false, false);
  Xml.xmlAddAttributesToElement(currentXMLElement, ["hasExport", numberOfImages, "type", "image", "opacity", layer.style.opacity, "topInset", Utils.roundBy(insets[0], 0.5), "bottomInset", Utils.roundBy(insets[1], 0.5), "leftInset", Utils.roundBy(insets[2], 0.5), "rightInset", Utils.roundBy(insets[3], 0.5)]);
  for (var _currentAtN = 1; _currentAtN <= numberOfImages; _currentAtN++) {
    var exportAttr = [];
    var fileName = name + (_currentAtN !== 1 ? "@" + _currentAtN + "x" : "") + ".png";
    exportAttr.push("format");
    exportAttr.push("png");
    exportAttr.push("size");
    exportAttr.push(_currentAtN + "x");
    exportAttr.push("prefix");
    exportAttr.push("");
    exportAttr.push("suffix");
    exportAttr.push(_currentAtN !== 1 ? "@" + _currentAtN + "x" : "");
    exportAttr.push("file");
    exportAttr.push(imagesSubDir + fileName);
    Xml.xmlAddElement(currentXMLElement, "export", exportAttr, null);
  }
}
function treeAddImageExport(name, layer, currentXMLElement, rootDirPath, imagesSubDir) {
  var succeeded = false;
  if (layer.exportFormats.length > 0) {
    var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
    var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
    if (!rootDirPath.endsWith("/")) {
      rootDirPath += "/";
    }
    if (imagesSubDir.length > 0 && !imagesSubDir.endsWith("/")) {
      imagesSubDir += "/";
    }
    var exportPath = rootDirPath + imagesSubDir;
    // We add our objectID to avoid conflict between different symbols and/or artboards
    name = name + "__" + layer.sketchObject.objectID();
    var insets = Utils.exportLayerWithUserDefinedExportOptions(layer, exportPath, name, false, false);
    Xml.xmlAddAttributesToElement(currentXMLElement, ["hasExport", layer.exportFormats.length, "type", "image",
    //force type as image
    "opacity", layer.style.opacity, "topInset", insets[0], "bottomInset", insets[1], "leftInset", insets[2], "rightInset", insets[3]]);
    layer.exportFormats.forEach(function (format) {
      var exportFormat = format.sketchObject;
      var fileName = MSExportFormat.exportableFilenameForLayerName_exportFormat(name, exportFormat);
      var sizeText = format.size;
      var fileFormat = format.fileFormat;
      var prefix = format.prefix ? format.prefix : "";
      var suffix = format.suffix ? format.suffix : "";
      var exportAttr = [];
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
function treeAddLayerInGlobalNamesIndex(layer, documentContext, layerNamesUnicityByContext, layersStack, contextStack) {
  var type = layer.sketchObject.class();

  //extracting keys and values
  var elements = layer.name.split("|");
  var nameAndType = elements.shift().split("->");
  var actualType = "" + type;
  var useActualNameAsType = false;
  var extractedTypeIsParentType = false;
  if (type == "MSLayerGroup" || type == "MSShapeGroup") {
    actualType = "group";
  } else if (type == "MSBitmapLayer") {
    actualType = "image";
  } else if (type == "MSRectangleShape") {
    actualType = "rectangle";
  } else if (type == "MSOvalShape") {
    actualType = "oval";
  } else if (type == "MSShapePathLayer") {
    if (isLine(layer)) {
      actualType = "line";
    }
    //TODO: path
  } else if (type == "MSTextLayer") {
    actualType = "text";
  } else if (type == "MSArtboardGroup") {
    actualType = "window";
    extractedTypeIsParentType = true;
  } else if (type == "MSSymbolMaster") {
    useActualNameAsType = true;
    extractedTypeIsParentType = true;
  }
  var rawName;
  var parentType = null;
  if (nameAndType.length == 1) {
    //no type specified in name
    rawName = nameAndType[0].trim();
  } else if (nameAndType.length == 2) {
    //type is specified in name
    rawName = nameAndType[0].trim();
    var extractedType = nameAndType[1].trim();
    if (extractedTypeIsParentType) {
      parentType = extractedType;
    } else {
      actualType = extractedType;
    }
  } else {
    //name is empty
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
  var contextKey = contextStack[0];
  var localLayerNamesUnicityHash = layerNamesUnicityByContext[contextKey];

  /*
   Ensure name unicity
   We manage a stack of context (contextStack) because, in the end,
   we define QML files and we want id unicity in each QML file. 
   This optimization avoids useless suffix addition to layer names and thus makes generated code clearer.
   */
  //log("checking " + rawName + "(" + contextKey + ")");
  var actualName = rawName;
  var counter = 0;
  var hashKey = camelize(actualName).toLowerCase();
  if (localLayerNamesUnicityHash.hasOwnProperty(hashKey)) {
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
  if (elements.length % 2 !== 0) {
    //NB: we arbitrarily remove the last element to get an even number
    elements.pop();
    log("treeAddLayerInGlobalNamesIndex: odd number of key-values in layer's name - " + layer.name);
  }
  documentContext.globalNamesIndex[layer.id] = [actualName, actualType, elements, rawName, parentType];
  if (type == "MSTextLayer" && layer.sharedStyle && layer.sketchObject.isSharedStyleOutOfSync()) {
    documentContext.textsWithOutOfSyncStyle[layer.id] = true;
  }
  if (type == "MSSymbolMaster" || type == "MSArtboardGroup") {
    var layerId = layer.id;
    layerNamesUnicityByContext[layerId] = {};
    contextStack.unshift(layerId);
    layersStack.unshift("endOfContextScope");
  }

  //exclude hidden layers and layers rendered as images
  if (!(layer.exportFormats && layer.exportFormats.length > 0 && canExportTypeAsImage(type)) && !layer.hidden && (type == "MSArtboardGroup" || type == "MSLayerGroup" || type == "MSShapeGroup" || type == "MSSymbolMaster")) {
    for (var i = 0; layer.layers && i < layer.layers.length; i++) {
      layersStack.unshift(layer.layers[i].id);
    }
  }
}
function treePopulateGlobalNamesIndex(documentContext) {
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  var document = sketch.getSelectedDocument();
  var layerNamesUnicityByContext = {};
  var layersStack = [];
  document.pages.forEach(function (page) {
    if (page.name.startsWith("#")) {
      // Special case: we don't want to export this page
      // BUT it may contain relevant information (symbol masters)
      // that are required to export the content of other pages
      page.layers.forEach(function (layer) {
        var type = layer.sketchObject.class();
        if (type == "MSSymbolMaster") layersStack.unshift(layer.id);
      });
    } else {
      page.layers.forEach(function (layer) {
        var type = layer.sketchObject.class();
        if (
        // We don't want to export slices and hotspots
        type != "MSSliceLayer" && type != "MSHotspotLayer" && (
        // We don't want to export "private" layers, BUT we need to list
        // all symbol masters to define overrides
        !layer.name.startsWith("#") || type == "MSSymbolMaster")) {
          layersStack.unshift(layer.id);
        }
      });
    }
  });
  var rootKey = "DocumentRoot";
  var contextStack = [rootKey];
  layerNamesUnicityByContext[rootKey] = {};
  while (layersStack.length > 0) {
    var myId = layersStack.shift();
    if (myId == "endOfContextScope") {
      var layerId = contextStack.shift();
      delete layerNamesUnicityByContext[layerId];
      continue;
    }
    var layer = document.getLayerWithID(myId);
    if (layer) treeAddLayerInGlobalNamesIndex(layer, documentContext, layerNamesUnicityByContext, layersStack, contextStack);
  }
}
function treeBuildOverrideTargetPath(overR, globalNamesIndex) {
  var elmts = overR.path.split("/");
  var result = "";
  for (var i = 0; i < elmts.length; i++) {
    var index = elmts[i];
    if (globalNamesIndex[index]) {
      var str = camelize(getUniqueNameFromIndexedData(globalNamesIndex[index]));
      result = result + str + (i + 1 < elmts.length ? "." : "");
    } else {
      log("undefined index on overriden layer " + overR.affectedLayer.name + " that may also be exportable");
    }
  }
  return result;
}
function addFontFilesToXml(xmlParent, rootDirPath, fontsSubDir, fontFiles, excludeSystemFonts) {
  if (xmlParent && fontFiles && fontFiles.length > 0) {
    var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
    var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
    if (!rootDirPath.endsWith("/")) {
      rootDirPath += "/";
    }
    if (fontsSubDir.length > 0 && !fontsSubDir.endsWith("/")) {
      fontsSubDir += "/";
    }
    var exportPath = rootDirPath + fontsSubDir;
    Utils.createDirectoryIfNeeded(exportPath);
    var fontFileNames = [];
    fontFiles.sort().forEach(function (fontFilePath) {
      if (!excludeSystemFonts || !fontFilePath.startsWith("/System/Library/Fonts")) {
        var fileName = fontFilePath.substring(fontFilePath.lastIndexOf('/') + 1);
        if (!fontFileNames.includes(fileName)) {
          fontFileNames.push(fileName);
          Xml.xmlAddElement(xmlParent, "font", ["name", fileName.replace(/\.[^/.]+$/, ""), "file", fontsSubDir + fileName], null);
          Utils.copyFile(fontFilePath, exportPath + fileName);
        }
      }
    });
  }
}
function validSwatchName(rawName, colorNames) {
  var name = rawName.replace(/[^a-zA-Z0-9_]/g, ' ').replace(/\s{2,}/g, ' ').trim();
  if (name.match(/^\d/)) name = "swatch " + name;
  if (name.length == 0) {
    name = "swatch " + color.replace(/#/g, '');
  } else if (forbiddenNames.includes(name.toLowerCase())) {
    name = "swatch " + name;
  }
  var validName = name;
  if (colorNames.has(validName.toLowerCase())) {
    var index = colorNames.get(validName.toLowerCase());
    validName = name + " i" + ++index;
    while (colorNames.has(validName.toLowerCase())) {
      validName = name + " i" + ++index;
    }
    colorNames.set(name.toLowerCase(), index);
  }
  validName = lowerCaseFirstCharater(validName);
  colorNames.set(validName.toLowerCase(), 0);
  return validName;
}
function addColorVariablesToXml(xmlParent) {
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  if (sketch.version.sketch >= 69) {
    var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
    var colorNames = new Map();
    var document = sketch.getSelectedDocument();
    var swatchesData = [];

    // V1: swatches defined by our document
    /*
    document.swatches.forEach(swatch => {
        let color = rgbaToArgbOrRgb(swatch.color);
        let validName = validSwatchName(swatch.name, colorNames);
           swatchesData.push({id: swatch.sketchObject.objectID(), name: validName, color: color});
    });
    */

    // V2: document swatches and imported swatches
    var usedNativeSwatches = document.sketchObject.documentData().allSwatches();
    if (usedNativeSwatches.length > 0) {
      usedNativeSwatches.forEach(function (nativeSwatch) {
        var swatch = sketch.fromNative(nativeSwatch);
        var color = rgbaToArgbOrRgb(swatch.color);
        var validName = validSwatchName(swatch.name, colorNames);
        swatchesData.push({
          id: swatch.sketchObject.objectID(),
          name: validName,
          color: color
        });
      });
    }

    // Add missing swatches
    for (var key in TEMP_CONTEXT.missingSwatches) {
      var _color = TEMP_CONTEXT.missingSwatches[key];
      var validName = validSwatchName("missingSwatch " + _color, colorNames);
      log("Adding missing swatch " + key + " with name '" + validName + "' (color: " + _color + ")");
      swatchesData.push({
        id: key,
        name: validName,
        color: _color
      });
    }

    // Sort swatches by name before exporting them
    swatchesData.sort(function (a, b) {
      return a.name !== b.name ? a.name < b.name ? -1 : 1 : 0; // NB: faster than a.name.localCompare(b.name)
    }).forEach(function (swatchData) {
      Xml.xmlAddElement(xmlParent, "swatch", ["id", swatchData.id, "name", swatchData.name, "color", swatchData.color], null);
    });
  } else {
    console.warn("addColorVariablesToXml: can not export color variables - Sketch " + sketch.version.sketch + " is too old (required version is 69 or newer)");
  }
}
function addSharedTextStylesToXml(xmlParent) {
  var Xml = __webpack_require__(/*! ./xml.js */ "./src/xml.js");
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
  var document = sketch.getSelectedDocument();
  var styleNames = new Map();
  var stylesData = [];

  // Step 1: get data of all text styles
  document.sharedTextStyles.forEach(function (sharedTextStyle) {
    var name = sharedTextStyle.name.replace(/[^a-zA-Z0-9_]/g, ' ').replace(/\s{2,}/g, ' ').trim();
    if (name.match(/^\d/)) name = "textStyle " + name;
    if (name.length == 0) {
      name = "textStyle";
    } else if (forbiddenNames.includes(name.toLowerCase())) {
      name = "textStyle " + name;
    }
    var validName = name;
    if (styleNames.has(validName.toLowerCase())) {
      var index = styleNames.get(validName.toLowerCase());
      validName = name + " i" + ++index;
      while (styleNames.has(validName.toLowerCase())) {
        validName = name + " i" + ++index;
      }
      styleNames.set(name.toLowerCase(), index);
    }
    validName = lowerCaseFirstCharater(validName);
    styleNames.set(validName.toLowerCase(), 0);
    stylesData.push({
      id: sharedTextStyle.id,
      name: validName,
      sharedTextStyle: sharedTextStyle
    });
  });

  // Step 2: export text styles
  stylesData.sort(function (a, b) {
    return a.name !== b.name ? a.name < b.name ? -1 : 1 : 0; // NB: faster than a.name.localCompare(b.name)
  }).forEach(function (textStyleData) {
    var sharedTextStyleXml = Xml.xmlAddElement(xmlParent, "sharedtextstyle", ["id", textStyleData.id, "name", textStyleData.name], null);
    treeAddAttributesFromTextStyle(sharedTextStyleXml, textStyleData.sharedTextStyle, null);
  });
}
function camelize(str) {
  str = removeDiacritics(str);
  str = str.replace(/[^a-zA-Z0-9\-_\s]/g, "");
  str = str.trim();
  if (firstCharIsInvalid(str)) str = "n" + str;
  return str.replace(/^([A-Z])|[\-_\s]+(\w)/g, function (match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
}
function pascalize(str) {
  return capitalize(camelize(str));
}
function firstCharIsInvalid(str) {
  return str.length > 0 && /[^a-z_]/i.test(str.charAt(0));
}
function removeDiacritics(str) {
  return Object.keys(diacriticsMap).reduce(function (str, key) {
    var replaceRegexp = diacriticsMap[key];
    return str.replace(replaceRegexp, key);
  }, str);
}
function capitalize(str) {
  if (typeof str !== 'string') return '';
  std = str.trim();
  if (str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function lowerCaseFirstCharater(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function escapeCharactersInUnicodePrivateUseArea(str) {
  // NB: escape special characters used by custom icon fonts generated by Fontello
  //     see https://www.compart.com/fr/unicode/block/U+E000
  return str.replace(/[\uE000-\uF8FF]/g, function (c) {
    return "\\u" + ("000" + c.charCodeAt().toString(16)).slice(-4);
  });
}
function fontPostscriptNameFromStyle(style) {
  if (!style || !style.sketchObject) return null;
  return style.sketchObject.textStyle().fontPostscriptName();
}
function fontStyleNameFromStyle(style) {
  if (!style || !style.sketchObject) return null;
  var fontDisplayName = style.sketchObject.textStyle().attributes().NSFont.displayName();
  var fontStyleName = fontDisplayName.replace(style.fontFamily, "").trim();
  if (fontStyleName === "") fontStyleName = "Regular";
  return fontStyleName;
}
function getFillColorAsHexValueOrSwatchReference(fill) {
  if (fill.sketchObject) {
    return mscolorToHexValueOrSwatchReference(fill.sketchObject.color());
  } else {
    return rgbaToArgbOrRgb(fill.color);
  }
}
function getTextColorAsHexValueOrSwatchReference(style) {
  if (style.sketchObject && style.sketchObject.textStyle() && style.sketchObject.textStyle().attributes() && style.sketchObject.textStyle().attributes().MSAttributedStringColorAttribute) {
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
  var swatchID = mscolor.swatchID();
  if (swatchID) {
    var key = String(swatchID);
    if (!TEMP_CONTEXT.availableSwatchIDs.includes(key)) {
      if (!TEMP_CONTEXT.missingSwatches.hasOwnProperty(key)) {
        var _color2 = mscolorToArgbOrRgb(mscolor);
        log("Swatch with ID " + key + " not found (color: " + _color2 + "). Please check that all named colors are imported");
        TEMP_CONTEXT.missingSwatches[key] = _color2;
      }
    }
    return "swatch(" + swatchID + ")";
  } else {
    return mscolorToArgbOrRgb(mscolor);
  }
}
function mscolorToArgbOrRgb(mscolor) {
  return rgbaToArgbOrRgb("#" + mscolor.immutableModelObject().hexValue() + ("0" + Math.round(mscolor.alpha() * 255).toString(16).toUpperCase()).slice(-2));
}
function rgbaToArgb(color) {
  return color.replace(/#(......)(..)/, '#$2$1');
}
function rgbaToArgbOrRgb(color) {
  if (color.slice(-2).toUpperCase() === "FF") {
    return color.slice(0, -2);
  } else {
    return rgbaToArgb(color);
  }
}
function layerTextBehaviour(layer) {
  if (!isTextLayer(layer)) return "";
  var textBehaviourValue = layer.sketchObject.textBehaviour();
  if (textBehaviourValue == 0) {
    return "autoWidth";
  } else if (textBehaviourValue == 1) {
    return "autoHeight";
  } else {
    return "fixedSize";
  }
}
function layerFontFilePath(layer) {
  return layer && isTextLayer(layer) ? styleFontFilePath(layer.style) : null;
}
function styleFontFilePath(style) {
  var fontFilePath = null;
  if (style && style.sketchObject) {
    var nsFont = style.sketchObject.textStyle().attributes().NSFont;
    if (nsFont) {
      var urlAttribute = nsFont.fontDescriptor().objectForKey("NSCTFontFileURLAttribute");
      if (urlAttribute) {
        fontFilePath = String(urlAttribute.path());
      }
    }
  }
  return fontFilePath;
}
function canExportTypeAsImage(type) {
  return type != "MSArtboardGroup" && type != "MSSymbolMaster";
}
function isLayerGroup(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSLayerGroup.class()) && !layer.sketchObject.isKindOfClass(MSShapeGroup.class());
}
function isBitmapLayer(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSBitmapLayer.class());
}
function isTextLayer(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSTextLayer.class());
}
function isShapeLayer(layer) {
  return layer && layer.sketchObject && (layer.sketchObject.isKindOfClass(MSRectangleShape.class()) || layer.sketchObject.isKindOfClass(MSOvalShape.class()) || layer.sketchObject.isKindOfClass(MSPolygonShape.class()) || layer.sketchObject.isKindOfClass(MSStarShape.class()) || layer.sketchObject.isKindOfClass(MSTriangleShape.class()) || layer.sketchObject.isKindOfClass(MSShapePathLayer.class()));
}
function isRectangleShape(layer) {
  return layer && layer.sketchObject.isKindOfClass(MSRectangleShape.class()) && layer.sketchObject.isRectangle();
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
  return layer && layer.sketchObject.isKindOfClass(MSOvalShape.class());
}
function isLine(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isLine();
}
;
function isSliceLayer(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSSliceLayer.class());
}
function isArtboard(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSArtboardGroup.class());
}
function isSymbolMaster(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSSymbolMaster.class());
}
function isSymbolInstance(layer) {
  return layer && layer.sketchObject && layer.sketchObject.isKindOfClass(MSSymbolInstance.class());
}
function isSupportedLayer(layer) {
  return isTextLayer(layer) || isBitmapLayer(layer) || (isRectangleShape(layer) || isOvalShape(layer) || isSupportedLine(layer)) && isSupportedShapeStyle(layer.style) || isLayerGroup(layer) || isArtboard(layer) || isSymbolInstance(layer);
}
function isSupportedLine(layer) {
  return isLine(layer) && layer.style && layer.style.borderOptions && layer.style.borderOptions.startArrowhead == 'None' && layer.style.borderOptions.endArrowhead == 'None';
}
function isSupportedShapeStyle(style) {
  var isSupported = true;
  if (style) {
    isSupported = !style.blur.enabled && style.shadows.filter(function (item) {
      return item.enabled;
    }).length == 0 && style.innerShadows.filter(function (item) {
      return item.enabled;
    }).length == 0;
    if (isSupported) {
      var activeItems = style.fills.filter(function (item) {
        return item.enabled;
      });
      var numberOfActiveItems = activeItems.length;
      if (numberOfActiveItems > 0) {
        var lastItem = activeItems[numberOfActiveItems - 1];
        isSupported = lastItem.fillType == "Color" && (numberOfActiveItems == 1 || lastItem.color.slice(-2) === "ff") // "ff" => fill is opaque
        ;
      }
    }

    if (isSupported) {
      var _activeItems = style.borders.filter(function (item) {
        return item.enabled;
      });
      var _numberOfActiveItems = _activeItems.length;
      if (_numberOfActiveItems > 0) {
        var _lastItem = _activeItems[_numberOfActiveItems - 1];
        isSupported = _lastItem.fillType == "Color" && _numberOfActiveItems == 1;
      }
    }
  }
  return isSupported;
}
module.exports = {
  addColorVariablesToXml: addColorVariablesToXml,
  addFontFilesToXml: addFontFilesToXml,
  addSharedTextStylesToXml: addSharedTextStylesToXml,
  clearTempContext: clearTempContext,
  getBackgroundColorAsHexValueOrSwatchReference: getBackgroundColorAsHexValueOrSwatchReference,
  getFontFilesUsedByLayer: getFontFilesUsedByLayer,
  getKeyValuesFromIndexedData: getKeyValuesFromIndexedData,
  getParentTypeFromIndexedData: getParentTypeFromIndexedData,
  getTypeFromIndexedData: getTypeFromIndexedData,
  getUniqueNameFromIndexedData: getUniqueNameFromIndexedData,
  initDocumentContext: initDocumentContext,
  pascalize: pascalize,
  treeIterateLayers: treeIterateLayers,
  addSymbolMasterOverridesToXml: addSymbolMasterOverridesToXml
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = {};

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
Utils.playSoundNamed = function (name) {
  var sound = NSSound.soundNamed(name);
  if (sound) sound.play();
};
Utils.chooseFolder = function () {
  var panel = NSOpenPanel.openPanel();
  panel.setCanChooseDirectories(true);
  panel.setCanChooseFiles(false);
  panel.setCanCreateDirectories(true);
  if (panel.runModal() == NSModalResponseOK) {
    var path = panel.URL().path();
    if (0 == path.indexOf("file://")) {
      //remove the file:// path from string
      path = path.substring(7);
    }
    if (!path.endsWith("/")) path += "/";
    return path;
  } else {
    return null;
  }
};
Utils.showDialog = function (message) {
  var app = NSApplication.sharedApplication();
  if (app) app.displayDialog_withTitle(message, "Sketch2QML");
};
Utils.showInFinder = function (directoryPathOrFilePath) {
  var errorPointer = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.attributesOfItemAtPath_error(directoryPathOrFilePath, errorPointer);
  if (result) {
    if (result.isDirectory()) NSWorkspace.sharedWorkspace().openFile_withApplication(directoryPathOrFilePath, "Finder");else NSWorkspace.sharedWorkspace().selectFile_inFileViewerRootedAtPath(directoryPathOrFilePath, nil);
  } else console.warn("Utils.showInFinder: " + directoryPathOrFilePath + " does not exist or can't be read");
};
Utils.runCommand = function (command, args, currentDirectoryPath) {
  var task = NSTask.alloc().init();
  task.setLaunchPath_(command);
  if (currentDirectoryPath) task.setCurrentDirectoryPath(currentDirectoryPath);
  task.arguments = args;
  task.launch();
  task.waitUntilExit();
  return task.terminationStatus() == 0;
};
Utils.copyFile = function (source, destination) {
  var manager = NSFileManager.defaultManager();
  if (manager.fileExistsAtPath(source)) manager.copyItemAtPath_toPath_error(source, destination, null);else console.warn("Utils.copyFile: file '" + source + "` does not exist");
};
Utils.fileExists = function (filePath) {
  return NSFileManager.defaultManager().fileExistsAtPath(filePath);
};
Utils.expandTildeInPath = function (filePath) {
  return String(NSString.stringWithString(filePath).stringByExpandingTildeInPath());
};
Utils.createDirectoryIfNeeded = function (path) {
  var manager = NSFileManager.defaultManager();
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
Utils.forceNewDirectory = function (path) {
  var manager = NSFileManager.defaultManager();
  if (manager.fileExistsAtPath(path)) manager.removeItemAtPath_error(path, nil);
  if (manager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, true, nil, nil)) {
    return true;
  } else {
    console.warn("Utils.forceNewDirectory: failed to create directory " + path);
    return false;
  }
};
Utils.roundWithDecimalPrecision = function (value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};
Utils.roundBy = function (value, rounder) {
  var multiplier = 1 / (rounder || 0.5);
  return Math.round(value * multiplier) / multiplier;
};
Utils.isLine = function (layer) {
  return layer && layer.sketchObject && layer.sketchObject.isLine();
};
Utils.MSLayerAbsoluteInfluenceRect = function (nativeLayer) {
  var sketchVersion = __webpack_require__(/*! sketch/dom */ "sketch/dom").version.sketch;
  if (sketchVersion >= 96) {
    //NB: method absoluteInfluenceRect() of MSLayer removed in Sketch 96
    var document = nativeLayer.documentData();
    var immutable = nativeLayer.immutableModelObject();
    var relativeInfluenceRect = immutable.influenceRectForBoundsInDocument(document);
    return nativeLayer.convertRect_toLayer_(relativeInfluenceRect, null);
  } else {
    return nativeLayer.absoluteInfluenceRect();
  }
};
Utils.exportLayerWithFormats = function (layer, exportPath, exportName, formats, preserveFrameSize, applyTransformAndOpacity) {
  var topInset = 0;
  var bottomInset = 0;
  var leftInset = 0;
  var rightInset = 0;
  if (!layer || !exportPath) {
    console.warn("Utils.exportLayerWithFormats: layer or exportPath is not defined");
    return [topInset, bottomInset, leftInset, rightInset];
  }
  if (formats.length > 0) {
    var sketchDom = __webpack_require__(/*! sketch/dom */ "sketch/dom");
    var document = sketchDom.getSelectedDocument();
    var layerToExport = layer;
    if (!exportName) exportName = layer.name;
    if (!exportPath.endsWith("/")) exportPath += "/";

    //NB: layer.transform.rotation wraps layer.sketchObject.userVisibleRotation() 
    //     that matches what users see in the inspector which may be different 
    //     from the raw `rotation` value
    //     Here, we need the raw rotation because the generated code will apply a rotation
    //
    //NB: layer.sketchObject.userVisibleRotation and layer.sketchObject.rotation don't use the same rotation direction
    //    layer.sketchObject.userVisibleRotation  is clockwise, layer.sketchObject.rotation is counterclockwise
    var rotation = Utils.roundWithDecimalPrecision(-layer.sketchObject.rotation(), 3);
    var isRotated = rotation != 0;
    var isFlippedHorizontally = layer.transform.flippedHorizontally;
    var isFlippedVertically = layer.transform.flippedVertically;
    var parentIsGroup = layer.parent && layer.parent.sketchObject && layer.parent.sketchObject.isKindOfClass(MSLayerGroup.class());

    // Duplicate our layer if needed
    var useDuplicate = false;
    if (!applyTransformAndOpacity && (layer.style.opacity != 1 || isRotated || isFlippedHorizontally || isFlippedVertically || parentIsGroup)) {
      useDuplicate = true;
      layerToExport = layer.duplicate();
      layerToExport.parent = document.selectedPage;
      layerToExport.style.opacity = 1;
      if (isFlippedHorizontally) layerToExport.transform.flippedHorizontally = false;
      if (isFlippedVertically) layerToExport.transform.flippedVertically = false;
      if (isRotated) {
        if (Utils.isLine(layer)) {
          // Special case: Sketch updates the points of a line when we set its rotation
          // Rotation = 0 => horizontal line
          var frame = layerToExport.frame;
          var point0 = layerToExport.points[0];
          var pt0X = point0.point.x * frame.width;
          var pt0Y = point0.point.y * frame.height;
          var point1 = layerToExport.points[1];
          var pt1X = point1.point.x * frame.width;
          var pt1Y = point1.point.y * frame.height;
          var angleInDegrees = Math.atan2(pt1Y - pt0Y, pt1X - pt0X) * 180 / Math.PI;
          layerToExport.transform.rotation = angleInDegrees;
        } else {
          layerToExport.transform.rotation = 0;
        }
      }
    }
    var nativeLayer = layerToExport.sketchObject;
    var absoluteRect = nativeLayer.absoluteRect().rect();
    var absoluteInfluenceRect = Utils.MSLayerAbsoluteInfluenceRect(nativeLayer);
    var exportRect = absoluteRect;
    if (!preserveFrameSize && !CGRectContainsRect(absoluteRect, absoluteInfluenceRect)) {
      //TODO: decide if it's better to use the influence rectangle OR to use the union of both rectangles
      //     - influence rectangle: we export the smallest possible image BUT we can have rather high inset values
      //     - union: we can have small inset values BUT we export a larger image
      //exportRect = CGRectUnion(absoluteRect, absoluteInfluenceRect); 
      exportRect = absoluteInfluenceRect;
      var absoluteRectX = Utils.roundBy(absoluteRect.origin.x, 0.5);
      var absoluteRectY = Utils.roundBy(absoluteRect.origin.y, 0.5);
      var absoluteRectWidth = Math.ceil(absoluteRect.size.width);
      var absoluteRectHeight = Math.ceil(absoluteRect.size.height);
      topInset = exportRect.origin.y - absoluteRectY;
      bottomInset = absoluteRectY + absoluteRectHeight - (exportRect.origin.y + exportRect.size.height);
      leftInset = exportRect.origin.x - absoluteRectX;
      rightInset = absoluteRectX + absoluteRectWidth - (exportRect.origin.x + exportRect.size.width);

      //         log("Utils.exportLayerWithFormats: we don't use the frame size of our layer, we will use insets to extend the visual size of our layer. Layer=" + layer.name + ", top=" + topInset + ", bottom=" + bottomInset + ", left=" + leftInset + ", right=" + rightInset);
    }
    //      else log("Utils.exportLayerWithFormats: we use the frame size of our layer to avoid trimming of transparent pixels. Layer=" + layer.name);

    //log("Export " + exportName + " rect " + exportRect.origin.x + ", " + exportRect.origin.y + ", " + exportRect.size.width + ", " + exportRect.size.height)
    //log(" => insets top=" + topInset + ", bottom=" + bottomInset + " -- left=" + leftInset + ", right=" + rightInset)

    var sketchVersion = __webpack_require__(/*! sketch/dom */ "sketch/dom").version.sketch;
    if (sketchVersion >= 79) {
      // Version 79 of Sketch-Headers does not contain
      // -(id)exportRequestFromExportFormat:(id)arg1 layer:(id)arg2 inRect:(struct CGRect)arg3 useIDForName:(BOOL)arg4;
      formats.forEach(function (format) {
        var exportFormat = format.sketchObject ? format.sketchObject : format;
        var exportRequest = MSExportRequest.exportRequestsFromExportableLayer_exportFormats_inRect_useIDForName(nativeLayer, [exportFormat], exportRect, false).firstObject();
        exportRequest.setShouldTrim(false);
        document.sketchObject.saveArtboardOrSlice_toFile(exportRequest, exportPath + MSExportFormat.exportableFilenameForLayerName_exportFormat(exportName, exportFormat));
      });
    } else {
      formats.forEach(function (format) {
        var exportFormat = format.sketchObject ? format.sketchObject : format;
        var exportRequest = MSExportRequest.exportRequestFromExportFormat_layer_inRect_useIDForName(exportFormat, nativeLayer, exportRect, false);
        exportRequest.setShouldTrim(false);
        document.sketchObject.saveArtboardOrSlice_toFile(exportRequest, exportPath + MSExportFormat.exportableFilenameForLayerName_exportFormat(exportName, exportFormat));
      });
    }
    if (useDuplicate) layerToExport.remove();
  } else console.warn("Utils.exportLayerWithFormats: no export format to export layer " + layer.name);
  return [topInset, bottomInset, leftInset, rightInset];
};
Utils.exportLayerAsPNG = function (layer, maxAtN, exportPath, exportName, preserveFrameSize, applyTransformAndOpacity) {
  if (!layer || !exportPath) {
    console.warn("Utils.exportLayerAsPNG: layer or exportPath is not defined");
    return [0, 0, 0, 0];
  }
  maxAtN = Math.max(1, maxAtN);
  var exportFormats = [];
  for (var index = 1; index <= maxAtN; index++) {
    var pngFormat = MSExportFormat.alloc().init();
    pngFormat.setFileFormat("png");
    pngFormat.setScale(index);
    pngFormat.setName(index === 1 ? "" : "@" + index + "x");
    exportFormats.push(pngFormat);
  }
  return Utils.exportLayerWithFormats(layer, exportPath, exportName, exportFormats, preserveFrameSize, applyTransformAndOpacity);
};
Utils.exportLayerAsSVG = function (layer, exportPath, exportName, preserveFrameSize, applyTransformAndOpacity) {
  if (!layer || !exportPath) {
    console.warn("Utils.exportLayerAsSVG: layer or exportPath is not defined");
    return [0, 0, 0, 0];
  }
  var svgFormat = MSExportFormat.alloc().init();
  svgFormat.setFileFormat("svg");
  svgFormat.setScale(1);
  return Utils.exportLayerWithFormats(layer, exportPath, exportName, [svgFormat], preserveFrameSize, applyTransformAndOpacity);
};
Utils.exportLayerWithUserDefinedExportOptions = function (layer, exportPath, exportName, preserveFrameSize, applyTransformAndOpacity) {
  if (!layer || !exportPath) {
    console.warn("Utils.exportLayerWithUserDefinedExportOptions: layer or exportPath is not defined");
    return [0, 0, 0, 0];
  }
  return Utils.exportLayerWithFormats(layer, exportPath, exportName, layer.exportFormats, preserveFrameSize, applyTransformAndOpacity);
};
module.exports = Utils;

/***/ }),

/***/ "./src/xml.js":
/*!********************!*\
  !*** ./src/xml.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function xmlAddElement(parent, name, attributes, value) {
  if (parent == null) {
    log("parent is null for " + name);
    return null;
  }
  var el;
  if (value != null) {
    el = NSXMLElement.elementWithName_stringValue(NSString.stringWithFormat("%@", name), NSString.stringWithFormat("%@", value));
  } else {
    el = NSXMLElement.elementWithName(NSString.stringWithFormat("%@", name));
  }
  for (var i = 0; attributes && i < attributes.length; i += 2) {
    el.addAttribute(NSXMLNode.attributeWithName_stringValue(NSString.stringWithFormat("%@", attributes[i]), NSString.stringWithFormat("%@", attributes[i + 1])));
  }
  parent.addChild(el);
  return el;
}
function xmlAddAttributesToElement(element, keyValues) {
  if (element == null) {
    log("xmlAddAttributesToElement: element is null");
    return null;
  }
  for (var i = 0; keyValues && i < keyValues.length; i += 2) {
    element.addAttribute(NSXMLNode.attributeWithName_stringValue(NSString.stringWithFormat("%@", keyValues[i]), NSString.stringWithFormat("%@", keyValues[i + 1])));
  }
}
function xmlAddCustomPropertiesToElement(xmlElement, keyValues) {
  while (keyValues.length > 0) {
    xmlAddElement(xmlElement, "property", ["key", keyValues.shift().trim(), "value", keyValues.shift().trim()], null);
  }
}
function exportXMLToPath(path, root) {
  var doc = NSXMLDocument.documentWithRootElement(root);
  var xmlData = doc.XMLDataWithOptions(NSXMLNodePrettyPrint);
  var p = NSString.stringWithFormat("%@", path).stringByExpandingTildeInPath();
  xmlData.writeToFile(p);
}
module.exports = {
  xmlAddElement: xmlAddElement,
  xmlAddAttributesToElement: xmlAddAttributesToElement,
  xmlAddCustomPropertiesToElement: xmlAddCustomPropertiesToElement,
  exportXMLToPath: exportXMLToPath
};

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onOpenFileAndExportWholeAsXml'] = __skpm_run.bind(this, 'onOpenFileAndExportWholeAsXml');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['onExportWholeAsXml'] = __skpm_run.bind(this, 'onExportWholeAsXml');
globalThis['onExportLibraryAsXml'] = __skpm_run.bind(this, 'onExportLibraryAsXml');
globalThis['onExportApplicationAsXml'] = __skpm_run.bind(this, 'onExportApplicationAsXml');
globalThis['onShowAboutDialog'] = __skpm_run.bind(this, 'onShowAboutDialog');
globalThis['onExportSelectedLayersAsPNG'] = __skpm_run.bind(this, 'onExportSelectedLayersAsPNG');
globalThis['onExportSelectedLayersAsSVG'] = __skpm_run.bind(this, 'onExportSelectedLayersAsSVG');
globalThis['onExportSelectedLayersWithUserPredefinedExportOptions'] = __skpm_run.bind(this, 'onExportSelectedLayersWithUserPredefinedExportOptions');
globalThis['onExportFonts'] = __skpm_run.bind(this, 'onExportFonts')

//# sourceMappingURL=main.js.map