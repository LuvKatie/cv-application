import React from "react";

export class Practical extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="practical-info">
                <form>
                    <label htmlFor="companyInput">Company</label>
                    <input type="text" id="companyInput" placeholder="Google | Amazon | Microsoft"></input>
                    
                    <label htmlFor="positionInput">Poisition Title</label>
                    <input type="text" id="positionInput" placeholder="Senior Software Engineer"></input>

                    <label htmlFor="positionInput">Main Tasks / Skills</label>
                    <textarea id="positionInput" rows={4} cols={40} maxLength={320} placeholder={`320 characters max \nEx. HTML, CSS, Javascript, React`}/>
                </form>
            </div>
        )
    }
}