import { useStaticQuery, graphql } from "gatsby"

export const usePostInfo = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              date
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 200, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        nodes {
          excerpt
        }
      }
    }
  `)
  return data.allMarkdownRemark
}
