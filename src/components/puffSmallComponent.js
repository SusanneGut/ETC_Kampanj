import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"
import Link from "gatsby-link"

const PuffSmallComponent = ({className, img, articletitle, preamble}) => (
    <div className={className}>
        <StyledArticle>
            {img ? <StyledImg fluid={img.fluid}>
           <StyledText>{articletitle ? <h3>{articletitle}</h3>:''}
            {preamble ? <p dangerouslySetInnerHTML={{__html:preamble}}/>:''}
            <Link to="/test"><StyledButton>Läs mer</StyledButton></Link>
            </StyledText>
            </StyledImg>:''}
        </StyledArticle>     
       
    </div>
)

PuffSmallComponent.propTypes = {
    
}

const StyledArticle = styled.div`
${media.greaterThan('1023px')`
max-height: 320px;
max-width: 400px;
`}
border: 1px solid #E9E9E9;
border-radius: 8px;
`
const StyledText = styled.section`
${media.greaterThan('1023px')`
height: 300px;
`}
color: #33333;
padding: 15% 15% 0 5%;
margin: 0;
`
const StyledImg = styled(BackgroundImage)`
${media.greaterThan('1023px')`
max-width: 400px;
height: 320px;
`}
margin: 0;
padding: 0;
border-radius: 8px;
`
const StyledButton = styled(Button)`
${media.greaterThan('1023px')`

`}
margin-bottom: 8px;
`
export default PuffSmallComponent