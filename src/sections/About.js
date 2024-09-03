
import React, { useState, useEffect } from "react";
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

const calculateSideLength = (width, theme) => {
  if (width >= theme.breakpoints.values.lg) return 72;
  if (width >= theme.breakpoints.values.md) return 67; 
  if (width >= theme.breakpoints.values.sm) return 62; 
  return 60;
};

const calculateDefaultWidth = (width, theme) => {
  if (width >= theme.breakpoints.values.lg) return 1200;
  if (width >= theme.breakpoints.values.md) return 1048;
  if (width >= theme.breakpoints.values.sm) return 960;
  return 450;
};

const About = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const theme = useTheme();

  const [sideLength, setSideLength] = useState(calculateSideLength(window.innerWidth, theme));
  const [defaultWidth, setDefaultWidth] = useState(calculateDefaultWidth(window.innerWidth, theme));

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
          <PageHeader title="About" subText= "Hey! I am Caner Ates." />
        </StyledGenericContainer>
        <StyledAboutContainer >
          <StyledAboutGrid container rowSpacing={6} columnSpacing={12}>
            <InView threshold={0.9} triggerOnce={true}>
              {({ ref, inView }) => (
                <StyledAboutGridItem
                  item
                  xs={12}
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
                </StyledAboutGridItem>
              )}
            </InView>

          </StyledAboutGrid>
        </StyledAboutContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  )

}

export default About