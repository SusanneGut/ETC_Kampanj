import React from "react"
import {StaticQuery, graphql} from "gatsby"


const Nav = () => (
  <StaticQuery
    query={graphql`
      query{
        allDatoCmsArticle{
          edges{
            node{
              title
            }
          }
        }
      }
    `}
    render = {data => {
      const {edges: article} = data.allDatoCmsArticle;
      return (
      <div>
      {article
      .map(({node: article}) =>{
        return (
          <ul style={{listStyleType: "none"}}>
          <li style={{display: "inline", padding: "8px", textDecoration: "none", fontSize: "12px"}}>
          <a href="#">{article.title}</a>
          </li>
          </ul>
        );
        })}
      </div>
      )}
    }    
  />
)

export default Nav
