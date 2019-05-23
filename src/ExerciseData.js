import React from 'react';
import { Table,Button} from 'semantic-ui-react'



import axios from 'axios';

export default class ExersiceList extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            exercises: []
        };
        
      }
  


  componentDidMount() {
    axios.get(`http://localhost:3001/exercises`)
      .then(res => {
        const exercisesData = res.data;
        console.log(exercisesData);
        this.setState({exercises: [...this.state.exercises, ...exercisesData]});
      })
  }
    handleClick(e) {
        let caller = e.target.className;
        if (caller.includes("delete")){console.log("Delete")}
        else  console.log("Update")
        b
        
       
    }
    render () {
    console.log(this.state.exercises)
    return (
     <React.Fragment>
          {this.state.exercises.map(exercise =>(<Table.Row key={exercise.id}><Table.Cell>{exercise.description}</Table.Cell><Table.Cell>{exercise.date}</Table.Cell><Table.Cell><Button className="delete" onClick={this.handleClick}>Delete</Button><Button className="update" onClick={this.handleClick}>Update</Button></Table.Cell></Table.Row>))}
          </React.Fragment>
    )
    }
}
