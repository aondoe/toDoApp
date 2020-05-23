import React from 'react';
import './todo.css'


class CountDisplay extends React.Component{
    constructor(){
        super();

        this.state={
            counter:0,
            calculate:0,
            name:"Aondongu",
            isLoggedIn:true
        }

//To use a method you created on a state, you need to bind the method, like so bellow.
    this.increment=this.increment.bind(this);
// Here is another method being binded below, to decrement the counter number.
    this.decrement=this.decrement.bind(this);
// Here is another method below being binded which will set the counter to zero. 
    this.setZero=this.setZero.bind(this);
//This is a new method below, which will bind us name property of the state object.
    this.setName=this.setName.bind(this);
}

//this.setState({counter:this.state.counter+1})                <!------------------This is discouraged
    increment(){    //Define a method to deal with state called increment
           this.setState((oldState)=>{//<!----------------This is the correct way to to deal with state.
            if(oldState.counter%2===0){
                return {calculate:" FIZZZ"}
            }
            else{
                return {calculate:" BUUZZ"}
            }
        return{counter: oldState.counter+1}
        })
    }

// this.setState({counter:this.state.counter-1})<!------------------This is discouraged
//Below is a method to attach to the state object property: 'counter' and it will decrease the counter property.
    decrement(){//Define a method to deal with state called increment
           this.setState((oldState)=>{ //<!----------------This is the correct way to to deal with state.
            if(oldState.counter%2===0){
                return {calculate:"is Fizz"};
            }
            else{
                return {calculate: "just pitch"};
            }
            return{counter: oldState.counter-1};
        })
    }

//Below is a method to attach to the state object property: 'counter' and it will set the counter property to 0.
    setZero(){
        this.setState((oldState)=>{
            return {counter: 0}
        })
    }

    setName(){  //This is a new method, which will allows us to change the name of the counter.
        this.setState((oldState)=>{
            const newName=document.getElementById("newName").value;
        return {name: newName}
        })
    }

    render(){
        return(
            <div>
                <div class="col-lg-4">
                </div>
                    <div class="sideAtt bg-primary text-white">
                        <div class="form-group text-center text-white">
                            <h1>
                                {this.state.name+"'s   "}
                                 counter: {this.state.counter} {/*<----The counter property from the state object*/}
                            </h1>
                                <div class="form-group">
                                    <label>Your Name</label><input id="newName" class="text" onChange={this.setName} />
                                </div>
                            <button onClick={this.increment}>Count Up</button>  {/*Increase the number in the counter*/}
                                <br/>
                            <button onClick={this.decrement}>Count Down</button>    {/*Decrease the number in the counter*/}
                                <br/>
                            <button onClick={this.setZero}>Set to ZERO</button>    {/*Decrease the number in the counter*/}
                        </div>
                    </div>
                </div>
        )}
}

export default CountDisplay;
