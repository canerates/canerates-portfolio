
import * as Scroll from "react-scroll"
import { useInView, InView } from "react-intersection-observer"
import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import PageHeader from "../components/PageHeader";

const Experience = () => {

  const [experienceContainer, experienceContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Experience">
      <StyledGenericRoot ref={experienceContainer}>
        <StyledGenericContainer
          sx={
            experienceContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            experienceContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <PageHeader title="Experience" subText="I have eight years of experience in software development including four years of solid background in web development, and four years of continuous growth and deep passion for iOS development." />
        </StyledGenericContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  )
}

export default Experience