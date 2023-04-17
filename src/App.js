import React from 'react';
import './styles/App.css'
import './styles/Forms.css'
import './styles/CVApp.css'
import { General } from './components/General';
import { Education } from './components/Education';
import { Practical } from './components/Practical';
import { CVApp } from './components/CVApp';
import { render } from '@testing-library/react';

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

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (value) => {
        this.setState({
            general: {
                name: {
                    text: value,
                    id: ''
                }
            }
        }, () => {console.log(this.state.general.name)})
    }

    handleSubmit = () => {

    }

    render() {
        const {name} = this.state.general;
        // const {name, email, phone} = this.state.general;
        // const {school, study, date} = this.state.education;
        // const {company, position, skills} = this.state.practical;

        return (
            <div className='main'>
                <div className='cv-forms'>
                <General onChange={this.handleInputChange}/>
                <Education />
                <Practical />
                <button id='submit-cv' onClick={this.handleSubmit}>Submit</button>
                <button id='edit-cv'>Edit</button>
                </div>

                <div className='cv-application'>
                <CVApp name={name.text}/>
                </div>
            </div>
            
        )
    }
}

export default App;
