import React from "react"
import Body from "../components/body";
import StyledBackgroundImage from "../components/styledBackgroundImage";
import Nav from "../components/nav"
import Footer from "../components/footer";

const Page = () => (
  <div>
    <StyledBackgroundImage/>
    <Nav/>
  <Body></Body>
  <Footer/>
  </div>
)

export default Page
