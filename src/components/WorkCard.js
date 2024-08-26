import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import { Typography } from "@mui/material";

const WorkCard = ({work}) => {
    return (
        <TimelineItem>
            <TimelineSeparator sx={{marginLeft: "12px"}} >
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>{work.title}</Typography>
                <Typography>{work.company}</Typography>
                <Typography>{work.startDate} - {work.endDate}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default WorkCard