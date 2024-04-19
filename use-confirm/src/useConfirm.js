import React, { useState, useRef } from "react";

const useConfirm = () => {
  const awaitingPromiseRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);
  const [content, setContent] = useState("Are you sure you want to delete?");

  const triggerConfirm = () => {
    setShowDialog(true);
    setContent(content);
    return new Promise((resolve) => {
      console.log(resolve);
      awaitingPromiseRef.current = resolve;
      // console.log(awaitingPromiseRef.current);
    });
  };

  const ConfirmDialog = () => {
    const handleOK = () => {
      awaitingPromiseRef.current(false);
      setShowDialog(false);
    };

    const handleCancel = () => {
      awaitingPromiseRef.current(true);
      setShowDialog(false);
    };

    return (
      <>
        {showDialog ? (
          <div className="modal">
            <div className="modal-header"></div>
            <div className="modal-body">
              <h3>{content}</h3>
            </div>

            <div className="modal-footer">
              <button onClick={handleOK}>Ok</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : null}
      </>
    );
  };
  return { triggerConfirm, ConfirmDialog };
};

export default useConfirm;
