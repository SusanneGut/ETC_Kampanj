import React from "react"
import { graphql } from "gatsby";
import Form from "../components/form"
const Page = ({data}) => (
  <div>
  <h1>{data.datoCmsArticle.title}</h1>
  <p>{data.datoCmsArticle.text}</p>
  <Form></Form>

  </div>
  
);
export default Page;

export const query = graphql`
query ProjectQuery {
  datoCmsArticle{
    title
    text
  }
}`