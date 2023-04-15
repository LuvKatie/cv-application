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
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </form>

                <hr></hr>
                <form id="cv-company">

                </form>

                <hr></hr>
                <form id="cv-skills">

                </form>
            </div>
        )
    }
}