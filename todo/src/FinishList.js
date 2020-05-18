import React from 'react';
import todoList from "./TodoList";
import './todo.css';    //css file for todoApp


class FinishList extends React.Component{
    constructor(){
        super();

        this.state={
            todos:todoList
        }
        this.compList=this.compList.bind(this)
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
            return {todos:newList}
        })
    }
    
render(){
        return(
            <div>
                    {this.state.todos.finishes}
            </div>
        )
    }
}

export default FinishList;