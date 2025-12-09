/* eslint-disable react/prop-types */
import React from "react";

function Modal({ children }) {
    return (
        <div className="wrapper">
            <div className="overlay"></div>
            <div className="content">{children}</div>
        </div>
    );
}

export default Modal;
