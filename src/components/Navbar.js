import { React, useEffect, useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"
import navbarData from "../content/navbar.json"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { 
    AppBar, 
    Toolbar, 
    Button,
    Typography,
    styled
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
    color: theme.palette.textMain.main + " !important",
    transform: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
      transform: "translateY(-2px)",
    },
}));

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const navbar = (
        <>
            <StyledAppBarButton
                aria-label="Change theme"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
            </StyledAppBarButton>
            
            {navbarData.map((data) => (
                <div key={data.id}>
                    
                    <StyledAppBarLink>
                        <Typography>{data.name}</Typography>
                    </StyledAppBarLink>
                </div>
            ))}
        </>
    );

    return (
        <StyledAppBar position='fixed'>
            <StyledAppBarContainer>
                <Toolbar>
                    <Typography variant='h6'>
                        Caner Ates
                    </Typography>

                    { navbar }
                </Toolbar>
            </StyledAppBarContainer>
        </StyledAppBar>
    )
}

export default Navbar

