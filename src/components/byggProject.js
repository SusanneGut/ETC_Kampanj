import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const ByggProject = () => (
    <StaticQuery
        query={graphql`
         query{
            datoCmsPage(pagetitle:{eq:"ETC Bygg"}){
                content{
                  ... on DatoCmsArticlelink{
                       link{
                        ... on DatoCmsPage{
                            pagetitle
                            content{
                                ...on DatoCmsImg{
                                    photo{
                                        fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                                            ...GatsbyDatoCmsFluid
                                        }
                                    }
                                }
                            }
                        }
                       }
                   }         
                        
                }
            }
        }
       `}
       render = {data => {
        return (
            <div>
                {data.datoCmsPage.content.map((link) =>{
                 return (
                        <pre>
                         {link.pagetitle ? <h4>{link.pagetitle}</h4> : ''}
                         {link.photo ? <Img fluid={link.photo.fluid}/> : ''}
                        </pre>
                    )
             })}
            </div>
        )
    }}
    />       
)
export default ByggProject