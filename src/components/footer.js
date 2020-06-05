import React from "react"
import styled from "styled-components"

// styles
const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 3rem;
  text-align: center;
  background: linear-gradient(
      180deg,
      rgba(155, 199, 200, 0.272) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(
      215.01deg,
      rgba(204, 205, 237, 0.316) 18.12%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(254, 211, 237, 0.28);

  p {
    font-size: 1.2rem;
    color: var(--lightGrey);
  }
`

function Footer() {
  return (
    <Wrapper>
      <p>Copyright © 2020 Pen Mansfield</p>
    </Wrapper>
  )
}

export default Footer
