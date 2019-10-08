import React from 'react'
import { graphql } from 'gatsby'

// import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import ImageParallax from '../components/ImageParallax'
import BackgroundVideo from '../components/BackgroundVideo'
import Image from '../components/Image'
// import { Link } from "gatsby"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// import ButtonScroll from '../components/ButtonScroll'

// import PostCard from '../components/PostCard'

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
  illustration1,
  illustration2,
  illustration3,
  illustration4,
  illustration5,
  illustration6,
  illustration7,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  body 
  }) => (

  
  
  <main id="top">

    {/* Temporaire pour Work In Progress */}
    {/* <div className="ImageGrid">
      <div className="ImageWorkInProgress">
      </div>
      <div className="ImageWorkInProgress">
        <Image src={'https://ucarecdn.com/7b68d4dd-5538-49c9-876a-76e2894552df/-/resize/1000x/'} lazy={false} alt={'Logo Odronata'} />
      </div>
      <div className="Work2">
        <a href="mailto:contact@odronata.com">contact@odronata.com</a>
      </div>
    </div> */}
    {/* Fin temporaire */}

    {/* Temporaire : A decommenter après Work In Progress */}
    
    <div className="parallax">

      <div id="group1" className="parallax__group">
        <div className="parallax__layer parallax__layer--base">
          <Nav />
          <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
            {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </div>
      </div>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax1} parallax_group={'parallax__group1'} title={title1}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} parallax_group={'parallax__group2'} image={'dark'} title={''} section={section1} illustration={illustration1}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax2} parallax_group={'parallax__group1'} title={title2}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'droite'} parallax_group={'parallax__group2'} image={'dark'} title={''} section={section2} illustration={illustration2}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax3} parallax_group={'parallax__group1'} title={title3}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} parallax_group={'parallax__group2'} image={'dark'} title={''} section={section3} illustration={illustration3}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax4} parallax_group={'parallax__group1'} title={title4}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'droite'} parallax_group={'parallax__group2'} image={'dark'} title={''} section={section4} illustration={illustration4}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax5} parallax_group={'parallax__group1'} title={title5}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} parallax_group={'parallax__group2'} image={'dark'} title={''} section={section5} illustration={illustration5}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax6} parallax_group={'parallax__group1'} title={title6}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'droite'} parallax_group={'parallax__group2'} image={'dark'} title={''} section={section6} illustration={illustration6}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax7} parallax_group={'parallax__group1'} title={title7}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} parallax_group={'parallax__group2'} image={'dark'} title={''} section={section7} illustration={illustration7}/>
     
     <Footer />

     <section id="section09" class="demo">
     <span></span><span></span><span></span>&nbsp;
    </section>
  
    </div>
    
    {/* Fin Temporaire : A decommenter après Work In Progress */}
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
        illustration1
        illustration2
        illustration3
        illustration4
        illustration5
        illustration6
        illustration7
      }
    }
  }
`
