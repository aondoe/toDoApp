import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from "./Button";
import Button from '@material-ui/core/Button';
import "./todo.css"

let taskClass="taskBox";

function ToDoFormat(props){
    return(
    <div>
         <div class="row">
             <div class="col-lg-1">
                </div>
                 <div class="col-lg-7">
                    <div class={taskClass}>
                            <h3>
                                <input type="checkbox"  checked={props.item.finished} onchange={()=>alert("There was a change")}/>
                                    {props.task_name}
                            </h3>
                                <p class="response" onclick="alert('Suspend')">
                                    {props.item.finished?"Completed":"Not FINISHED"}
                                </p>
                                <p>
                                    <MyButton>This will do something in the future</MyButton>
                                </p>
                        </div>
                    </div>
                <div class="col-lg-4">
                </div>
         </div>   
    </div>
)}

export default ToDoFormat;