import styled from "styled-components"

export const Card = styled.div`
  margin: 4rem 3rem;
  width: 30rem;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translate(2px, 2px);
  }

  span {
    display: block;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    color: var(--lightGrey);
  }

  p {
    margin-top: 3rem;
    color: var(--lightGrey);
  }
`
