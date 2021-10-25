import { useRef, useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import { Context } from "../../context/ContextProvider";

const Modal = (props) => {
  const modalRef = useRef();
  const { loginModalHandler } = useContext(Context);
  const backgroundCloseHandler = (e) => {
    if (modalRef.current === e.target) loginModalHandler();
  };
  const closeButtonHandler = () => {
    console.log(1);
    loginModalHandler();
  };
  const portalPlace = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="modal__background"
          ref={modalRef}
          onClick={backgroundCloseHandler}
        >
          <div className="modal__wrapper">
            <div className="modal__context">{props.children}</div>
            <div className="closeButton" onClick={closeButtonHandler}>
              <IoMdClose className="closeIcon" size={20} />
            </div>
          </div>
        </div>,
        portalPlace
      )}
    </>
  );
};

export default Modal;
