import React from "react"
import styled from "styled-components"

// components
import SEO from "../components/seo"

// styles
const Wrapper = styled.div`
  padding: 8rem 0;
`

function About() {
  return (
    <>
      <SEO title="About" />
      <Wrapper>
        <h2 className=".anim">About page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi
          aut asperiores eos repellat! Mollitia odit doloremque doloribus
          molestias alias blanditiis debitis culpa? Distinctio, iure adipisci a
          explicabo perferendis aliquid corrupti voluptatibus rerum maiores
          molestiae ut, sed perspiciatis. Doloribus, deleniti.
        </p>
      </Wrapper>
    </>
  )
}

export default About
