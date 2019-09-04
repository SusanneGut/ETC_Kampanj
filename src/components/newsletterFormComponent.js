import React from "react"
import Button from "./button"

export default class Form extends React.Component {
  state = {
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
    return (
      <div>
        <h4>
          <a id="form-mobil" />
        </h4>

        <form
          action="mailto:susanne.gut@etc.se"
          method="post"
          enctype="text/plain"
        >
          <div style={{ paddingBottom: "10px" }}>
            <lable>
              {buttonText}
              <input
                type="email"
                name="mejl"
                value={this.state.mejl}
                onChange={this.handleInputChange}
              />
            </lable>
          </div>
          <div>
            <Button transparentWhite type="submit" value="send">
              Prenumerera
            </Button>
          </div>
        </form>
      </div>
    )
  }
}
