import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// arrows
import RightArrow from "../images/RightArrow.svg"
import RightArrowDis from "../images/RightArrowDis.svg"
import LeftArrow from "../images/LeftArrow.svg"
import LeftArrowDis from "../images/LeftArrowDis.svg"

// styles
import { breakpoints } from "../styles/GlobalStyles"

const Wrapper = styled.div`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  @media only screen and (max-width: ${breakpoints.md}) {
    width: 30rem;
  }

  p {
    color: var(--darkGrey);
  }
`

function PageNav({ numPages, currentPage }) {
  return (
    <Wrapper>
      <Link
        style={{ pointerEvents: currentPage === 1 ? "none" : "all" }}
        to={
          currentPage === 1 || currentPage === 2 ? "/" : `/${currentPage - 1}`
        }
      >
        <img
          src={currentPage === 1 ? LeftArrowDis : LeftArrow}
          alt="Left Arrow"
        />
      </Link>

      <p>
        {currentPage} | {numPages}
      </p>

      <Link
        style={{ pointerEvents: currentPage === numPages ? "none" : "all" }}
        to={
          currentPage === numPages ? `/${currentPage}` : `/${currentPage + 1}`
        }
      >
        <img
          src={currentPage === numPages ? RightArrowDis : RightArrow}
          alt="Right Arrow"
        />
      </Link>
    </Wrapper>
  )
}

export default PageNav
