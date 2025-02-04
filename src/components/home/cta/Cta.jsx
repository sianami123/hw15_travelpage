import { FaPlay } from "react-icons/fa";
import Visuals from "../visuals/Visuals";
import "./Cta.css";

export default function Cta() {
  function handleFindMore() {}

  return (
    <div className="cta">
      <div className="cta-content">
        <span className="subtitle">BEST DESTINATIONS AROUND THE WORLD</span>
        <h1 className="title">
          Travel, enjoy
          <br />
          and live a new
          <br />
          and full life
        </h1>
        <p className="description">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="cta-buttons">
          <button className="find-more-btn" onClick={handleFindMore}>
            Find out more
          </button>
          <button className="play-demo-btn">
            <span className="play-icon">
              <FaPlay size={12} />
            </span>
            Play Demo
          </button>
        </div>
      </div>
      <Visuals />
    </div>
  );
}
