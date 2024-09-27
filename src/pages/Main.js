import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"
import Navbar from "../components/Navbar"
import About from "../sections/About"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Hero from "../sections/Hero"
import Footer from "../sections/Footer"
import Loader from "../components/Loader"
import heroAvatar from "../assets/hero/caner-cropped2.webp"


const StyledMainPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

const Main = () => {

  const [isLoading, setIsloading] = useState(true);
  const [heroImg, setHeroImg] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2900);

    const loadImage = async () => {
      const img = new Image();
      img.src = heroAvatar;
      await img.decode();
      setHeroImg(heroAvatar);
    };
    loadImage();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <StyledMainPage>
            <StyledMainContainer>
              <Hero img={heroImg} />
              <About />
              <Experience />
              <Projects />
            </StyledMainContainer>
          </StyledMainPage>
          <Footer />
        </>
      )}
    </>
  );
}

export default Main;