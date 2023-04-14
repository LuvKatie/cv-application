import React from "react";

export class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        }
    }

    render() {
        return (
            <div className="education-info">
                <form>
                    <label htmlFor="schoolInput">School</label>
                    <input type="text" id="schoolInput"></input>

                    <label htmlFor="studyInput">Area of Study</label>
                    <input type="text" id="studyInput"></input>

                    <label htmlFor="dateInput">Start to End date</label>
                    <input type="date" id="dateInput"></input>
                    <input type="date" id="dateInput"></input>
                </form>
            </div>
        )
    }
}