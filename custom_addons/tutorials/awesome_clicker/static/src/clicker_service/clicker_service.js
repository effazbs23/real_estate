/**@odoo-module**/

import { registry } from "@web/core/registry";
import { ClickerModel } from "./clicker_model";

import { browser } from "@web/core/browser/browser";
const ClickerService = {
    dependencies : ["action","effect","notification"],
    start(env, services){
        const localState = JSON.parse(browser.localStorage.getItem("clickerState"));
        const model = localState ? ClickerModel.fromJSON(localState) : new ClickerModel();
        const bus = model.bus;
        bus.addEventListener("Milestone_1k", () => {
            services.effect.add({
                message: "Milestone reached! you can now buy clickbots",
                type: "rainbow_man",
            });
        })
        bus.addEventListener("Milestone_5k", () => {
            services.effect.add({
                message: "Milestone reached! you can now buy bigbots",
                type: "rainbow_man",
            });
        })
        bus.addEventListener("Milestone_1m", () => {
            services.effect.add({
                message: "Milestone reached! you can now buy Trees",
                type: "rainbow_man",
            });
        })

        bus.addEventListener("REWARD", (ev) => {
            const reward = ev.detail;
            const closeNotification = services.notification.add(
                "Congrats you won a reward!",{
                    type: "success",
                    sticky: true,
                    buttons: [
                        {
                            name: "Collect",
                            onClick: () =>{
                                reward.apply(model);
                                closeNotification();
                                services.action.doAction({
                                    type: "ir.actions.client",
                                    tag: "awesome_clicker.client_action",
                                    target: "new",
                                    name: "Clicker Game",
                                });
                            },
                        }
                    ]
                }
            );
        })

        setInterval(() => {
            browser.localStorage.setItem("clickerState", JSON.stringify(model.toJSON()));
        }, 10000);

        return model;
    }


};

registry.category("services").add("clicker", ClickerService);