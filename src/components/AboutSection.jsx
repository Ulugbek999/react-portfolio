import { Briefcase, Code, User }from 'lucide-react'

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
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/40 transition-colors duration-300" >
                                {" "}
                                Download CV
                            </a>                            
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-background p-4 card-hover gradient-border">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/30">
                                    <Code className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg text-primary'>Web Development</h4>
                                    <p className='text-muted-foreground text-primary'>
                                        Creating responsive website and mobile applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-4 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/30">
                                    <User className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg text-primary'>Full stack development</h4>
                                    <p className='text-muted-foreground text-primary'>
                                        Designing full-stack applications with Python, Flask, FastApi, React, React Native
                                    </p>
                                </div>                                
                            </div>                            
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/30">
                                    <Briefcase className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg text-primary'>Web Development</h4>
                                    <p className='text-muted-foreground text-primary'>
                                        Creating responsive website and mobile applications.
                                    </p>
                                </div>                                
                            </div>                            
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}