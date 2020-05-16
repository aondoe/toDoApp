import React from 'react';
import todoList from "./TodoList";
// import ToDoFormat from './ToDoFormat';       This is a functional component
import ToDoClass from './ToDoClass';        //This is a component created using class 
import './todo.css';    //css file for todoApp
import SideMenu from './SideMenu'   //This is a test

/**
 * If a line is commented out, that menas that it is part of the functional method of creating components.
 * 
 * 
 * Below if the code is not commented out. It is written in a class-based way.
*/

//let ourTasks=todoList.map(tasks=> <ToDoFormat key={tasks.id} task_name={tasks.task_name} finished={tasks.finshed} item={tasks} />);

document.title="To Do List";        //Change the window title at the top.

const clicky=function (){      //Test function to test event handling.
    alert("Go AWAY You troll!")
};

/*
 * This is the class way to make a component. If you don't write the extends keyword with React.Component you will have to import
 * the Component class like this:
 * 
 * import React {Component} from 'react'
 * 
*/
    class ToDoModel extends React.Component{
        constructor(){
            super();    //The super() allows us to set our own variables.
                this.state={
                    todos: todoList //In the class based component this will set 'todos' to value todoList, which will set the state.
                }
    }

render(){   //Render method only applies to class-formed components

/**
 * The line below allows us to create a variable which will hold the array 'todoList' with the higher order function .map() 
 * 
 * 
 */
const ourTasks=this.state.todos.map(tasks=>
        <ToDoClass 
            key={tasks.id} 
            task_name={tasks.task_name} 
            finished={tasks.finshed} 
            item={tasks} 
        />);

const sideMenu=<SideMenu counter={0}/>

return(
            <div>
                <h1 id="todoHead">To Do List</h1>
                    {ourTasks}
                    {sideMenu}

            </div>
        )
    }
}//Ending brace for the ToDoModel class

export default ToDoModel;