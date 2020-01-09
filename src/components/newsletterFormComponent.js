import React from "react"
import Button from "./button"
export default class Form extends React.Component {
  state = {
    email: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const email = target.name

    this.setState({
      [email]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`You will get news to: ${this.state.email}!`)
  }

  render() {
    return (
      <div>
        <h4 id="form-mobil">test</h4>

        <form action="https://gansub.com/s/sUMnC7kSJ/" method="POST">
          <div style={{ paddingBottom: "10px" }}>
            <lable for="email" />
            <input type="text" id="email" name="email" placeholder="mejl" />
            <input type="hidden" name="gan_repeat_email" />
          </div>
          <div>
            <Button transparentWhite type="submit" value="Till ETC.se">
              Prenumerera
            </Button>
          </div>
        </form>
      </div>
    )
  }
}
