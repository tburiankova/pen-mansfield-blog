import styled from "styled-components"
import { breakpoints } from "../styles/GlobalStyles"

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 8rem 0;
  @media only screen and (max-width: ${breakpoints.sm}) {
    padding: 3rem 0;
  }

  ol,
  ul {
    margin-left: 3rem;
  }

  ul {
    list-style: none;
  }

  p,
  li {
    line-height: 1.7;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 3rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  ol,
  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--green);
  }
`

export const ImgWrapper = styled.div`
  margin: 0 auto;
  height: 30rem;
  overflow: hidden;
  object-fit: cover;
`
