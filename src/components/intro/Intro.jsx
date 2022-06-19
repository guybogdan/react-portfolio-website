
import "./intro.scss";

import { useTypewriter  } from "react-simple-typewriter";

export default function Intro() {
  const textRef = ["Developer", "Designer", "Musician"];

    const {text} = useTypewriter({
    words: textRef,
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Ellie Bogdanov</h1>
          <h3>
            Freelance {" "}
            <span>
              {text}
              <span className="blink">|</span>
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
