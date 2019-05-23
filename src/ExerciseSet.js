import React from 'react';
import {Table} from 'semantic-ui-react'
import ExerciseList from './ExerciseData'

export const ExerciseSet = () => {

    
    
      return (
        <Table celled>
       <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Operation</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <ExerciseList/>
    </Table.Body>
  </Table>

      )
}