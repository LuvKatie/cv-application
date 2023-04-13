import React from "react";

export class General extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: {
                text: '',
                id: ''
            },

            email: {
                text: '',
                id: ''
            },

            phone: {
                text: '',
                id: ''
            }
        }
    }


    render() {
        return (
            <div className='general-info'>
                <form>
                    <label htmlFor="nameInput">Name: </label>
                    <input type="text" id="nameInput"></input>

                    <label htmlFor="emailInput">Email: </label>
                    <input type="email" id="emailInput"></input>

                    <label htmlFor="phoneInput">Phone #: </label>
                    <input type="tel" id="phoneInput"></input>
                </form>
            </div>
            
        )
    }
}