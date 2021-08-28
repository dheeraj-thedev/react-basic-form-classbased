

import React, {Component} from "react";

//export default class Form extends Component{
    //render(){

    const Form=(props)=>{
        return(
            <div id="form">

                <h3>add a new user with comments</h3>
                <form id="form" onSubmit={props.handleFormSubmit} >
                    <label htmlFor="fName">First Name</label> <input name="fName" id="fName" onChange={props.handleInputChange} value={props.nFirstName} type="text"></input> 
                    <br></br>
                    <label htmlFor="lName">Last Name</label>  <input name="lName" id="lName"  onChange={props.handleInputChange} value={props.nLastName} type="text"></input>  
                    <br></br>
                    <label htmlFor="contact">Contact</label>  <input name="Contact" id="contact"  onChange={props.handleInputChange} value={props.nContact} type="text"></input> 
                    <br></br>
                    <label htmlFor="remarks">Remarks</label>  <input name="Remarks" id="remarks"  onChange={props.handleInputChange} value={props.nRemarks} type="text"></input> 

                    <button type="submit" value="Save">Add Entry</button>
 
                </form>
            </div>
        )
    }
export default Form