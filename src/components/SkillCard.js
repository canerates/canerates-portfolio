import { styled, Typography } from "@mui/material"
import { Hexagon } from "react-honeycomb"

const StyledHexagon = styled(Hexagon)(({ theme }) => ({
    backgroundColor: `${theme.palette.backgroundSecondary.main}70`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.1)",
        backgroundColor: `${theme.palette.backgroundSecondary.main}90`,
    },
}));

const StyledHexagonText = styled(Typography)(({ theme }) => ({
    color: theme.palette.textMain.main,
    fontSize: "1rem !important",
    fontWeight: "400",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.1)",
    },
}));


const SkillCard = ( { skill }) => {
    return (
        <StyledHexagon>
            <StyledHexagonText>{skill}</StyledHexagonText>
        </StyledHexagon>
    )
}

export default SkillCard