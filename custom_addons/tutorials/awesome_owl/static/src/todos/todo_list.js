import { Component,useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component{

    static template = "awesome_owl.TodoList";
    static components = { TodoItem };

    setup(){
        this.todos = useState([
            {id: 2, description: "Write Tutorial", isCompleted: true},
            {id: 3, description: "Buy Milk", isCompleted: true},
        ]);
    }
}