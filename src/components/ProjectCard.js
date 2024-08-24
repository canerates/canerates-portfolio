import { Typography, styled } from "@mui/material"
import LaunchIcon from "@mui/icons-material/Launch"
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
  padding: "0rem 1rem",
  color: "white",
  textAlign: "left",
  [theme.breakpoints.down("lg")]: {
    transform: "none",
    padding: "1rem 1rem",
  },
}));
const StyledProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  fontWeight: "600",
}));
const StyledProjectsSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem !important",
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
  color: "black",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem !important",
  },
}));
const StyledProjectsOpenLink = styled("a")({
  color: "inherit",
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.5rem",
    marginRight: "0.5rem",
    transform: "none",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.15)",
    },
  },
});
const StyledProjectsAppStoreLink = styled("a")({
  color: "inherit",
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.5rem",
    transform: "scale(1)",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.15)",
    },
  },
});

const StyledProjectsYoutubeLink = styled("a")({
  color: "inherit",
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.5rem",
    marginLeft: "0.2rem",
    transform: "scale(1.4)",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.6)",
    },
  },
});

export const ProjectCard = ({ project }) => {
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
          {project.websiteLink && (
            <StyledProjectsOpenLink
              href={project.websiteLink}
              target="_blank"
            >
              <LaunchIcon />
            </StyledProjectsOpenLink>
          )}
          {project.appstoreLink && (
            <StyledProjectsAppStoreLink
              href={project.appstoreLink}
              target="_blank"
            >
              <AppStoreIcon />
            </StyledProjectsAppStoreLink>
          )}
          {project.youtubeLink && (
            <StyledProjectsYoutubeLink
              href={project.youtubeLink}
              target="_blank"
            >
              <YoutubeIcon />
            </StyledProjectsYoutubeLink>
          )}
        </StyledProjectsTextField>
      </>
  )
}
