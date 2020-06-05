import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"
import gsap from "gsap"

// components
import SEO from "../components/seo"

// styles
import { Wrapper, ImgWrapper } from "./Post.styles"

// animations
import { fadeInUp } from "../animations/animations"

// destructure our data from the page query
const Post = ({ data }) => {
  const post = data.markdownRemark

  useEffect(() => {
    gsap.from(".anim", {
      duration: 0.8,
      y: 80,
      opacity: 0,
    })
  }, [])

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Wrapper className="anim">
        <h2>{post.frontmatter.title}</h2>
        <ImgWrapper>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        </ImgWrapper>
        <main>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </main>
        <DiscussionEmbed
          shortname="penmansfield"
          config={{
            identifier: post.frontmatter.title,
            title: post.frontmatter.title,
          }}
        />
      </Wrapper>
    </>
  )
}

export default Post
// create page query, String! (meaning it can't be null)
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
