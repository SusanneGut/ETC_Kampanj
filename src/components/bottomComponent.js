import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const BottomComponent = ({className, bottomItems}) => (
    <div className={className}>
    {bottomItems.map((item)=>{
        return(
            <div>
        <div>{item.logo ? <div style={{marginBottom:"1.45rem", maxWidth:"40px"}}><Img fluid={item.logo.fluid}/></div>:''}</div>
        <StyledText>{item.contact ? <p dangerouslySetInnerHTML={{__html:item.contact}}/>:''}</StyledText>
            </div>
        )
    })}
    <StyledHr/>
</div> 
)

const StyledHr = styled.hr`
margin-right: -100%;
`
const StyledBottomComponent = styled(BottomComponent)`
color: white;
background-color: #3E3E3E;
border: 1px solid #3E3E3E;
padding: 2% 50% 5% 10%;
`
const StyledText = styled.div`
p{
    font-size: 10px;
}
`

export default StyledBottomComponent