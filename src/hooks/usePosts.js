import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              author
              title
              slug
            }
            excerpt
          }
        }
      }
    }
  `)
  return data.allMdx.edges.map(x => {
    return {
      title: x.node.frontmatter.title,
      author: x.node.frontmatter.author,
      slug: x.node.frontmatter.slug,
      content: x.node.excerpt,
    }
  })
}

export default usePosts
