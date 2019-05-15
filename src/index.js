import React from 'react';
import ReactDOM from 'react-dom';
import {Linkki} from './Linkki';
import {LinkSet} from './LinkSet';
import DataCard from './DataCard';

const Hello = (props) => {

    return(
        <div>
            <p>hello {props.name}</p>
        </div>
    )
}



const App = () => {
    const now = new Date();
    return (
    <div>
        <p>fitnessLogger, started {now.toString()}</p>
        <Hello name="test"/>
        <Linkki/>
        <LinkSet/>
        <DataCard/>
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))