import Link from "next/link";
import { Button } from "@/components/ui/button";
import { links } from "@/data";

const Nav = () => {
    return (
        <nav className="flex flex-col md:flex-row items-center justify-between py-4 px-8 gap-2">
            <p className="scroll-m-20 text-3xl tracking-tight underline decoration-primary text-nowrap">
                Shao Chong Tan
            </p>
            <ul className="flex flex-row gap-2 justify-center items-center flex-wrap">
                {links.map((link) => {
                    return (
                        <li key={link.name} className="">
                            <Button variant="link" className="text-foreground">
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.name}
                                </Link>
                            </Button>
                        </li>
                    );
                })}
                <li>
                    <Button asChild>
                        <Link
                            href="/assets/ShaoChong_Tan_Resume_Public.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </Link>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
