import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, Box, styled, useTheme } from "@mui/material";
import Typewriter from "typewriter-effect";
import heroImg from "../assets/hero/caner-cropped.png"

const StyledHeroRoot = styled("section")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",

}))

const StyledHeroContainer = styled(Container)(({ theme }) => ({
  display: "flex !important",
  flex: "1",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  width: "unset",
  ["@media (max-height: 804px)"]: {
    // paddingTop: ismobile ? "0px" : "102px",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "2rem",
  },

}))

const StyledHeroGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  alignItems: "center",
  width: "auto",
  [theme.breakpoints.down("xs")]: {
    // maxWidth: "70%",
    // justifyContent: "flex-end"
    marginBottom: "2rem",
    marginTop: "2rem",
  },
}));

const StyledHeroGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "0rem",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("xs")]: {
    order: "1",
    // marginTop: "2rem",
    // marginBottom: "2rem"
  },
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  maxWidth: "70%",
  height: "auto",
  opacity: theme.palette.heroImage.opacity,

  [theme.breakpoints.down("lg")]: {
    maxWidth: "70%",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "95%",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "70%",
  },

}));

const StyledHeroText = styled(Grid)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  width: "50%",
  paddingLeft: "0 !important",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    margin: "0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    margin: "0",
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    margin: "0",
    order: "2",
    textAlign: "center",
    padding: "2rem",
    paddingRight: "0 !important"
  },
}));

const StyledHeroGreetingText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  textAlign: "left",
  color: theme.palette.text.primary,
  fontSize: "clamp(20px, 2vw, 26px) !important",

  [theme.breakpoints.down("xs")]: {
    textAlign: "center"
  },
}));

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0),
  fontSize: "clamp(34px, 4vw, 55px) !important",
  [theme.breakpoints.up("md")]: {
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.down("xs")]: {
    textAlign: "center"
  },
}));

const StyledHeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary + " !important",
  fontSize: "clamp(20px, 2vw, 26px) !important",
  [theme.breakpoints.down("xs")]: {
    textAlign: "center"
  },
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

  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <StyledHeroRoot>
      <StyledHeroContainer>
        <StyledHeroGrid container spacing={0}>
          <StyledHeroText
            item
            xxs={12}
            xs={7}
            sm={7}
            md={7}
          >
            <StyledHeroGreetingText>
              Hello, I'm
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
            xs={5}
            sm={5}
            md={5}
          >
            <StyledHeroImage alt="Image of Caner Ates" src={heroImg} />
          </StyledHeroGridItem>

        </StyledHeroGrid>
      </StyledHeroContainer>
    </StyledHeroRoot>
  )
}

export default Hero