import React, { useState, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${props => {
    if (props.hasScrolled) {
      return css`
        background: rgba(0, 0, 0, 0.8);
        padding: 15px 0;
        backdrop-filter: blur(20px);
      `
    }
  }}

  @media (max-width: 640px) {
    padding: 15px 0;
  }
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(4, auto);
  }
`

const Link = styled(GatsbyLink)`
  color: white;
  font-weight: 700;

  &:nth-child(4) {
    @media (max-width: 640px) {
      display: none;
    }
  }
`

const Button = styled.button`
  padding: 8px 20px;
  font-size: 20px;
  background: #56ccf2;
  border: none;
  font-weight: 700;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`

const links = [
  {
    to: "/",
    children: (
      <img src={require("../../images/logo-designcode.svg")} alt="brand logo" />
    ),
  },
  { to: "/courses", children: "Courses" },
  { to: "/downloads", children: "Downloads" },
  { to: "/workshops", children: "Workshops" },
  { to: "/buy", children: <Button>Buy</Button> },
]

export default function Navigation() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.pageYOffset > 50)
    }

    window.addEventListener("scroll", handleScroll, true)
    return window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Header hasScrolled={hasScrolled}>
      <Container>
        {links.map(link => (
          <Link key={link.to} {...link} />
        ))}
      </Container>
    </Header>
  )
}
