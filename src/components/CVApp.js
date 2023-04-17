import React from "react";

export class CVApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-container">
                <form id="cv-general">
                    <input type="text" id="cv-name" value={this.props.name} disabled></input>
                    <input type="email" id="cv-email" disabled></input>
                    <input type="tel" id="cv-phone" disabled></input>
                </form>

                <hr></hr>
                <form id="cv-education">
                    <input type="text" id="cv-school" disabled></input>
                    <input type="text" id="cv-study" disabled></input>
                    <input type="text" id="cv-start-date" disabled></input>
                    <input type="text" id="cv-end-date" disabled></input>
                </form>

                <hr></hr>
                <form id="cv-practical">
                    <input type="text" id="cv-company" disabled></input>
                    <input type="text" id="cv-position" disabled></input>
                </form>

                <hr></hr>
                <form id="cv-skills">
                    <textarea id="cv-experience" rows={9} maxLength={320} disabled></textarea>
                </form>
            </div>
        )
    }
}