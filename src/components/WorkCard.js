import React, { useState } from 'react';
import {
  TimelineContent,
  TimelineItem,
  TimelineSeparator
} from "@mui/lab";
import { Typography, styled, Link } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { StyledTimelineContent, StyledTimelineDot, StyledTimelineConnector } from "./Generic";

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem !important",
  fontWeight: "600",
  color: theme.palette.text.primary,
  marginTop: "0.25rem",
  marginBottom: "0.25rem",
  position: 'relative',
  display: 'inline-block',
  paddingBottom: '0.1rem',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '0.15rem',
    backgroundColor: theme.palette.text.primary,
    transform: 'scaleY(1.2)',
    transformOrigin: 'left bottom',
  },
}));

const StyledCardCompanyText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem !important",
  fontWeight: "500",
  color: theme.palette.text.primary,
}));

const StyledCardDateText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem !important",
  fontWeight: "400",
  fontStyle: "italic",
  color: theme.palette.text.primary,

}));

const StyledLocationText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  fontWeight: "400",
  fontStyle: "italic",
  color: theme.palette.text.primary,

}));

const StyledTimeStamp = styled("span")({
  fontWeight: "600",
});

const StyledAchievementsContainer = styled("ul")(({ theme, expanded }) => ({
  maxHeight: expanded ? '20rem' : '0',
  opacity: expanded ? 1 : 0,
  overflow: 'hidden',
  transition: 'max-height 0.5s ease-out, opacity 0.5s ease-out',
  color: theme.palette.text.primary,
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
  '& li': {
    marginBottom: '0.5rem',
    fontSize: '2rem',
  },

}));

const StyledAchievementItem = styled(Typography)(({ theme }) => ({
  display: "list-item",
  fontSize: "1rem !important",
  fontWeight: "400",
  marginTop: "0.75rem",
  marginBottom: "0.75rem"
}));

const StyledAchievementLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginTop: "0.25rem"
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
              <StyledAchievementItem key={index}>
                {achievement.description}

                {achievement.link &&
                  <StyledAchievementLink
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {achievement.linkTitle}
                  </StyledAchievementLink>
                }

              </StyledAchievementItem>

            ))}
        </StyledAchievementsContainer>


      </TimelineContent>
    </TimelineItem>
  )
}

export default WorkCard