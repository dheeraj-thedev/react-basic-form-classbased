

import React, {Component} from "react";

export default class Form extends Component{




    render(){
        return(
            <div id="form">

                <h3>add a new user with comments</h3>
                <form id="form" onSubmit={this.props.handleFormSubmit} >
                    <label htmlFor="fName">First Name</label> <input name="fName" id="fName" onChange={this.props.handleInputChange} value={this.props.nFirstName} type="text"></input> 
                    <br></br>
                    <label htmlFor="lName">Last Name</label>  <input name="lName" id="lName"  onChange={this.props.handleInputChange} value={this.props.nLastName} type="text"></input>  
                    <br></br>
                    <label htmlFor="contact">Contact</label>  <input name="Contact" id="contact"  onChange={this.props.handleInputChange} value={this.props.nContact} type="text"></input> 
                    <br></br>
                    <label htmlFor="remarks">Remarks</label>  <input name="Remarks" id="remarks"  onChange={this.props.handleInputChange} value={this.props.nRemarks} type="text"></input> 

                    <button type="submit" value="Save">Add Entry</button>
 
                </form>
            </div>
        )
    }
}