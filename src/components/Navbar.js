import { React, useState, useEffect, useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"
import navbarData from "../content/navbar.json"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-scroll";
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
  Drawer,
  List,
  Box,
  Switch
} from '@mui/material';


const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
  backgroundColor: theme.palette.background.primary + " !important",
  transition:
    "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
  transitionDelay: "0.1s",
  boxShadow: isScrolled
    ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
    : "none !important",
  padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
  [theme.breakpoints.down("md")]: {
    padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
  },
}));

const StyledAppBarContainer = styled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  maxWidth: "1200px",
  justifyContent: "center",
  width: "90vw !important",
  [theme.breakpoints.down("md")]: {
    width: "100vw !important",
  },
}));

const StyledThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 65,
  height: 34,
  padding: 0,
  margin: 10,
  '& .MuiSwitch-switchBase': {
    margin: '2px -3px',
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(35px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#708090',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: "#ffffff",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.switch.notchBackground,
    width: 30,
    height: 30,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#FFEFD5',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundImage: theme.palette.switch.baseBackground,
    borderRadius: 17,
  },
}));

const StyledAppBarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "& p": {
    color: theme.palette.text.primary + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    fontSize: "1.3rem",
    padding: "0.5rem",
    textTransform: 'none',
    "&:hover": {
      color: theme.palette.text.secondary + " !important",
      transform: "translateY(-2px)",
    },
  }

}));

const StyledNavbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignSelf: "center",
}));

const StyledResumeLink = styled("a")(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
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

const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "1s",
  position: "fixed",
  top: "32px",
  right: "32px",
  color: theme.palette.text.primary,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& div.MuiPaper-root": {
    background: "transparent",
    backdropFilter: "blur(10px)",
    height: "100vh !important",
    boxShadow: "none !important",
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    zIndex: "2 !important",
  },
}));
const StyledDrawerList = styled(List)(({ theme }) => ({
  display: "flex",
}));

const StyledAppBarDrawerLink = styled(Link)(({ theme }) => ({
  "& p": {
    animation: "fadeIn",
    animationDuration: "2s",
    color: theme.palette.text.primary + " !important",
    cursor: "pointer",
    fontSize: "1.75rem",
    padding: "0",
    "&:hover": {
      color: theme.palette.text.secondary + " !important",
    },
  },
}));

const StyledLogo = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  "& svg": {
    fill: theme.palette.logo.primary,
  },
}));


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const MuiTheme = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("md"));
  const [checked, setChecked] = useState(theme === "dark");

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

  const toggleDrawer = (isOpen) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(isOpen);
  };

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setTheme(event.target.checked === true ? "dark" : "light")
  };

  const navbar = (
    <>
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

  const drawer = (
    <>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          animation: !hasAnimated ? "fadeIn" : "",
          animationDuration: "2s",
        }}
      >
        <StyledDrawerIcon />
      </Button>

      <StyledDrawer
        anchor={"top"}
        variant="temporary"
        transitionDuration={1}
        disableScrollLock={true}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Button onClick={toggleDrawer(false)}>
          <StyledDrawerCloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <StyledDrawerList>
            <StyledResumeLink
              href={
                process.env.PUBLIC_URL +
                "/Caner Ates Resume iOS Dev 2025en-11.pdf"
              }
              target="_blank"
            >
              <Typography
                sx={{
                  padding: "0.5rem 1rem !important",
                  fontSize: "1.75rem !important",
                  transition:
                    "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms ease-in-out 0s !important",
                  animation: "fadeIn",
                  animationDuration: "2s",
                }}
              >
                Resume
              </Typography>
            </StyledResumeLink>
          </StyledDrawerList>
          {navbarData.map((data) => (
            <StyledDrawerList key={data.id}>
              <StyledAppBarDrawerLink
                onClick={toggleDrawer(false)}
                to={data.name}
                smooth={true}
                duration={1000}
              >
                <Typography>{data.name}</Typography>
              </StyledAppBarDrawerLink>
            </StyledDrawerList>
          ))}

          <StyledThemeSwitch
            aria-label="Change theme"
            checked={checked}
            onChange={handleChange}
          />
        </Box>
      </StyledDrawer>
    </>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar position='fixed' isScrolled={isScrolled}>
        <StyledAppBarContainer>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <StyledLogo
              href="#Home"
              to="Home"
              smooth={true}
              duration={1000}
            >
              <svg
                viewBox="0 0 370 300"
                style={{
                  width: "44px",
                  animation: !hasAnimated
                    ? collapse
                      ? "fadeIn"
                      : "fadeInDown"
                    : "",
                  animationDuration: collapse ? "2s" : "1s",
                }}
              >
                <path
                  d="M 213.160156 47.34375 L 264.09375 135.625 L 320.390625 233.199219 L 321.730469 235.523438 L 375.019531 327.882812 L 324.132812 327.882812 L 270.847656 235.523438 L 270.84375 235.523438 L 213.207031 135.625 L 155.570312 235.523438 L 55.15625 235.523438 C 39.96875 235.523438 26.175781 229.320312 16.191406 219.328125 C 6.207031 209.339844 0.0117188 195.539062 0.0117188 180.339844 L 0.0117188 103.382812 C 0.0117188 88.183594 6.207031 74.382812 16.191406 64.394531 C 26.175781 54.402344 39.96875 48.199219 55.15625 48.199219 L 164.210938 48.199219 L 138.65625 92.488281 L 55.15625 92.488281 C 52.183594 92.488281 49.46875 93.71875 47.484375 95.707031 C 45.503906 97.691406 44.269531 100.410156 44.269531 103.382812 L 44.269531 180.339844 C 44.269531 183.3125 45.503906 186.03125 47.484375 188.015625 C 49.46875 190 52.183594 191.234375 55.15625 191.234375 L 130.140625 191.234375 Z M 213.160156 47.34375 "
                />
              </svg>
            </StyledLogo>
            {collapse ? drawer : <StyledNavbarContainer>{navbar}</StyledNavbarContainer>}
            {!collapse &&
              <div
                className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
              >
                <StyledThemeSwitch
                  aria-label="Change theme"
                  checked={checked}
                  onChange={handleChange}
                />
              </div>
            }
          </Toolbar>
        </StyledAppBarContainer>
      </StyledAppBar>
    </Slide>
  )
}

export default Navbar

