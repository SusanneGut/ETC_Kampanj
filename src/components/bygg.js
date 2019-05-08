import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Body = () => (
    <StaticQuery
        query={graphql`
         query{
            datoCmsPage(pagetitle:{eq: "ETC Bygg"}){
                content{
                    ... on DatoCmsTitle{
                        h4
                        h2
                   }
                   ... on DatoCmsBody{
                       text
                   }
                   ... on DatoCmsImg{
                       photo{
                           fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
                               ...GatsbyDatoCmsFluid
                           }
                       }
                   }
                }          
            }
        }
       `}
       render = {data => {
        return (
            <div>
                {data.datoCmsPage.content.map((page) =>{
                 return (
                        <div>
                         {page.h4 ? <h4>{page.h4}</h4> : ''}
                         {page.h2 ? <h2>{page.h2}</h2> : ''}
                         {page.photo ? <Img fluid={page.photo.fluid}/> : ''}
                         {page.text ? <p dangerouslySetInnerHTML={{__html:page.text}}></p> : ''}
                        </div>
                    )
             })}
            </div>
        )
    }}
    />       
)
export default Body