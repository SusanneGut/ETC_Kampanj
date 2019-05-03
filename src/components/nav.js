import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Link} from 'gatsby'
import {FaFacebookSquare} from "react-icons/fa"
import {IoIosMail} from "react-icons/io"
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
    
    return (
      <div>
          <ul style={{listStyleType: "none"}}>
           {data.datoCmsPage.content.map((block) => (
             <div>
             {block.h4 ? <li style={{display: 'inline', fontSize:"12px"}}><Link to={"/page-2#" + block.h4}>{block.h4}</Link></li> : ''}
              </div>
             ))
            }
        </ul>
        <div style={{fontSize:"30px"}}>
        <a href="https://www.facebook.com/ETCMobil"><FaFacebookSquare/>
        </a>
        <a href="mailto:etcmobil@etc.se"><IoIosMail/></a>
        </div>
        </div>
    ) }
  }    
/>
)
export default Nav1

