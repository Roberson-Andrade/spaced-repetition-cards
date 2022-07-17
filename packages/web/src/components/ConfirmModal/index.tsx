import ReactDom from "react-dom";
import { ModalProps } from "../../types";
import Button from "../Button";

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
    if (onConfirm) {
      onConfirm();
    }
    closeModal();
  };

  const cancelHandler = () => {
    if (onCancel) {
      onCancel();
    }
    closeModal();
  };

  const modalElement = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex-center">
      <div className="flex flex-col gap-3 content-center justify-between rounded-md bg-white p-5 max-w-[500px] min-h-[200px] mx-5 text-slate-700">
        {typeof title !== "string" ? title : (
          <div>
            <h4 className="text-2xl">{title}</h4>
          </div>
        )}
        <div>
          <p>{description}</p>
        </div>
        <div className="flex justify-end">
          {cancelButtonText && <Button onClick={cancelHandler}>{cancelButtonText}</Button>}
          <span className="w-2" />
          <Button onClick={confirmHandler}>{confirmButtonText}</Button>
        </div>
      </div>

    </div>
  );
  return (
    <>
      {ReactDom.createPortal(modalElement, document.getElementById("modal")!)}
    </>
  );
}

export default ConfirmModal;
