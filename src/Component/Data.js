import React, { Component , Fregment } from 'react'
import axios from "axios"
import ReactTable from "react-table"
import "react-table/react-table.css"

export default class Data extends Component {
    
    constructor(){
        super()
        this.state={
            tableinfo:[]
        }
    }
    componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(res=>{
                this.setState=({tableinfo:res.data})
            })
            .catch(err=>{
                alert("Somthing Problem")
            })
    }
    render() {
        const TableData=this.state.tableinfo
        const col=[{Header:"Country",accesor:"name"},{Header:"Domain",accesor:"topLevelDomain"},{Header:"Capital",accesor:"capital"}]
        return (
            <Fregment>
                 <ReactTable
                    Data={TableData}
                    Columns={col}
                    defaultPageSize={10}
                    pageSizeOpton={[10,20,30,40,50,60,70,80,90,100]}
                /> 
                <table>
                    <ul>
                    {this.state.tableinfo.name}
                    </ul>
                </table>
            </Fregment>
        )
    }
}
