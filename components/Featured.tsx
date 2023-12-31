interface FeaturedProps {
    name: string;
    desc: string;
    link: string;
}

const Featured = ({ name, desc, link }: FeaturedProps) => {
    return (
        <a
            href={link}
            className="group grid rounded-lg border px-5 py-4 transition-colors ease-in-out duration-300 hover:border-primary hover:bg-primary-foreground bg-background"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                {name}{" "}
                <span className="inline-block transition-transform ease-in-out duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 text-sm opacity-50 `}>{desc}</p>
        </a>
    );
};

export default Featured;
