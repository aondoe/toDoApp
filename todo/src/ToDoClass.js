import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from "./Button";
import todoList from './TodoList'
import Button from '@material-ui/core/Button';
import "./todo.css";

let taskClass="taskBox";

class ToDoClass extends React.Component{


// On Class components the props parameter, is not defined like this : Function ToDoClass(props) as in functional components
//, but instead every time you write props it needs to be written like this: this.props.item.finished instead of props.item.finished

render(){
    return(
    <div>
         <div class="row">
                 <div class="col-lg-12">
                    <div class={this.props.item.finished?"taskBoxComp":"taskBoxIncomp"}>
                            <h3>    
                                <input 
                                    type="checkbox"
                                    checked={this.props.item.finished}
                                    onChange={()=>this.props.changeCheck(this.props.item.id)}
                                />
                                    {this.props.task_name}
                            </h3>
                            <p class="response">
                                {this.props.item.finished?"is Complete":"is not FINISHED"}
                            </p>
                </div>
            </div>
        </div>
    </div>
    )}
}

export default ToDoClass;