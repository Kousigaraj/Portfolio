import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-6"
        >
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

            <div className="max-w-4xl w-full text-center z-10 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
                        Hi, I'm <span className="text-primary">Kousigaraj P</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                        A <span className="text-foreground font-medium">Computer Science and Engineering student</span>{" "}
                        passionate about software development, problem-solving, and building real-world applications.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="group px-8 py-3 bg-primary text-background font-semibold rounded-full hover:bg-primary/90 transition-all cursor-pointer flex items-center gap-2 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-foreground/20 text-foreground font-medium rounded-full hover:border-primary/50 hover:bg-foreground/5 transition-all flex items-center gap-2"
                    >
                        Resume
                        <Download size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
