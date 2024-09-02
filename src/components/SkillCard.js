import { Typography, styled, Box } from "@mui/material"

const StyledSkillCardContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "4rem",
    height: "4rem",
    backgroundColor: "#4A90FA",
    margin: "0.3em 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "center",
    borderRadius: "2rem",
    "&:nth-child(5n + 1)": {
        marginTop: "2.6rem",
    },

}));


const SkillCard = () => {
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            <StyledSkillCardContainer > 
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>
            <StyledSkillCardContainer>
                <Typography>Test</Typography>
            </StyledSkillCardContainer>

        </Box>

    )
}

export default SkillCard