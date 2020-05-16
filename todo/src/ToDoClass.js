import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from "./Button";
import Button from '@material-ui/core/Button';
import "./todo.css";

let taskClass="taskBox";
let count=0;

function counter(){
    count++;
}

class ToDoClass extends React.Component{
    constructor(){
    super();
        this.state={
            count: 0
        }
    }
// On Class components the props parameter, is not defined like this : Function ToDoClass(props) as in functional components
//, but instead every time you write props it needs to be written like this: this.props.item.finished instead of props.item.finished

    render(){
    return(
        <div>
         <div class="row">
             <div class="col-lg-1">
                </div>
                 <div class="col-lg-7">
                    <div class={taskClass}>
                            <h3>
                                <input type="checkbox"  checked={this.props.item.finished} onchange={()=>alert("There was a change")}/>
                                    {this.props.task_name}
                            </h3>
                                <p class="response">
                                    {this.props.item.finished?"is Complete":"is not FINISHED"}
                                </p>
                                <p>
                                    <button onClick="counter()">Hit me to </button>
                                    <MyButton>This will do something in the future</MyButton>
                                </p>
                        </div>
                    </div>
                <div class="col-lg-4">
                </div>
             </div>
        </div>
    )}
}

export default ToDoClass;