/**odoo-module**/

import { Component, onWillStart, onWillUpdateProps } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { GalleryModel } from "./gallery_model";
import { GalleryRenderer } from "./gallery_renderer";

export class GalleryController extends Component {
    static template = "awesome_gallery.GalleryController";
    static components = { Layout, GalleryRenderer };

    setup() {
        const orm = useService("orm");
        this.model = new GalleryModel(orm, this.props.resModel, this.props.archInfo);
        const { domain } = this.props;
        onWillStart(() => this.model.loadImages(domain));
        onWillUpdateProps((nextProps) => this.model.loadImages(nextProps.domain));
    }
}