
import { Component,useState } from "@odoo/owl";

export class Counter extends Component{
    static template = "awesome_owl.counter";
    static props = {
        a : {
            type: Function
        }
    }
    setup(){
        this.state = useState({
            value: 1
        })
    };

    increment(){
        this.state.value = this.state.value + 1;
        if(this.props.a){
            this.props.a();
        }
    };
}