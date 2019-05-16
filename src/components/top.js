import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
import Button from "../components/button"
import styled from "styled-components"

const Top = ({className}) => (
    <StaticQuery
        query={graphql`
        query{
            datoCmsPage{
                content{
                    ... on DatoCmsTop{
                        title
                        preamble
                        backgroundimage{
                            fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        logo{
                            fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        buttontext
                        buttonlink{
                            ... on DatoCmsArticle{
                                articletitle
                            }
                        }
                    }
                }
            }
        }
        `}
        render = {data => {
            return (
                <div className={className}>
                    {data.datoCmsPage.content.map((top) =>{
                     return (
                         <div>{top.backgroundimage ? 
                         <Backgroundimage fluid={top.backgroundimage.fluid} style={{padding:"5px"}}>
                            {top.logo ? <div style={{marginBottom:"1.45rem", maxWidth:"50px"}}><Img fluid={top.logo.fluid}/> </div> : ''}
                            {top.title ? <h2>{top.title}</h2> : ''}
                            {top.preamble ? <p dangerouslySetInnerHTML={{__html:top.preamble}}></p> : ''}
                            {top.buttontext ? <Button transRed>{top.buttontext}</Button> : ''}
                         </Backgroundimage> :   
                            <div>
                                {top.logo ? <div style={{marginBottom:"1.45rem", maxWidth:"50px"}}><Img fluid={top.logo.fluid}/> </div> : ''}
                                {top.title ? <h1>{top.title}</h1> : ''}
                                {top.preamble ? <p dangerouslySetInnerHTML={{__html:top.preamble}}></p> : ''}
                                {top.buttontext ? <Button transRed>{top.buttontext}</Button> : ''}
                            </div>
                        }
                            </div>
                        )
                 })}
                </div>
            )
        }}
    />
)

const StyledTop = styled(Top)`
color: #333333;
background-color: #F7F7F7;
border: 1px solid #E9E9E9;
padding: 0px 50% 5% 10%;
`
export default StyledTop