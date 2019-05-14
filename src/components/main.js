import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Main = () => (
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
                <div style={{backgroundColor:"#EFEFEF"}}>
                    {data.datoCmsPage.content.map((main)=>{
                        return(
                            <div>
                        <div>{main.title ? <p>{main.title}</p>:''}</div>
                        <div>{main.preamble ? <p dangerouslySetInnerHTML={{__html:main.preamble}}/>:''}</div>
                        <div>{main.body ? <p dangerouslySetInnerHTML={{__html:main.body}}/>:''}</div>
                        <div>{main.img ? <div style={{marginBottom:"1.45rem", maxWidth:"200px"}}><Img fluid={main.img.fluid}/></div>:''}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)
export default Main