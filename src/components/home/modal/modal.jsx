import "./modal.css";

export default function Modal({ children, showModal, setShowModal }) {
  return (
    <div
      className={`modal ${showModal ? "showModal" : "hideModal"}`}
      onClick={() => setShowModal(!showModal)}
    >
      <div className="modal-content">{children}</div>
    </div>
  );
}
