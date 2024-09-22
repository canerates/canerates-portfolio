import { Typography, styled } from "@mui/material";
import "animate.css";
import { useInView } from "react-intersection-observer";

const StyledFooterRoot = styled("section")(({ theme }) => ({
    minHeight: "10vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: `${theme.palette.background.primary}99`,
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: theme.palette.text.primary,
  }));

const Footer = () => {

    const [footer, footerInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <StyledFooterRoot ref={footer}>
            <div
                style={
                    footerInView ? { visibility: "visible" } : { visibility: "hidden" }
                }
                className={footerInView ? "animate__animated animate__fadeInUp" : ""}
            >
                <StyledFooterText>© 2024 Caner Ates</StyledFooterText>
            </div>
        </StyledFooterRoot>

    )
}

export default Footer