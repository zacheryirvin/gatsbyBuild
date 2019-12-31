import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import usePosts from "../hooks/usePosts.js"
import PostPreview from "../components/postPreview.js"
import Hero from "../components/hero.js"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <>
      <Hero />
      <Layout>
        <h2>React Blog</h2>
        <ul>
          {posts.map(x => {
            return <PostPreview key={x.slug} post={x} />
          })}
        </ul>
      </Layout>
    </>
  )
}

export default IndexPage
