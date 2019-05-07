import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Body = () => (
    <StaticQuery
        query={graphql`
         query{
            allDatoCmsPage(filter:{pagetitle:{eq:"ETC Bygg"}}){
                edges{
                    node{
                        pagetitle
                        content{
                            ... on DatoCmsTitle{
                                 h4
                                 h2
                            }
                            ... on DatoCmsBody{
                                text
                            }
                            ... on DatoCmsImg{
                                photo{
                                    fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
                                        ...GatsbyDatoCmsFluid
                                    }
                                }
                            }
                            ... on DatoCmsArticlelink{
                                link{
                                    ... on DatoCmsPage{
                                        pagetitle
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
        const {edges: page} = data.allDatoCmsPage;
        return (
            <div>
                {page
             .map(({node: page}) =>{
                 return (
                        <div>
                         <pre>{JSON.stringify(page.content)}</pre>
                         <p>{page.pagetitle}</p>
                         {page.content.h4 ? <h4>{page.content.h4}</h4> : ''}
                         {page.content.h2 ? <h2>{page.content.h2}</h2> : ''}
                         {page.content.photo ? <Img fluid={page.content.photo.fluid}/> : ''}
                         {page.content.text ? <p dangerouslySetInnerHTML={{__html:page.content.text}}></p> : ''}
                         {page.content.link ? <p>{page.content.link.pagetitle}</p> : ''}

                        </div>
                    )
             })}
            </div>
        )
    }}
    />       
)
export default Body