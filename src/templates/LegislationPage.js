import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// import SVGIcon from '../components/SVGIcon'

// Export Template for use in CMS preview
export const LegislationPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  title1,
  section1,
  illustration1,
  title2,
  section2,
  illustration2,
  title3,
  section3,
  illustration3,
  title4,
  section4,
  illustration4,
}) => (
  <main className="LegislationPage">
     {/* <Nav /> */}
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container legislationFlexi">
        <Content className="legislationTitle" source={title1} />
        <Content className='legislationPave1' source={section1} />
        <div className='legislationPave2'
        style={{
          backgroundImage: `url(${illustration1})`
        }}
        ></div>
      </div>
    </section>

    <section className="section">
      <div className="container legislationFlexi">
        <Content className="legislationTitle" source={title2} />
        <div className='legislationPave2'
        style={{
          backgroundImage: `url(${illustration2})`
        }}
        ></div>
        <Content className='legislationPave1' source={section2} />
      </div>
    </section>

    <section className="section">
      <div className="container legislationFlexi">
        <Content className="legislationTitle" source={title3} />
        <Content className='legislationPave1' source={section3} />
        <div className='legislationPave2'
        style={{
          backgroundImage: `url(${illustration3})`
        }}
        ></div>
      </div>
    </section>
    
    <section className="section">
      <div className="container legislationFlexi">
        <Content className="legislationTitle" source={title4} />
        <div className='legislationPave2'
        style={{
          backgroundImage: `url(${illustration4})`
        }}
        ></div>
        <Content className='legislationPave1' source={section4} />
      </div>
    </section>

    {/* <Footer /> */}
  </main>
)

const LegislationPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <Nav />
    <LegislationPageTemplate {...page.frontmatter} body={page.html} />
    <Footer />
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
        title1
        section1
        illustration1
        title2
        section2
        illustration2
        title3
        section3
        illustration3
        title4
        section4
        illustration4
      }
    }
  }
`
