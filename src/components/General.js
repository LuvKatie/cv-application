import React from "react";

export class General extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value, e.target.dataset.id);
    }

    render() {
        return (
            <div className='general-info'>
                <form>
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" id="nameInput" data-id="name" 
                    placeholder="John Doe" onChange={this.handleChange}></input>

                    <label htmlFor="emailInput">Email</label>
                    <input type="email" id="emailInput" data-id="email" 
                    placeholder="johndoe@gmail.com" onChange={this.handleChange}></input>

                    <label htmlFor="phoneInput">Phone #</label>
                    <input type="tel" id="phoneInput" data-id="phone" 
                    placeholder="000-000-0000" onChange={this.handleChange}></input>
                </form>
            </div>
            
        )
    }
}