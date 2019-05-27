import React from "react"
import Button from "./button"
import styled from "styled-components"

const MobileSubscriptionComponent = ({className, mobileSubscriptionItems}) => (
    <div className={className}>
    {mobileSubscriptionItems.map((item)=>{
        return(
            <div>
        <div>{item.title ? <StyledTitle>{item.title}</StyledTitle>:''}</div>
        <div>{item.preamble ? <StyledPreamble dangerouslySetInnerHTML={{__html:item.preamble}}/>:''}</div>
        <div>{item.buttontext ? <Button>{item.buttontext}</Button>:''}</div>
            </div>
        )
    })}
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
`
export default StyledMobileSubscriptionComponent

