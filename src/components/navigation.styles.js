import styled from "styled-components"
import { breakpoints } from "../styles/GlobalStyles"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.div)`
  width: 100%;
  padding: 8rem 0;
  @media only screen and (max-width: ${breakpoints.sm}) {
    padding-top: 6rem;
  }
`

export const LinksList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const LinksItem = styled.li`
  margin-right: 5rem;
  padding-bottom: 0.5rem;
  padding-right: 3rem;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateX(-5px);
  }

  a {
    font-weight: 600;
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: var(--darkPurple);
  }
`
