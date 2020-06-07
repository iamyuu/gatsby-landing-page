import { graphql } from "gatsby"

export { default } from "./index"

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allCeilsYaml {
      totalCount
      edges {
        node {
          id
          title
          image {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
    allCoursesYaml {
      totalCount
      edges {
        node {
          id
          title
          sectionCount
          backgroudImage {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`
