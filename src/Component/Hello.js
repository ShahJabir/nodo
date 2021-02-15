import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 
import Box from '@material-ui/core/Box';

export default class Hello extends Component {
    constructor(){
        super()
        this.state={
            name:"Shah"
        }
    }
    clickme(){
        // this.setState.name="Shah";
        if (this.state.name==="Shah"){
            this.setState({name:"Jabir"})
        }
        else if(this.state.name==="Jabir"){
            this.setState({name:"Taki"})
        }
        else{
            this.setState({name:"Shah"})
        }
    }
    render() {
        return (
            <div>
                <Box component="span" m={1}>
                  <Typography color="primary" >Hello from <h1> {this.state.name} </h1> </Typography>
                </Box>
                <Button onClick={this.clickme.bind(this)} variant="outlined" color="primary">Change the name</Button>
                <br></br>
            </div>
        )
    }
}
