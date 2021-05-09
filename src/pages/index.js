import React from "react"
import { Router } from "@reach/router"

const Home = () => { };
const IndexPage = () => {
  return (
    <>
        <Router>
          <Home path="/blogs" />
        </Router>
    </>
  )
}

export default IndexPage
