import React from 'react';
import ReactDom from 'react-dom';

type FormModalProps = {
  children: React.ReactNode;
  open: boolean;
}

function FormModal({
  children,
  open,
}: FormModalProps) {
  if (!open) {
    return null;
  }

  const formModalElement = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col content-center justify-between rounded-md bg-white p-5 w-full max-w-[500px] h-full max-h-[300px] mx-5">
        {children}
      </div>
    </div>
  );
  return (
    <>
      {ReactDom.createPortal(formModalElement, document.getElementById('modal')!)}
    </>
  );
}

export default FormModal;
