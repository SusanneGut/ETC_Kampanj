import React from "react"
import "./layout.css"
import {StaticQuery, graphql} from "gatsby"
import GatsbyImage from "gatsby-image"

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
                img{
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
               <div>
                   <h4>{block.h4}</h4>
                   <div>{block.text}</div>
                    <img src={block.url}/>
                </div>
               ))
              }
          </div>
          
      ) }
    }    
  />
)

export default Body