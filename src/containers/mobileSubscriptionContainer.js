import React from "react"
import MobileSubscriptionComponent from "../components/mobileSubscriptionComponent"
import { StaticQuery, graphql } from "gatsby"

const MobileSubscriptionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsPage {
          content {
            ... on DatoCmsSubscription {
              title
              preamble
              buttontext
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <MobileSubscriptionComponent
          mobileSubscriptionItems={data.datoCmsPage.content}
        />
      )
    }}
  />
)
export default MobileSubscriptionContainer
