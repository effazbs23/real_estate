
import { registry } from "@web/core/registry";
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "../use_clicker";
import { ClickValue } from "../click_value/click_value";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";

export class ClickerSystray extends Component {
    static template = "awesome_clicker.ClickerSystray";
    static props = {};
    static components = { ClickValue,Dropdown,DropdownItem };

    setup() {

        this.clicker = useClicker();
        this.action = useService("action");
    }
    get treeNumber(){
        let s=0;
        for(const tree in this.clicker.trees){
            s += this.clicker.trees[tree].number;
        }
        return s;
    }

    get fruitNumber(){
        let s = 0;
        for (const fruit in this.clicker.fruits){
            s+= this.clicker.fruits[fruit];
        }
        return s;
    }


    openClientAction(){
        this.action.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker"
        });
    }

}

export const systrayItem = {
    Component: ClickerSystray,
};

registry.category("systray").add("awesome_clicker.ClickerSystray", systrayItem, { sequence: 1000 });