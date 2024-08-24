
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import PageHeader from "../components/PageHeader";

const About = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="About">
      <StyledGenericRoot ref={aboutContainer}>
        <StyledGenericContainer
          sx={
            aboutContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            aboutContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <PageHeader title="About Me" subText="Hey! I am Caner Ates. " />
        </StyledGenericContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  )

}

export default About