import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-foreground/80 leading-relaxed"
                    >
                        <p>
                            I'm a Final-year B.E. Computer Science and Engineering student at <strong className="text-foreground">KGISL Institute of Technology</strong>, with a strong foundation in <strong className="text-foreground">programming, data structures, algorithms, and databases</strong>.
                        </p>
                        <p>
                            My academic journey began with a Diploma in Agricultural Technology, but my passion for technology led me to transition into <strong className="text-foreground">Computer Science</strong>. Today, I am actively strengthening my skills in the <span className="text-primary">MERN Stack</span> and enjoy building <strong className="text-foreground">responsive, user-friendly web applications</strong>.
                        </p>
                        <p>
                            I am continuously expanding my knowledge in <strong className="text-foreground">software development</strong> and <strong className="text-foreground">modern web frameworks</strong>, with the goal of contributing to <strong className="text-foreground">innovative and scalable software solutions</strong>.
                        </p>
                    </motion.div>

                    {/* Right: Abstract Visual or Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass p-8 rounded-2xl relative overflow-hidden"
                    >
                        {/* <div className="absolute top-0 right-0 p-4 opacity-10">
                            <div className="text-9xl font-bold text-foreground">01</div>
                        </div> */}
                        <h3 className="text-xl font-semibold text-foreground mb-6">Education</h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1 sm:gap-0">
                                    <span className="text-foreground font-medium">B.E. Computer Science and Engineering</span>
                                    <span className="text-primary text-sm">2023 - 2026</span>
                                </div>
                                <p className="text-sm text-foreground/60">KGISL Institute of Technology</p>
                            </div>
                            <div className="w-full h-px bg-foreground/10"></div>
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1 sm:gap-0">
                                    <span className="text-foreground font-medium">Diploma in Agricultural Technology</span>
                                    <span className="text-primary text-sm">2020 - 2022</span>
                                </div>
                                <p className="text-sm text-foreground/60">Sakthi Polytechnic College</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
