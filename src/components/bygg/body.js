import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"
import {Link} from "gatsby"

const Body = () => (
    <StaticQuery
    query={graphql`
      query{
       allDatoCmsArticle(filter:{title:{eq:"ETC Bygg - att skapa klimatpositiva boenden"}}){
           edges{
               node{
                   title
                   text
                   img{
                    fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
                        ...GatsbyDatoCmsFluid
                      }
                   } 
                   articlelink{
                      title
                      img{
                          fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
                              ...GatsbyDatoCmsFluid
                            }
                        }
                    }
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
           <div>
               <Image fluid={article.img.fluid}/>
               <h4>{article.title}</h4>
               <p dangerouslySetInnerHTML={{ __html: article.text }} />
               <div style={{marginBottom:"1.45rem", maxWidth:"400px"}}>
               <Link to={"torp"}><Image fluid={article.articlelink.img.fluid}/></Link>
               </div>
           </div>
          );
          })}
        </div>
        )}
      }    
  />
)

  export default Body
  