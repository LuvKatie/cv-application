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
                    edit: '',
                },
    
                email: {
                    text: '',
                    edit: '',
                },
    
                phone: {
                    text: '',
                    edit: '',
                }
            },

            education: {
                school: {
                    text: '',
                    edit: '',
                },
    
                study: {
                    text: '',
                    edit: '',
                },
    
                date: {
                    start: '',
                    end: '',
                    edit: '',
                }
            },

            practical: {
                company: {
                    text: '',
                    edit: '',
                },

                position: {
                    text: '',
                    edit: '',
                },

                skills: {
                    text: '',
                    edit: '',
                }
            },
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleState = this.handleState.bind(this);
    }

    handleInputChange = (value, id) => {
        this.InfoObj[id] = value;
        this.handleState('edit');
    }
    
    handleSubmit = () => {
        this.handleState('submit');
    }

    handleEdit = () => {
        this.handleState('edit');
    }

    handleState = (action) => {
        const {name, email, phone,
            school, study, start, end,
            company, position, skills} = this.InfoObj;
            
        let currMode, prevMode;

        switch(action) {
            case 'submit': 
                currMode = 'text';
                prevMode = 'edit';
                break;
            case 'edit':
                currMode = 'edit';
                prevMode = 'text';
                break;
            default:
                break;
        }


        this.setState({
            general: {
                name: {
                    [currMode]: name,
                    [prevMode]: '',
                },
                
                email: {
                    [currMode]: email,
                    [prevMode]: '',
                },
                
                phone: {
                    [currMode]: phone,
                    [prevMode]: '',
                }
            },
            education: {
                school: {
                    [currMode]: school,
                    [prevMode]: '',
                },
                
                study: {
                    [currMode]: study,
                    [prevMode]: '',
                },
    
                date: {
                    start: start,
                    end: end,
                    editStart: '',
                    editEnd: '',
                }
            },
            practical: {
                company: {
                    [currMode]: company,
                    [prevMode]: '',
                },
                
                position: {
                    [currMode]: position,
                    [prevMode]: '',
                },
                
                skills: {
                    [currMode]: skills,
                    [prevMode]: '',
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
                <General onChange={this.handleInputChange} general={general}/>
                <Education onChange={this.handleInputChange} education={education}/>
                <Practical onChange={this.handleInputChange} practical={practical}/>
                <button id='submit-cv' onClick={this.handleSubmit}>Submit</button>
                <button id='edit-cv' onClick={this.handleEdit}>Edit</button>
                </div>

                <div className='cv-application'>
                <CVApp general={general} education={education} practical={practical}/>
                </div>
            </div>
            
        )
    }
}

export default App;
