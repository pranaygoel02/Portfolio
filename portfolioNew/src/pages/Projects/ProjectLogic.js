import { useState } from "react";
import { useProjectModal } from "../../context/projectModalContext";

export const ProjectLogic = () => {
  const {
    handleProjectModalOpen,
    handleProjectModalClose,
    projectModalOpen,
    setProjectModalOpen,
    openId
  } = useProjectModal();

  return {
    handleProjectModalOpen,
    handleProjectModalClose,
    projectModalOpen,
    setProjectModalOpen,
    openId
  }
};
