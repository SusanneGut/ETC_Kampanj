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
                model{apiKey}
              h4
            }
            ... on DatoCmsBody{
                model{apiKey}
                text
            }
            ... on DatoCmsImage{
                model{apiKey}
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
               <div>
                   {
                       block.model.apiKey === 'h4' &&
                 <h4>{block.h4}</h4>
                   }
                   {
                       block.model.apiKey === 'text' &&
                       <div>{block.text}</div>
                   }
                   {
                       block.model.apiKey === 'img' &&
                 <div style={{maxWidth: `100px`, marginBottom: `1.45rem`}}>
                 <img src={block.img.url}/>
                 </div>
                   }
                </div>
               ))
              }
          </div>
          
      ) }
    }    
  />
)

export default Body