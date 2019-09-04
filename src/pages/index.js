import React from "react"
import Layout from "../components/layout"
import MainContainer from "../containers/mainContainer"
import BottomContainer from "../containers/bottomContainer"
import TopContainer from "../containers/topContainer"
import MobileSubscriptionContainer from "../containers/mobileSubscriptionContainer"
import NewsSubscriptionContainer from "../containers/newsSubscriptionContainer"
import StyledPuffsComponent from "../components/styledPuffsComponent"

export default function Index() {
  return (
    <Layout>
      <div>
        <TopContainer />
        <StyledPuffsComponent />
        <MainContainer />
        <MobileSubscriptionContainer />
        <NewsSubscriptionContainer />
        <BottomContainer />
      </div>
    </Layout>
  )
}
