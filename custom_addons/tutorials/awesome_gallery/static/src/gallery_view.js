/**odoo-module**/

import { registry } from "@web/core/registry";
import { GalleryArchParser } from "./gallery_arch_parser";
import { GalleryController } from "./gallery_controller";
import { GalleryModel } from "./gallery_model";
import { GalleryRenderer } from "./gallery_renderer";

export const galleryView = {
    type: "gallery",
    display_name: "Gallery",
    icon: "oi oi-apps",
    Controller: GalleryController,
    ArchParser: GalleryArchParser,
    Model: GalleryModel,
    Renderer: GalleryRenderer,

    props: (genericProps, view) => {
        const { ArchParser } = view;
        const { arch } = genericProps;
        return {
            ...genericProps,
            archInfo: new ArchParser().parse(arch),
        };
    },
};

registry.category("views").add("gallery", galleryView);