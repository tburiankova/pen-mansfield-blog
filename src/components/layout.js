import React from "react"

// styles
import { GlobalStyles } from "../styles/GlobalStyles"
import "../styles/fonts.css"

// components
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, location }) => {
  // console.log(location)
  return (
    <>
      <GlobalStyles />
      <div className="site-container">
        <Navigation />
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
