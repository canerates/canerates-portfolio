import { React, useState, useEffect } from "react"
import { Container, Grid, styled } from "@mui/material"
import Timeline from '@mui/lab/Timeline'
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import "animate.css"

import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import PageHeader from "../components/PageHeader"
import WorkCard from "../components/WorkCard"
import EducationCard from "../components/EducationCard"
import ExperienceCardHeader from "../components/ExperienceCardHeader"
import experiences from "../content/experiences.json"

const StyledExperienceContainer = styled(Container)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center"
}));

const StyledExperienceGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
  padding: "1rem"
}));

const StyledExperienceGridItem = styled(Grid)(({ theme }) => ({
  marginBottom: "2.5rem",
  paddingTop: "0 !important",
  paddingLeft: "0 !important"
}));

const StyledExperienceTimelineItem = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  alignItems: "flex-start",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s",
  
}));

const Experience = () => {

  const [experienceContainer, experienceContainerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <Scroll.Element name="Experience">
      <StyledGenericRoot ref={experienceContainer} ismobile={isMobile}>
        <StyledGenericContainer
          sx={
            experienceContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            experienceContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <PageHeader title="Experience" subText="I have over eight years of experience in software development including four years of solid background in web development, and four years of continuous growth and deep passion for the iOS development." />
        </StyledGenericContainer>
        <StyledExperienceContainer>
          <StyledExperienceGrid container rowSpacing={6} columnSpacing={12}>
            <StyledExperienceGridItem
              item
              xs={12}
              md={6}
            >
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  }
                }}
              >
                <InView key={1001} threshold={0.9} triggerOnce={true}>
                  {({ ref, inView }) => (
                    <StyledExperienceTimelineItem
                      item
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
                      <ExperienceCardHeader title={"Working History"} />
                    </StyledExperienceTimelineItem>
                  )}
                </InView>
                {experiences.works
                  .slice()
                  .reverse()
                  .map((work, index) => (

                    <InView key={work.id} threshold={0.9} triggerOnce={true}>
                      {({ ref, inView }) => (
                        <StyledExperienceTimelineItem
                          item
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
                          <WorkCard
                            work={work}
                            isLastCard={index === experiences.works.length - 1}
                          />
                        </StyledExperienceTimelineItem>

                      )}
                    </InView>
                  ))}

              </Timeline>
            </StyledExperienceGridItem>

            <StyledExperienceGridItem
              item
              xs={12}
              md={6}
            >
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  }
                }}
              >
                <InView key={1002} threshold={0.9} triggerOnce={true}>
                  {({ ref, inView }) => (
                    <StyledExperienceTimelineItem
                      item
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
                      <ExperienceCardHeader title={"Education History"} />
                    </StyledExperienceTimelineItem>
                  )}
                </InView>

                {experiences.educations
                  .slice()
                  .reverse()
                  .map((education, index) => (
                    <InView key={education.id} threshold={0.9} triggerOnce={true}>
                      {({ ref, inView }) => (
                        <StyledExperienceTimelineItem
                          item
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
                          <EducationCard
                            education={education}
                            isLastCard={index === experiences.educations.length - 1}
                          />
                        </StyledExperienceTimelineItem>

                      )}
                    </InView>
                  ))}
              </Timeline>
            </StyledExperienceGridItem>
          </StyledExperienceGrid>
        </StyledExperienceContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  )
}

export default Experience