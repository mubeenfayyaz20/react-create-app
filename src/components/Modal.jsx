import React from "react";

const Modal = ({ show, modalTitle, description, close }) => {
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="calanderModal" onClick={(e) => e.stopPropagation()}>
            <div className="calanderModal-dialog" role="document">
              <div className="calanderModal-content">
                <div className="calanderModal-header">
                  <h5 className="calanderModal-title">{modalTitle}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="calanderModal"
                    aria-label="Close"
                    onClick={() => close()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="calanderModal-body">
                  <p>{description}</p>
                </div>
                <div className="calanderModal-footer">
                  {/* <button type="button" className="btn btn-primary">
                    Save changes
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="calanderModal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
