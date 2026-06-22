/**odoo-module**/

export class GalleryArchParser {
    parse(xmlDoc) {
        const archInfo = {};
        if (xmlDoc.hasAttribute("image_field")) {
            archInfo.imageField = xmlDoc.getAttribute("image_field");
        }
        if (xmlDoc.hasAttribute("tooltip_field")) {
            archInfo.tooltipField = xmlDoc.getAttribute("tooltip_field");
        }
        return archInfo;
    }
}
