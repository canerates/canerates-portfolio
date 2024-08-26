import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const ExperienceCardHeader = ({ title }) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot>
                    {title === "Working History"
                        ? <WorkIcon />
                        : <SchoolIcon />}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>{title}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperienceCardHeader