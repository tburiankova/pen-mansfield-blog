import React from "react"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import gsap from "gsap"

// styles
import { Wrapper, LinksList, LinksItem } from "./navigation.styles"

function Navigation() {
  function interestingExitAnimation(exit, node) {
    console.log(node)
    gsap.to(node, {
      opacity: 0,
      y: -30,
    })
  }
  function interestingEntryAnimation(exit, node) {
    console.log(node)
    gsap.from(node, {
      opacity: 0,
      y: 30,
    })
  }

  return (
    <Wrapper>
      <LinksList>
        <LinksItem>
          <TransitionLink
            exit={{
              trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
              length: 1,
            }}
            entry={{
              trigger: ({ entry, node }) =>
                interestingEntryAnimation(entry, node),
              delay: 0.6,
            }}
            activeStyle={{
              paddingRight: "3rem",
              borderBottom: "2px solid var(--darkPurple)",
            }}
            to="/"
          >
            Home
          </TransitionLink>
        </LinksItem>
        <LinksItem>
          <TransitionLink
            exit={{
              trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
              length: 1,
            }}
            entry={{
              trigger: ({ entry, node }) =>
                interestingEntryAnimation(entry, node),
              delay: 0.6,
            }}
            activeStyle={{
              paddingRight: "3rem",
              borderBottom: "2px solid var(--darkPurple)",
            }}
            to="/about"
          >
            About
          </TransitionLink>
        </LinksItem>
        <LinksItem>
          <TransitionLink
            exit={{
              trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
              length: 1,
            }}
            entry={{
              trigger: ({ entry, node }) =>
                interestingEntryAnimation(entry, node),
              delay: 0.6,
            }}
            activeStyle={{
              paddingRight: "3rem",
              borderBottom: "2px solid var(--darkPurple)",
            }}
            to="/contact"
          >
            Contact
          </TransitionLink>
        </LinksItem>
      </LinksList>
    </Wrapper>
  )
}

export default Navigation
