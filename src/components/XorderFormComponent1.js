import React from "react"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"

export default class OrderFormComponent1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemPrice: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    alert(JSON.stringify(this.state))
  }
  render() {
    return (
      <div className={this.props.className}>
        <StyledChoice>
          {this.props.content.map((item, i) => {
            if (item.price) {
              const price = item.price
              const numbers = [parseInt(price)]
              const add = (a, b) => a + b
              console.log(numbers.reduce(add))
            }
            return (
              <StyledSelection key={`orderform-component_${i}`}>
                {" "}
                {item.title && <StyledH3>{item.title}</StyledH3>}
                {item.text && (
                  <StyledCheckboxSection>
                    <StyledLable style={{ color: item.textcolor.hex }}>
                      {item.checkbox && (
                        <input
                          type="checkbox"
                          name={`orderitem_${item.text}`}
                          onChange={this.handleChange}
                          value={item.text}
                        />
                      )}{" "}
                      {item.text}
                    </StyledLable>{" "}
                  </StyledCheckboxSection>
                )}
              </StyledSelection>
            )
          })}
          <StyledHr />
          <StyledSection>
            <StyledPrice>x kr i månaden</StyledPrice>
            <StyledButton
              to={"/"}
              backgroundcolor={this.props.button.buttonbgcolor.hex}
              textcolor={this.props.button.buttontextcolor.hex}
              bordercolor={this.props.button.buttonbordercolor.hex}
              onClick={this.handleSubmit}
            >
              {this.props.buttontext}
            </StyledButton>
          </StyledSection>
        </StyledChoice>
      </div>
    )
  }
}
const StyledChoice = styled.section``

const StyledSelection = styled.section`
  padding-left: 22px;
`
const StyledH3 = styled.h3`
  margin: 0;
  padding: 22px 0 11px 0;
`
const StyledLable = styled.label`
  font-size: 16px;
`
const StyledCheckboxSection = styled.section`
  padding: 0 0 11px 0;
`
const StyledHr = styled.hr`
  margin: 9px 22px;
  color: #85a475;
`
const StyledPrice = styled.h3`
  font-size: 28px;
  padding: 0 0 22px 22px;
  margin: 0;
  ${media.greaterThan("950px")`
  flex: 4;
`}
`
const StyledButton = styled(Button)`
  margin: 0 0 22px 18px;
  ${media.greaterThan("950px")`
  flex: 1 2 3;
  margin-right: 22px;
`}
`
const StyledSection = styled.section`
  ${media.greaterThan("950px")`
display: flex;
  flex-direction: row;
`}
`
