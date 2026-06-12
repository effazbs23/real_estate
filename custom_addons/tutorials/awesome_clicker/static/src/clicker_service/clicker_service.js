/**@odoo-module**/

import { reactive } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { humanNumber } from "@web/core/utils/numbers";

const ClickerService = {
    start(){
        const state = reactive({ clicks: 1000 });
        function increment(){
            state.clicks++;
        }
        function getClicks(){
            return humanNumber(state.clicks);
        }
        return { state, increment };
    }


};

registry.category("services").add("clicker", ClickerService)