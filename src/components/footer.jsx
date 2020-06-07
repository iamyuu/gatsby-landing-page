import React from "react"
// import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const Container = styled.footer`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

// const Text = styled.p`
//   font-size: 24px;
//   font-weight: 600;
//   color: #486791;
//   margin: 0 auto;
//   max-width: 500px;
//   padding: 0 20px;
// `

// const Button = styled.button`
//   font-size: 24px;
//   color: white;
//   border: none;
//   padding: 16px 60px;
//   font-weight: 600;
//   background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
//   box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
//   border-radius: 30px;
//   justify-self: center;
//   cursor: pointer;
//   outline: none;
//   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

//   &:hover {
//     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//     transform: translateY(-3px);
//   }
// `

// const LinkGroup = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, auto);
//   margin: 0 200px;

//   @media (max-width: 640px) {
//     grid-template-columns: repeat(1, auto);
//     text-align: center;
//   }
// `

// const LinkContainer = styled.div`
//   margin: 20px;
//   display: grid;
//   grid-gap: 10px;
// `

// const Link = styled(GatsbyLink)`
//   color: #5334f5;
//   font-size: 20px;
//   font-weight: 500;
//   margin: 5px 0;
//   transition: 1s;

//   &:hover {
//     color: black;
//   }
// `

const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`

// const mainlinks = [
//   { to: "/", children: "Home" },
//   { to: "/about", children: "About" },
//   { to: "/contact", children: "Contact" },
// ]

// const resourceLinks = [
//   { to: "/courses", children: "Courses" },
//   { to: "/downloads", children: "Downloads" },
//   { to: "/workshops", children: "Workshops" },
// ]

// const LinkWrapper = ({ items }) => (
//   <LinkContainer>
//     {items.map(link => (
//       <Link key={link.to} {...link} />
//     ))}
//   </LinkContainer>
// )

export default function Footer() {
  return (
    <Container>
      {/* <Text>
        Tweet “Prototype and build apps with React and Swift. New courses by
        @MengTo”
      </Text>
      <Button>Tweet</Button> */}
      {/* <LinkGroup>
        <LinkWrapper items={mainlinks} />
        <LinkWrapper items={resourceLinks} />
      </LinkGroup> */}
      <Copyright>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React. {` `}
        <a href="mailto:support@designcode.io">Email us</a> to ask anything.
        &copy; {new Date().getFullYear()}
      </Copyright>
    </Container>
  )
}
