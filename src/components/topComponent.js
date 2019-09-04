import React from "react"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
import Button from "./button"
import styled from "styled-components"
import media from "styled-media-query"
import Link from "gatsby-link"

const TopComponent = ({ className, topItems }) => (
  <div className={className}>
    {topItems.map(top => (
      <div>
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
              <Link to="/test">
                <Button transparentRed>{top.buttontext}</Button>
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
              <Link to="/Varfor_startade_vi_etc_mobil">
                <Button style={{ color: "#E3000B" }} transparentRed>
                  {top.buttontext}
                </Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    ))}
  </div>
)

const StyledTitle = styled.h1`
  ${media.greaterThan("576px")`
 font-size: 60px;
 width: 130%;
`}
  padding-top: 20%;
`
const StyledPreamble = styled.section`
  ${media.greaterThan("576px")`
 font-size: 20px;

`}
  font-size: 14px;
`
const StyledTopComponent = styled(TopComponent)`
  color: #333333;
  background-color: #f7f7f7;
  border: 1px solid #e9e9e9;
  padding: 0px 20% 10% 10%;
  ${media.greaterThan("576px")`
padding: 0px 50% 5% 10%;
`}
`

export default StyledTopComponent
