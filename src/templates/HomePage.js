import React from 'react'
import { graphql } from 'gatsby'

// import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import ImageParallax from '../components/ImageParallax'
import BackgroundVideo from '../components/BackgroundVideo'
import Image from '../components/Image'
import { Link } from "gatsby"

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

    {/* Temporaire pour Work In Progress */}
    <div className="ImageGrid">
      <div className="ImageWorkInProgress">
      </div>
      <div className="ImageWorkInProgress">
        <Image src={'https://ucarecdn.com/7b68d4dd-5538-49c9-876a-76e2894552df/-/resize/1000x/'} lazy={false} alt={'Logo Odronata'} />
      </div>
      <div className="Work2">
        <a href="mailto:contact@odronata.com">contact@odronata.com</a>
      </div>
    </div>
    {/* Fin temporaire */}

    {/* Temporaire : A decommenter après Work In Progress */}
    
    {/* <div id="top" className="parallax">
 
      <div id="group1" className="parallax__group">
        <div className="parallax__layer parallax__layer--base">
          <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
            {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </div>
      </div>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax1} title={title1}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} image={'dark'} title={''} section={section1}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax2} title={title2}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'droite'} image={'dark'} title={''} section={section2}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax3} title={title3}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} image={'dark'} title={''} section={section3}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax4} title={title4}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'droite'} image={'dark'} title={''} section={section4}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax5} title={title5}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} image={'dark'} title={''} section={section5}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax6} title={title6}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'droite'} image={'dark'} title={''} section={section6}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--back'} group={'group3'} image={parallax7} title={title7}/>

      <ImageParallax parallax={'parallax__layer parallax__layer--base'} group={'group2'} pave={'gauche'} image={'dark'} title={''} section={section7}/>

    </div> */}

    {/* <div className="ScrollLink">
      <Link to="/#top">Scroll To My Cool Header</Link>
    </div> */}
   
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
      }
    }
  }
`
