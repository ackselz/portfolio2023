import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills, stacks } from "@/data";

const Skills = () => {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Technical stuff
            </h2>
            <Tabs defaultValue="experience" className="">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="stack">My Toolbox</TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                    <ul className="ml-6 list-disc [&>li]:mt-2">
                        {skills.map((text, index) => {
                            return (
                                <li key={index}>
                                    <p>{text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </TabsContent>
                <TabsContent
                    value="stack"
                    className="grid grid-cols-2 md:grid-cols-3"
                >
                    {stacks.map((stack) => {
                        return (
                            <ul key={stack.name} className="ml-6 [&>li]:mt-2">
                                <li className="text-primary font-bold">
                                    {stack.name}
                                </li>
                                <ul className="list-disc">
                                    {stack.skills.map((skill) => {
                                        return (
                                            <li key={skill}>
                                                <p>{skill}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ul>
                        );
                    })}
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default Skills;
