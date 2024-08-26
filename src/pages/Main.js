import { Container, styled } from "@mui/material"
import Navbar from "../components/Navbar"

import About from "../sections/About"
import Experience from "../sections/Experience";
import Projects from "../sections/Projects"


const StyledMainPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
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
          <About />
          <Experience />
          <Projects />
        </StyledMainContainer>
      </StyledMainPage>
    </>
  )
}

export default Main;