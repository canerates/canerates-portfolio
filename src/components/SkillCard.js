import { styled, Typography } from "@mui/material"
import { Hexagon } from "react-honeycomb"

const StyledHexagon = styled(Hexagon)(({ theme, isInked }) => ({
    backgroundImage: `${isInked ? theme.palette.skill.backgroundSecondary : theme.palette.skill.backgroundPrimary }`,
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: "scale(1.1)",
        opacity: "0.95"

    },
}));

const StyledHexagonText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "1.1rem !important",
    fontWeight: "600",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1rem !important"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem !important"
      },
    [theme.breakpoints.down("xxs")]: {
        fontSize: "0.7rem !important"
      },
}));


const SkillCard = ( { skill }) => {
    return (
        <StyledHexagon isInked={skill.isInked} >
            <StyledHexagonText>{skill.title}</StyledHexagonText>
        </StyledHexagon>
    )
}

export default SkillCard