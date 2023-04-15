import React from 'react';
import './styles/App.css'
import './styles/Forms.css'
import './styles/CVApp.css'
import { General } from './components/General';
import { Education } from './components/Education';
import { Practical } from './components/Practical';
import { CVApp } from './components/CVApp';

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
                <CVApp />
                </div>
            </div>
            
        )
    }
}

export default App;
