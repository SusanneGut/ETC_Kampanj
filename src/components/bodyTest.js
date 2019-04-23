import React from "react"
import "./layout.css"
import {StaticQuery, graphql} from "gatsby"


const BodyTest = () => (
    <StaticQuery
    query={graphql`
      query {
        datoCmsPage{
          bodyTest{
              ... on DatoCmsContent{
                  text
              }
            }
        }
      }
    `}
    render={data =>data.datoCmsPage.BodyTest
    }
  />
)

export default BodyTest

//To do, print to screen?