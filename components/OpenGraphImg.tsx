import Image from "next/image";
import portraitPic from "../public/assets/portrait.png";
import { hero } from "@/data";

const OpenGraphImg = () => {
    return (
        <div className="w-[1200px] h-[630px] grid grid-cols-[1fr_auto] place-items-center px-12">
            <div className="flex flex-col gap-6">
                <p className="text-6xl text-primary">shaochong.dev</p>
                <p className="text-6xl">Shao Chong Tan</p>
                <p className="text-4xl text-muted-foreground">{hero}</p>
            </div>
            <div className="rounded-full h-96 w-96 bg-primary-foreground border border-primary overflow-hidden flex justify-center">
                <Image src={portraitPic} alt="" className="object-cover" />
            </div>
        </div>
    );
};

export default OpenGraphImg;
