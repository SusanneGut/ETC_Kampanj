import styled from "styled-components"

const Button = styled.button`
  background: ${props =>
    props.transparentRed ||
    props.transparentWhite ||
    props.transparentGrey ||
    props.transparentYellow
      ? "transparent"
      : "#48AF5D"};
  color: ${props => (props.transparentRed ? "#E3000B" : "white")};
  color: ${props => (props.transparentGrey ? "#686868" : "white")};
  color: ${props => (props.transparentYellow ? "#FFDD00" : "white")};

  font-size: ${props => (props.small ? "8px" : "20px")};
  padding: ${props => (props.small ? "0" : "21px 30px")};
  border-radius: 8px;
  min-width: ${props => (props.small ? "50px" : "130px")};

  border: ${props =>
    props.transparentGrey ? "2px solid #BDBDBD" : "2px solid #48AF5D"};
  border: ${props =>
    props.transparentYellow ? "2px solid #FFDD00" : "2px solid #48AF5D"};
  box-sizing: border-box;
  font-family: "StagSans-medium";
`

export default Button
