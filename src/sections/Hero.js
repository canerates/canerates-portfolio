import React from "react"
import { Container, Grid, Typography, Box, styled } from "@mui/material";
import heroImg from "../assets/hero/caner.png"

const StyledHeroRoot = styled("section")(({ theme }) => ({
  display: "flex",
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
  justifyContent: "center",
  width: "auto",
}));

const StyledHeroGridItem = styled(Grid)(({ theme }) => ({
  
  padding: "0rem",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  maxWidth: "100%",
  // height: "auto",
  // height: "580px",
  // textAlign: "center",
  // marginTop: "3rem",
  opacity: theme.palette.heroImage.opacity

}));

const StyledHeroText = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  animation: "fadeIn",
  animationDuration: "2s",
  // width: "50%",
  paddingLeft: "0 !important",
  // [theme.breakpoints.down("sm")]: {
  //   width: "80%",
  //   margin: "0",
  // },
  // margin: "2rem 4rem 2rem 4rem ",
}));

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.text.primary,
  // marginBottom: theme.spacing(0),
  fontSize: "clamp(34px, 4vw, 55px) !important",
  // [theme.breakpoints.up("md")]: {
  //   whiteSpace: "nowrap",
  // },
}));

const StyledHeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary + " !important",
  fontSize: "clamp(20px, 2vw, 26px) !important",
}));

const Hero = ({ img }) => {
  return (
    <StyledHeroRoot>
      <StyledHeroContainer>
        <StyledHeroGrid container spacing={0}>
          <StyledHeroText
            item 
            xs={12}
            sm={3.25}
          >
            <StyledHeroTitle component="h1" variant="h2">
              Caner Ates
            </StyledHeroTitle>
            <StyledHeroSubText component="h1" variant="h5">
              iOS Developer
            </StyledHeroSubText>
          </StyledHeroText>

          <StyledHeroGridItem
            item
            xs={12}
            sm={5.5}
          >
            <StyledHeroImage alt="Image of Caner Ates" src={heroImg} />
          </StyledHeroGridItem>

          <StyledHeroText
            item 
            xs={12}
            sm={3.25}
          >
            <StyledHeroTitle component="h1" variant="h2">
              Caner Ates
            </StyledHeroTitle>
            <StyledHeroSubText component="h1" variant="h5">
              iOS Developer
            </StyledHeroSubText>
          </StyledHeroText>

        </StyledHeroGrid>
      </StyledHeroContainer>
    </StyledHeroRoot>
  )
}

export default Hero