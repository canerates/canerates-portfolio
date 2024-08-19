import React from 'react'
import { Typography, Container, Grid, styled } from "@mui/material";
import projects from "../content/projects.json";
import { ProjectCard } from '../components/ProjectCard';

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
  

const Projects = () => {
  return (
    <StyledProjectsContainer>
        <StyledProjectsGrid container rowSpacing={6} columnSpacing={12}>
            {projects.map((project) => (
                <ProjectCard project = {project} />
            ))}
        </StyledProjectsGrid>
        
    </StyledProjectsContainer>
    
  )
}

export default Projects