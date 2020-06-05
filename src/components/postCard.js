import React from "react"
import Img from "gatsby-image"
// import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import gsap from "gsap"

// styles
import { Card } from "./postCard.styles"

function PostCard({ title, image, date, excerpt, slug }) {
  function interestingExitAnimation(exit, node) {
    gsap.to(node, {
      opacity: 0,
      y: -60,
    })
  }

  return (
    <TransitionLink
      to={slug}
      exit={{
        trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
        length: 0.6,
      }}
      entry={{
        delay: 0.6,
      }}
    >
      <Card className="anim">
        <h3>{title}</h3>
        <span>{date}</span>
        <Img fluid={image}></Img>
        <p>{excerpt}</p>
      </Card>
    </TransitionLink>
  )
}

export default PostCard
