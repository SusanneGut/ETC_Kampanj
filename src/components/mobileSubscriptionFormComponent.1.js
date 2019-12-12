import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

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
    alert(
      `${this.state.firstName}, tack för din beställning av ${this.props.title}!`
    )
    console.log("vill behålla sitt nummer:" + this.state.sameNumber)
  }

  render() {
    return (
      <StyledForm className={this.props.className}>
        <StyledHead>Kundinformation</StyledHead>
        <label style={{ fontSize: "11px" }}>
          {" "}
          Behåll nuvarande nummer
          <input
            type="checkbox"
            name="sameNumber"
            checked={this.state.sameNumber}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <StyledInputLong
          type="email"
          name="mail"
          value={this.state.mail}
          onChange={this.handleInputChange}
          placeholder="mejl"
        />
        <br />
        <StyledInputShort
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleInputChange}
          placeholder="förnamn"
        />
        <StyledInputShort
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleInputChange}
          placeholder="efternamn"
        />
        <br />
        <label style={{ fontSize: "11px" }}>
          {" "}
          Privatperson
          <input
            type="checkbox"
            name="privatperson"
            checked={this.state.privatperson}
            onChange={this.handleInputChange}
          />
        </label>
        <label style={{ fontSize: "11px" }}>
          {" "}
          Företag
          <input
            type="checkbox"
            name="foretag"
            checked={this.state.foretag}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label>
          Leveransadress
          <br />
          <StyledInputLong
            type="address"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
            placeholder="gatuadress"
          />
          <br />
          <StyledInputLong
            type="city"
            name="city"
            value={this.state.city}
            onChange={this.handleInputChange}
            placeholder="postort"
          />
          <br />
          <StyledInputShort
            type="postalnum"
            name="postalnum"
            value={this.state.postalnum}
            onChange={this.handleInputChange}
            placeholder="postnummer"
          />
          <StyledInputShort
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
            placeholder="telefonnummer"
          />
          <br />
        </label>
        <Link to="/ETC_lagom">
          <button transparentGrey>Tillbaka</button>
        </Link>
        <button type="submit" onClick={this.handleSubmit}>
          Beställ
        </button>
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  width: 100%;
`
const StyledHead = styled.h3`
background-color: #739562;
color: white;
padding 1%;
`
const StyledInputLong = styled.input`
  width: 99%;
`
const StyledInputShort = styled.input`
  width: 49%;
`
