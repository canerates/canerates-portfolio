import {
    TimelineContent,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { Typography, styled } from "@mui/material";
import { StyledTimelineDot, StyledTimelineConnector } from "./Generic";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const StyledCardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem !important",
    fontWeight: "600",
    color: theme.palette.textMain.main,
}));

const ExperienceCardHeader = ({ title }) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <StyledTimelineDot>
                    {title === "Working History"
                        ? <WorkIcon fontSize="large" />
                        : <SchoolIcon fontSize="large" />}
                </StyledTimelineDot>
                <StyledTimelineConnector sx={{ height: 30 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ marginTop: "12px" }}>
                <StyledCardTitle>{title}</StyledCardTitle>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperienceCardHeader