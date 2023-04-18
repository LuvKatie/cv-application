import React from "react";

export class Education extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value, e.target.dataset.id);
    }

    render() {
        return (
            <div className="education-info">
                <form>
                    <label htmlFor="schoolInput">School</label>
                    <input type="text" id="schoolInput" data-id="school" 
                    placeholder="Oregon State University" onChange={this.handleChange}></input>

                    <label htmlFor="studyInput">Area of Study</label>
                    <input type="text" id="studyInput" data-id="study" 
                    placeholder="Computer Science" onChange={this.handleChange}></input>

                    <label htmlFor="dateInput">Start to End date</label>
                    <input type="date" id="dateInput" data-id="start" onChange={this.handleChange}></input>
                    <input type="date" id="dateInput" data-id="end" onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}