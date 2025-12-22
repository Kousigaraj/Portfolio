import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Task Master Web App",
            description: "A responsive MERN stack task management application featuring authentication, sidebar navigation, and CRUD operations for efficient task organization.",
            tags: ["React (Vite)", "Bootstrap", "Node.js", "MongoDB", "Express", "Zustand"],
            github: "https://github.com/Kousigaraj/task-master",
            demo: "https://task-master-7uyt.onrender.com",
        },
        {
            title: "URL Shortener",
            description: "A full-stack MERN application that allows users to shorten long URLs. Features URL validation, unique short code generation, MongoDB persistence, and automatic redirection to the original URL.",
            tags: ["React (Vite)", "Material UI", "Node.js", "Express.js", "MongoDB"],
            github: "https://github.com/Kousigaraj/url-shortener",
            demo: "https://url-shortener-m7qw.onrender.com",
        },
        {
            title: "Smart Irrigation System",
            description: "IoT-based smart irrigation system with separated frontend and backend. Uses sensor data and backend logic to enable efficient and automated water management in agriculture.",
            tags: ["IoT", "React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            github: "https://github.com/Kousigaraj/smart-irrigation-backend",
            demo: "https://smart-irrigation-vrt.netlify.app/",
        },
        {
            title: "Event Scheduling & Resource Allocation System",
            description: "Flask-based event scheduling and resource management system with conflict detection, multi-resource allocation, and utilization reporting.",
            tags: ["Python", "Flask", "MySQL", "SQLAlchemy", "HTML", "CSS", "Bootstrap"],
            github: "https://github.com/Kousigaraj/event-scheduling-resource-allocation-system",

        }
    ];

    return (
        <section id="projects" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
                    <div className="w-16 h-1 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-xl overflow-hidden group"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-foreground/5 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors text-foreground/60">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                                            <Github size={20} />
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-foreground/70 mb-6 line-clamp-3 text-sm leading-relaxed grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/Kousigaraj?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground border-b border-primary pb-1 hover:text-primary transition-colors">
                        View all projects on GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
