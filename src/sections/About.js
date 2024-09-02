
import { Container, Grid, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import PageHeader from "../components/PageHeader"
import SkillCard from "../components/SkillCard"

const StyledAboutContainer = styled(Container)(({ theme }) => ({
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center"
}));

const StyledAboutGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
  padding: "1rem"
}));

const StyledAboutGridItem = styled(Grid)(({ theme }) => ({
  marginBottom: "2.5rem",
  paddingTop: "0 !important",
  paddingLeft: "0 !important"
}));

const About = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="About">
      <StyledGenericRoot ref={aboutContainer}>
        <StyledGenericContainer
          sx={
            aboutContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            aboutContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <PageHeader title="About Me" subText="Hey! I am Caner Ates. " />
        </StyledGenericContainer>
        <StyledAboutContainer >
          <StyledAboutGrid container rowSpacing={6} columnSpacing={12}>
            <StyledAboutGridItem
              item
              xs={12}
              // sm={6}
            >
              <SkillCard />
            </StyledAboutGridItem>
          </StyledAboutGrid>
        </StyledAboutContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  )

}

export default About