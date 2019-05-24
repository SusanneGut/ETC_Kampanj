import React from "react"
import TopComponent from "../components/topComponent"
import { StaticQuery, graphql } from "gatsby"


const TopContainer = () => (

    <StaticQuery
    query={graphql`
    query{
        datoCmsPage{
            content{
                ... on DatoCmsTop{
                    title
                    preamble
                    backgroundimage{
                        fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    logo{
                        fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    buttontext
                    buttonlink{
                        ... on DatoCmsArticle{
                            articletitle
                        }
                    }
                }
            }
        }
    }
    `}
    render={data=>{
     return (
        <TopComponent topItems={data.datoCmsPage.content}/>
        )}}
    />
);
export default TopContainer