import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"

const MainComponent = ({className, mainItems}) => (
    <div className={className}>
    {mainItems.map((main)=>{
        return(
            <div>{main.__typename === "DatoCmsMain" ?
        <StyledBody> 
        {main.img ? <StyledImg fluid={main.img.fluid}/>:''}
        <StyledText>{main.title ? <StyledH2>{main.title}</StyledH2>:''}
        {main.preamble ? <p dangerouslySetInnerHTML={{__html:main.preamble}}/>:''}
        {main.body ? <p dangerouslySetInnerHTML={{__html:main.body}}/>:''}</StyledText>
        </StyledBody> :''}
            </div>
        )
    })}
</div> 
)

const StyledBody = styled.div`
display:flex;
flex-direction: column;
${media.greaterThan('576px')`
flex-direction: row;
max-width: 100%;
max-height: 250px;
margin: 0;
`}
`
const StyledH2 = styled.h2`
${media.greaterThan('576px')`
padding-top: 10%;
`}
`
const StyledText = styled.div`
padding: 10px;
font-size: 12px;
margin: 2%;
${media.greaterThan('576px')`
margin: 0;
flex: 0 1 2 3 ;
max-width: 40%;
padding: 0px 25px;
font-size: 14px;
`}

`
const StyledImg = styled(Img)`
margin: 0;
height: 200px;
${media.greaterThan('576px')`
flex: 4;
margin: 0;
padding: 0;
max-width: 60%;
height: 300px;
`}

`
const StyledMainComponent = styled(MainComponent)`
color: #333333;
background-color: white;
border: 1px solid #E9E9E9;
${media.greaterThan('576px')`
height: 300px;
`}
`
export default StyledMainComponent