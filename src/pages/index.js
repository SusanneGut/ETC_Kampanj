import React from "react"
import Layout from "../components/layout"
import StyledMain from "../components/main"
import StyledBottom from "../components/bottom"
import StyledNews from "../components/news"
import StyledPuffs from "../components/styledPuffs"
import StyledSubscrpt from "../components/subscrpt"
import TopContainer from "../containers/topContainer"

export default function Index (){
  return (
    <Layout>
      <div>
       <TopContainer/>
       <StyledPuffs/>
       <StyledMain/>
       <StyledSubscrpt/>
       <StyledNews/>
       <StyledBottom/>
      </div>
    </Layout>

  )
}

