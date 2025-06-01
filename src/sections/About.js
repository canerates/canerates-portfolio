
import { React, useState, useEffect } from "react"
import { Container, Grid, styled, useTheme } from "@mui/material"
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import PageHeader from "../components/PageHeader"
import { ResponsiveHoneycomb } from "react-honeycomb"
import skillsData from "../content/skills.json"
import SkillCard from "../components/SkillCard"

const StyledAboutContainer = styled(Container)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center"
}));

const StyledAboutSkillsGrid = styled(Grid)(({ theme }) => ({
  marginLeft: "0 !important",
  marginTop: "0 !important",
  padding: "1rem"
}));

const calculateSideLength = (width, theme) => {
  if (width >= theme.breakpoints.values.lg) return 82; 
  if (width >= theme.breakpoints.values.md) return 77;  
  if (width >= theme.breakpoints.values.sm) return 72; 
  if (width >= theme.breakpoints.values.xs) return 62; 
  return 51;
};

const calculateDefaultWidth = (width, theme) => {
  if (width >= theme.breakpoints.values.lg) return 1200;
  if (width >= theme.breakpoints.values.md) return 900;
  if (width >= theme.breakpoints.values.sm) return 600;
  return 450;
};

const About = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const theme = useTheme();

  const [sideLength, setSideLength] = useState(calculateSideLength(window.innerWidth, theme));
  const [defaultWidth, setDefaultWidth] = useState(calculateDefaultWidth(window.innerWidth, theme));

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSideLength(calculateSideLength(window.innerWidth, theme));
      setDefaultWidth(calculateDefaultWidth(window.innerWidth, theme));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [theme]);

  return (
    <Scroll.Element name="About">
      <StyledGenericRoot ref={aboutContainer} ismobile={isMobile}>
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
          <PageHeader title="About" subText= "I have over five years of experience in building native iOS applications and have successfully published two original personal apps on the App Store. Below is a list of languages and technologies I have worked with." />
        </StyledGenericContainer>
        <StyledAboutContainer >
        <InView threshold={0.2} triggerOnce={true}>
              {({ ref, inView }) => (
                <StyledAboutSkillsGrid
                  ref={ref}
                  inView={inView}
                  sx={
                    inView
                      ? {
                        visibility: "visible",
                        animation: "fadeInUp",
                        animationDuration: "1s",
                      }
                      : { visibility: "hidden" }
                  }
                >
                  <ResponsiveHoneycomb
                    defaultWidth={defaultWidth}
                    size={sideLength}
                    items={skillsData}
                    renderItem={(item) => (
                      <SkillCard key={item.id} skill={item} />
                    )}
                  />
                </StyledAboutSkillsGrid>
              )}
            </InView>
        </StyledAboutContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  )

}

export default About