import { awards } from "@/data";

const Awards = () => {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Awards
            </h2>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                {awards.map((award) => {
                    return (
                        <li key={award.name}>
                            <p>
                                <span className="text-muted-foreground">
                                    {award.year}
                                </span>
                                &nbsp;—&nbsp;
                                <span className="text-primary font-bold">
                                    {award.award}
                                </span>
                                &nbsp;—&nbsp;
                                {award.link ? (
                                    <a
                                        href={award.link ? award.link : ""}
                                        className="text-primary font-bold underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {award.name}
                                    </a>
                                ) : (
                                    <span className="text-primary font-bold underline">
                                        {award.name}
                                    </span>
                                )}
                                <br /> {award.desc}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Awards;
