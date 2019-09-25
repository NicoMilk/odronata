import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const LegislationPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  section3,
  section4,
  body
}) => (
  <main className="LegislationPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section3} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section4} />
      </div>
    </section>

  </main>
)

const LegislationPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <LegislationPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default LegislationPage

export const pageQuery = graphql`
  query LegislationPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        section1
        section2
        section3
        section4
      }
    }
  }
`
