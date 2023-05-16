import React from 'react';
import Button from '../Button/Button';
import './ErrorModule.css';
import ReactDOM from 'react-dom';

const Backdrop = ({ onConfirm }) => {
  return <div className='backdrop' onClick={onConfirm} />;
};

const OverlayModal = ({ title, message, onConfirm }) => {
  return (
    <div className='modal'>
      <header className='header'>
        <h2>{title}</h2>
      </header>
      <div className='contents'>
        <div className='content'>
          <p>{message}</p>
        </div>
        <footer className='actions'>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModule = ({ title, message, onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={title}
          message={message}
          onConfirm={onConfirm}
        />,
        document.getElementById('overlay-modal-root')
      )}
    </>
  );
};

export default ErrorModule;
