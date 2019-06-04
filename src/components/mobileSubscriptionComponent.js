import React from "react"
import Button from "./button"
import styled from "styled-components"
import PuffMobileSubscriptionContainer from "../containers/puffMobileSubscriptionContainer"
import media from "styled-media-query"

const MobileSubscriptionComponent = ({className, mobileSubscriptionItems}) => (
    <div className={className}>
    {mobileSubscriptionItems.map((item)=>{
        return(
            <div>
        <div>{item.title ? <StyledTitle>{item.title}</StyledTitle>:''}</div>
        <div>{item.preamble ? <StyledPreamble dangerouslySetInnerHTML={{__html:item.preamble}}/>:''}</div>
            </div>
        )
    })}
    <PuffMobileSubscriptionContainer/>

</div>    
)

const StyledTitle = styled.h2`
margin-bottom: 0;
`
const StyledPreamble = styled.h4`
margin-top: 0;
`
const StyledMobileSubscriptionComponent = styled(MobileSubscriptionComponent)`
color: #333333;
background-color: #BDBDBD;
padding: 3% 10%;
height: 500px;
`
export default StyledMobileSubscriptionComponent

