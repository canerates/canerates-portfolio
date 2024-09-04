import { Container, styled } from "@mui/material"
import Navbar from "../components/Navbar"

import About from "../sections/About"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Hero from "../sections/Hero"


const StyledMainPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

const Main = () => {

  return (
    <>
      <Navbar />
      <StyledMainPage>
        <StyledMainContainer>
          {/* <Hero /> */}
          <About />
          <Experience />
          <Projects />

        </StyledMainContainer>
      </StyledMainPage>
    </>
  )
}

export default Main;