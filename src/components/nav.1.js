import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Link} from 'gatsby'

const Nav1 = () => (
  <StaticQuery
  query={graphql`
    query{
      datoCmsPage{
        content{
          ... on DatoCmsHead{
            h4
            
          }
        }
      }
    }
  `}
  render = {data => {
    const linkId = data.datoCmsPage.content.h4
    return (
          <ul style={{listStyleType: "none"}}>
           {data.datoCmsPage.content.map((block) => (
             <div>
             {block.h4 ? <li style={{display: "inline", padding: "8px", fontSize:"12px"}}><Link to={"/page-2#" + block.h4}>{block.h4}</Link></li> : ''}
              </div>
             ))
            }
        </ul>
        
    ) }
  }    
/>
)
export default Nav1

