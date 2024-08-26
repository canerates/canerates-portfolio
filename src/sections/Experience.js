
import { Container, Grid, styled } from "@mui/material"
import Timeline from '@mui/lab/Timeline'
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import PageHeader from "../components/PageHeader"
import WorkCard from "../components/WorkCard"
import EducationCard from "../components/EducationCard"
import ExperienceCardHeader from "../components/ExperienceCardHeader"
import experiences from "../content/experiences.json"

const StyledExperienceContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
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
  padding: "1rem",
}));

const StyledExperienceGridItem = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  // height: "290px",
  // marginBottom: "2.5rem",
  borderRadius: "0.75rem",
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  alignItems: "flex-start",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s",
}));

const Experience = () => {

  const [experienceContainer, experienceContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Experience">
      <StyledGenericRoot ref={experienceContainer}>
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
          <PageHeader title="Experience" subText="I have eight years of experience in software development including four years of solid background in web development, and four years of continuous growth and deep passion for iOS development." />
        </StyledGenericContainer>
        <StyledExperienceContainer>
          <StyledExperienceGrid container rowSpacing={6} columnSpacing={12}>
            <StyledExperienceGridItem
              item
              xs={12}
              sm={5.5}
            >
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                  padding: 4
                }}
              >
                <ExperienceCardHeader title={"Working History"} />
                {experiences.works.map((work) => (
                  <WorkCard work={work} />
                ))}

              </Timeline>
            </StyledExperienceGridItem>

            <StyledExperienceGridItem
              item
              xs={12}
              sm={5.5}
            >
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                  padding: 4
                }}
              >
                <ExperienceCardHeader title={"Education Histroy"} />
                {experiences.educations.map((education) => (
                  <EducationCard education={education} />
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