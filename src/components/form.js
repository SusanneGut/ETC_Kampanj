import React from "react"
import "./layout.css"

export default class Form extends React.Component {
    state={
        firstName: "",
        lastName: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Hello ${this.state.firstName} ${this.state.lastName}!`)
    }

    render(buttonText) {
        return(
            <div>Form
            <h2>
                <a id="form-mobil"></a>
                Byt till ETC Mobil
            </h2>
            
            <form onSubmit={this.handleSubmit}>
            <lable>{buttonText}
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
            </lable>
            <lable>Last Name
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
            </lable>
            <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
    
}
