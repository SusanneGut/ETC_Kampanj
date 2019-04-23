import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/nav";
import Form from "../components/form";
import Footer from "../components/footer";
import StyledBackgroundImage from "../components/styledBackgroundImage"

const Page = ({data}) => (
  <div>
    <StyledBackgroundImage></StyledBackgroundImage>
  <Nav/>
    <p>{data.datoCmsPage.body}</p>
    <Form></Form>
    <Footer></Footer>
    </div>
);
export default Page;

export const query = graphql`
query PageQuery {
  datoCmsPage{
    header
    body
    footer
    
  }
}
`

