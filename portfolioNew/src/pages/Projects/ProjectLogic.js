import { useCallback, useEffect, useState } from "react";
import { useProjectModal } from "../../context/projectModalContext";
// import client from "../../appwrite-config";
// import { Databases } from "appwrite";
import { useSearchParams } from "react-router-dom";

export const ProjectLogic = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const {
    handleProjectModalOpen,
    handleProjectModalClose,
    projectModalOpen,
    setProjectModalOpen,
    openId
  } = useProjectModal();

  const [projects, setProjects] = useState([]);

  // const getProjects = useCallback(async () => {
  //   try {
  //     const database = new Databases(client);
  //     const res = await database.listDocuments(
  //       import.meta.env.VITE_DB_ID,
  //       import.meta.env.VITE_PROJECTS_COLLECTION_ID,
  //     )
  //     console.log(res);
  //     setProjects(prev => res.documents);
  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // },[query])

  // useEffect(() => {
  //   getProjects();
  // },[getProjects])

  return {
    handleProjectModalOpen,
    handleProjectModalClose,
    projectModalOpen,
    setProjectModalOpen,
    openId,
    projects
  }
};
