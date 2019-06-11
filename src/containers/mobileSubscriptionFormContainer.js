import React from "react"
import MobileSubscriptionFormComponent from "../components/mobileSubscriptionFormComponent"
import {StaticQuery, graphql} from "gatsby"

const MobileSubscriptionFormContainer = () => (
    <StaticQuery
      query={graphql`
        query {
          allDatoCmsMobilesubscription {
            edges {
              node {
                price
              }
            }
          }
        }
      `}
      render={data => {
        const prices = data.allDatoCmsMobilesubscription.edges.map(
          ({ node }) => node.price
        );
  
        return (
          <div>
            <MobileSubscriptionFormComponent prices={prices} />
          </div>
        );
      }}
    />
  );
  export default MobileSubscriptionFormContainer;