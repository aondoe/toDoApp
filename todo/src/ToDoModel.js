import React from 'react';
import todoList from "./TodoList";
import ToDoFormat from './ToDoFormat';
import './todo.css';

/**
 * If a line is commented out, that menas that it is part of the functional method of creating components.
 * 
 * 
 * Below if the code is not commented out. It is written in a class-based way.
*/

//let ourTasks=todoList.map(tasks=> <ToDoFormat key={tasks.id} task_name={tasks.task_name} finished={tasks.finshed} item={tasks} />);

document.title="To Do List";

function clickY(){      //Test function to test event handling.
    alert("Go AWAY You troll!");
}

class ToDoModel extends React.Component{    //This is the class way form a component
    constructor(){
        super();    //The super() allows us to set our own variables.
        this.state={
            todos: todoList //In the class based component this will set todos to state.
        }
    }

render(){   //Render method only applies to class-formed components

/**
 * The line below allows us to create a variable which will hold the array 'todoList' with the higher order function .map() 
*/    
const ourTasks=todoList.map(tasks=> <ToDoFormat key={tasks.id} task_name={tasks.task_name} finished={tasks.finshed} item={tasks} />);
            return(
                <div>
                    <h1 id="todoHead">To Do List</h1>
                        {ourTasks}

                        <button onMouseOver={clickY}>Click Here</button>

                </div>
            )
        }
}//Ending brace for the ToDoModel class

export default ToDoModel;