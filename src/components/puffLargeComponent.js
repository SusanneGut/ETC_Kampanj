import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"
import Link from "gatsby-link"
import BackgroundImage from "gatsby-background-image"


const PuffLargeComponent = ({className, img, articletitle, preamble, slug}) => (
    <div className={className}>
    <StyledArticle>
    {media.lessThan('415px') ? <StyledBackgroundImage fluid={img.fluid}>
    <StyledText>{articletitle ? <StyledH3>{articletitle}</StyledH3>:''}
        {preamble ? <p dangerouslySetInnerHTML={{__html:preamble}}/>:''}
        <Link to={slug}><StyledButton>Läs mer</StyledButton></Link>
        </StyledText>
        </StyledBackgroundImage>:''}
        {img ? <StyledImg fluid={img.fluid}/>:''}
        </StyledArticle>                
    </div>
    
)

const StyledArticle = styled.div`
display: flex;
border: 1px solid #E9E9E9;
border-radius: 8px;
background-color: white;
${media.greaterThan('1023px')`
max-height: 300px;
max-width: 900px;
backgound-color: green;
`}
${media.lessThan('415px')`
flex-direction: column;
height: 130px;
width: 130px;
`}   
`
const StyledText = styled.section`
flex: 0 1 2 3;
color: #33333;
padding: 1% 5% 0 5%;
p {font-size: 12px;
    color: "585858";
    padding-bottom: 0.1%; 
}
${media.lessThan('415px')`
p{
    display: none;
}
`}
${media.greaterThan('1023px')`
max-width: 50%;
`}
`
const StyledH3 = styled.h3`
${media.lessThan('415px')`
margin-bottom: 2%;
`}
`
const StyledImg = styled(Img)`
flex: 4;
margin: 0;
padding: 0;
border-radius: 0px 8px 8px 0px;
${media.greaterThan('1023px')`
max-width: 44%;
height: 300px;
`}
${media.lessThan('415px')`
    display:none;
`}
`
const StyledBackgroundImage = styled(BackgroundImage)`
margin: 0;
padding: 0;
border-radius: 8px;
height: 130px;
width: 130px;
`

const StyledButton = styled(Button)`
margin-bottom: 8px;
${media.lessThan("415px")`
padding: 0;
font-size: 10px;
margin: 0;
width: 50px;
`}
`
export default PuffLargeComponent