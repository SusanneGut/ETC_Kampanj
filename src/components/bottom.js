import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bottom = () => (
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
                <div style={{backgroundColor:"#565656"}}>
                    {data.datoCmsPage.content.map((main)=>{
                        return(
                            <div>
                        <div>{main.contact ? <p dangerouslySetInnerHTML={{__html:main.contact}}/>:''}</div>
                        <div>{main.logo ? <div style={{marginBottom:"1.45rem", maxWidth:"50px"}}><Img fluid={main.logo.fluid}/></div>:''}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)
export default Bottom