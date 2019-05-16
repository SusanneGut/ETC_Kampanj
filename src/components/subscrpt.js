import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Button from "../components/button"
import styled from "styled-components"

const Subscrpt = ({className}) => (
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
                <div className={className}>
                    {data.datoCmsPage.content.map((subscrpt)=>{
                        return(
                            <div>
                        <div>{subscrpt.title ? <h3>{subscrpt.title}</h3>:''}</div>
                        <div>{subscrpt.preamble ? <p dangerouslySetInnerHTML={{__html:subscrpt.preamble}}/>:''}</div>
                        <div>{subscrpt.buttontext ? <Button>{subscrpt.buttontext}</Button>:''}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)
const StyledSubscrpt = styled(Subscrpt)`
color: #333333;
background-color: #BDBDBD;
border: 1px solid #E9E9E9;
padding: 0px 50% 5% 10%;
`
export default StyledSubscrpt

