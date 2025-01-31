import Header from "./header/Header";
import Cta from "./cta/Cta";
import SocialProof1 from "./social_proof1/SocialProof1";
import SocialProof2 from "./social_proof2/SocialProof2";
import "./Home.css";

import decore from "./assets/decore.png";

export default function Home() {
  return (
    <div className="home">
      <img src={decore} alt="decore" className="decore" />
      <Header />
      <Cta />
      <SocialProof1 />
      <SocialProof2 />
    </div>
  );
}
