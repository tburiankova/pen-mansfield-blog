import styled from "styled-components"
import { breakpoints } from "../styles/GlobalStyles"

export const Wrapper = styled.div`
  padding: 8rem 0;
  @media only screen and (max-width: ${breakpoints.md2}) {
    padding: 4rem 0;
  }
  @media only screen and (max-width: ${breakpoints.sm}) {
    padding: 2rem 0;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: ${breakpoints.lg}) {
    justify-content: flex-start;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
`
export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
`
