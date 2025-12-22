import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
    const certifications = [
        {
            title: "Introduction to Git and GitHub",
            issuer: "Coursera",
            date: "March 2025",
            desc: "Understanding the fundamentals of version control, setting up Git locally, working with GitHub, and collaborating effectively using remote repositories.",
            link: "https://coursera.org/share/8887ea9de04e1aebf0da092f31c0d5b2"
        },
        {
            title: "Jenkins for Beginners",
            issuer: "Coursera",
            date: "March 2025",
            desc: "Hands-on introduction to Jenkins covering CI/CD pipelines, software installation, configuration management, and continuous deployment using command-line tools.",
            link: "https://coursera.org/share/f82f4cd588869dc7cd5df4880317e9a9"
        },
        {
            title: "Front End Development Libraries",
            issuer: "freeCodeCamp",
            date: "January 2025",
            desc: "Course focused on teaching modern web development libraries and tools used to build webpages, including React, TypeScript, and more.",
            link: "https://www.freecodecamp.org/certification/fcc7837e0d0-2005-45f7-88cd-bbf6d7f789dc/front-end-development-libraries"
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "July 2023",
            desc: "Certification covering fundamentals of HTML, CSS, modern layouts, accessibility, and responsive web development through hands-on projects.",
            link: "https://www.freecodecamp.org/certification/fcc7837e0d0-2005-45f7-88cd-bbf6d7f789dc/responsive-web-design"
        },
    ];

    return (
        <section id="certifications" className="py-20 bg-background relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Award size={100} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                                <p className="text-sm font-medium text-secondary mb-4">{cert.issuer} • {cert.date}</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {cert.desc}
                                </p>

                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
