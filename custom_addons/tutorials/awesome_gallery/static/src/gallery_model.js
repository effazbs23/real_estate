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
        const specification = {
            [this.archInfo.imageField]: {},
        };
        if (this.archInfo.tooltipField) {
            specification[this.archInfo.tooltipField] = {};
        }
        const { records } = await this.keepLast.add(
            this.orm.webSearchRead(
                this.resModel,
                domain,
                { specification, context: { bin_size: true } },
            ),
        );
        this.images = records;
    }
}
