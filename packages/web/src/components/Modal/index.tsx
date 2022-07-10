import ReactDom from 'react-dom';
import { ModalProps } from '../../types';
import Button from '../Button';

function ConfirmModal({
  title,
  description,
  cancelButtonText,
  confirmButtonText,
  closeModal,
  onCancel,
  onConfirm,
}: ModalProps) {
  const confirmHandler = () => {
    onConfirm();
    closeModal();
  };

  const cancelHandler = () => {
    if (onCancel) {
      onCancel();
    }
    closeModal();
  };

  const modalElement = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col content-center justify-between rounded-md bg-white p-5 w-full max-w-[500px] h-full max-h-[200px]">
        <div>
          <h4 className="text-2xl">{title}</h4>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="flex justify-end">
          <Button onClick={cancelHandler}>{cancelButtonText}</Button>
          <span className="w-2" />
          <Button onClick={confirmHandler}>{confirmButtonText}</Button>
        </div>
      </div>

    </div>
  );
  return (
    <>
      {ReactDom.createPortal(modalElement, document.getElementById('modal')!)}
    </>
  );
}

export default ConfirmModal;
