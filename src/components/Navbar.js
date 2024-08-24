import { React, useState, useEffect, useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"
import navbarData from "../content/navbar.json"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  styled,
  Slide,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.main + " !important",
  boxShadow: "none",
  padding: "2rem 5rem 2rem 5rem",
}));

const StyledAppBarContainer = styled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  maxWidth: "1200px",
  justifyContent: "center",
}));

const StyledAppBarButton = styled(Button)(({ theme }) => ({
  color: theme.palette.textMain.main + " !important",
  padding: "10px 8px",
  transform: "none",
  cursor: "pointer",
}));

const StyledAppBarLink = styled(Button)(({ theme }) => ({

  textDecoration: "none",
  "& p": {
    color: theme.palette.textMain.main + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0.5rem",
    textTransform: 'none',
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
      transform: "translateY(-2px)",
    },
  }

}));

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const MuiTheme = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("sm"));


  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const trigger = useScrollTrigger({
    target: window,
  });

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const navbar = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <StyledAppBarButton
          aria-label="Change theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </StyledAppBarButton>
      </div>

      {navbarData.map((data) => (
        <div key={data.id}
          className={
            !hasAnimated ? "animate__animated animate__fadeInDown" : ""
          }
        >
          <StyledAppBarLink
            href={`#${data.name}`}
            to={data.name}
            smooth={true}
            duration={1000}
          >
            <Typography>{data.name}</Typography>
          </StyledAppBarLink>
        </div>
      ))}
    </>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar position='fixed' isScrolled={isScrolled}>
        <StyledAppBarContainer>
          <Toolbar>
            <Typography variant='h6' style={{ color: MuiTheme.palette.textMain.main, flexGrow: 1 }} >
              Caner Ates
            </Typography>

            {navbar}
          </Toolbar>
        </StyledAppBarContainer>
      </StyledAppBar>
    </Slide>


  )
}

export default Navbar

