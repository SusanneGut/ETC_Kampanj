import React from "react"
import Button from "./button"
import styled from "styled-components"
import media from "styled-media-query"

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
        <h4 id="form-mobil"></h4>

        <form action="https://gansub.com/s/sUMnC7kSJ/" method="POST">
          <div style={{ paddingBottom: "30px" }}>
            <lable for="email" />
            <StyledInput
              type="text"
              id="email"
              name="email"
              placeholder="Mejl"
            />
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

const StyledInput = styled.input`
  border-radius: 6px;
  box-sizing: border-box;
  height: 42px;
  padding: 0 50px 0 20px;
  font-size: 16px;
`
