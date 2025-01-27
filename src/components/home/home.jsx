import Header from "./header/Header";
import Cta from "./cta/Cta";
import "./Home.css";

import decore from "./assets/decore.png";

export default function Home() {
  return (
    <div className="home">
      <img src={decore} alt="decore" className="decore" />
      <Header />
      <Cta />
    </div>
  );
}
