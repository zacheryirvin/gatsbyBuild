import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadLink from "./readLink.js"

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd
				margin-top: .75rem
				padding-bottom: 1rem

				:first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.content}</p>
      <ReadLink to={post.slug}>Read this Post</ReadLink>
    </article>
  )
}

export default PostPreview
