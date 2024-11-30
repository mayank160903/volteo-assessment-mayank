import React from "react";
import Form from "./Form";

const Modal = ({ show, onClose, addTask }) => {
  // Modal to Open add-task-form
  return (
    show && (
      <div className="fixed rounded-2xl border border-gray-800 border-double cursor-default right-20 top-1/4 w-1/6 h-1/2 justify-center flex items-center text-black bg-white z-10">
        <div className="relative">
          <button
            className="bg-gray-700 rounded-xl mb-10 px-3 text-white hover:bg-red-500"
            onClick={onClose}
          >
            x Close
          </button>
          <p className="text-black mx-10 pb-2">Add new Task</p>
          <Form addTask={addTask} />
        </div>
      </div>
    )
  );
};

export default Modal;
