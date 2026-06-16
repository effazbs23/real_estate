import {Reactive} from "@web/core/utils/reactive";
import {humanNumber} from "@web/core/utils/numbers";
import {EventBus} from "@odoo/owl";
import {ClickValue} from "../click_value/click_value";
import {rewards} from "../click_rewards";
import {choose} from "../utils";

export class ClickerModel extends Reactive {
    constructor() {
        super();
        this.clicks = 999999;
        this.level = 0;
        this.clickBots = 0;
        this.bigBots = 0;
        this.power = 1;
        this.bus = new EventBus();
        this.trees = {
            pear: {
                number: 0,
                level: 4,
                price: 1000000
            },
            cherry: {
                number: 0,
                level: 4,
                price: 1000000
            }
        };
        this.fruits = {
            pear: 0,
            cherry: 0,
        };


        document.addEventListener(
            "click",
            () => this.increment(1)
        );
        setInterval(() => {
            this.clicks += this.clickBots * 10 * this.power;
            this.clicks += this.bigBots * 100 * this.power;
        }, 10000);
        setInterval(() => {
            for (const [name, tree] of Object.entries(this.trees)) {
                if (tree.number > 0) {
                    this.fruits[name] += tree.number;
                }
            }
        }, 30000);
    }

    increment(inc) {
        this.clicks += inc;
        if (this.level < 1 && this.clicks >= 1000) {
            this.bus.trigger("Milestone_1k");
            this.level++;
        }
        if (this.level < 2 && this.clicks >= 5000) {
            this.bus.trigger("Milestone_5k");
            this.level++;
        }
        if (this.level < 3 && this.clicks >= 100000) {
            this.bus.trigger("Milestone_100k");
            this.level++;
        }
        if (this.level < 4 && this.clicks >= 1000000) {
            this.bus.trigger("Milestone_1m");
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

    buyBigBot() {
        const bigPrice = 5000;
        if (this.clicks >= bigPrice) {
            this.clicks -= bigPrice;
            this.bigBots++;
        }
    }

    buyPowerClicks() {
        const powerPrice = 50000;
        if (this.clicks >= powerPrice) {
            this.clicks -= powerPrice;
            this.power++;
        }
    }

    getRewards() {
        const availableRewards = [];
        for (const reward of rewards) {
            if (!reward.minLevel || this.level >= reward.minLevel) {
                if (!reward.maxLevel || this.level <= reward.maxLevel) {
                    availableRewards.push(reward);
                }
            }
        }
        const reward = choose(availableRewards);
        this.bus.trigger("REWARD", reward);

        return reward;
    }
    buyTree(name) {
        if (this.clicks >= this.trees[name].price) {
            this.clicks -= this.trees[name].price;
            this.trees[name].number++;
        }
    }



}