import { createGlobalStyle } from "styled-components"

export const colors = {
  black: "#060B12",
  white: "#fff",
  darkGrey: "#707276",
  lightGrey: "#BABCBB",
  green: "#9BC7C8",
  darkPurple: "#654D7C",
  purple: "#CCCDED",
  pink: "#FED3ED",
}

export const breakpoints = {
  lg: "1220px",
  md: "1000px",
  md2: "750px",
  sm: "450px",
}

export const GlobalStyles = createGlobalStyle`
:root {
    --black: #060B12;
    --white: #fff;
    --darkGrey: #707276;
    --lightGrey: #BABCBB;
    --green: #9BC7C8;
    --darkPurple: #654D7C;
    --purple: #CCCDED;
    --pink: #FED3ED;
    --bp-lg: 1220px;
}

*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
    @media only screen and (max-width: ${breakpoints.md}){
        font-size: 50%;
    }
}

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
}

h1 {
    font-size: 7.8rem;
    @media only screen and (max-width: ${breakpoints.lg}) {
        font-size: 6.8rem;
    }
    @media only screen and (max-width: ${breakpoints.md}){
        font-size: 5.8rem;
    }
    @media only screen and (max-width: ${breakpoints.sm}){
        font-size: 4.8rem;
    }
}

h2 {
    font-size: 3.8rem;
}

h3 {
    font-size: 2.8rem;
}

p {
    font-size: 1.8rem;
        @media only screen and (max-width: ${breakpoints.md2}){
        font-size: 1.6rem;
    }
}

.site-container {
    width: 1120px;
    max-width: 1120px;
    margin: 0 auto;

    @media only screen and (max-width: ${breakpoints.lg}) {
        width: 900px;
        max-width: 900px;
    }
    
    @media only screen and (max-width: ${breakpoints.md}){
        width: 700px;
        max-width: 700px;
    }
    @media only screen and (max-width: ${breakpoints.md2}){
        width: 90%;
        max-width: 90%;
    }
}
`
