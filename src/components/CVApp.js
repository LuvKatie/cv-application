import React from "react";

export class CVApp extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="cv-container">
                <form id="cv-general">
                    <input></input>
                    <input></input>
                    <input></input>
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