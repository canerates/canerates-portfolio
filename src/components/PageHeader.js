import { styled, Typography } from "@mui/material";

const isFirefox = /Firefox/i.test(navigator.userAgent);

export const StyledPageHeaderTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold !important",
    color: theme.palette.text.primary,
    fontSize: "clamp(32px, 4vw, 56px) !important",
    textAlign: isFirefox ? "-moz-center" : "-webkit-center",
    animation: "fadeInUp",
    animationDuration: "1s",
}));

export const StyledPageHeaderDivider = styled("div")(({ theme }) => ({
    height: "0.4rem",
    width: "5rem",
    borderRadius: "2rem",
    margin: "1rem",
    background: theme.palette.text.secondary,
}));

export const StyledPageHeaderSubText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
    animation: "fadeInUp",
    animationDuration: "1s",
}));

const PageHeader = ({title, subText}) => {
    return (
        <>
            <StyledPageHeaderTitle component="h1">
                {title}
                <StyledPageHeaderDivider />
            </StyledPageHeaderTitle>
            <StyledPageHeaderSubText component="h1">
                {subText}
            </StyledPageHeaderSubText>
        </>
    )
}

export default PageHeader