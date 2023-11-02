import React from "react";

import { ModalContainer, CalanderModal, CalanderModalFooter } from "./style";

const Modal = ({ modalTitle, description, close }) => {
  return (
    <>
      <ModalContainer onClick={close}>
        <CalanderModal onClick={(e) => e.stopPropagation()}>
          <div className="calanderModal-dialog" role="document">
            <div className="calanderModal-content">
              <div className="calanderModal-header">
                <h5 className="calanderModal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="calanderModal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="calanderModal-body">
                <p>{description}</p>
              </div>
              <CalanderModalFooter>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="calanderModal"
                  onClick={close}
                >
                  Close
                </button>
              </CalanderModalFooter>
            </div>
          </div>
        </CalanderModal>
      </ModalContainer>
    </>
  );
};

export default Modal;
