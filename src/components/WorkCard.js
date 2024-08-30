import React, { useState } from 'react';
import {
    TimelineContent,
    TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import { Typography, styled } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { StyledTimelineDot, StyledTimelineConnector } from "./Generic";

const StyledCardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem !important",
    fontWeight: "600",
    color: theme.palette.textMain.main,
}));

const StyledCardCompanyText = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem !important",
    fontWeight: "500",
    color: theme.palette.textMain.main,
}));

const StyledCardDateText = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem !important",
    fontWeight: "400",
    fontStyle: "italic",
    color: theme.palette.textMain.main,

}));

const StyledLocationText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem !important",
    fontWeight: "400",
    fontStyle: "italic",
    color: theme.palette.textMain.main,

}));

const StyledTimeStamp = styled("span")({
    fontWeight: "600",
});

const StyledAchievementsContainer = styled("div")(({ theme, expanded }) => ({
    color: theme.palette.textMain.main,
    maxHeight: expanded ? '15rem' : '0',
    opacity: expanded ? 1 : 0,
    overflow: 'hidden',
    transition: 'max-height 0.5s ease-out, opacity 0.5s ease-out',

}));

const StyledAchievementsItem = styled(Typography)(({ theme }) => ({
    marginTop: "0.5rem",
    marginLeft: "0.5rem",
    fontSize: "0.9rem !important",
    fontWeight: "400",
    color: theme.palette.textMain.main,
}));


const WorkCard = ({ work, isLastCard }) => {

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <TimelineItem>
            <TimelineSeparator sx={{ marginLeft: "8px" }}>
                <StyledTimelineDot onClick={handleToggle} style={{ cursor: 'pointer' }}>
                    {expanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                </StyledTimelineDot>
                {!isLastCard && <StyledTimelineConnector sx={{ height: 80 }} />}
            </TimelineSeparator>
            <TimelineContent>
                <StyledCardTitle onClick={handleToggle} style={{ cursor: 'pointer' }}>{work.title}</StyledCardTitle>
                <StyledCardCompanyText>{work.company}</StyledCardCompanyText>
                <StyledCardDateText>
                    {work.startDate} - {work.endDate}
                    {work.timeStamp &&
                        <>
                            <span> .</span>
                            <StyledTimeStamp> {work.timeStamp}</StyledTimeStamp>
                        </>
                    }
                </StyledCardDateText>
                <StyledLocationText>{work.location && work.location}</StyledLocationText>


                <StyledAchievementsContainer expanded={expanded}>
                    {work.achievements &&
                        work.achievements.map((achievement, index) => (
                            <StyledAchievementsItem key={index}>{achievement}</StyledAchievementsItem>
                        ))}
                </StyledAchievementsContainer>


            </TimelineContent>
        </TimelineItem>
    )
}

export default WorkCard