/**odoo-module**/

import { Component, onWillStart, onWillUpdateProps } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { usePager } from "@web/search/pager_hook";

export class GalleryController extends Component {
    static template = "awesome_gallery.GalleryController";
    static components = { Layout };

    setup() {
        const orm = useService("orm");
        const action = useService("action");
        this.model = new this.props.Model(orm, this.props.resModel, this.props.archInfo);
        const { domain } = this.props;
        onWillStart(() => this.model.loadImages(domain));
        onWillUpdateProps((nextProps) => this.model.loadImages(nextProps.domain));
        this.openRecord = (image) => action.switchView("form", { resId: image.id });

        usePager(() => ({
            offset: this.model.offset,
            limit: this.model.limit,
            total: this.model.total,
            onUpdate: async ({ offset, limit }) => {
                this.model.offset = offset;
                this.model.limit = limit;
                await this.model.loadImages(this.props.domain);
            },
        }));
    }
}