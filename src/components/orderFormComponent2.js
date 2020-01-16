import React from "react"
import styled from "styled-components"
import ButtonLink from "./buttonLink"
import Button from "../components/button"
import Checkbox from "../components/checkbox"

export default class MobilesubscriptionFormComponent1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mail: "",
      firstName: "",
      lastName: "",
      privatperson: true,
      foretag: false,
      personnummer: "",
      startdatum: "",
      address: "",
      city: "",
      postalnum: "",
      phone: "",
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`${this.state.firstName}, tack för din beställning!`)
    console.log(
      `Behåll nummer: ${this.state.sameNumber} Privatperson: ${this.state.privatperson}`
    )
  }

  render() {
    return (
      <div className={this.props.className}>
        <StyledInput
          type="email"
          name="mail"
          value={this.state.mail}
          onChange={this.handleInputChange}
          placeholder="Mejl"
          data-validate="require email"
        />
        <br />
        <StyledInput
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleInputChange}
          placeholder="Förnamn"
        />
        <StyledInput
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleInputChange}
          placeholder="Efternamn"
        />
        <br />
        <StyledDiv>
          <StyledLable>
            {" "}
            <Checkbox
              name="privatperson"
              checked={this.state.privatperson}
              onChange={this.handleInputChange}
            />{" "}
            Privatperson
          </StyledLable>{" "}
          <br />
          <StyledLable>
            <Checkbox
              name="foretag"
              checked={this.state.foretag}
              onChange={this.handleInputChange}
            />{" "}
            Företag
          </StyledLable>{" "}
        </StyledDiv>
        <br />
        <StyledInput
          type="text"
          name="personnummer"
          value={this.state.personnummer}
          onChange={this.handleInputChange}
          placeholder="Personnummer"
        />
        <br />
        <StyledInput
          type="text"
          name="startdatum"
          value={this.state.startdatum}
          onChange={this.handleInputChange}
          placeholder="Startdatum"
        />
        <StyledDiv>
          <StyledLable>
            Leveransadress
            <br style={{ marginBottom: "11px" }} />
            <StyledInput
              type="address"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              placeholder="Gatuadress"
            />
            <br />
            <StyledInput
              type="city"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
              placeholder="Postort"
            />
            <br />
            <StyledInput
              type="postalnum"
              name="postalnum"
              value={this.state.postalnum}
              onChange={this.handleInputChange}
              placeholder="Postnummer"
            />
            <StyledInput
              type="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              placeholder="Telefonnummer"
            />
            <br />
          </StyledLable>
        </StyledDiv>
        <StyledButtonLink to={"/ETC_lagom"}>Tillbaka</StyledButtonLink>
        <StyledButton type="submit" onClick={this.handleSubmit}>
          Beställ
        </StyledButton>
      </div>
    )
  }
}

const StyledInput = styled.input`
  margin: 0 23px 10px 22px;
  height: 42px;
  border: 2px solid #e4e4e4;
  border-radius: 6px;
  opacity: 1;
  font-size: 15px;
  padding-left: 8px;
  padding-right: 80px;
`
const StyledLable = styled.label`
  margin: 22px;
  font-size: 16px;
`
const StyledButtonLink = styled(ButtonLink)`
  color: #333333;
  border-color: #95989a;
  margin: 22px;
`
const StyledButton = styled(Button)``
const StyledDiv = styled.div`
  margin-top: 11px;
`
