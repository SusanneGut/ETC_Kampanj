import React from "react"
import Form from "./form"
import styled from "styled-components"

const NewsSubscriptionComponent = ({className, newsSubscriptionItems}) => (
    <div className={className}>
    {newsSubscriptionItems.map((item)=>{
        return(
                <div>
                {item.title ? <h2>{item.title}</h2> : ''}
                {item.preamble ? <p dangerouslySetInnerHTML={{__html:item.preamble}}/>:''}
                </div>
        )
    })}
    <div><Form/></div>
</div>   
)
const StyledNewsSubscriptionComponent = styled(NewsSubscriptionComponent)`
color: white;
background-color: #686868;
border: 1px solid #686868;
padding: 5% 30%;
text-align: center;
`
export default StyledNewsSubscriptionComponent