/**odoo-module**/

import { Component, xml } from "@odoo/owl";
import { url } from "@web/core/utils/urls";
import { useService } from "@web/core/utils/hooks";
import { FileUploader } from "@web/views/fields/file_handler";
import { useTooltip } from "@web/core/tooltip/tooltip_hook";

class GalleryImage extends Component {
    static template = "awesome_gallery.GalleryImage";
    static components = { FileUploader };
    static props = {
        image: Object,
        archInfo: Object,
        resModel: String,
        openRecord: Function,
        tooltipTemplateName: { type: String, optional: true },
    };

    setup() {
        this.orm = useService("orm");
        this.onUploaded = async (file) => {
            await this.orm.webSave(this.props.resModel, [this.props.image.id], {
                [this.props.archInfo.imageField]: file.data,
            }, {
                specification: { [this.props.archInfo.imageField]: {} },
            });
        };
        if (this.props.tooltipTemplateName) {
            useTooltip("imageTooltip", {
                template: this.props.tooltipTemplateName,
                info: this.props.image,
            });
        }
    }

    imageUrl(image) {
        return url("/web/image", {
            model: this.props.resModel,
            id: image.id,
            field: this.props.archInfo.imageField,
            unique: image.write_date,
        });
    }
}

function prepareTooltipTemplate(templateEl) {
    const clone = templateEl.cloneNode(true);
    replaceFields(clone);
    const serializer = new XMLSerializer();
    const innerXML = Array.from(clone.children)
        .map((child) => serializer.serializeToString(child))
        .join("");
    return xml`<t>${innerXML}</t>`;
}

function replaceFields(el) {
    for (const child of Array.from(el.children)) {
        if (child.tagName === "field") {
            const tEl = document.createElement("t");
            tEl.setAttribute("t-esc", child.getAttribute("name"));
            el.replaceChild(tEl, child);
        } else {
            replaceFields(child);
        }
    }
}

export class GalleryRenderer extends Component {
    static template = "awesome_gallery.GalleryRenderer";
    static components = { GalleryImage };

    setup() {
        this.tooltipTemplateName = null;
        if (this.props.archInfo.tooltipTemplate) {
            this.tooltipTemplateName = prepareTooltipTemplate(
                this.props.archInfo.tooltipTemplate
            );
        }
    }
}
