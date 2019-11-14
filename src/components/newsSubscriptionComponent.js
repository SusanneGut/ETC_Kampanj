import React from "react"
import NewsletterFormComponent from "./newsletterFormComponent"
import styled from "styled-components"
import media from "styled-media-query"
import Backgroundimage from "gatsby-background-image"

const NewsSubscriptionComponent = ({ className, newsSubscriptionItems }) => (
  <div className={className}>
    {newsSubscriptionItems.map(item => {
      return (
        <div>
          {item.__typename === "DatoCmsNewsletter" ? (
            <div style={{ color: item.textcolor.hex }}>
              {item.bgimage ? (
                <StyledBackgroundImage fluid={item.bgimage.fluid}>
                  {item.title ? <StyledH2>{item.title}</StyledH2> : ""}
                  {item.preamble ? (
                    <p dangerouslySetInnerHTML={{ __html: item.preamble }} />
                  ) : (
                    ""
                  )}
                  <NewsletterFormComponent />
                </StyledBackgroundImage>
              ) : (
                <StyledDiv
                  style={{ backgroundColor: item.backgroundcolor.hex }}
                >
                  {item.title ? <StyledH2>{item.title}</StyledH2> : ""}
                  {item.preamble ? (
                    <p dangerouslySetInnerHTML={{ __html: item.preamble }} />
                  ) : (
                    ""
                  )}
                  <NewsletterFormComponent />
                </StyledDiv>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      )
    })}
  </div>
)
const StyledNewsSubscriptionComponent = styled(NewsSubscriptionComponent)`
  text-align: center;
  ${media.greaterThan("576px")`
`}
`
const StyledH2 = styled.h3`
  ${media.greaterThan("576px")`
font-size: 22px;
`}
`
const StyledDiv = styled.div`
  padding: 5%;
  ${media.greaterThan("576px")`
padding: 10%;
`}
`
const StyledBackgroundImage = styled(Backgroundimage)`
  padding: 5% 10%;
  ${media.greaterThan("576px")`
padding: 5% 20%;
`}
`
export default StyledNewsSubscriptionComponent
