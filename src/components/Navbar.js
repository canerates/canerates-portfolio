import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../utils/ThemeContext';
import navbarData from '../content/navbar.json';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { 
    AppBar, 
    Toolbar, 
    Button,
    Typography,
    styled
} from '@mui/material'


const StyledAppBar = styled(AppBar)((theme) => ({
    backgroundColor: theme.palette.background.main
}));

const StyledAppBarContainer = styled("div")((theme) => ({

}));

const StyledAppBarButton = styled(Button)((theme) => ({

}));

const StyledAppBarLink = styled(Button)((theme) => ({

}));

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    useEffect(() => {
        window.localStorage.setItem("theme", theme);
      }, [theme]);

    const navbar = (
        <>
            <StyledAppBarButton
                aria-label='Change theme'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                {theme === 'light' ? <WbSunnyIcon /> : <DarkModeIcon />}
            </StyledAppBarButton>

            {navbarData.map((data) => (
                <div>
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
                        Caner
                    </Typography>

                    {navbar}
                </Toolbar>
            </StyledAppBarContainer>
        </StyledAppBar>
    )
}

export default Navbar