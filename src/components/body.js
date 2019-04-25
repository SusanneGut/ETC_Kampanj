import React from "react"
import "./layout.css"
import {StaticQuery, graphql} from "gatsby"

const Body = () => (
  <StaticQuery
    query={graphql`
      query{
        datoCmsPage{
          content{
            ... on DatoCmsHead{
              text
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
                 <h4>{block.head}</h4>
                 <div>{block.text}</div>
                </div>
               ))
              }
          </div>
          
      ) }
    }    
  />
)

export default Body