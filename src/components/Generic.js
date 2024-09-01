import { styled, Container } from "@mui/material"
import { TimelineContent, TimelineDot, TimelineConnector } from "@mui/lab";

export const StyledGenericRoot = styled("section")(({ theme }) => ({
    minHeight: "100vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
}));

export const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
    position: "relative",
    background: `${theme.palette.textSecondary.main}20`,
    borderRadius: "1rem",
    maxWidth: "19.5rem",
    marginTop: "0.35rem",
    marginBottom: "0.35rem",
    marginLeft: "0.25rem",
    padding: "1rem",
  }));

export const StyledGenericContainer = styled(Container)({
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
});

export const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
    backgroundColor: theme.palette.textSecondary.main,
    color: "white",
}));

export const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
    backgroundColor: theme.palette.textSecondary.main
}));