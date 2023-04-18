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
        this.InfoObj = {
            name: '',
            email: '',
            phone: '',
            school: '',
            study: '',
            start: '',
            end: '',
            company: '',
            position: '',
            skills: '',
        }

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

    handleInputChange = (value, id) => {
        this.InfoObj[id] = value;
    }
    
    handleSubmit = () => {
        const {name, email, phone,
        school, study, start, end,
        company, position, skills} = this.InfoObj;

        
        this.setState({
            general: {
                name: {
                    text: name,
                    id: ''
                },
                
                email: {
                    text: email,
                    id: ''
                },
                
                phone: {
                    text: phone,
                    id: ''
                }
            },
            
            education: {
                school: {
                    text: school,
                    id: ''
                },
                
                study: {
                    text: study,
                    id: ''
                },
    
                date: {
                    start: start,
                    end: end,
                    id: ''
                }
            },
            
            practical: {
                company: {
                    text: company,
                    id: ''
                },
                
                position: {
                    text: position,
                    id: ''
                },
                
                skills: {
                    text: skills,
                    id: ''
                }
            },
        })
    }
    
    render() {
        const {name, email, phone} = this.state.general;
        const {school, study, date} = this.state.education;
        const {company, position, skills} = this.state.practical;

        const general = {name, email, phone};
        const education = {school, study, date}
        const practical = {company, position, skills}
        
        return (
            <div className='main'>
                <div className='cv-forms'>

                {/* Add props for General, Education, and Practical forms
                so that when we update our state when we press edit
                it will inject the edit values into our forms for us
                to resubmit */}

                <General onChange={this.handleInputChange}/>
                <Education onChange={this.handleInputChange}/>
                <Practical onChange={this.handleInputChange}/>
                <button id='submit-cv' onClick={this.handleSubmit}>Submit</button>
                <button id='edit-cv'>Edit</button>
                </div>

                <div className='cv-application'>
                <CVApp general={general} education={education} practical={practical}/>
                </div>
            </div>
            
        )
    }
}

export default App;
