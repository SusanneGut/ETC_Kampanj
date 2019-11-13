import React from "react"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
import Button from "./button"
import styled from "styled-components"
import media from "styled-media-query"
import Link from "gatsby-link"

const TopComponent = ({ className, topItems }) => (
  <div className={className}>
    {topItems.map(top => {
      return (
        <div>
          {top.__typename === "DatoCmsTop" ? (
            <div style={{ position: "relative", color: top.textcolor.hex }}>
              {top.backgroundimage ? (
                <Backgroundimage
                  fluid={top.backgroundimage.fluid}
                  style={{ padding: "5px" }}
                >
                  {top.logo ? (
                    <div style={{ marginBottom: "1.45rem", maxWidth: "50px" }}>
                      <Img fluid={top.logo.fluid} />{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {top.title ? <StyledTitle>{top.title}</StyledTitle> : ""}
                  {top.preamble ? (
                    <StyledPreamble
                      dangerouslySetInnerHTML={{ __html: top.preamble }}
                    />
                  ) : (
                    ""
                  )}
                  {top.buttontext ? (
                    <Link to={top.buttonlink.slug}>
                      <StyledButton transparentYellow>
                        {top.buttontext}
                      </StyledButton>
                    </Link>
                  ) : (
                    ""
                  )}
                </Backgroundimage>
              ) : (
                <div>
                  {top.logo ? (
                    <div style={{ marginBottom: "1.45rem", maxWidth: "50px" }}>
                      <Img fluid={top.logo.fluid} />{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {top.title ? <StyledTitle>{top.title}</StyledTitle> : ""}
                  {top.preamble ? (
                    <StyledPreamble
                      dangerouslySetInnerHTML={{ __html: top.preamble }}
                    />
                  ) : (
                    ""
                  )}
                  {top.buttontext ? (
                    <Link to={top.buttonlink.slug}>
                      <StyledButton style={{ color: "#E3000B" }} transparentRed>
                        {top.buttontext}
                      </StyledButton>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
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

const StyledTitle = styled.h1`
  padding: 50px 15% 0% 10%;
  ${media.greaterThan("576px")`
 font-size: 60px;
 padding: 0px 50% 0% 10%;
`}
`
const StyledPreamble = styled.section`
  padding: 0px 15% 0% 10%;
  font-size: 14px;

  ${media.greaterThan("576px")`
 font-size: 20px;
 padding: 0px 50% 0% 10%;
`}
`
const StyledTopComponent = styled(TopComponent)`
  background-color: #f7f7f7;
  ${media.greaterThan("576px")`
`}
`
const StyledButton = styled(Button)`
  margin: 0% 0% 10% 10%;

  ${media.greaterThan("576px")`
margin: 0% 0% 8% 10%;
`}
`

export default StyledTopComponent
