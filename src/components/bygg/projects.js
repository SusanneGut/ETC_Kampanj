import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"
import {Link} from "gatsby"

const Projects = () => (
    <StaticQuery
    query={graphql`
      query{
        datoCmsArticle{
            title
            text
            articlelink{
                title
                text
                img{
                    fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
                        ...GatsbyDatoCmsFluid
                    }
               }
            }
        }
    }
    `}
    render = {data => {
        return (
        <div>
             <div>
             <div style={{marginBottom:"1.45rem", maxWidth:"400px"}}>
             <Link to={"torp"}><Image fluid={data.datoCmsArticle.articlelink.img.fluid}/></Link>
             <p>{JSON.stringify(data)}</p>
             </div>
             </div>

        </div>
        )}
      }    
  />
)

  export default Projects
  


    