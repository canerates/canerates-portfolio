import { React, useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.primary,
}));

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 2400);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
      <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 130"
          width="12rem"
          initial="hidden"
          animate="visible"
          
        >
          <motion.path
            d="M 208.40625 72.789062 L 250.070312 145.019531 L 296.121094 224.851562 L 297.21875 226.753906 L 340.804688 302.320312 L 299.183594 302.320312 L 255.59375 226.753906 L 208.445312 145.019531 L 161.300781 226.753906 L 79.160156 226.753906 C 66.734375 226.753906 55.453125 221.679688 47.285156 213.503906 C 39.121094 205.332031 34.050781 194.039062 34.050781 181.605469 L 34.050781 118.640625 C 34.050781 106.203125 39.121094 94.914062 47.285156 86.738281 C 55.453125 78.566406 66.738281 73.488281 79.160156 73.488281 L 168.367188 73.488281 L 147.464844 109.726562 L 79.160156 109.726562 C 76.730469 109.726562 74.507812 110.734375 72.882812 112.359375 C 71.261719 113.984375 70.253906 116.207031 70.253906 118.640625 L 70.253906 181.605469 C 70.253906 184.035156 71.261719 186.261719 72.882812 187.886719 C 74.507812 189.507812 76.730469 190.515625 79.160156 190.515625 L 140.496094 190.515625 Z M 208.40625 72.789062 "
            transform="scale(0.36)"
            fill="none"
            stroke={theme.palette.text.primary}
            strokeWidth="12"
            strokeLinecap="round"
            variants={pathVariants}
          />
        </motion.svg>
      {/* </div> */}
        
      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;

