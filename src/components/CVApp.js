import React from "react";

export class CVApp extends React.Component {
    constructor(props) {
        super(props);

        this.getProps = this.getProps.bind(this);
    }

    getProps(category, section) {
        if (section === 'start' || section === 'end') {
            return this.props[category].date[section]
        }
        return this.props[category][section].text
    }

    render() {
        return (
            <div className="cv-container">
                <form id="cv-general">
                    <input type="text" id="cv-name" value={this.getProps('general', 'name')} disabled></input>
                    <input type="email" id="cv-email" value={this.getProps('general', 'email')} disabled></input>
                    <input type="tel" id="cv-phone" value={this.getProps('general', 'phone')} disabled></input>
                </form>

                <hr></hr>
                <form id="cv-education">
                    <input type="text" id="cv-school" value={this.getProps('education', 'school')} disabled></input>
                    <input type="text" id="cv-study" value={this.getProps('education', 'study')} disabled></input>
                    <input type="text" id="cv-start-date" value={this.getProps('education', 'start')} disabled></input>
                    <input type="text" id="cv-end-date" value={this.getProps('education', 'end')} disabled></input>
                </form>

                <hr></hr>
                <form id="cv-practical">
                    <input type="text" id="cv-company" value={this.getProps('practical', 'company')} disabled></input>
                    <input type="text" id="cv-position" value={this.getProps('practical', 'position')} disabled></input>
                </form>

                <hr></hr>
                <form id="cv-skills">
                    <textarea id="cv-experience" rows={9} maxLength={320} value={this.getProps('practical', 'skills')} disabled></textarea>
                </form>
            </div>
        )
    }
}