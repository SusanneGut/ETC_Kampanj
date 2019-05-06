import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"

const Body = () => (
    <StaticQuery
    query={graphql`
      query{
       allDatoCmsArticle(filter:{title:{eq:"ETC Torp"}}){
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
                    ...on DatoCmsArticle{
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
           </div>
          );
          })}
        </div>
        )}
      }    
  />
)
  export default Body
  