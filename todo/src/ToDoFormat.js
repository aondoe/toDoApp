import React from 'react';
import ReactDOM from 'react-dom';
import "./todo.css"

//Below is the model for the tasks and todo.

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
                            <input type="checkbox"  checked={props.item.finished} />
                                    {props.task_name}
                                <p class="response" onclick="alert('Suspend')">
                                    {props.item.finished?"Completed":"Not FINISHED"}
                                </p>
                            </h3>
                        </div>
                    </div>
                <div class="col-lg-4">
                </div>
         </div>   
    </div>
)}

export default ToDoFormat;