import React from "react"
import Body from "../components/mobil/body";
import StyledBackgroundImage from "../components/styledBackgroundImage";
import Nav from "../components/mobil/nav"
import Footer from "../components/mobil/footer";

const Page = () => (
  <div>
    <StyledBackgroundImage/>
    <Nav/>
    <div style={{marginLeft: "15%", marginRight:"15%"}}>
  <Body></Body>
  <Footer/>
  </div>
  </div>
)

export default Page
