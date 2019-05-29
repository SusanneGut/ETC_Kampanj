import React from "react"
import PuffLargeComponent from "../components/puffLargeComponent"
import {StaticQuery, graphql} from "gatsby"

const PuffLargeContainer = ({className}) => (

    <StaticQuery 
    query={graphql`
    query{
        allDatoCmsArticle(sort: { fields: [meta___publishedAt], order: DESC}, limit: 1){
           edges{
               node{
                   slug
                   articletitle
                   preamble
                   img{
                       fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                           ...GatsbyDatoCmsFluid
                       }
                   }
                   content{
                       ...on DatoCmsImg{
                           img{fluid(maxWidth: 100, imgixParams: {fm: "jpg", auto: "compress"}){
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
            <div className={className}>
            {data.allDatoCmsArticle.edges.map(({node})=>{
                return(
                    <PuffLargeComponent img={node.img} articletitle={node.articletitle} preamble={node.preamble} slug={node.slug}/>
                )
            })}
            </div>
        )
    }}
/>
)
export default PuffLargeContainer