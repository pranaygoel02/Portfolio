import projects from "./projectsData";

const data = [
    {
        title: "Home",
        type: "link",
        url: "/",
    },
    {
        title: "About",
        type: "link",
        url: "/about",
    },
    {
        title: "Projects",
        items: Object.entries(projects)?.map(([query, project], i) => {
            return {
                title: project.name,
                type: "link",
                // cmd: {
                //     key: "Ctrl+Enter",
                //     onKeyPress: "push_to_action_stack"
                // },
                url: `/projects?q=${query}`,
                items: project.projects?.map(a => ({
                    title: a.title,
                    type: "link",
                    url: a.live
                })),
            };
        }),
    },
    {
        title: "Contact",
        type: "link",
        url: "/contact",
    }
];

export default data;
