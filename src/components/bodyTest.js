import React from "react"
import "./layout.css"
import {StaticQuery, graphql} from "gatsby"

const BodyTest = () => (
  <StaticQuery
    query={graphql`
      query{
        datoCmsPage{
          bodyTest{
            ... on DatoCmsContent{
              model{apiKey}
              text
            }
          }
        }
      }
    `}
    render = {data => {
      return (
          <div>
             {data.datoCmsPage.bodyTest.map((block) => (
              <div key={block.id}>{
                 block.model.apiKey === 'text' &&
                 <div>{block.text}</div>
              }
           </div>
         ))
        }
      </div>
      )}
    }    
  />
)

export default BodyTest

//To do, print to screen?