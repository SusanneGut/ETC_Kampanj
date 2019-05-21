import React from "react"
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Button from "./button"

const PuffS = ({className}) => (
    <StaticQuery
    query={graphql`
     query{
         allDatoCmsArticle(sort: { fields: [meta___publishedAt], order: DESC}, limit: 2, skip: 1){
            edges{
                node{
                    articletitle
                    preamble
                    img{
                        fluid(maxWidth: 100, imgixParams: {fm: "jpg", auto: "compress"}){
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
                    {node.img ? <StyledImg fluid={node.img.fluid}>
                   <StyledText>{node.articletitle ? <h3>{node.articletitle}</h3>:''}
                    {node.preamble ? <p dangerouslySetInnerHTML={{__html:node.preamble}}/>:''}
                    <StyledButton>Läs mer</StyledButton>
                    </StyledText>
                    </StyledImg>:''}
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
max-width: 300px;
border-radius: 8px;
`
const StyledText = styled.section`
color: #33333;
padding: 15% 15% 0 5%;
margin: 0;
`
const StyledImg = styled(BackgroundImage)`
margin: 0;
max-width: 400px;
height: 300px;
padding: 0;
border-radius: 8px;
`
const StyledButton = styled(Button)`
margin-bottom: 8px;
margin-top: 35%;
`
export default PuffS