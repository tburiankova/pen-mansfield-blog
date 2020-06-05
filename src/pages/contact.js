import React from "react"
import styled from "styled-components"

// components
import SEO from "../components/seo"

// styles
const Wrapper = styled.div`
  padding: 8rem 0;
`

function Contact() {
  return (
    <>
      <SEO title="Contact" />
      <Wrapper>
        <h2>Contact page</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
          sunt?
        </p>
      </Wrapper>
    </>
  )
}

export default Contact
