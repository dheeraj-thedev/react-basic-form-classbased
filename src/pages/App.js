import React,{Component} from "react"
import Form from "../Components/Form"
import Table from "../Components/Table"
import NavBar from "../Components/NavBar"
import {Container} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'



const App =()=>{
// problem starts from here --
   const [state, setState ] = React.useState({
            fName:'',
            lName:'',
            Contact:'',
            Remarks:'',
            items:[]
        });

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(state)
        let items= [...state?.items]

        if(state.fName==="" && state.lName==="" && state.Contact===""&& state.Remarks===""){
            items.push({
                fName:state.fName,
                lName:state.lName,
                Contact:state.Contact,
                Remarks:state.Remarks
            });
        }
        else{
            let blankAddressOfArray=0;
            let isToBeInserted=false;
            // find blank first and then adjust to earlier blank indexes
            for (let index = 0; index < items.length; index++) {
                if(items[index].fName==="" && items[index].lName==="" && items[index].Contact===""&& items[index].Remarks===""){
                    blankAddressOfArray= index;
                    isToBeInserted=true;
                    break;
                }
            }

            if(isToBeInserted){
                        items[blankAddressOfArray].fName=state.fName;
                        items[blankAddressOfArray].lName=state.lName;
                        items[blankAddressOfArray].Contact=state.Contact;
                        items[blankAddressOfArray].Remarks=state.Remarks;
            }else{
                items.push({
                    fName:state.fName,
                    lName:state.lName,
                    Contact:state.Contact,
                    Remarks:state.Remarks
                });
            }
        
        }
        setState({
            fName:'',
            lName:'',
            Contact:'',
            Remarks:'',
            items,
        })
        //let {fName,lName,Contact,Remarks}=this.state;
       // console.log("The current state on form submit"+fName,lName,Contact,Remarks)
    }

    const handleInputChange=(e)=>{
        let input= e.target;
        let name=e.target.name;
        let value = e.target.value;
        setState(prevState=>({
            ...prevState,
            [name]:value
        }));
   }

        return(
            <div>
                <NavBar></NavBar>
                <Container>
                <Form 
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                nFirstName={state.fName}
                nLastName={state.lName}
                nContact={state.Contact}
                nRemarks={state.Remarks}
                ></Form>
                <Table items={state.items}></Table>
                </Container>
            </div>
        );
}


export default  App