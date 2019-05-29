import React from "react"
import {graphql } from "gatsby";
import Img from "gatsby-image"
import styled from "styled-components"
import Video from "../components/video"

export default ({data, className}) => {
    const title = data.datoCmsArticle.articletitle;
    const preamble = data.datoCmsArticle.preamble;
    const image = data.datoCmsArticle.img;
    const content = data.datoCmsArticle.content;
    return(
        <StyledArticle className={className}>
            <StyledText>{title ? <h3>{title}</h3>:''}
                {preamble ? <p dangerouslySetInnerHTML={{__html:preamble}}/>:''}
            </StyledText>
                {image ? <StyledImg fluid={image.fluid}/>:''}
            {content.map((article) =>{
               
                return(
                    <div>
                    {article.img ? <StyledImg fluid={article.img.fluid}/>:''}
                    {article.body ? <p dangerouslySetInnerHTML={{__html:article.body}}/>:''}
                    {article.video ? <Video videoTitle = {article.video.title} videoSrcURL = {"https://www.youtube.com/embed/" + article.video.providerUid}/>:''}
                    </div>
                )
            })}
           
            </StyledArticle>
    )
}

export const query = graphql`
query($slug: String!){
    datoCmsArticle(slug:{eq: $slug}){
        articletitle
        preamble
        img{
           fluid(maxWidth: 400, imgixParams: {fm: "jpg", auto: "compress"}){
               ...GatsbyDatoCmsFluid
           }
        }
        content{
            ... on DatoCmsImg{
                img{
                   fluid(maxWidth: 400, imgixParams: {fm: "jpg", auto: "compress"}){
                       ...GatsbyDatoCmsFluid
                       }
                   } 
               }
            ... on DatoCmsText{
                body
            }   
            ...on DatoCmsVideo{
                video{
                    url
                    title
                    providerUid
                }
            }
           }
       }
   }
`

const StyledText = styled.div`
color: #33333;
padding-left: 8px;
flex: 0 1 2 3;
margin: 0;
max-width: 70%;
`
const StyledImg = styled(Img)`
flex: 4;
margin: 0;
max-width: 30%;
max-height: 150px;
padding: 0;
`
const StyledArticle = styled.div`
color: #333333;
background-color: #F3F3F3;
border: 1px solid #E9E9E9;
padding: 10% 10% 10% 10%;
`
