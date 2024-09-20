import { Container, Grid, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import "animate.css"

import { StyledGenericRoot, StyledGenericContainer } from '../components/Generic'
import PageHeader from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import projects from "../content/projects.json"

const StyledProjectsContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "85% !important",
  },
  [theme.breakpoints.down("xs")]: {
    width: "90% !important",
  },
}));
const StyledProjectsGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
  padding: "1rem",
}));

const StyledProjectsGridItem = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  height: "290px",
  marginBottom: "2.5rem",
  borderRadius: "0.75rem",
  boxShadow: `0px 0px 10px ${theme.palette.project.shadowPrimary}70`,
  backgroundColor: `${theme.palette.project.backgroundPrimary}70`,
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  alignItems: "flex-end",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "transform 150ms ease-in-out 0s",
    boxShadow: `0px 0px 15px ${theme.palette.project.shadowSecondary}70`,
    [theme.breakpoints.up("md")]: {
      "& div": {
        opacity: "1",
        transform: "translateY(-10%)",
        transition:
          "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
      },
    },
    "&::after": {
      opacity: "0.9 !important",
      content: "''",
      position: "absolute",
      inset: "0px",

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
    "&::after": {
      opacity: "0.9 !important",
      content: "''",
      position: "absolute",
      inset: "0px",

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
    "& div": {
      opacity: "1",
    },
  },
  [theme.breakpoints.down("sm")]: {
    height: "260px !important",
  },
}));


const Projects = () => {

  const [projectsContainer, projectsContainerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Projects">
      <StyledGenericRoot ref={projectsContainer}>
        <StyledGenericContainer
          sx={
            projectsContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            projectsContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <PageHeader title="Projects" subText="Here are the some projects I have done over the past years.." />
        </StyledGenericContainer>

        <StyledProjectsContainer>
          <StyledProjectsGrid container rowSpacing={6} columnSpacing={12}>

            {projects.map((project) => (
              <InView key={project.id} threshold={0.9} triggerOnce={true}>
                {({ ref, inView }) => (
                  <StyledProjectsGridItem
                    item
                    xs={12}
                    md={5.5}
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
                    <ProjectCard project={project} />
                  </StyledProjectsGridItem>
                )}
              </InView>
            ))}
          </StyledProjectsGrid>

        </StyledProjectsContainer>
      </StyledGenericRoot>
    </Scroll.Element>

  )
}

export default Projects