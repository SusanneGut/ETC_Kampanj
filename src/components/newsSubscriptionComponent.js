import React from "react"
import NewsletterFormComponent from "./newsletterFormComponent"
import styled from "styled-components"
import media from "styled-media-query"

const NewsSubscriptionComponent = ({className, newsSubscriptionItems}) => (
    <div className={className}>
    {newsSubscriptionItems.map((item)=>{
        return(
                <div>
                {item.title ? <StyledH2>{item.title}</StyledH2> : ''}
                {item.preamble ? <p dangerouslySetInnerHTML={{__html:item.preamble}}/>:''}
                </div>
        )
    })}
    <div><NewsletterFormComponent/></div>
</div>   
)
const StyledNewsSubscriptionComponent = styled(NewsSubscriptionComponent)`
color: white;
background-color: #686868;
border: 1px solid #686868;
padding: 5%;
text-align: center;
${media.greaterThan('576px')`
padding: 5% 30%;
`}
`
const StyledH2 = styled.h3`
${media.greaterThan('576px')`
font-size: 22px;
`}
`

export default StyledNewsSubscriptionComponent