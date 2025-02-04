import Header from "./header/Header";
import Cta from "./cta/Cta";
import SocialProof1 from "./social_proof1/SocialProof1";
import SocialProof2 from "./social_proof2/SocialProof2";
import SubmitForm from "./submit_form/submit_form";
import Modal from "./modal/modal";
import "./Home.css";
import { useState } from "react";
import decore from "./assets/decore.png";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="home">
      <img src={decore} alt="decore" className="decore" />
      <Header />
      <Cta setShowModal={setShowModal} showModal={showModal} />
      <SocialProof1 />
      <SocialProof2 />
      <SubmitForm />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <SubmitForm />
      </Modal>
    </div>
  );
}
