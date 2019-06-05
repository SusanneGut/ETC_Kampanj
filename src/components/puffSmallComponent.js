import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"
import Link from "gatsby-link"

const PuffSmallComponent = ({className, img, articletitle, preamble, slug}) => (
    <div className={className}>
        <StyledArticle>
            {img ? <StyledImg fluid={img.fluid}>
           <StyledText>{articletitle ? <h3>{articletitle}</h3>:''}
            {preamble ? <p dangerouslySetInnerHTML={{__html:preamble}}/>:''}
            <Link to={slug}><StyledButton>Läs mer</StyledButton></Link>
            </StyledText>
            </StyledImg>:''}
        </StyledArticle>     
       
    </div>
)

const StyledArticle = styled.div`
${media.greaterThan('1023px')`
max-height: 300px;
max-width: 400px;
`}
border: 1px solid #E9E9E9;
border-radius: 8px;
`
const StyledText = styled.section`
${media.greaterThan('1023px')`
height: 250px;
`}
color: #33333;
padding: 25% 15% 0 7%;
margin: 0;
p {font-size: 12px;
    color: "585858";
    padding-bottom: 5%; 
     }
`
const StyledImg = styled(BackgroundImage)`
${media.greaterThan('1023px')`
max-width: 400px;
height: 300px;
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