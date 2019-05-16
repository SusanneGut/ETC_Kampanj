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
                            fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
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
                            <div>
                        <StyledText>{main.title ? <h3>{main.title}</h3>:''}
                        {main.preamble ? <p dangerouslySetInnerHTML={{__html:main.preamble}}/>:''}
                        {main.body ? <p dangerouslySetInnerHTML={{__html:main.body}}/>:''}</StyledText>
                        {main.img ? <div style={{marginBottom:"1.45rem", maxWidth:"200px"}}><StyledImg fluid={main.img.fluid}/></div>:''}
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)



const StyledText = styled.div`
padding-left: 8px;
margin: 0;
flex: 0 1 2 3;
`
const StyledImg = styled(Img)`
flex: 4;
margin: 0;
padding: 0;
`
const StyledMain = styled(Main)`
color: #333333;
background-color: white;
border: 1px solid #E9E9E9;
padding: 0px 50% 5% 10%;
display: flex;
`
export default StyledMain