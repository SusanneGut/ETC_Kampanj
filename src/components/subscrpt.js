import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Subscrpt = () => (
    <StaticQuery
        query={graphql`
        query{
            datoCmsPage{
                content{
                    ... on DatoCmsSubscription{
                        title
                        preamble
                        buttontext
                    }
                }
            }
        }
        `}
        render = {data => {
            return (
                <div style={{backgroundColor:"#C4C4C4"}}>
                    {data.datoCmsPage.content.map((subscrpt)=>{
                        return(
                            <div>
                        <div>{subscrpt.title ? <p>{subscrpt.title}</p>:''}</div>
                        <div>{subscrpt.preamble ? <p dangerouslySetInnerHTML={{__html:subscrpt.preamble}}/>:''}</div>
                        <div>{subscrpt.buttontext ? <button>{subscrpt.buttontext}</button>:''}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)
export default Subscrpt