import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Form from "./form"
import styled from "styled-components"

const News = ({className}) => (
    <StaticQuery
        query={graphql`
        query{
            datoCmsPage{
                content{
                    ... on DatoCmsNewsletter{
                        title
                        preamble
                    }
                }
            }
        }
        `}
        render = {data => {
            return (
                <div className={className}>
                    {data.datoCmsPage.content.map((news)=>{
                        return(
                            <div>
                                <div>
                                {news.title ? <h2>{news.title}</h2> : ''}
                                {news.preamble ? <p dangerouslySetInnerHTML={{__html:news.preamble}}/>:''}
                                </div>
                            </div>
                        )
                    })}
                    <div><Form/></div>
                </div>
            )
        }}
    />
)
const StyledNews = styled(News)`
color: white;
background-color: #686868;
border: 1px solid #686868;
padding: 5% 30%;
text-align: center;
`
export default StyledNews