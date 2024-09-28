import { Typography, styled, useMediaQuery } from "@mui/material"
import LinkIcon from "@mui/icons-material/Link"
import AppStoreIcon from "@mui/icons-material/Apple"
import YoutubeIcon from "@mui/icons-material/YouTube"

const StyledProjectsImg = styled("img")(({ theme }) => ({
  transform: "scale(1.01)",
  height: "100%",
  width: "100%",
  position: "absolute",
  objectFit: "cover",
}));

const StyledProjectsTextField = styled("div")(({ theme }) => ({
  zIndex: "1000 !important",
  transition: "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
  transform: "none",
  opacity: "0",
  padding: "0rem 1rem !important",
  color: "white",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    transform: "none",
    padding: "0.5rem 1rem !important",
  },
}));
const StyledProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem !important",
  },
}));
const StyledProjectsSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem !important",
  },
}));

const StyledProjectsSkillContainer = styled("div")(({ theme }) => ({
  marginTop: "0.5rem",
  display: "flex",
  flexWrap: "wrap",
  rowGap: "0.4rem",
}));
const StyledProjectsSkillText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem !important",
  background: "white",
  marginRight: "0.5rem",
  padding: "0.1rem 0.4rem",
  borderRadius: "0.5rem",
  color: "#000",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem !important",
  },
}));

const StyledProjectsLinks = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "0.25rem"
}));

const StyledProjectsOpenLink = styled("a")(({ theme }) => ({
  color: theme.palette.project.button,
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.5rem",
    marginRight: "0.5rem",
    transform: "scale(1)",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.2)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    transform: "scale(1.3)",
    marginRight: "0.2rem",
  },
}));
const StyledProjectsAppStoreLink = styled("a")(({ theme }) => ({
  color: theme.palette.project.button,
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.25rem",
    transform: "scale(1)",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.2)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    transform: "scale(1.3)",
  },
}));

const StyledProjectsYoutubeLink = styled("a")(({ theme }) => ({
  color: theme.palette.project.button,
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.5rem",
    transform: "scale(1)",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.2)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    transform: "scale(1.3)",
  },
}));

export const ProjectCard = ({ project }) => {

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const iconSize = isSmallScreen ? "medium" : "large";

  return (
    <>
      <StyledProjectsImg
        alt={`Image of ${project.title}`}
        src={project.image}
        referrerPolicy="no-referrer"
      />
      <StyledProjectsTextField>
        <StyledProjectsTitle>{project.title}</StyledProjectsTitle>
        <StyledProjectsSubText>
          {project.description}
        </StyledProjectsSubText>
        <StyledProjectsSkillContainer>
          {project.skills.map((skill, index) => (
            <StyledProjectsSkillText key={index}>
              {skill}
            </StyledProjectsSkillText>
          ))}
        </StyledProjectsSkillContainer>
        <StyledProjectsLinks>

          {project.websiteLink && (
            <StyledProjectsOpenLink
              href={project.websiteLink}
              target="_blank"
            >

              <LinkIcon fontSize={iconSize} />
            </StyledProjectsOpenLink>
          )}
          {project.appstoreLink && (
            <StyledProjectsAppStoreLink
              href={project.appstoreLink}
              target="_blank"
            >
              <AppStoreIcon fontSize={iconSize} />
            </StyledProjectsAppStoreLink>
          )}

          {project.youtubeLink && (
            <StyledProjectsYoutubeLink
              href={project.youtubeLink}
              target="_blank"
            >
              <YoutubeIcon fontSize={iconSize} />
            </StyledProjectsYoutubeLink>
          )}

        </StyledProjectsLinks>
      </StyledProjectsTextField>
    </>
  )
}
