import React,{Component} from "react"
import Form from "../Components/Form"
import Table from "../Components/Table"


class App extends Component{
    constructor(props){
        super(props);

        this.state={
            fName:'',
            lName:'',
            Contact:'',
            Remarks:'',
            items:[]
        }

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFormSubmit=(e)=>{
        e.preventDefault();
        let items= [...this.state.items]

        if(this.state.fName==="" && this.state.lName==="" && this.state.Contact===""&& this.state.Remarks===""){
            items.push({
                fName:this.state.fName,
                lName:this.state.lName,
                Contact:this.state.Contact,
                Remarks:this.state.Remarks
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
                        items[blankAddressOfArray].fName=this.state.fName;
                        items[blankAddressOfArray].lName=this.state.lName;
                        items[blankAddressOfArray].Contact=this.state.Contact;
                        items[blankAddressOfArray].Remarks=this.state.Remarks;
            }else{
                items.push({
                    fName:this.state.fName,
                    lName:this.state.lName,
                    Contact:this.state.Contact,
                    Remarks:this.state.Remarks
                });
            }
        
    }
        
        // iterate the array 

        // need to extract first index that is empty 
        // let indexCtr=0;
        // items.forEach(item=>{
        //    // console.log(item.fName+""+item.lName+""+item.Contact+""+item.Remarks);
        //     if(item.fName==="" && item.lName==="" && item.Contact===""&& item.Remarks===""){
        //             items[indexCtr].fName=this.state.fName;
        //             items[indexCtr].lName=this.state.lName;
        //             items[indexCtr].Contact=this.state.Contact;
        //             items[indexCtr].Remarks=this.state.Remarks;
        //     }

        // });


        this.setState({
            fName:'',
            lName:'',
            Contact:'',
            Remarks:'',
            items,
        })
        //let {fName,lName,Contact,Remarks}=this.state;
       // console.log("The current state on form submit"+fName,lName,Contact,Remarks)
    }

    handleInputChange=(e)=>{
        let input= e.target;
        let name=e.target.name;
        let value = e.target.value;

        this.setState({
            [name]:value
        })

       // let {fName,lName,Contact,Remarks}=this.state;
        
        //console.log("The current state on change of input"+fName,lName,Contact,Remarks)
    }


    render(){
        return(
            <div>
                <Form 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                nFirstName={this.state.fName}
                nLastName={this.state.lName}
                nContact={this.state.Contact}
                nRemarks={this.state.Remarks}
                ></Form>
                <Table items={this.state.items}></Table>
            </div>
        );
    }
}


export default  App