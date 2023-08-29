import Image from "next/image";
import portraitPic from "../public/assets/portrait.png";
import { about } from "@/data";

const About = () => {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                About
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 place-items-center">
                <div className="rounded-full h-48 w-48 bg-primary-foreground border border-primary overflow-hidden flex justify-center">
                    <Image
                        src={portraitPic}
                        alt="portrait"
                        className="object-cover"
                    />
                </div>
                <ul className="ml-6 list-disc [&>li]:mt-2">
                    {about.map((line, index) => {
                        return <li key={index}>{line}</li>;
                    })}
                </ul>
            </div>
        </section>
    );
};

export default About;
