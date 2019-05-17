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
                        <div>{subscrpt.title ? <StyledTitle>{subscrpt.title}</StyledTitle>:''}</div>
                        <div>{subscrpt.preamble ? <StyledPreamble dangerouslySetInnerHTML={{__html:subscrpt.preamble}}/>:''}</div>
                        <div>{subscrpt.buttontext ? <Button>{subscrpt.buttontext}</Button>:''}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)

const StyledTitle = styled.h2`
margin-bottom: 0;
`
const StyledPreamble = styled.h4`
margin-top: 0;
`
const StyledSubscrpt = styled(Subscrpt)`
color: #333333;
background-color: #BDBDBD;
padding: 3% 10%;
`
export default StyledSubscrpt

