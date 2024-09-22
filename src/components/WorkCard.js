import React, { useState, useEffect, useRef } from "react";
import {
  TimelineContent,
  TimelineItem,
  TimelineSeparator
} from "@mui/lab";
import { Typography, styled, Link } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledTimelineDot, StyledTimelineConnector } from "./Generic";

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem !important",
  fontWeight: "600",
  color: theme.palette.text.primary,
  marginTop: "0.25rem",
  marginBottom: "0.25rem",
  position: 'relative',
  display: 'inline-block',
  paddingBottom: '0.1rem',
  transition: "transform 150ms ease-in-out 0s !important",
  "&:hover": {
    transform: "translateX(4px)",
    color: theme.palette.text.secondary,
  },
  "&::after": {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '0.15rem',
    backgroundColor: theme.palette.text.secondary,
    transform: 'scaleY(1.2)',
    transformOrigin: 'left bottom'
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem !important",
  },
}));

const StyledCardCompanyText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem !important",
  fontWeight: "500",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem !important",
  },
}));

const StyledCardDateText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem !important",
  fontWeight: "400",
  fontStyle: "italic",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem !important",
  },

}));

const StyledLocationText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  fontWeight: "400",
  fontStyle: "italic",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem !important",
  },

}));

const StyledTimeStamp = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem !important",
  fontWeight: "600",
  fontStyle: "italic",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem !important",
  },

}));

const StyledAchievementsContainer = styled("ul")(({ theme, expanded, maxHeight }) => ({
  maxHeight: expanded ? maxHeight : '0',
  opacity: expanded ? 1 : 0,
  overflow: 'hidden',
  transition: 'max-height 0.5s ease-out, opacity 0.5s ease-out',
  color: theme.palette.text.primary,
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
  '& li': {
    marginBottom: '0.5rem',
  },
  [theme.breakpoints.down("sm")]: {

    listStyleType: 'none',
    paddingLeft: '0.25rem',
  },

}));

const StyledAchievementItem = styled(Typography)(({ theme }) => ({
  display: "list-item",
  fontSize: "1rem !important",
  fontWeight: "400",
  marginTop: "0.75rem",
  marginBottom: "0.75rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem !important",
  },
}));

const StyledAchievementLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginTop: "0.25rem",
  textDecorationColor: theme.palette.text.secondary,
  color: theme.palette.text.secondary,
  transition: "transform 150ms ease-in-out 0s !important",
  "&:hover": {
    transform: "translateX(4px)",
    color: theme.palette.text.secondary,
  },
}));

const StyledDetailButton = styled("a")(({ theme }) => ({
  display: "inline-block",
  cursor: "pointer",
  textDecoration: "none",
  marginTop: "1rem",
  marginBottom: "1rem",
  "& p": {
    borderRadius: "8px !important",
    padding: "0.25rem 0.5rem",
    fontSize: "0.85rem",
    backgroundColor: theme.palette.button.backgroundPrimary + " !important",
    color: theme.palette.button.foregroundPrimary,
    transition: "transform 150ms ease-in-out 0s !important",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
}));


const WorkCard = ({ work, isLastCard }) => {

  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      setMaxHeight(expanded ? `${scrollHeight}px` : '0px');
    }
  }, [expanded]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <TimelineItem>
      <TimelineSeparator sx={{ marginLeft: "8px" }}>
        <StyledTimelineDot onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {expanded ? <ExpandMoreIcon fontSize="small" /> : <ChevronRightIcon fontSize="small" />}
        </StyledTimelineDot>
        {!isLastCard && <StyledTimelineConnector sx={{ height: 80 }} />}
      </TimelineSeparator>
      <TimelineContent>
        <StyledCardTitle onClick={handleToggle} style={{ cursor: 'pointer' }}>{work.title}</StyledCardTitle>
        <StyledCardCompanyText>{work.company}</StyledCardCompanyText>
        <StyledCardDateText>
          {work.startDate} - {work.endDate}

        </StyledCardDateText>

        <StyledLocationText>{work.location && work.location}</StyledLocationText>
        {work.timeStamp &&
          <StyledTimeStamp> {work.timeStamp}</StyledTimeStamp>
        }

        <StyledDetailButton
          onClick={handleToggle}
          style={{ cursor: 'pointer' }}
        >
          <Typography>{expanded ? "See less" : "See more"}</Typography>
        </StyledDetailButton>

        <StyledAchievementsContainer ref={containerRef} expanded={expanded} maxHeight={maxHeight}>
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