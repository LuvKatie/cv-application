import React from "react";

export class Practical extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value, e.target.dataset.id);
    }

    render() {
        return (
            <div className="practical-info">
                <form>
                    <label htmlFor="companyInput">Company</label>
                    <input type="text" id="companyInput" data-id="company" 
                    placeholder="Google | Amazon | Microsoft" value={this.props.practical.company.edit}
                    onChange={this.handleChange}></input>
                    
                    <label htmlFor="positionInput">Poisition Title</label>
                    <input type="text" id="positionInput" data-id="position" 
                    placeholder="Senior Software Engineer" value={this.props.practical.position.edit}
                    onChange={this.handleChange}></input>

                    <label htmlFor="positionInput">Main Tasks / Skills</label>
                    <textarea id="positionInput" data-id="skills" 
                    rows={4} cols={40} maxLength={320} 
                    placeholder={`320 characters max \nEx. HTML, CSS, Javascript, React`} value={this.props.practical.skills.edit}
                    onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}