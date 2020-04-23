import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Img from "gatsby-image"
import media from "styled-media-query"

const Footer = ({
  className,
  backgroundcolor,
  hrcolor,
  textcolor,
  link,
  policylink,
  logo,
}) => (
  <StyledFooter
    className={className}
    style={{ backgroundColor: backgroundcolor.hex, color: textcolor.hex }}
  >
    <StyledList>
      {link.map(item => (
        <StyledLinks>
          <StyledLink to={"/" + item.slug}>{item.articletitle}</StyledLink>
        </StyledLinks>
      ))}
    </StyledList>
    <StyledHr style={{ color: hrcolor.hex }} />{" "}
    <StyledSection>
      <StyledPolicyList>
        {policylink.map(item => (
          <StyledPolicyLinks>
            <StyledPolicyLink to={"/" + item.slug}>
              {item.articletitle}
            </StyledPolicyLink>
          </StyledPolicyLinks>
        ))}
      </StyledPolicyList>
      <StyledCopy>
        {" "}
        Copyright © {new Date().getFullYear()} ETC Utveckling AB
      </StyledCopy>
    </StyledSection>
    {logo && <StyledLogo fluid={logo.fluid} />}
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.div`
  padding: 30px;
  ${media.greaterThan("790px")`
  padding: 60px;

`}
`

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;
`
const StyledLinks = styled.li`
  padding-right: 30px;
  float: left;
`
const StyledLink = styled(Link)`
  font-family: "StagSans-medium";
  font-size: 16px;
  text-decoration: none;
  :link {
    color: #ffffff;
  }
  :visited {
    color: #ffffff;
  }
`
const StyledHr = styled.hr`
  height: 1px solid;
`
const StyledPolicyList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 15%;
  display: inline-block;
`
const StyledPolicyLinks = styled.li`
  margin-right: 10px;
  display: inline-block;
`
const StyledSection = styled.section`
  font-family: "StagSans-book";
  font-size: 16px;
  color: #dfe4ea;
  text-align: center;
  padding-top: 30px;
`

const StyledPolicyLink = styled(Link)`
  text-decoration: none;
  :link {
    color: #dfe4ea;
  }
  :visited {
    color: #dfe4ea;
  }
`
const StyledCopy = styled.p`
  margin-top: 10px;
`

const StyledLogo = styled(Img)`
  height: 74px;
  width: 74px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`
