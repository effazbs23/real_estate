
import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useClicker } from "../use_clicker";

export class ClientAction extends Component{
    static template = "awesome_clicker.client_action";

    setup(){
        this.clicker = useClicker();
    }
}

registry.category("actions").add("awesome_clicker.client_action", ClientAction);