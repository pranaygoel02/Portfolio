import { useRef } from "react";
import Drawer from '../../components/Drawer';
import ProjectDescription from "./ProjectDescription";

function ProjectDrawer({ children, project, show, toggle }) {

    const containerRef = useRef(null);

    return (
        <Drawer
            showDrawer={show}
            toggleShowDrawer={toggle}
            containerRef={containerRef}
            withOverlay={true}
            snapPoints={[0, 25, 50, 75]}
            initialSnapPoint={50}
            maxDragOffset={250}
            defaultStyle={true}
        >
            <ProjectDescription project={project}/>
        </Drawer>
    );
}

export default ProjectDrawer;
