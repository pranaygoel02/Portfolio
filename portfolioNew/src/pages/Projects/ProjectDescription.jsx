import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function ProjectDescription({ project }) {
    
    const theme = useTheme();
    
    return (
        <div
            className={`relative w-full ${
                theme ? "bg-dark" : "bg-white"
            } rounded-t-3xl shadow-lg flex flex-col overflow-auto p-6 md:p-8 pt-12 space-y-8`}
        >
            {/* <hr className='absolute top-2 rounded-full self-center bg-slate-300 w-20 h-1'></hr> */}
            <h2 className="text-neutral-50 font-bold text-4xl">{project?.title}</h2>
            <div className="flex flex-col-reverse md:flex-row gap-8 pb-8 md:pb-20 h-max">
                <div className="flex flex-col space-y-6 w-full">
                    {project?.description && <p>{project?.description}</p>}
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                        {
                            [
                                { to: project?.git, name: 'Github', Icon: BsGithub },
                                { to: project?.live, name: 'Live Site', Icon: BiLinkExternal },
                            ].map(({ to, name, Icon}) => {
                                if (!to) return null;
                                return (
                                    <Link
                                        className="flex p-2 gap-2 rounded-3xl text-white bg-black items-center text-2xl aspect-square sm:aspect-[3/2] lg:aspect-[2/1] text-center justify-center relative overflow-hidden"
                                        target={"_blank"}
                                        to={to}
                                    >
                                        <Icon className="absolute w-full text-gray-800 text-[5rem] md:text-[6rem]" />
                                        <p className="z-10 drop-shadow-2xl text-l">
                                            {name}
                                        </p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full space-y-4">
                    {
                        [
                            {label: 'Stack', content: project?.stack?.join(", ")},
                            {label: 'Implementations', content: project?.implementations?.join(", ")},
                            {label: 'Year', content: project?.year}
                        ]?.map(({ label, content }) => !content ? null : (
                            <div key={label}>
                                <label className="text-neutral-300 text-sm font-semibold">{label}</label>
                                <p
                                    className={`py-2 border-b ${
                                        theme && "border-neutral-800"
                                    } font-medium text-lg`}
                                >
                                    {content}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;
