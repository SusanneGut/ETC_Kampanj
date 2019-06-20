import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/button"
import Link from "gatsby-link"
import MobileSubscriptionFormContainer from "../containers/mobileSubscriptionFormContainer";
import MobilesubscriptionFormComponent1 from "../components/mobileSubscriptionFormComponent.1";

export default ({data, className}) => {
    const x = 159;
    const y = 50;
    const z = 70;

    const title = data.datoCmsMobilesubscription.title;
    const body = data.datoCmsMobilesubscription.body;
    const image = data.datoCmsMobilesubscription.img;
    const subtitle = data.datoCmsMobilesubscription.subtitle;
    const content = data.datoCmsMobilesubscription.content;
    const textline = data.datoCmsMobilesubscription.default;
    const numbers = [x, y, z];
    const add = (a, b) => a + b;

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
        {textline ? <a href="/404">{textline}</a>: ''}
        <br/>
        <MobileSubscriptionFormContainer/>
        <StyledDiv>
            <StyledSubHead>Sammanfattning</StyledSubHead>
            <StyledSection>
                    <StyledP1>Mobilabonnemang {title}</StyledP1><StyledP2>{x} kr/mån</StyledP2>
                    <br/>
                    <StyledHr style={{marginRight: "0%"}}/>
                    <StyledP1>Lorem Ipsum</StyledP1><StyledP2>{y} kr/mån</StyledP2>
                    <br/>
                    <StyledHr style={{marginRight: "0%"}}/>
                    <StyledP1>Lorem Ipsum</StyledP1><StyledP2>{z} kr/mån</StyledP2>
                    <br/>
                    <StyledHr style={{marginRight: "0%"}}/>
                    <br/>
                    <StyledTotal>
                    <StyledP1>Total:</StyledP1><StyledP2>{numbers.reduce(add)} kr/mån</StyledP2>
                    </StyledTotal> <br/>
                    <Link to='/ETC_lagom'><Button1 transparentGrey>Avbryt</Button1></Link>
                    <Link to=''><Button2>Gå vidare</Button2></Link>
                    </StyledSection>
            </StyledDiv>
            <br/>
            <MobilesubscriptionFormComponent1></MobilesubscriptionFormComponent1>
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
const StyledDiv = styled.div`
background-color: white;
width: 80%;
margin-top:3%;
border-color: #EAEAEA;
border-style: solid;
`
const StyledSubHead = styled.h4`
color: #686868;
margin: 0;
background-color: #F2F2F2;
padding: 3%;
`
const StyledSection = styled.section`
background-color: white;
padding: 3%;
margin-bottom: 3%;
`
const StyledP1 = styled.p`
float: left;
margin: 0;
`
const StyledP2 = styled.p`
float: right;
margin: 0;
`
const StyledTotal = styled.section`
margin-bottom: 3%;
p{
    font-size: 18px;
    font-weight: bold;
}
`
const Button1 = styled(Button)`
float: left;
`
const Button2 = styled(Button)`
float: right;
`



