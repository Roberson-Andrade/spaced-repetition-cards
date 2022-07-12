/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import { ModalProps } from '../types';

type CreateModalOptions = Omit<ModalProps, 'closeModal'>
type UseModalReturn = [(JSX.Element | null), (options: CreateModalOptions) => void];

export const useConfirmModal = (): UseModalReturn => {
  const [modal, setModal] = useState<JSX.Element | null>(null);

  const closeModal = () => {
    setModal(null);
  };

  const createModal = (options: CreateModalOptions) => {
    setModal(ConfirmModal({ ...options, closeModal }));
  };

  return [modal, createModal];
};
