/** @odoo-module **/
import { Component,useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { useAutoFocus } from "../../utils";

export class TodoList extends Component{

    static template = "awesome_owl.TodoList";
    static components = { TodoItem };

    setup(){
        this.nextId = 1;
        this.todos = useState([]);
        this.inputRef = useAutoFocus("todoInput");
    }

    addTodo(ev){
        if(ev.keyCode === 13 && ev.target.value != ""){
            this.todos.push({
                id: this.nextId++,
                description: ev.target.value,
                isCompleted: false
            })
            ev.target.value = "";
        }
    }

    toggleTodo(todo) {
        todo.isCompleted = !todo.isCompleted;
    }
}