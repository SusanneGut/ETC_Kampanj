import React from "react"
import "./layout.css"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Body = () => (
  <StaticQuery
    query={graphql`
      query{
        datoCmsPage{
          content{
            ... on DatoCmsHead{
              h4
            }
            ... on DatoCmsBody{
                text
            }
            ... on DatoCmsImage{
                model {apiKey}
                img{
                    fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
                        ...GatsbyDatoCmsFluid
                    }
                    url
                    
                  }
              }
          }
        }
      }
    `}
    render = {data => {
      return (
            <div>
             {data.datoCmsPage.content.map((block) => (
               <div style={{border: "1px solid black"}}>
               {block.h4 ? <h4><a id={block.h4}/><div>{block.h4}</div></h4> : ''}
               {block.text ? <p dangerouslySetInnerHTML={{__html:block.text}}></p> : ''}
               {block.img ? <div style={{maxWidth: `200px`, marginBottom: `1.45rem`}}><Img fluid={block.img.fluid}/> </div>: ''}
                </div>
               ))
              }
          </div>
          
      ) }
    }    
  />
)

export default Body