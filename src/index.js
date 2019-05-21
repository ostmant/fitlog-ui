import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {ExerciseSet} from './ExerciseSet';

const App = () => {
    const now = new Date();
    return (
    <Container >
        fitnessLogger, started {now.toString()}
        <br/>
        <ExerciseSet/>
    </Container>
    )
    }
ReactDOM.render(<App />, document.getElementById('root'))