import React from "react";

export class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-info">
                <form>
                    <label htmlFor="schoolInput">School</label>
                    <input type="text" id="schoolInput" placeholder="Oregon State University"></input>

                    <label htmlFor="studyInput">Area of Study</label>
                    <input type="text" id="studyInput" placeholder="Computer Science"></input>

                    <label htmlFor="dateInput">Start to End date</label>
                    <input type="date" id="dateInput"></input>
                    <input type="date" id="dateInput"></input>
                </form>
            </div>
        )
    }
}