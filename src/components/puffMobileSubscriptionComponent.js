import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/button"

const PuffMobileSubscriptionComponent = ({className, title, preamble, img, price})=>(
    
    <StyledPuff className={className}>
     <StyledDiv className="test">
        {img ? <Img fluid={img.fluid}/>:''}
        {title ? <p>{title}</p>:''}
        {preamble ? <p dangerouslySetInnerHTML={{__html:preamble}}/>:''}
        {price ? <p>{price}</p>:''}
        <Button>Välj</Button>
        </StyledDiv>
    </StyledPuff>
)

const StyledPuff = styled.div`
width: 100%;

`
const StyledDiv = styled.div`
width: 25%;
float:left;
padding-left: 5%;
`


export default PuffMobileSubscriptionComponent

//puffMobileSubscriptionComponent__StyledPuff-kdbkYc cqQtvI