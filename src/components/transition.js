import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

// This variable will be responsible for our animation duration
const timeout = 500

// This object contains basic styles for animation
const getTransitionStyles = {
  entering: {
    position: "absolute",
    opacity: 0,
    transform: "translate(0, -60px)",
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
    transform: "translate(0, 0)",
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
    transform: "translate(0, -60px)",
  },
}

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{ enter: timeout, exit: timeout }}
      >
        {status => (
          <div
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition
