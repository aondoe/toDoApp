import React from 'react';
import './todo.css'


class SideMenu extends React.Component{

    constructor(){
        super();

        this.state={
            counter:0,
            name:"Mr Miagi's",
            isLoggedIn:true
        }

//To use a method you created on a state, you need to bind the method, like so bellow.
    this.increment=this.increment.bind(this);
// Here is another method below to decrement the counter number.
    this.decrement=this.decrement.bind(this);
    
    }

    // this.setState({counter:this.state.counter+1})                <!------------------This is discouraged
    increment(){    //Define a method to deal with state called increment
           this.setState((oldState)=>{//<!----------------This is the correct way to to deal with state.
        return{counter: oldState.counter+1}
        })
    }

// this.setState({counter:this.state.counter-1})<!------------------This is discouraged
//Below is a method to attach to the state object property: 'counter' and it will decrease the counter property.
    decrement(){//Define a method to deal with state called increment
           this.setState((oldState)=>{ //<!----------------This is the correct way to to deal with state.
        return{counter: oldState.counter-1}
        })
    }

    render(){
        return (
            <div>
                <div class="row">
                    <div class="col-lg-4"></div>
                        <div class="sideAtt bg-primary text-white">
                            <span class="text-center text-white">
                                    <h1>
                                        {this.state.name} counter: {this.state.counter}
                                    </h1>
                            </span>
                            <br/>
                            <button onClick={this.increment}>Count Up</button>  {/*Increase the number in the counter*/}
                            <br/>
                            <button onClick={this.decrement}>Count Down</button>    {/*Decrease the number in the counter*/}
                            <br/>
                            <br/>
                                    {this.state.isLoggedIn?this.state.name+" is logged in": "You're not logged in"}
                        </div>
                </div>
            </div>
        )}
}

export default SideMenu;
