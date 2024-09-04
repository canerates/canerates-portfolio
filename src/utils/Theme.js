import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#FFFFFF",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#5BC0BE",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#FFFFFF",
      secondary: "#bdc3c7",
    },
    button: {
      backgroundPrimary: "#bdc3c7",
      backgroundSecondary: "#3E9F9D",
      foregroundPrimary: "",
      foregroundSecondary: "",
      shadowPrimary: "",
      shadowSecondary: ""
    },
    text: {
      primary: "#0B132B",
      secondary: "#53739A"
    },
    switch: {
      baseBackground: `linear-gradient(to bottom, aqua, skyblue)`,
      notchBackground: "gold",
      notchIcon: "papayawhip"
    },
    skill: {
      backgroundPrimary: `linear-gradient(to bottom, skyblue, aqua)`,
      bakcgroundSecondary: `linear-gradient(to bottom, papayawhip, gold)`,
    },
    project: {
      backgroundPrimary: "#bdc3c7",
      backgroundSecondary: "",
      shadowPrimary: "#2c3e50",
      shadowSecondary: "#2980b9"
    }
  }
});

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#0B132B",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#3A506B",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#0B132B",
      secondary: "#3A506B",
    },
    button: {
      backgroundPrimary: "#3A506B",
      backgroundSecondary: "#53739A",
      foregroundPrimary: "",
      foregroundSecondary: "",
      shadowPrimary: "",
      shadowSecondary: ""
    },
    text: {
      primary: "#FEFFFF",
      secondary: "#6FFFE9"
    },
    switch: {
      baseBackground: `linear-gradient(to bottom, midnightblue, rebeccapurple)`,
      notchBackground: "darkblue",
      notchIcon: "slategray"
    },
    skill: {
      backgroundPrimary: `linear-gradient(to bottom, midnightblue, rebeccapurple)`,
      bakcgroundSecondary: `linear-gradient(to bottom, slategray, darkblue)`,
    },
    project: {
      backgroundPrimary: "#3A506B",
      backgroundSecondary: "",
      shadowPrimary: "#3A506B",
      shadowSecondary: "#53739A"
    }
  },
});
