import React from 'react';
import { Table} from 'semantic-ui-react'


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
  
    render () {
    console.log(this.state.exercises)
    return (
     <React.Fragment>
          {this.state.exercises.map(exercise =>(<Table.Row key={exercise.id}><Table.Cell>{exercise.description}</Table.Cell><Table.Cell>{exercise.date}</Table.Cell><Table.Cell>{exercise
            .category}</Table.Cell></Table.Row>))}
          </React.Fragment>
    )
    }
}
