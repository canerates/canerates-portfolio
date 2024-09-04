import React from "react"
import { Container, Grid, Typography, styled } from "@mui/material";

const StyledHeroRoot = styled("section")(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.background.primary,
    minHeight: "100vh"
}))

const StyledHeroContainer = styled(Container)(({ theme }) => ({

}))

const Hero = () => {
  return (
    <StyledHeroRoot>

    </StyledHeroRoot>
  )
}

export default Hero