import {Reactive} from "@web/core/utils/reactive";
import {humanNumber} from "@web/core/utils/numbers";
import { EventBus } from "@odoo/owl";
import {ClickValue} from "../click_value/click_value";

export class ClickerModel extends Reactive {
    constructor() {
        super();
        this.clicks = 4990;
        this.level = 0;
        this.clickBots = 0;
        this.bigBots = 0;
        this.bus = new EventBus();


        document.addEventListener(
            "click",
            () => this.increment(1)
        );
        setInterval(() => {
            this.clicks += this.clickBots * 10;
            this.clicks += this.bigBots * 100;
        }, 10000);
    }

    increment(inc) {
        this.clicks += inc;
        if(this.level < 1 && this.clicks >= 1000){
            this.bus.trigger("Milestone_1k");
            this.level++;
        }
        if(this.level < 2 && this.clicks >= 5000){
            this.bus.trigger("Milestone_5k");
            this.level++;
        }
    }

    getClicks() {
        return humanNumber(this.clicks);
    }

    buyClickBot() {
        const clickPrice = 1000;
        if (this.clicks >= clickPrice) {
            this.clicks -= clickPrice;
            this.clickBots++;
        }
    }
    buyBigBot(){
        const bigPrice = 5000;
        if (this.clicks >= bigPrice) {
            this.clicks -= bigPrice;
            this.bigBots++;
        }
    }



}