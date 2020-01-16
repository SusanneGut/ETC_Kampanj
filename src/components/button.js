import styled from "styled-components"

const Button = styled.button`
  background: ${props =>
    props.transparentRed ||
    props.transparentWhite ||
    props.transparentGrey ||
    props.transparentYellow
      ? "transparent"
      : "#E3000B"};
  color: ${props => (props.transparentRed ? "#E3000B" : "white")};
  color: ${props => (props.transparentGrey ? "#686868" : "white")};
  color: ${props => (props.transparentYellow ? "#FFDD00" : "white")};

  font-size: ${props => (props.small ? "8px" : "15px")};
  padding: ${props => (props.small ? "0" : "11px 20px")};
  border-radius: 6px;
  min-width: ${props => (props.small ? "50px" : "130px")};

  border: ${props =>
    props.transparentGrey ? "2px solid #BDBDBD" : "2px solid #E3000B"};
  border: ${props =>
    props.transparentYellow ? "2px solid #FFDD00" : "2px solid #E3000B"};
  box-sizing: border-box;
`

export default Button
