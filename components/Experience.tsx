import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

import { experiences } from "@/data";
import { cn } from "@/lib/utils";

const Experience = () => {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Work Experience
            </h2>
            <div className="">
                {experiences.map((experience, index) => {
                    return (
                        <div
                            key={experience.start}
                            className="flex flex-row gap-6 justify-start"
                        >
                            <div className="sm:flex flex-col items-center hidden">
                                <div className="border-[0.5px]  w-0 h-6"></div>
                                <Avatar
                                    className={cn(
                                        "h-16 w-16 rounded-lg border shadow-sm place-self-center",
                                        `p-${experience.image.padding}`,
                                        experience.image.colour
                                    )}
                                >
                                    <AvatarImage
                                        src={experience.image.url}
                                        alt={`${experience.company} logo`}
                                        className="object-contain"
                                    />
                                </Avatar>
                                <div className="border-[0.5px] w-0 h-full"></div>
                            </div>
                            <Card
                                className={cn(
                                    "w-full transition ease-in-out duration-300 hover:border-primary hover:bg-primary-foreground hover:-translate-y-0.5 motion-reduce:transform-none",
                                    index != experiences.length - 1
                                        ? "mb-6"
                                        : ""
                                )}
                            >
                                <CardHeader className="pb-2">
                                    <CardTitle className="break-normal leading-2 text-xl">
                                        <a
                                            className="text-primary underline"
                                            href={experience.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {experience.company}
                                        </a>
                                        <span>,&nbsp;</span>
                                        <span className="block sm:inline ">
                                            {experience.role}
                                        </span>
                                    </CardTitle>
                                    <CardDescription>
                                        {experience.start} — {experience.end}{" "}
                                        &nbsp;•&nbsp; {experience.location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="[&>li]:mt-2">
                                        {experience.desc.map((line, index) => {
                                            return <li key={index}>{line}</li>;
                                        })}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
