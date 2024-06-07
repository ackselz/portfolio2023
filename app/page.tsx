import About from "@/components/About";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import OpenGraphImg from "@/components/OpenGraphImg";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-row justify-center">
            <div className="max-w-5xl">
                <Nav />
                <div className="flex flex-col gap-6 px-8">
                    <Hero />
                    <Separator />
                    <About />
                    <Separator />
                    {/* <Education />
                    <Separator /> */}
                    <Experience />
                    <Separator />
                    <Projects />
                    <Separator />
                    <Awards />
                    <Separator />
                    {/* <Skills /> */}
                </div>
                <Footer />
            </div>
        </main>
    );
}
