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
                                {news.title ? <h3>{news.title}</h3> : ''}
                                {news.preamble ? <p dangerouslySetInnerHTML={{__html:news.preamble}}/>:''}
                                </div>
                            </div>
                        )
                    })}
                    <div style={{padding:"5px"}}><Form/></div>
                </div>
            )
        }}
    />
)
const StyledNews = styled(News)`
color: white;
background-color: #686868;
border: 1px solid #686868;
padding: 0px 50% 5% 10%;
`
export default StyledNews