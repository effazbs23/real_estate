/**odoo-module**/

import { KeepLast } from "@web/core/utils/concurrency";

export class GalleryModel {
    constructor(orm, resModel, archInfo) {
        this.orm = orm;
        this.resModel = resModel;
        this.archInfo = archInfo;
        this.keepLast = new KeepLast();
        this.images = [];
    }

    async loadImages(domain) {
        const { records } = await this.keepLast.add(
            this.orm.webSearchRead(
                this.resModel,
                domain,
                {
                    specification: {
                        [this.archInfo.imageField]: {},
                    },
                    context: {
                        bin_size: true,
                    },
                },
            ),
        );
        this.images = records;
    }
}
