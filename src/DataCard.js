import React from 'react';
import './test.css';    
import { Button, Checkbox, Form } from 'semantic-ui-react'

class DataCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
    this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ?target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleDescriptionChange(event) {
        const target = event.target;
        const value = target.value;
        console.log(value);
    }

    render() {
        return (
            <Form>
                <Form.Field>
                <label>
                    Exercise done: 
                    <input 
                     name="done"
                     type="checkbox"
                     checked={this.state.done}
                     onChange={this.handleInputChange}/>
                </label>
                </Form.Field>
                <br/>
                <Form.Field>
                <label>
                    Description: 
                    <input 
                    name="desc"
                    type="text"
                    onChange={this.handleDescriptionChange}
                    />
                </label>
                </Form.Field>
                <Form.Field><Button type='submit'>Tallenna</Button></Form.Field>
            </Form>
        );
    }
}

export default DataCard;