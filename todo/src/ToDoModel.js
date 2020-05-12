import React from 'react';
import todoList from "./TodoList";
import ToDoFormat from './ToDoFormat';
import './todo.css'

let ourTasks=todoList.map(tasks=> <ToDoFormat key={tasks.id} task_name={tasks.task_name} finished={tasks.finshed} item={tasks} />);

document.title="To Do List";

function ToDoModel(){

    return(
        <div>
            <h1 id="todoHead">To Do List</h1>
                {ourTasks}                
        </div>
    )
}

export default ToDoModel;