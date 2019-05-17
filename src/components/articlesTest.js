import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./button"

const Articles = ({className}) => (
    <StaticQuery
    query={graphql`
     query{
         allDatoCmsArticle(sort: { fields: [meta___publishedAt], order: DESC}, limit: 3){
            edges{
                node{
                    articletitle
                    preamble
                    img{
                        fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto: "compress"}){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    content{
                        ...on DatoCmsImg{
                            img{fluid(maxWidth: 100, imgixParams: {fm: "jpg", auto: "compress"}){
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        }
                        ...on DatoCmsText{
                            body
                        }
                        ...on DatoCmsVideo{
                            video{
                                url
                            }
                        }
                    }
                }
            }
         }
     }
    `}
    render = {data =>{
        return(
            <div className={className}>
            <div>{data.allDatoCmsArticle.edges.map(({node})=>{
                return(
                    <div>
                    {node.articletitle  === "Det blir fler solceller, varje månad" ? 

                    <StyledArticle>

                       <StyledText>{node.articletitle ? <h3>{node.articletitle}</h3>:''}
                        {node.preamble ? <p dangerouslySetInnerHTML={{__html:node.preamble}}/>:''}
                        <StyledButton>Läs mer</StyledButton>
                        </StyledText>
                        {node.img ? <StyledImg fluid={node.img.fluid}/>:''}
                
                    </StyledArticle>
                    
                    :''}
                    </div>
                )
            })}
            </div>
            </div>
        )
    }}
    />
)

const StyledArticle = styled.div`
background-color: white;
display: flex;
max-width: 80%;
margin-top: -15%;
border: 1px solid #E9E9E9;
border-radius: 8px;
padding-left: 8px;
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
const StyledButton = styled(Button)`
margin-bottom: 8px;
`

const StyledArticles = styled(Articles)`
color: #333333;
background-color: #F3F3F3;
border: 1px solid #E9E9E9;
padding: 10% 10% 10% 10%;
`
export default StyledArticles