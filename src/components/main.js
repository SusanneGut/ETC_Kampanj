import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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
                            <StyledBody>
                        <StyledText>{main.title ? <h2 style={{paddingTop:"10%"}}>{main.title}</h2>:''}
                        {main.preamble ? <p dangerouslySetInnerHTML={{__html:main.preamble}}/>:''}
                        {main.body ? <p dangerouslySetInnerHTML={{__html:main.body}}/>:''}</StyledText>
                        {main.img ? <StyledImg fluid={main.img.fluid}/>:''}
                            </StyledBody>
                        )
                    })}
                </div>
            )
        }}
    />
)


const StyledBody = styled.div`
display: flex;
margin: 0;
max-width: 100%;
max-height: 250px;
`
const StyledText = styled.div`
margin: 0;
flex: 0 1 2 3 ;
max-width: 40%;
padding: 0px 25px;
`
const StyledImg = styled(Img)`
flex: 4;
margin: 0;
padding: 0;
max-width: 60%
`
const StyledMain = styled(Main)`
color: #333333;
background-color: white;
border: 1px solid #E9E9E9;
`
export default StyledMain