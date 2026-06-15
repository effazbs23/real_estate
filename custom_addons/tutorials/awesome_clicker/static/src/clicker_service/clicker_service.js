/**@odoo-module**/

import { registry } from "@web/core/registry";
import { ClickerModel } from "./clicker_model";
const ClickerService = {
    dependencies : ["effect"],
    start(env, services){
        const model = new ClickerModel();
        const bus = model.bus;
        bus.addEventListener("Milestone_1k", () => {
            services.effect.add({
                message: "Milestone reached! you can now buy clickbots",
                type: "rainbow_man",
            });
        })
        return model;
    }


};

registry.category("services").add("clicker", ClickerService);