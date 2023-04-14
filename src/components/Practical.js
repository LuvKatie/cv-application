import React from "react";

export class Practical extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        }
    }


    render() {
        return (
            <div className="practical-info">
                <form>
                    <label htmlFor="companyInput">Company</label>
                    <input type="text" id="companyInput" placeholder="Google | Amazon | Microsoft"></input>
                    
                    <label htmlFor="positionInput">Poisition Title</label>
                    <input type="text" id="positionInput" placeholder="Senior Software Engineer"></input>

                    <label htmlFor="positionInput">Main Tasks</label>
                    <textarea id="positionInput" rows={4} cols={40} maxLength={320} placeholder="320 characters max"/>
                </form>
            </div>
        )
    }
}