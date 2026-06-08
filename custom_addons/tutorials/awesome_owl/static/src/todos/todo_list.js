import { Component,useState, useRef, onMounted } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component{

    static template = "awesome_owl.TodoList";
    static components = { TodoItem };

    setup(){
        this.nextId = 1;
        this.todos = useState([]);
        this.inputRef = useRef("todoInput");
        onMounted(
            ()=>{
                if(this.inputRef.el){
                    this.inputRef.el.focus();
                }
            }
        );
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
}