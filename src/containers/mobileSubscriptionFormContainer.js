import React from "react"
import MobileSubscriptionFormComponent from "../components/mobileSubscriptionFormComponent"
import {StaticQuery, graphql} from "gatsby"

const MobileSubscriptionFormContainer = () => (
    <StaticQuery
    query={graphql`
    query{
        allDatoCmsMobilesubscription{
                edges{
                    node{
                        price
                    }
                }
            
        }
    }
    `}
    render={data=>{
        return(
            <div>
               {data.allDatoCmsMobilesubscription.edges.map(({node})=>{
                   
                   return(
                       <MobileSubscriptionFormComponent prices={node.price}/>
                   )
               })}
            </div>
        )
    }}
    />
)
export default MobileSubscriptionFormContainer