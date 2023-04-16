import React from "react";

export class CVApp extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="cv-container">
                <form id="cv-general">
                    <input type="text" value="John Doe" id="cv-name"></input>
                    <input type="email" value="johndoe@gmail.com" id="cv-email"></input>
                    <input type="tel" value="000-000-0000" id="cv-phone"></input>
                </form>

                <hr></hr>
                <form id="cv-education">
                    <input type="text" value="The Odin Project" id="cv-school"></input>
                    <input type="text" value="Full-Stack Web Developer" id="cv-study"></input>
                    <input type="date" id="cv-start-date"></input>
                    <input type="date" id="cv-end-date"></input>
                </form>

                <hr></hr>
                <form id="cv-practical">
                    <input type="text" id="cv-company" value="Microsoft"></input>
                    <input type="text" id="cv-position" value="Front-End Engineer"></input>
                </form>

                <hr></hr>
                <form id="cv-skills">
                    <textarea id="cv-experience" rows={9} maxLength={320}></textarea>
                </form>
            </div>
        )
    }
}