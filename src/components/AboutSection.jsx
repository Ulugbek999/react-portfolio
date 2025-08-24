

export const AboutSection = () => {


    return (
        <section id="about" className="py-24 px-24 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web and Mobile Developer 
                        </h3>
                        <p className="text-muted-foreground">
                            Graduating in Spring 2026 with four swe internship experience and with Honors from CSU as well as a part of the D1 Men's tennis team.
                        </p>
                        <p className="text-muted-foreground">
                            Another paragraph here <br/>
                            .....
                            ....
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get in touch
                            </a>
                            <a href="" className="cosmic-button">
                                {" "}
                                Download CV
                            </a>                            

                        </div>

                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}