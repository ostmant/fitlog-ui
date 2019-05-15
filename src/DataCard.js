import React from 'react';
import './test.css';    

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
            <form>
                <label>
                    Exercise done: 
                    <input 
                     name="done"
                     type="checkbox"
                     checked={this.state.done}
                     onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Description: 
                    <input 
                    name="desc"
                    type="text"
                    onChange={this.handleDescriptionChange}
                    />
                </label>
            </form>
        );
    }
}

export default DataCard;