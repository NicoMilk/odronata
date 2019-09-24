import React from 'react'
import { graphql } from 'gatsby'

// import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import ImageParallax from '../components/ImageParallax'
import BackgroundVideo from '../components/BackgroundVideo'
// import PostCard from '../components/PostCard'
import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ 
  title, 
  subtitle, 
  featuredImage, 
  video, 
  videoPoster, 
  videoTitle,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  parallax1,
  parallax2,
  parallax3,
  parallax4,
  parallax5,
  parallax6,
  parallax7,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  body 
  }) => (
  <main className="Home">

    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
{/* 
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    /> */}

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

    <ImageParallax image={parallax1} title={title1}/>

    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <ImageParallax image={parallax2} title={title2}/>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <ImageParallax image={parallax3} title={title3}/>

    <section className="section">
      <div className="container">
        <Content source={section3} />
      </div>
    </section>

    <ImageParallax image={parallax4} title={title4}/>

    <section className="section">
      <div className="container">
        <Content source={section4} />
      </div>
    </section>

    <ImageParallax image={parallax5} title={title5}/>

    <section className="section">
      <div className="container">
        <Content source={section5} />
      </div>
    </section>

    <ImageParallax image={parallax6} title={title6}/>

    <section className="section">
      <div className="container">
        <Content source={section6} />
      </div>
    </section>

    <ImageParallax image={parallax7} title={title7}/>

    <section className="section">
      <div className="container">
        <Content source={section7} />
      </div>
    </section>

  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        video
        videoPoster
        videoTitle
        section1
        section2
        section3
        section4
        section5
        section6
        section7
        parallax1
        title1
        parallax2
        title2
        parallax3
        title3
        parallax4
        title4
        parallax5
        title5
        parallax6
        title6
        parallax7
        title7
      }
    }
  }
`
