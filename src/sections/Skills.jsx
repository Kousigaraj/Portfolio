import { motion } from "framer-motion";
import { Code, Server, Database } from "lucide-react";

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            icon: <Code size={30} className="text-primary" />,
            skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
        },
        {
            category: "Backend",
            icon: <Server size={30} className="text-primary" />,
            skills: ["Node.js", "Express.js", "Flask", "Java (Core)", "Python", "REST APIs"],
        },
        {
            category: "Database & Tools",
            icon: <Database size={30} className="text-primary" />,
            skills: ["MySQL", "MongoDB", "Git & GitHub", "VS Code", "Linux", "Postman"],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-background relative">
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
                    <p className="text-foreground/60"> Technologies I work with</p>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl group"
                        >
                            <div className="mb-6 bg-foreground/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-6">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-foreground/5 text-foreground/80 text-sm rounded-full border border-foreground/10 group-hover:border-primary/50 group-hover:text-primary transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
