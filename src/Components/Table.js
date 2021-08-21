

import React, { Component } from "react"

class Table extends Component{
    render(){
        const items= this.props.items;
        let ctr=0
        console.log(items)
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Sr No</th><th>Firt Name</th><th>Last Name</th><th>Contact</th><th>Remarks</th>
                        </tr>
                    </thead>

                    <tbody>
                     
                    {
                  
                    items.map(item=>{
                        ctr++;
                        return(
                            <tr>
                                <td>{ctr}</td>
                                <td>{item.fName}</td>
                                <td>{item.lName}</td>
                                <td>{item.Contact}</td>
                                <td>{item.Remarks}</td>
                            </tr>
                        );
                    })}
                    </tbody>

                    <tfoot></tfoot>
                </table>
            </div>
        );
    }
}

export default Table