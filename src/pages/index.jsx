import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link as GatsbyLink } from "gatsby"
import styled, { createGlobalStyle, keyframes } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import Card from "../components/card"
import Wave from "../components/wave"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    line-height: 1.3;
  }

  a {
    color: #5334f5;
    font-weight: 600;
    text-decoration: none;
  }
`

const HeroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const HeroBackground = styled.div`
  height: 920px;
  position: relative;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
`

const HeroContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 150px 50px;
  text-align: center;

  @media (max-width: 640px) {
    padding: 100px 20px;
  }
`

const HeroTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;
  opacity: 0;
  animation: ${HeroAnimation} 3s 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const HeroParagraph = styled.p`
  font-size: 30px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  animation: ${HeroAnimation} 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 640px) {
    font-size: 24px;
  }
`

const HeroButton = styled(GatsbyLink)`
  font-size: 17px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  padding: 9px 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    color: black;
  }
`

const HeroLogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin: 100px 0;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const CourseContainer = styled.div`
  h2 {
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104.74deg, #050a27 0%, #4a548c 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 640px) {
      font-size: 30px;
    }
  }
`

const CourseList = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CouseDetailContainer = styled.div`
  margin: 100px 0 0;
  background: url(${props => props.image});
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`

const CouseDetailLogo = styled.img`
  width: 128px;
  margin: 0 auto;
  align-self: end;
`

const CouseDetailContent = styled.div`
  margin: 0 320px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;

  @media (max-width: 1368px) {
    margin: 0 40px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const CouseDetailTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const CouseDetailText = styled.p`
  color: white;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const CellContent = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
  min-width: 320px;
`

const CellImage = styled.div`
  width: 50px;
  height: 50px;
  background: #212c4f;
  border-radius: 10px;
  background-image: url(${props => props.image});
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
`

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

const CeilCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const CellContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default function IndexPage({ data }) {
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: `description`, content: data.site.siteMetadata.description },
          { name: `keywords`, content: data.site.siteMetadata.keywords },
        ]}
      />
      <GlobalStyle />

      <Header />

      <HeroBackground
        position="relative"
        height="920px"
        bgSize="cover"
        bgPosition="center"
        image={require(`../../images/wallpaper3.jpg`)}
      >
        <HeroContainer>
          <HeroTitle>
            Learn to <br />
            design and code React apps
          </HeroTitle>
          <HeroParagraph>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </HeroParagraph>
          <HeroButton to="/video">Watch the video</HeroButton>
          <HeroLogoContainer>
            {["sketch", "figma", "studio", "framer", "react", "swift"].map(
              brandName => (
                <img
                  src={require(`../../images/logo-${brandName}.png`)}
                  alt={`${brandName} logo`}
                  key={brandName}
                  width="50"
                />
              )
            )}
          </HeroLogoContainer>
          <Wave />
        </HeroContainer>
      </HeroBackground>

      <CourseContainer>
        <h2>{data.allCoursesYaml.totalCount} courses, more coming</h2>

        <CourseList>
          {data.allCoursesYaml.edges.map(({ node }) => (
            <Card
              key={node.id}
              title={node.title}
              text={`${node.sectionCount} sections`}
              image={node.backgroudImage.childImageSharp.original.src}
            />
          ))}
        </CourseList>
      </CourseContainer>

      <CouseDetailContainer image={require(`../../images/wallpaper2.jpg`)}>
        <WaveBottom>
          <Wave />
        </WaveBottom>

        <WaveTop>
          <Wave />
        </WaveTop>

        <CouseDetailLogo
          src={require(`../../images/logo-react.png`)}
          alt="React logo"
        />
        <CouseDetailContent>
          <CouseDetailTitle>React for Designers</CouseDetailTitle>
          <CouseDetailText>
            Learn how to build a modern site using React and the most efficient
            libraries to get your site/product online. Get familiar with
            components, Grid CSS, animations, interactions, dynamic data with
            Contentful and deploying your site with Netlify.
          </CouseDetailText>
        </CouseDetailContent>
      </CouseDetailContainer>

      <CeilCaption>
        {data.allCeilsYaml.totalCount} sections - 6 hours
      </CeilCaption>
      <CellContainer>
        {data.allCeilsYaml.edges.map(({ node }) => (
          <CellContent key={node.id}>
            <CellImage image={node.image.childImageSharp.original.src} />
            <CellTitle>{node.title}</CellTitle>
          </CellContent>
        ))}
      </CellContainer>

      <Footer />
    </>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allCeilsYaml {
      totalCount
      edges {
        node {
          id
          title
          image {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
    allCoursesYaml {
      totalCount
      edges {
        node {
          id
          title
          sectionCount
          backgroudImage {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`
