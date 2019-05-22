import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"

const Main = ({className}) => (
    <StaticQuery
        query={graphql`
        query{
            datoCmsPage{
                content{
                    ... on DatoCmsMain{
                        title
                        preamble
                        img{
                            fluid(maxWidth: 400, imgixParams: {fm: "jpg", auto: "compress"}){
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        body
                    }
                }
            }
        }
        `}
        render = {data => {
            return (
                <div className={className}>
                    {data.datoCmsPage.content.map((main)=>{
                        return(
                            <div>{main.__typename === "DatoCmsMain" ?
                        <StyledBody> 
                        <StyledText>{main.title ? <h2 style={{paddingTop:"10%"}}>{main.title}</h2>:''}
                        {main.preamble ? <p dangerouslySetInnerHTML={{__html:main.preamble}}/>:''}
                        {main.body ? <p dangerouslySetInnerHTML={{__html:main.body}}/>:''}</StyledText>
                        {main.img ? <StyledImg fluid={main.img.fluid}/>:''}
                        </StyledBody> :''}
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)


const StyledBody = styled.div`
${media.greaterThan('1023px')`
display: flex;
max-width: 100%;
max-height: 250px;
margin: 0;
`}
`
const StyledText = styled.div`
${media.greaterThan('1023px')`
margin: 0;
flex: 0 1 2 3 ;
max-width: 40%;
padding: 0px 25px;
`}
padding: 10px;
`
const StyledImg = styled(Img)`
${media.greaterThan('1023px')`
flex: 4;
margin: 0;
padding: 0;
max-width: 60%
`}
`
const StyledMain = styled(Main)`
${media.greaterThan('1023px')`

`}
color: #333333;
background-color: white;
border: 1px solid #E9E9E9;
`
export default StyledMain