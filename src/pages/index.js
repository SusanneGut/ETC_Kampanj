import React from "react"
import Layout from "../components/layout"
import MainContainer from "../containers/mainContainer"
import BottomContainer from "../containers/bottomContainer"
import StyledPuffs from "../components/styledPuffs"
import TopContainer from "../containers/topContainer"
import MobileSubscriptionContainer from "../containers/mobileSubscriptionContainer";
import NewsSubscriptionContainer from "../containers/newsSubscriptionContainer";
import NavComponent from "../components/navComponent";

export default function Index (){
  return (
    <Layout>
      <div>
      <NavComponent/>
       <TopContainer/>
       <StyledPuffs/>
       <MainContainer/>
       <MobileSubscriptionContainer/>
       <NewsSubscriptionContainer/>
       <BottomContainer/>
      </div>
    </Layout>

  )
}

