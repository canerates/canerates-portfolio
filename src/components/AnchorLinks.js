import { styled } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MailIcon from "@mui/icons-material/Mail"
import AppleIcon from "@mui/icons-material/Apple"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"

const StyledAnchorLinksContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
        order: "2",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
        height: "auto",
      },

}));

const StyledAnchorLink = styled("a")(({ theme }) => ({
    "& svg": {
        fill: theme.palette.text.primary,
        padding: "0",
        width: "2.5rem",
        height: "2.5rem",
        marginTop: "0.5rem",
        transform: "scale(1)",
        transition: "transform 200ms",
    },
    "&:hover": {
        "& svg": {
            fill: theme.palette.text.secondary,
            transform: "scale(1.2)",
        },
    },
    [theme.breakpoints.down("md")]: {
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        marginTop: "0",
        width: "2rem",
        height: "2rem",
      },
}));

const AnchorLinks = () => {
    return (
        <StyledAnchorLinksContainer>
            <StyledAnchorLink
                href={"https://www.linkedin.com/in/canerates"}
                target="_blank"
            >
                <LinkedInIcon />
            </StyledAnchorLink>
            <StyledAnchorLink
                href={"https://github.com/canerates"}
                target="_blank"
            >
                <GitHubIcon />
            </StyledAnchorLink>
            <StyledAnchorLink
                href={"https://apps.apple.com/developer/caner-ates/id1735282034"}
                target="_blank"
            >
                <AppleIcon />
            </StyledAnchorLink>
            
            <StyledAnchorLink
                href={"https://www.instagram.com/cnrates"}
                target="_blank"
            >
                <InstagramIcon />
            </StyledAnchorLink>

            <StyledAnchorLink
                href={"https://www.facebook.com/cnrates"}
                target="_blank"
            >
                <FacebookIcon />
            </StyledAnchorLink>

            <StyledAnchorLink
                href={"mailto:cnrates@gmail.com"}
                target="_blank"
            >
                <MailIcon />
            </StyledAnchorLink>
            
        </StyledAnchorLinksContainer>

    )
}

export default AnchorLinks