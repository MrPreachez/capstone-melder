import "./ResultTypewriter.scss";
import { TypeAnimation } from "react-type-animation";

const ResultTypewriter = (props) => {
    let {result} = props
  return (
    <TypeAnimation
      sequence={[
        result, 
        () => {
          console.log("Done typing!"); 
        },
      ]}
      speed={60}
      wrapper="div"
      cursor={true}
      className="typewriter__resultPage"
    // style={{fontSize: "2rem", fontFamily: "Barlow", color:"black"}}
    />
  );
};

export default ResultTypewriter;
