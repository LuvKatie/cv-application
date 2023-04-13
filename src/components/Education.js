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
            <div>
                <form>
                    <label htmlFor="schoolInput"></label>
                    <input type="text" id="schoolInput"></input>

                    <label htmlFor="studyInput"></label>
                    <input type="text" id="studyInput"></input>

                    <label htmlFor="dateInput"></label>
                    <input type="date" id="dateInput"></input>
                </form>
            </div>
        )
    }
}