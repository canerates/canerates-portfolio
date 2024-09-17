import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, Box, styled } from "@mui/material";
// import { Typewriter } from 'react-simple-typewriter'
import Typewriter from "typewriter-effect";
import heroImg from "../assets/hero/caner-cropped.png"

const StyledHeroRoot = styled("section")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",

}))

const StyledHeroContainer = styled(Container)(({ theme }) => ({
  display: "flex !important",
  boxSizing: "unset !important",
  width: "unset",

}))

const StyledHeroGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  alignItems: "center",
  width: "auto",
}));

const StyledHeroGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "0rem",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  maxWidth: "100%",
  height: "auto",
  // height: "200px",
  // textAlign: "center",
  // marginTop: "3rem",
  opacity: theme.palette.heroImage.opacity,

  [theme.breakpoints.down("xs")]: {
    width: "60%",
    // margin: "0",
  },

}));

const StyledHeroText = styled(Grid)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  // width: "50%",
  paddingLeft: "0 !important",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    margin: "0",
  },
  // margin: "2rem 4rem 2rem 4rem ",
}));

const StyledHeroGreetingText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  textAlign: "left",
  color: theme.palette.text.primary,
  fontSize: "clamp(20px, 1.5vw, 26px) !important",
  // marginBottom: theme.spacing(0),

  // [theme.breakpoints.up("md")]: {
  //   whiteSpace: "nowrap",
  // },
}));

const StyledHeroTitle = styled("div")(({ theme }) => ({
  textAlign: "justify",
  fontWeight: "bold !important",
  color: theme.palette.text.primary,
  fontSize: "clamp(28px, 3vw, 48px) !important",
  marginTop: "0.1rem",
  marginBottom: "0.5rem",
  // [theme.breakpoints.up("md")]: {
  //   whiteSpace: "nowrap",
  // },
}));

const StyledHeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary + " !important",
  textAlign: "left",
  fontSize: "clamp(16px, 1.5vw, 22px) !important",
  fontStyle: "italic"
}));

const StyledResumeLink = styled("a")(({ theme }) => ({
  display: "inline-block",
  cursor: "pointer",
  textDecoration: "none",
  marginTop: "2rem",
  "& p": {
    borderRadius: "8px !important",
    padding: "0.25rem 0.5rem",
    fontSize: "1.2rem",
    backgroundColor: theme.palette.button.backgroundPrimary + " !important",
    color: theme.palette.button.foregroundPrimary,
    transition: "transform 150ms ease-in-out 0s !important",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
}));

const Hero = ({ img }) => {
  return (
    <StyledHeroRoot>
      <StyledHeroContainer>
        <StyledHeroGrid container spacing={0}>
          <StyledHeroText
            item
            xxs={12}
            xs={4}
          >
            <StyledHeroGreetingText>
              Hello, I am
            </StyledHeroGreetingText>
            <StyledHeroTitle>
              <Typewriter
                options={{
                  strings: ["CANER ATES", "iOS Developer"],
                  cursor: "",
                  delay: 50,
                  deleteSpeed: 20,
                  autoStart: true,
                  loop: true,
                }}
              />
            </StyledHeroTitle>

            <StyledHeroSubText>
              Designing and developing<br /> native iOS applications..
            </StyledHeroSubText>

            <StyledResumeLink
              href={
                process.env.PUBLIC_URL + "/Caner Ates Resume iOS Dev 2024-5.pdf"
              }
              target="_blank"
            >
              <Typography>Resume</Typography>
            </StyledResumeLink>

          </StyledHeroText>



          <StyledHeroGridItem
            item
            xxs={12}
            xs={4}
          >
            <StyledHeroImage alt="Image of Caner Ates" src={heroImg} />
          </StyledHeroGridItem>

          <StyledHeroText
            item
            xxs={12}
            xs={4}
          >
          </StyledHeroText>

        </StyledHeroGrid>
      </StyledHeroContainer>
    </StyledHeroRoot>
  )
}

export default Hero