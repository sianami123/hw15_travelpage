import "./Visuals.css";
import heroImage from "./assets/traveller.png";
import plane from "./assets/plane.svg";

export default function Visuals() {
  return (
    <div className="hero-image-container">
      <img
        src={heroImage}
        alt="Traveler with backpack"
        className="hero-image"
      />
      <img src={plane} alt="Plane" className="plane1" />
      <img src={plane} alt="Plane" className="plane2" />
    </div>
  );
}
