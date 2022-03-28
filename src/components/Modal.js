import React from "react";
import styled from "styled-components";

// Functional component that returns a modal (dark background and white popup window)
function Modal({ children, show, onClose }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <ModalStyled className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={onClose}>Close</button>
      </section>
    </ModalStyled>
  );
}

export default Modal;

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  section {
    background-color: white;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 5px;
  }

  p {
    color: #11191f;
    font-weight: bold;
  }
`;
