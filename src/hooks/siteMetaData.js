import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            author
            title
            description
          }
        }
      }
    }
  `)

  return data.allSite.nodes[0].siteMetadata
}
