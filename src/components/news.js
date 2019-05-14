import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Form from "./form"

const News = () => (
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
                <div style={{backgroundColor:"#727272"}}>
                    {data.datoCmsPage.content.map((news)=>{
                        return(
                            <div>
                                <div>
                                {news.title ? <p>{news.title}</p> : ''}
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
export default News