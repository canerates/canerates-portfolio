import {
    TimelineContent,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { Typography, styled } from "@mui/material";
import { StyledTimelineContent, StyledTimelineDot, StyledTimelineConnector } from "./Generic";

const StyledCardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem !important",
    fontWeight: "600",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.1rem !important",
    },
}));

const StyledCardSchoolText = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem !important",
    fontWeight: "400",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem !important",
    },
}));

const StyledCardDateText = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem !important",
    fontWeight: "400",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem !important",
    },
}));

const StyledLocationText = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem !important",
    fontWeight: "400",
    fontStyle: "italic",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem !important",
    },

}));

const EducationCard = ({ education, isLastCard }) => {
    return (
        <TimelineItem >
            <TimelineSeparator sx={{ marginLeft: "17px" }} >
                <StyledTimelineDot />
                {!isLastCard && <StyledTimelineConnector sx={{ height: 100 }} />}
            </TimelineSeparator>
            <TimelineContent>
                <StyledCardTitle>{education.major}</StyledCardTitle>
                <StyledCardSchoolText>{education.school}</StyledCardSchoolText>
                <StyledCardDateText>{education.startDate} - {education.endDate}</StyledCardDateText>
                <StyledLocationText>{education.location}</StyledLocationText>
            </TimelineContent>
        </TimelineItem>
    )
}

export default EducationCard