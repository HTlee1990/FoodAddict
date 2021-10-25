import "./Modal.scss";

const Background = (props) => {
  return <div className="modal__background">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Background>
      <div className="modal__container">{props.children}</div>
    </Background>
  );
};

export default Modal;
