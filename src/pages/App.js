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


        if(this.state.fName==="" &&
         this.state.lName==="" &&
          this.state.Contact==="" && 
          this.state.Remarks===""){


        }else{
        items.push({
            fName:this.state.fName,
            lName:this.state.lName,
            Contact:this.state.Contact,
            Remarks:this.state.Remarks
        });
    }

        this.setState({
            fName:'',
            lName:'',
            Contact:'',
            Remarks:'',
            items,
        })
        let {fName,lName,Contact,Remarks}=this.state;
        console.log("The current state on form submit"+fName,lName,Contact,Remarks)
    }

    handleInputChange=(e)=>{
        let input= e.target;
        let name=e.target.name;
        let value = e.target.value;

        this.setState({
            [name]:value
        })

        let {fName,lName,Contact,Remarks}=this.state;
        
        console.log("The current state on change of input"+fName,lName,Contact,Remarks)
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