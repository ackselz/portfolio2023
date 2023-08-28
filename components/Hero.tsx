import Image from "next/image";
import { hero } from "@/data";

const Hero = () => {
    return (
        <section className="flex flex-col sm:flex-row-reverse gap-6 items-center bg-primary-foreground rounded-lg p-6">
            {/* <Image
                src="https://illustrations.popsy.co/amber/cute-smiling-cat.svg"
                alt=""
                height={160}
                width={160}
                className="bg-white rounded-lg"
            /> */}
            <p className="text-xl text-foreground">{hero}</p>
        </section>
    );
};

export default Hero;
