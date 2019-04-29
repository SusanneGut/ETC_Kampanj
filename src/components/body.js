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
                 <h4>{block.h4}</h4>
                <div>{block.text}</div>
                 <div style={{maxWidth: `100px`, marginBottom: `1.45rem`}}>
                 <GatsbyImage fluid={img.url}/>
                 </div>
                   
                </div>
               ))
              }
          </div>
          
      ) }
    }    
  />
)

export default Body