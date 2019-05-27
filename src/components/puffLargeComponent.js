import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"
import PropTypes from "prop-types"

const PuffLargeComponent = ({className, img, articletitle, preamble}) => (
    <div className={className}>
    <StyledArticle>
    <StyledText>{articletitle ? <h3>{articletitle}</h3>:''}
        {preamble ? <p dangerouslySetInnerHTML={{__html:preamble}}/>:''}
        <StyledButton>Läs mer</StyledButton>
        </StyledText>
        {img ? <StyledImg fluid={img.fluid}/>:''}
        </StyledArticle>                
    </div>
    
)

PuffLargeComponent.propTypes = {
    
}

const StyledArticle = styled.div`
    ${media.greaterThan('1023px')`
    max-height: 350px;
    max-width: 900px;
    backgound-color: green;
    `}
    display: flex;
    border: 1px solid #E9E9E9;
    border-radius: 8px;
    background-color: white;
`
const StyledText = styled.section`
${media.greaterThan('1023px')`
max-width: 60%;
`}
flex: 0 1 2 3;
color: #33333;
padding: 1% 5% 0 5%;
`
const StyledImg = styled(Img)`
${media.greaterThan('1023px')`
max-width: 34%;
height: 320px;
`}
flex: 4;
margin: 0;
padding: 0;
border-radius: 0px 8px 8px 0px;
`
const StyledButton = styled(Button)`
${media.greaterThan('1023px')`

`}
margin-bottom: 8px;
`
export default PuffLargeComponent