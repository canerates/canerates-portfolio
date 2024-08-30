import { styled, Container } from "@mui/material"
import { TimelineDot, TimelineConnector } from "@mui/lab";

export const StyledGenericRoot = styled("section")(({ theme }) => ({
    minHeight: "100vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
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