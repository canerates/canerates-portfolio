import { styled, Container } from "@mui/material"
import { TimelineContent, TimelineDot, TimelineConnector } from "@mui/lab";

export const StyledGenericRoot = styled("section")(({ theme, ismobile }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    // minHeight: "100vh",
    minHeight: ismobile ? "auto" : "100vh",
    backgroundColor: theme.palette.background.primary,
    
}));

export const StyledGenericContainer = styled(Container)({
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    
});

export const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
    position: "relative",
    borderRadius: "1rem",
    maxWidth: "19.5rem",
    marginTop: "0.35rem",
    marginBottom: "0.35rem",
    marginLeft: "0.25rem",
    padding: "1rem",
}));

export const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
    backgroundColor: theme.palette.experience.primary,
    color: theme.palette.experience.secondary,
    transition: "transform 150ms ease-in-out 0s !important",
    "&:hover": {
      transform: "scale(1.2)",
    },
}));

export const StyledTimelineDotStatic = styled(TimelineDot)(({ theme }) => ({
    backgroundColor: theme.palette.experience.primary,
    color: theme.palette.experience.secondary,
}));

export const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
    backgroundColor: theme.palette.experience.primary,
}));