/**odoo-module**/

import { registry } from "@web/core/registry";
import { GalleryArchParser } from "./gallery_arch_parser";
import { GalleryController } from "./gallery_controller";

export const galleryView = {
    type: "gallery",
    display_name: "Gallery",
    icon: "oi oi-apps",
    Controller: GalleryController,
    ArchParser: GalleryArchParser,

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