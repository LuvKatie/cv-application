import React from 'react';
import './styles/App.css'
import './styles/Forms.css'
import { General } from './components/General';
import { Education } from './components/Education';
import { Practical } from './components/Practical';

class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='cv-forms'>
                <General />
                <Education />
                <Practical />
                </div>

                <div className='cv-application'>

                </div>
            </div>
            
        )
    }
}

export default App;
