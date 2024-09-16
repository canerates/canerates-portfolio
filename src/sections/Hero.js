import React from "react"
import { Container, Grid, Typography, Box, styled } from "@mui/material";
import heroImg from "../assets/hero/caner.png"

const StyledHeroRoot = styled("section")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.primary,
  minHeight: "100vh"
}))

const StyledHeroContainer = styled(Container)(({ theme }) => ({
  display: "flex !important",
  // flex: "1",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  width: "unset",
}))

const StyledHeroGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  width: "435px",
  height: "600px",
  textAlign: "center",
  
}));

const Hero = ({ img }) => {
  return (
    <StyledHeroRoot>
      <StyledHeroContainer>
        <StyledHeroGrid>
          <StyledHeroImage alt="Image of Caner Ates" src={heroImg} />
        </StyledHeroGrid>
      </StyledHeroContainer>
    </StyledHeroRoot>
  )
}

export default Hero