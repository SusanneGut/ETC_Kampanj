import React from "react"
import {StaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Logo from "./logo"

const Background = ({className}) => (
    
    <StaticQuery
        query={graphql`
            query {
             datoCmsPage{
                 header
                 subhead
                 buttontext
                 backgroundimage{
                    fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
                      ...GatsbyDatoCmsFluid
                    }
                  }
                }
            }
        `}
      
        render = {data => {
            const imageData = data.datoCmsPage.backgroundimage.fluid;
            const title = data.datoCmsPage.header;
            const subTitle = data.datoCmsPage.subhead;
            const buttonText = data.datoCmsPage.buttontext;

         return (
            <BackgroundImage fluid={imageData} className={className}>
                    <h1>{title} </h1>
                    <p dangerouslySetInnerHTML={{__html:subTitle}}/>
                    <div style={{maxWidth: `100px`, marginBottom: `1.45rem`}}><Logo/></div>
                    <a href="#form-mobil"><button>{buttonText}</button></a>
            </BackgroundImage>
        )}}
    />
    
)

const styledBackgroundImage = styled(Background)`
width: 100%;
height: 100vh;
background-position: relative;
backgrond-size: cover;
`

export default styledBackgroundImage


