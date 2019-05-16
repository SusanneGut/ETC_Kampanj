import React from "react"
import Layout from "../components/layout"
import StyledTop from "../components/top"
import StyledMain from "../components/main"
import StyledBottom from "../components/bottom"
import StyledNews from "../components/news"
import StyledArticles from "../components/articlesPre"
import StyledSubscrpt from "../components/subscrpt"

export default function Index (){
  return (
    <Layout>
      <div>
       <StyledTop/>
       <StyledArticles/>
       <StyledMain/>
       <StyledSubscrpt/>
       <StyledNews/>
       <StyledBottom/>
      </div>
    </Layout>

  )
}

