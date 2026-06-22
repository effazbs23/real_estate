/**odoo-module**/

export class GalleryArchParser {
    parse(xmlDoc) {
        const archInfo = {};
        if (xmlDoc.hasAttribute("image_field")) {
            archInfo.imageField = xmlDoc.getAttribute("image_field");
        }
        return archInfo;
    }
}
