import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
const Top = () => (
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
                <div style={{backgroundColor:"#F7F7F7"}}>
                    {data.datoCmsPage.content.map((top) =>{
                     return (
                         <div>{top.backgroundimage ? 
                         <Backgroundimage fluid={top.backgroundimage.fluid} style={{padding:"5px"}}>
                            {top.logo ? <div style={{marginBottom:"1.45rem", maxWidth:"50px"}}><Img fluid={top.logo.fluid}/> </div> : ''}
                            {top.title ? <p>{top.title}</p> : ''}
                            {top.preamble ? <p dangerouslySetInnerHTML={{__html:top.preamble}}></p> : ''}
                            {top.buttontext ? <button>{top.buttontext}</button> : ''}
                         </Backgroundimage> :   
                            <div>
                                {top.logo ? <div style={{marginBottom:"1.45rem", maxWidth:"50px"}}><Img fluid={top.logo.fluid}/> </div> : ''}
                                {top.title ? <p>{top.title}</p> : ''}
                                {top.preamble ? <p dangerouslySetInnerHTML={{__html:top.preamble}}></p> : ''}
                                {top.buttontext ? <button>{top.buttontext}</button> : ''}
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
export default Top