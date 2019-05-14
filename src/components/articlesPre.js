import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const Articles = () => (
    <StaticQuery
    query={graphql`
     query{
         allDatoCmsArticle(sort: { fields: [meta___publishedAt], order: DESC}, limit: 3){
            edges{
                node{
                    articletitle
                    preamble
                    img{
                        fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    content{
                        ...on DatoCmsImg{
                            img{fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        }
                        ...on DatoCmsText{
                            body
                        }
                        ...on DatoCmsVideo{
                            video{
                                url
                            }
                        }
                    }
                }
            }
         }
     }
    `}
    render = {data =>{
        return(
            <div>{data.allDatoCmsArticle.edges.map(({node})=>{
                return(
                    <div style={{backgroundColor:"#F7F7F7"}}>
                       {node.articletitle ? <p>{node.articletitle}</p>:''}
                        {node.preamble ? <p dangerouslySetInnerHTML={{__html:node.preamble}}/>:''}
                        {node.img ? <div style={{marginBottom:"1.45rem", maxWidth:"100px"}}><Img fluid={node.img.fluid}/></div>:''}
                    </div>
                )
            })}
            </div>
        )
    }}
    />
)


export default Articles