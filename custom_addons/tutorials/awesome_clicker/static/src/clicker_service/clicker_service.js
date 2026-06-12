/**@odoo-module**/

import { reactive } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { humanNumber } from "@web/core/utils/numbers";

const ClickerService = {
    start(){
        const state = reactive({
            clicks: 1000,
            level: 1,
            clickBots: 0
        });
        function increment(){
            state.clicks++;
        }
        function getClicks(){
            return humanNumber(state.clicks);
        }
        function incrementLevel(){
            state.level++;
        }
        function buyClickBot(){
            if (state.clicks >= 1000) {
                state.clicks -= 1000;
                state.clickBots++;
            }
        }

        setInterval(() => {
            state.clicks += state.clickBots * 10;
        }, 10000);
        return { state, increment, getClicks, incrementLevel, buyClickBot };
    }


};

registry.category("services").add("clicker", ClickerService);