import { createContext, useContext, useState } from "react";

export const ProjectModalContext = createContext();

export const ProjectModalProvider = ({ children }) => {


    const [projectModalOpen, setProjectModalOpen] = useState(false);
    const [openId, setOpenId] = useState(null);

    const handleProjectModalOpen = (e) => {
        e.preventDefault();
        //console.log("ProjectModalOpen", e.target.parentNode.parentNode.id);
        setProjectModalOpen(true);
        setOpenId(e?.target?.id || e?.target?.parentNode?.id || e?.target?.parentNode?.parentNode?.id);
    }

    const handleProjectModalClose = (e) => {
        e.preventDefault();
        //console.log("ProjectModalClose", e);
        setProjectModalOpen(false);
        setOpenId(null)
    }

    const value = {
        handleProjectModalOpen, handleProjectModalClose, projectModalOpen, setProjectModalOpen, openId, setOpenId
    }

    return (
        <ProjectModalContext.Provider value={value}>
            {children}
        </ProjectModalContext.Provider>
    )
}

export const useProjectModal = () => {
    const context = useContext(ProjectModalContext);
    if (!context) {
        throw new Error("useProjectModal must be used within a ProjectModalProvider");
    }
    return context;
}
