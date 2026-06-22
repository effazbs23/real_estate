/**odoo-module**/

import { Component, onWillStart, onWillUpdateProps, useState } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { KeepLast } from "@web/core/utils/concurrency";

export class GalleryController extends Component {
    static template = "awesome_gallery.GalleryController";
    static components = { Layout };

    setup() {
        this.orm = useService("orm");
        this.keepLast = new KeepLast();
        this.state = useState({ images: [] });
        const { domain, resModel } = this.props;
        onWillStart(() => this.loadImages(domain));
        onWillUpdateProps((nextProps) => this.loadImages(nextProps.domain));
    }

    async loadImages(domain) {
        const { length, records } = await this.keepLast.add(
            this.orm.webSearchRead(
                this.props.resModel,
                domain,
                {
                    specification: {
                        [this.props.archInfo.imageField]: {},
                    },
                    context: {
                        bin_size: true,
                    },
                },
            ),
        );
        this.state.images = records;
    }
}