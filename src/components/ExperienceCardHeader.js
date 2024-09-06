import {
    TimelineContent,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { Typography, styled } from "@mui/material";
import { StyledTimelineDotStatic, StyledTimelineConnector } from "./Generic";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const StyledCardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem !important",
    fontWeight: "600",
    color: theme.palette.text.primary,
}));

const ExperienceCardHeader = ({ title }) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <StyledTimelineDotStatic>
                    {title === "Working History"
                        ? <WorkIcon fontSize="large" />
                        : <SchoolIcon fontSize="large" />}
                </StyledTimelineDotStatic>
                <StyledTimelineConnector sx={{ height: 30 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ marginTop: "12px" }}>
                <StyledCardTitle>{title}</StyledCardTitle>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperienceCardHeader