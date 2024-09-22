import React, { useState, useEffect } from "react"
import { Container, Grid, Typography, styled } from "@mui/material"
import * as Scroll from "react-scroll"
import Typewriter from "typewriter-effect"
import heroImg from "../assets/hero/caner-cropped.png"
import AnchorLinks from "../components/AnchorLinks"

const StyledHeroRoot = styled("section")(({ theme, ismobile }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: ismobile ? "auto" : "100vh",
  // minHeight: "100vh",
  marginBottom: "1rem",
}));

const StyledHeroContainer = styled(Container)(({ theme, ismobile }) => ({
  display: "flex !important",
  // flex: "1",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  width: "unset",
  marginTop: "2rem",
}));

const StyledHeroGrid = styled(Grid)(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  padding: "1rem",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledHeroGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "0rem",
  alignItems: "center",
  // height: "auto",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    order: "1",
    paddingLeft: "1rem",
    marginTop: "2rem",
  },
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  maxWidth: "80%",
  height: "auto",

  opacity: theme.palette.heroImage.opacity,

  [theme.breakpoints.down("lg")]: {
    maxWidth: "85%",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "45%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "65%",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "60%",
  },

}));

const StyledHeroText = styled(Grid)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  // height: "290px",
  // width: "50%",
  paddingLeft: "0 !important",
  // [theme.breakpoints.down("md")]: {
  //   width: "80%",
  //   margin: "0",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "90%",
  //   margin: "0",
  // },
  [theme.breakpoints.down("md")]: {
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
  fontSize: "clamp(24px, 3vw, 38px) !important",

  [theme.breakpoints.down("md")]: {
    textAlign: "center"
  },
}));

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0),
  fontSize: "clamp(32px, 4vw, 56px) !important",
  [theme.breakpoints.up("md")]: {
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center"
  },
}));

const StyledHeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary + " !important",
  fontSize: "clamp(20px, 2vw, 26px) !important",
  [theme.breakpoints.down("md")]: {
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

const StyledAnchorLinks = styled(Grid)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  paddingLeft: "0 !important",
  // height: "700px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    order: "2",
    textAlign: "center",
    marginBottom: "2rem",
  },

}));

const Hero = ({ img }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <Scroll.Element name="Home" >
      <StyledHeroRoot ismobile={isMobile}>
        <StyledHeroContainer>
          <StyledHeroGrid container>
            <StyledHeroText
              item
              xs={12}
              md={6}
            >
              <StyledHeroGreetingText component="h1">
                Hello, I'm
              </StyledHeroGreetingText>
              <StyledHeroTitle component="h1">
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

              <StyledHeroSubText component="h1">
                Designing and developing<br /> native iOS applications..
              </StyledHeroSubText>



              <StyledResumeLink
                href={
                  process.env.PUBLIC_URL + "/Caner Ates Resume iOS Dev 2024-6.pdf"
                }
                target="_blank"
              >
                <Typography>Resume</Typography>
              </StyledResumeLink>


            </StyledHeroText>

            <StyledHeroGridItem
              item
              xs={12}
              md={5}
            >
              <StyledHeroImage alt="Image of Caner Ates" src={heroImg} />
            </StyledHeroGridItem>

            <StyledAnchorLinks
              item
              xs={12}
              md={1}
            >
              <AnchorLinks />

            </StyledAnchorLinks>

          </StyledHeroGrid>
        </StyledHeroContainer>
      </StyledHeroRoot>
    </Scroll.Element>
  )
}

export default Hero