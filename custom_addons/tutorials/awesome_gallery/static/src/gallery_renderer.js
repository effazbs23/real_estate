/**odoo-module**/

import { Component } from "@odoo/owl";
import { url } from "@web/core/utils/urls";
import { useService } from "@web/core/utils/hooks";
import { FileUploader } from "@web/views/fields/file_handler";

export class GalleryRenderer extends Component {
    static template = "awesome_gallery.GalleryRenderer";
    static components = { FileUploader };

    setup() {
        this.orm = useService("orm");
        this.onUploaded = async (image, file) => {
            await this.orm.webSave(this.props.resModel, [image.id], {
                [this.props.archInfo.imageField]: file.data,
            }, {
                specification: { [this.props.archInfo.imageField]: {} },
            });
        };
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
