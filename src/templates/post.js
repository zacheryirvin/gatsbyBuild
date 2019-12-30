import React from "react"
import { grapql } from "gatsby"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout.js"
import ReadLink from "../components/readLink.js"

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        {mdx.frontmatter.author}
      </p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <ReadLink to="/">Back to All Posts</ReadLink>
    </Layout>
  )
}

export default PostTemplate
