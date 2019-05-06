import React from "react"
import Layout from "../components/layout"
import Nav from "../components/mobil/nav"
import Body from "../components/mobil/body"

export default function Index (){
  return (
    <Layout>
    <div>
    <Nav/>
    <div style={{marginLeft: "15%", marginRight:"15%"}}>
  <Body></Body>
  </div>
    </div>
    </Layout>

  )
}

