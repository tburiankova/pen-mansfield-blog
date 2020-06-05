import React from "react"
import { graphql } from "gatsby"

// components
import PostCard from "../components/postCard"
import PageNav from "../components/pageNav"
import SEO from "../components/seo"

// styles
import { Wrapper, CardsWrapper, NavWrapper } from "./Home.styles"

function IndexPage({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="Home" />
      <Wrapper>
        <CardsWrapper>
          {posts.map(({ node }) => (
            <PostCard
              key={node.frontmatter.slug}
              title={node.frontmatter.title}
              image={node.frontmatter.image.childImageSharp.fluid}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              slug={node.fields.slug}
            />
          ))}
        </CardsWrapper>
      </Wrapper>
      <NavWrapper>
        <PageNav
          numPages={pageContext.numPages}
          currentPage={pageContext.currentPage}
        />
      </NavWrapper>
    </>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
