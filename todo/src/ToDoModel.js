import React from 'react';
import todoList from "./TodoList";
// import ToDoFormat from './ToDoFormat';       This is a functional component
import ToDoClass from './ToDoClass';        //This is a component created using class 
import './todo.css';    //css file for todoApp
import CountDisplay from './CountDisplay'   //This is a test
import FinishList from './FinishList'   //This is a test


/**
 * If a line is commented out, that menas that it is part of the functional method of creating components. 
 * Below if the code is not commented out. It is written in a class-based way.
*/

//let ourTasks=todoList.map(tasks=> <ToDoFormat key={tasks.id} task_name={tasks.task_name} finished={tasks.finshed} item={tasks} />);

document.title="To Do List";        //Change the window title at the top.


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
                    todos: todoList, //In the class based component this will set 'todos' to value todoList, which will set the state.
                    completed:todoList.finished
                }
            this.changeCheck=this.changeCheck.bind(this)
            this.compList=this.compList.bind(this)
        }
        
    changeCheck(id){
        this.setState((oldState)=>{
            const updatedTo=oldState.todos.map(todo=>{
                if(todo.id===id){
                    todo.finished=!todo.finished
                }
                    return todo;
                })
            return {todos: updatedTo}
        })
    }

    compList(id){
        this.setState((oldState)=>{
            const newList=oldState.todos.map(todo=>{
                if(todo.id===id){
                    if(todo.finished===true){
                        return todo
                    }    
                }
            })
        })
    }

    // finishList(id){
    //     this.setState((oldState)=>{
    //         const finThings=oldState.todos.filter(task=>task.finished===true)
    //             return {todo:finThings};
    //         })
    // }


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
            changeCheck={this.changeCheck}
        />);

const countDisp=<CountDisplay counter={0}/>

//Below is another variable which map the todoList array to the ToDoClass component. 
/*
 * This COMPONENT WILL filster only display tasks which have been completed.
 */
const doneList=this.state.todos.filter(task=>task.finished===true).map(tasks=><ToDoClass 
    key={tasks.id}
    task_name={tasks.task_name}
    finished={tasks.finshed}
    item={tasks}
    changeCheck={this.changeCheck}
/>);


return(
            <div>
                <div class="row">
                    <div class="col-8">
                        <h1 id="todoHead">To Do List</h1>
                            {ourTasks}
                    </div>
                <div class="col-4">
                    <h1 id="todoHead">Completed List</h1>
                    {doneList}
                </div>
            </div>
                {countDisp}
        </div>
        )
    }
}//Ending brace for the ToDoModel class

export default ToDoModel;