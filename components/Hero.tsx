import Image from "next/image";
import { hero } from "@/data";

const Hero = () => {
    return (
        <section className="flex flex-col sm:flex-row-reverse gap-6 items-center bg-secondary rounded-lg p-6">
            <p className="text-lg font-semibold text-secondary-foreground text-balance text-center antialiased">{hero}</p>
        </section>
    );
};

export default Hero;
