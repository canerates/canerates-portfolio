import { styled, Typography } from "@mui/material"
import { Hexagon } from "react-honeycomb"

const StyledHexagon = styled(Hexagon)(({ theme, isInked }) => ({
    // backgroundColor: `${isInked ? theme.palette.buttonHover.main : theme.palette.backgroundSecondary.main }70`,
    backgroundImage: `${isInked ? theme.palette.skillCard.backgroundImageInked : theme.palette.skillCard.backgroundImage }`,
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
    color: theme.palette.textMain.main,
    fontSize: "1rem !important",
    fontWeight: "400"
}));


const SkillCard = ( { skill }) => {
    return (
        <StyledHexagon isInked={skill.isInked} >
            <StyledHexagonText>{skill.title}</StyledHexagonText>
        </StyledHexagon>
    )
}

export default SkillCard