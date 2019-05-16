import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Bottom = ({className}) => (
    <StaticQuery
        query={graphql`
        query{
            datoCmsPage{
                content{
                    ... on DatoCmsBottom{
                        logo{
                            fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        contact
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
                        <div>{main.logo ? <div style={{marginBottom:"1.45rem", maxWidth:"50px"}}><Img fluid={main.logo.fluid}/></div>:''}</div>
                        <div>{main.contact ? <p dangerouslySetInnerHTML={{__html:main.contact}}/>:''}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)
const StyledBottom = styled(Bottom)`
color: white;
background-color: #3E3E3E;
border: 1px solid #3E3E3E;
padding: 0px 50% 5% 10%;
`
export default StyledBottom