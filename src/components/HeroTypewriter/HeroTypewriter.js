import "./HeroTypewriter.scss";
import { TypeAnimation } from "react-type-animation";

const HeroTypewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hi! I'm MELDER. Let's Bring Minds Together", // Types 'One'
        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        },
      ]}
      speed={40}
      wrapper="div"
      cursor={true}
    //   repeat={None}
    style={{fontSize: "4rem", fontFamily: "Barlow", color:"white"}}
    />
  );
};

export default HeroTypewriter;
