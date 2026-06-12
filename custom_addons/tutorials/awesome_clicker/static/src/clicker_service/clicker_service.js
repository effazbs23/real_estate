/**@odoo-module**/

import { reactive } from "@odoo/owl";
import { registry } from "@web/core/registry";

const ClickerService = {
    start(){
        const state = reactive({ clicks: 0 });
        function increment(){
            state.clicks++;
        }
        return { state, increment };
    }


};

registry.category("services").add("clicker", ClickerService)