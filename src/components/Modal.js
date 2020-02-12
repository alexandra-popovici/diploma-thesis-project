import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/Modal.css'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" id="modal" onClick={props.onDismiss}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal-root')
    );
};

export default Modal;
