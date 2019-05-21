import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./button"

const PuffL = ({className}) => (
    <StaticQuery
    query={graphql`
     query{
         allDatoCmsArticle(sort: { fields: [meta___publishedAt], order: DESC}, limit: 1){
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
                    <StyledArticle>
                       <StyledText>{node.articletitle ? <h3>{node.articletitle}</h3>:''}
                        {node.preamble ? <p dangerouslySetInnerHTML={{__html:node.preamble}}/>:''}
                        <StyledButton>Läs mer</StyledButton>
                        </StyledText>
                        {node.img ? <StyledImg fluid={node.img.fluid}/>:''}
                    </StyledArticle>
                )
            })}
            </div>
            </div>
        )
    }}
    />
)

const StyledArticle = styled.div`
border: 1px solid #E9E9E9;
max-height: 300px;
max-width: 600px;
border-radius: 8px;
background-color: white;
display: flex;
`
const StyledText = styled.section`
flex: 0 1 2 3;
color: #33333;
padding: 1% 5% 0 5%;
margin: 0 0 10px 0;
max-width: 60%;
`
const StyledImg = styled(Img)`
flex: 4;
margin: 0;
max-width: 34%;
height: 300px;
padding: 0;
border-radius: 0px 8px 8px 0px;
`
const StyledButton = styled(Button)`
margin-bottom: 8px;
margin-top: 20%;
`
export default PuffL