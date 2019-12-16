import React from "react"
import styled from "styled-components"
import ButtonLink from "./buttonLink"
import Button from "../components/button"
import Checkbox from "../components/checkbox"

export default class MobilesubscriptionFormComponent1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sameNumber: true,
      mail: "",
      firstName: "",
      lastName: "",
      privatperson: true,
      foretag: false,
      address: "",
      city: "",
      postalnum: "",
      phone: "",
      personnummer: "",
      startdatum: "",
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
      <StyledForm className={this.props.className}>
        <StyledHead>Kundinformation</StyledHead>
        <StyledSection>
          <StyledLable>
            <Checkbox
              name="sameNumber"
              checked={this.state.sameNumber}
              onChange={this.handleInputChange}
            />{" "}
            Behåll nuvarande nummer
          </StyledLable>
          <br />
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
          </StyledLable>
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
          <StyledLable>
            Leveransadress
            <br />
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
          <br />
          <StyledButtonLink to={"/ETC_lagom"}>Tillbaka</StyledButtonLink>
          <StyledButton type="submit" onClick={this.handleSubmit}>
            Beställ
          </StyledButton>
        </StyledSection>
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  background-color: white;
  width: 100%;
  border-color: #eaeaea;
  border-style: solid;
  border-radius: 5px;
`
const StyledHead = styled.h3`
  background-color: #739562;
  margin: 0;
  padding: 3%;
  color: white;
`
const StyledInput = styled.input`
  width: 90%;
  margin: 2%;
  height: 42px;
  widht: 284px;
  border: 2px solid #e4e4e4;
  border-radius: 6px;
  opacity: 1;
  font-size: 15px;
  padding-left: 8px;
`
const StyledLable = styled.label`
  margin: 2%;
  font-size: 16px;
`
const StyledButtonLink = styled(ButtonLink)`
  color: #e3000b;
  border-color:color: #e3000b;
  float: left;
  margin-left: 2%;
`
const StyledButton = styled(Button)`
  float: right;
  margin-right: 7%;
`
const StyledSection = styled.section`
  background-color: white;
  padding: 3%;
  margin-bottom: 10%;
`
