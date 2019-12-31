import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 30vh;
`

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 88%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

	h1 {
		text-shadow: 1px 1px 3px #eeddff66;
		font-size: 2.25rem;
	}

	p,
	a {
		color: #222
		margin-top: 0;

	}
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "indianpolis.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn>
      <TextBox>
        <h1>Frontend Masters + Gatsby</h1>
        <p>
          Hello Indianapolis <Link to="/about">Learn about me</Link>
        </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
