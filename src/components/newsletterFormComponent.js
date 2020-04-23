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

        <StyledSubscriptionForm
          action="https://gansub.com/s/sUMnC7kSJ/"
          method="POST"
        >
          <StyledSection>
            <lable for="email" />
            <StyledInput
              type="text"
              id="email"
              name="email"
              placeholder="Skriv in din e-postadress"
            />
            <input type="hidden" name="gan_repeat_email" />
          </StyledSection>
          <StyledButton type="submit" value="Till ETC.se">
            Prenumerera
          </StyledButton>
        </StyledSubscriptionForm>
      </div>
    )
  }
}

const StyledSubscriptionForm = styled.div`
  ${media.greaterThan("790px")`
    display:flex;
    align-items: center;
  justify-content: center;
  margin-bottom:64px;

`}
`

const StyledSection = styled.section`
  padding-bottom: 30px;
  ${media.greaterThan("790px")`
  padding-bottom: 0;

`}
`

const StyledButton = styled(Button)`
  width: 100%;
  ${media.greaterThan("790px")`
  max-width: 358px;
  margin-left:30px;
  height: 60px;
  padding: 18px 30px;
`}
`
const StyledInput = styled.input`
  border-radius: 8px;
  box-sizing: border-box;
  height: 60px;
  font-size: 16px;
  width: 100%;
  border: none;
  padding: 22px 25px;
  ::placeholder {
    color: #3e4462;
  }
  ${media.greaterThan("790px")`
  width: 358px;

`}
`
