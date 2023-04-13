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
                    <label htmlFor="companyInput">Company: </label>
                    <input type="text" id="companyInput"></input>
                    
                    <label htmlFor="positionInput">Poisition Title: </label>
                    <input type="text" id="positionInput"></input>

                    <label htmlFor="positionInput">Main Tasks: </label>
                    <input type="textarea" id="positionInput"></input>
                </form>
            </div>
        )
    }
}