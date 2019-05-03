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
          <ul style={{listStyle: "none"}}>
          <li style={{display: "inline", padding: "8px", fontSize: "12px"}}>
          <a href="#" style={{textDecoration: "none"}}>{article.title}</a>
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
