import Featured from "./Featured";

import { projects } from "@/data";

const Projects = () => {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Projects
            </h2>
            <div className="grid sm:grid-cols-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 gap-2">
                {projects
                    .filter((project) => project.feat)
                    .map((project) => {
                        return (
                            <Featured
                                key={project.name}
                                name={project.name}
                                desc={project.desc}
                                link={project.link}
                            />
                        );
                    })}
            </div>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                {projects.map((project) => {
                    return (
                        <li key={project.name}>
                            <p>
                                <span className="text-muted-foreground">
                                    {project.year}
                                </span>
                                &nbsp;—&nbsp;
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        className="text-primary font-bold underline"
                                        target="_blank"
                                    >
                                        {project.name}
                                    </a>
                                ) : (
                                    <span className="text-primary font-bold underline">
                                        {project.name}
                                    </span>
                                )}
                                : {project.desc}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Projects;
