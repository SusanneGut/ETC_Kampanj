import React from "react"
import MainComponent from  "../components/mainComponent"
import {StaticQuery, graphql} from "gatsby"

const MainContainer = () => (

    <StaticQuery
    query={graphql`
    query{
        datoCmsPage{
            content{
                ... on DatoCmsMain{
                    title
                    preamble
                    img{
                        fluid(maxWidth: 400, imgixParams: {fm: "jpg", auto: "compress"}){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    body
                }
            }
        }
    }
    `}
    render={data=>{
        return(
            <MainComponent mainItems={data.datoCmsPage.content}/>
        )
    }}
    />

)
export default MainContainer