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
           <StyledText>{articletitle ? <StyledH3>{articletitle}</StyledH3>:''}
            {preamble ? <p dangerouslySetInnerHTML={{__html:preamble}}/>:''}
            <Link to={slug}><StyledButton>Läs mer</StyledButton></Link>
            </StyledText>
            </StyledImg>:''}
        </StyledArticle>     
       
    </div>
)

const StyledArticle = styled.div`
border: 1px solid #E9E9E9;
border-radius: 8px;
${media.greaterThan('1023px')`
max-height: 300px;
max-width: 400px;
`}
${media.lessThan('415px')`
max-height: 130px;
max-width: 130px;
`}
`
const StyledText = styled.section`
color: #33333;
padding: 25% 15% 0 7%;
margin: 0;
p {font-size: 12px;
    color: "585858";
    padding-bottom: 5%; 
     }
${media.greaterThan('1023px')`
height: 250px;
`}
${media.lessThan('415px')`
padding: 1% 5% 0 5%;
p{
    display: none;
}
`}
`
const StyledH3 = styled.h3`
${media.lessThan('415px')`
margin-bottom: 2%;
`}
`
const StyledImg = styled(BackgroundImage)`
margin: 0;
padding: 0;
border-radius: 8px;
${media.greaterThan('1023px')`
max-width: 400px;
height: 300px;
`}
${media.lessThan('415px')`
height: 130px;
width: 130px;
`}
`
const StyledButton = styled(Button)`
margin-bottom: 8px;
${media.lessThan("415px")`
padding: 0;
font-size: 10px;
margin: 0%;
width: 50px;
`}
`
export default PuffSmallComponent