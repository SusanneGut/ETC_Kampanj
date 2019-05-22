import React from "react"
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"

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
${media.greaterThan('1023px')`
max-height: 320px;
max-width: 400px;
`}
border: 1px solid #E9E9E9;
border-radius: 8px;
`
const StyledText = styled.section`
${media.greaterThan('1023px')`
height: 300px;
`}
color: #33333;
padding: 15% 15% 0 5%;
margin: 0;
`
const StyledImg = styled(BackgroundImage)`
${media.greaterThan('1023px')`
max-width: 400px;
height: 320px;
`}
margin: 0;
padding: 0;
border-radius: 8px;
`
const StyledButton = styled(Button)`
${media.greaterThan('1023px')`
`}
margin-bottom: 8px;
`
export default PuffS