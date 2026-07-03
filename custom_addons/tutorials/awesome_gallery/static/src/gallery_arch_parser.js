/**odoo-module**/

import { visitXML } from "@web/core/utils/xml";

export class GalleryArchParser {
    parse(xmlDoc) {
        const archInfo = {};
        if (xmlDoc.hasAttribute("image_field")) {
            archInfo.imageField = xmlDoc.getAttribute("image_field");
        }
        if (xmlDoc.hasAttribute("tooltip_field")) {
            archInfo.tooltipField = xmlDoc.getAttribute("tooltip_field");
        }
        const fields = [];
        let tooltipTemplate = null;
        visitXML(xmlDoc, (el, visitChildren) => {
            if (el.tagName === "gallery") {
                return;
            }
            if (el.tagName === "field") {
                if (el.getAttribute("name")) {
                    fields.push(el.getAttribute("name"));
                }
                return false;
            }
            if (el.tagName === "tooltip-template") {
                tooltipTemplate = el;
                return false;
            }
        });
        archInfo.fields = fields;
        archInfo.tooltipTemplate = tooltipTemplate;
        return archInfo;
    }
}
