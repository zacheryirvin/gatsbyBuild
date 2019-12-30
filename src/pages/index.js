import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import usePosts from "../hooks/usePosts.js"
import PostPreview from "../components/postPreview.js"

const IndexPage = () => {
  const posts = usePosts()
  console.log(posts)
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Amarillo</p>

      <h2>React Blog</h2>
      <ul>
        {posts.map(x => {
          return <PostPreview key={x.slug} post={x} />
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
