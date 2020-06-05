import React from "react"

// styles
import {
  Wrapper,
  Text,
  Heading,
  Gradient,
  PageNavWrapper,
} from "./header.styles"

// components
import PageNav from "./pageNav"

const Header = ({ numPages, currentPage }) => {
  return (
    <Wrapper>
      <Text>
        <h2>Pen Mansfield</h2>
        <p>
          My views on modern technology and worldwide gastronomy in weekly posts
          written in the heart of Italy’s wine region, Lombardy.
        </p>
      </Text>
      <Heading>
        <Gradient></Gradient>
        <h1>Wine and Design</h1>
        <PageNavWrapper>
          {currentPage !== undefined && (
            <PageNav numPages={numPages} currentPage={currentPage} />
          )}
        </PageNavWrapper>
      </Heading>
    </Wrapper>
  )
}

export default Header
