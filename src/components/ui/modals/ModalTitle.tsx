import React from "react";

interface ModalTitleProps {
  title: string;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
  return (
    <h3 className="mb-6 heading-l text-base-dark dark:text-white">{title}</h3>
  );
};

export default ModalTitle;
