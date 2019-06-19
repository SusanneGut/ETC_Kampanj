import React from "react"
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

const StyledTitle = styled.h3`
margin-bottom: 0;
margin-left: 2%;
${media.greaterThan('1023px')`
font-size: 22px;
`}
`
const StyledPreamble = styled.h5`
margin-top: 0;
margin-left: 2%;
${media.greaterThan('1023px')`
font-size: 16px;
`}
`
const StyledMobileSubscriptionComponent = styled(MobileSubscriptionComponent)`
color: #333333;
background-color: #BDBDBD;
padding: 3% 5%;
height: 550px;
`
export default StyledMobileSubscriptionComponent

