/**@odoo-module**/

import { registry } from "@web/core/registry";
import { ClickerModel } from "./clicker_model";

const ClickerService = {
    start(){
        return new ClickerModel();
    }


};

registry.category("services").add("clicker", ClickerService);