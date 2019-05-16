import React from "react"
import Button from "../components/button"

export default class Form extends React.Component {
    state={
        mejl: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const mejl = target.name

        this.setState({
            [mejl]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`You will get news to: ${this.state.mejl}!`)
    }

    render(buttonText) {
        return(
            <div>
            <h4>
                <a id="form-mobil"></a>
            </h4>
            
            <form onSubmit={this.handleSubmit}>
            <lable>{buttonText}
            <input type="email" name="mejl" value={this.state.mejl} onChange={this.handleInputChange}/>
            </lable>
            <Button transWhite type="submit">Prenumerera</Button>
            </form>
        </div>
        )
    }
    
}
