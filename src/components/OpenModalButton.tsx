import { FC } from 'react';

export interface OpenModalButtonOwnProps {
  className?: string;
  children: React.ReactNode;
  modalId: string;
}
export const OpenModalButton: FC<OpenModalButtonOwnProps> = ({ className, children, modalId }) => {
  return (
    <button
      type="button"
      className={`${className}`}
      data-bs-toggle="modal"
      data-bs-target={`#${modalId}`}
    >
      {children}
    </button>
  );
};

OpenModalButton.displayName = 'OpenModalButton';
