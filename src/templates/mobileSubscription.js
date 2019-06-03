import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export default ({data, className}) => {
    const title = data.datoCmsMobilesubscription.title;
    const body = data.datoCmsMobilesubscription.body;
    const image = data.datoCmsMobilesubscription.img;
    const subtitle = data.datoCmsMobilesubscription.subtitle;
    const content = data.datoCmsMobilesubscription.content;
    const textline = data.datoCmsMobilesubscription.default;

    return(
        <StyledArticle className={className}>
        <StyledText>
        {title ? <h3>{title}</h3>:''}
        {body ? <p dangerouslySetInnerHTML={{__html:body}}></p>:''}</StyledText>
        {image ? <StyledImg fluid={image.fluid}/>:''}
        {subtitle ? <h4>{subtitle}</h4>:''}
        {content.map((item)=>{
            return(
                <p>{item.lineitem}
                <StyledHr/></p>
            )
        })}
        <br/>
        {textline ? <a href="/404">{textline}</a>: ''}
        </StyledArticle>
    )
}

export const query = graphql`
query($slug: String!){
    datoCmsMobilesubscription(slug:{eq: $slug}){
        title
        body
        img{
            fluid(maxWidth: 400, imgixParams: {fm: "jpg", auto: "compress"}){
                ...GatsbyDatoCmsFluid
            }
        }
        subtitle
        default
        content{
            ... on DatoCmsPricedetail{
                lineitem
            }
        }
    }
}
`
const StyledArticle = styled.div`
color: #333333;
background-color: #F3F3F3;
border: 1px solid #E9E9E9;
padding: 10% 10% 10% 10%;
`
const StyledText = styled.div`
color: #33333;
padding-left: 8px;
flex: 0 1;
margin: 0;
max-width: 70%;
`
const StyledImg = styled(Img)`
flex: 2 3;
margin: 0;
max-width: 20%;
max-height: 150px;
padding: 0;
`
const StyledHr = styled.hr`
margin-right: 50%;
color: #E3000B;
`
