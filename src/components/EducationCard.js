import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";

const EducationCard = ({education}) => {
    return (
        <TimelineItem>
            <TimelineSeparator sx={{marginLeft: "12px"}} >
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>{education.major}</Typography>
                <Typography>{education.school}</Typography>
                <Typography>{education.startDate} - {education.endDate}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default EducationCard