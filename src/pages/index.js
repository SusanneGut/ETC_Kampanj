import React from "react"
import { graphql } from "gatsby";
import StyledBackgroundImage from "../components/styledBackgroundImage";
import Xnav from "../components/Xnav"
import Form from "../components/form"
import Footer from "../components/footer"

export default function Index ({data}){
  const {edges: article} = data.allDatoCmsArticle;
  return (
    <div>
      <StyledBackgroundImage/>
      <Xnav/>
    <div className = "articles">
    {article
    .map(({node: article}) =>{
      return (
        <div key={article.id}>
        <h4>{article.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: article.text }} />
        </div>
      );
      })}
    </div>
    <Form/>
    <Footer/>

    </div>
  )
}

export const query = graphql`
query ProjectQuery {
  allDatoCmsArticle{
    edges{
      node{
        title
        text
      }
    }
  }
}`
