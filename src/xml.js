
function xmlAddElement(parent, name, attributes, value){
    if (parent == null){
        log ("parent is null for " + name);
        return null;
    }
    var el;
    if (value != null){
        el = NSXMLElement.elementWithName_stringValue(NSString.stringWithFormat("%@", name),
                                                      NSString.stringWithFormat("%@", value));
    }else{
        el = NSXMLElement.elementWithName(NSString.stringWithFormat("%@", name));
    }
    
    for (var i = 0; attributes && (i < attributes.length); i+=2){
        el.addAttribute(NSXMLNode.attributeWithName_stringValue(NSString.stringWithFormat("%@", attributes[i]),NSString.stringWithFormat("%@", attributes[i+1])));
    }
    parent.addChild(el);
    return el;
}

function xmlAddAttributesToElement(element, keyValues){
    if (element == null){
        log ("xmlAddAttributesToElement: element is null");
        return null;
    }
    for (var i = 0; keyValues && (i < keyValues.length); i+=2){
        element.addAttribute(NSXMLNode.attributeWithName_stringValue(NSString.stringWithFormat("%@", keyValues[i]), NSString.stringWithFormat("%@", keyValues[i+1])));
    }
}

function xmlAddCustomPropertiesToElement(xmlElement, keyValues) {
    while (keyValues.length > 0) {
       xmlAddElement(xmlElement, "property", ["key", keyValues.shift().trim(), "value", keyValues.shift().trim()], null);
    }
}

function exportXMLToPath(path, root){
    var doc = NSXMLDocument.documentWithRootElement(root);
    var xmlData = doc.XMLDataWithOptions(NSXMLNodePrettyPrint);
    const p = NSString.stringWithFormat("%@", path).stringByExpandingTildeInPath();
    xmlData.writeToFile(p);
}

module.exports = {xmlAddElement, xmlAddAttributesToElement, xmlAddCustomPropertiesToElement, exportXMLToPath};