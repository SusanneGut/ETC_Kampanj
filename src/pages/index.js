import React from "react"
import Layout from "../components/layout"
import Top from "../components/top"
import Main from "../components/main"
import Bottom from "../components/bottom"
import News from "../components/news"
import ArticlesPre from "../components/articlesPre"
import Subscrpt from "../components/subscrpt"

export default function Index (){
  return (
    <Layout>
      <div>
       <Top></Top>
       <ArticlesPre/>
       <Main></Main>
       <Subscrpt></Subscrpt>
       <News></News>
       <Bottom></Bottom>
      </div>
    </Layout>

  )
}

