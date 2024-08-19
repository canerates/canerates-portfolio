import { React } from "react"
import { Container, styled } from "@mui/material";
import Navbar from "../components/Navbar"
import Projects from "../sections/Projects";

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
      {/* <Navbar /> */}
      <StyledMainPage>
        <StyledMainContainer>
          <Projects />
        </StyledMainContainer>
      </StyledMainPage>
    </>
    
   
  )
}

export default Main;