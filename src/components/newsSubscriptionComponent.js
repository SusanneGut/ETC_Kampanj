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
                {item.preamble ? <StyledP dangerouslySetInnerHTML={{__html:item.preamble}}/>:''}
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
padding: 5% 30%;
text-align: center;
${media.lessThan('1023px')`
padding: 5%;
`}
`
const StyledH2 = styled.h2`
${media.lessThan('1023px')`
font-size: 18px;
`}
`
const StyledP = styled.p`
${media.lessThan('415px')`
p {font-size: 12px;
     }
`}
`

export default StyledNewsSubscriptionComponent