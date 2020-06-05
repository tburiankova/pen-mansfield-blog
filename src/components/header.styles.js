import styled from "styled-components"
import { breakpoints } from "../styles/GlobalStyles"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  position: relative;

  @media only screen and (max-width: ${breakpoints.md2}) {
    flex-direction: column-reverse;
  }
`
export const Text = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.md2}) {
    width: 100%;
    margin-top: 8rem;
  }

  h2 {
    width: 30rem;
    position: relative;
    display: inline-block;
  }

  h2:after {
    content: "BLOG BY";
    font-size: 5.8rem;
    position: absolute;
    top: -3rem;
    left: -2rem;
    z-index: -1;
    opacity: 0.7;

    background: -webkit-linear-gradient(var(--purple), var(--pink));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-top: 1rem;
    color: var(--lightGrey);
    width: 30rem;
  }
`
export const Heading = styled.div`
  height: 100%;
  width: 50%;
  @media only screen and (max-width: ${breakpoints.md2}) {
    width: 100%;
    margin-bottom: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    line-height: 8.5rem;
    margin-top: 3rem;
    @media only screen and (max-width: ${breakpoints.lg}) {
      line-height: 7rem;
    }
    @media only screen and (max-width: ${breakpoints.md}) {
      margin-top: -4rem;
    }
    @media only screen and (max-width: ${breakpoints.md2}) {
      margin-top: -3rem;
    }
  }
`
export const Gradient = styled.div`
  width: 50rem;
  height: 25rem;
  position: absolute;
  right: 12rem;
  top: 0;
  background: linear-gradient(
      180deg,
      rgba(155, 199, 200, 0.34) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(
      245.16deg,
      rgba(204, 205, 237, 0.79) 18.12%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(254, 211, 237, 0.78);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  z-index: -1;

  @media only screen and (max-width: ${breakpoints.lg}) {
    width: 40rem;
    height: 18rem;
    right: 3rem;
  }

  @media only screen and (max-width: ${breakpoints.md}) {
    width: 35rem;
    height: 14rem;
  }

  @media only screen and (max-width: ${breakpoints.md2}) {
    top: -1rem;
    right: 20%;
  }

  @media only screen and (max-width: ${breakpoints.sm}) {
    width: 120%;
    height: 38rem;
    top: -20rem;
    left: -5rem;
  }
`

export const PageNavWrapper = styled.div`
  @media only screen and (max-width: ${breakpoints.md}) {
    position: absolute;
    right: 5rem;
  }
  @media only screen and (max-width: ${breakpoints.md2}) {
    display: none;
  }
`
