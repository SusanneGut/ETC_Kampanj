import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Body = () => (
    <StaticQuery
        query={graphql`
         query{
            datoCmsPage(pagetitle:{eq: "ETC Hyreshus"}){
                pagetitle
                content{
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
                         {page.photo ? <Img fluid={page.photo.fluid}/> : ''}
                        </div>
                    )
             })}
            </div>
        )
    }}
    />       
)
export default Body