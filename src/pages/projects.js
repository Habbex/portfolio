import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMePage = () => (
  <Layout>
    <SEO title="Project" />
    <h1>Hi from the Project</h1>
    <p>Welcome to Project</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMePage
