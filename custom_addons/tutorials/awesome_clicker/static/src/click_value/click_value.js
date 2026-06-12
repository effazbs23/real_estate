
import { Component } from "@odoo/owl";
import {useClicker} from "../use_clicker";
import { humanNumber } from "@web/core/utils/numbers";
export class ClickValue extends Component {
    static template = "awesome_clicker.click_value";

    setup(){
        this.clicker = useClicker();
    }

    get clickValue(){
        return humanNumber(this.clicker.state.clicks,{
            decimals: 1,
        });
    }
}