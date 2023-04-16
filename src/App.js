import React from 'react';
import './styles/App.css'
import './styles/Forms.css'
import './styles/CVApp.css'
import { General } from './components/General';
import { Education } from './components/Education';
import { Practical } from './components/Practical';
import { CVApp } from './components/CVApp';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            general: {
                name: {
                    text: '',
                    id: ''
                },
    
                email: {
                    text: '',
                    id: ''
                },
    
                phone: {
                    text: '',
                    id: ''
                }
            },

            education: {
                school: {
                    text: '',
                    id: ''
                },
    
                study: {
                    text: '',
                    id: ''
                },
    
                date: {
                    start: '',
                    end: '',
                    id: ''
                }
            },

            practical: {
                company: {
                    text: '',
                    id: ''
                },

                position: {
                    text: '',
                    id: ''
                },

                skills: {
                    text: '',
                    id: ''
                }
            },
        }
    }
    render() {
        const {name, email, phone} = this.state.general;
        const {school, study, date} = this.state.education;
        const {company, position, skills} = this.state.practical;

        return (
            <div className='main'>
                <div className='cv-forms'>
                <General name={name} email={email} phone={phone}/>
                <Education school={school} study={study} date={date}/>
                <Practical company={company} position={position} skills={skills}/>
                </div>

                <div className='cv-application'>
                <CVApp />
                </div>
            </div>
            
        )
    }
}

export default App;
