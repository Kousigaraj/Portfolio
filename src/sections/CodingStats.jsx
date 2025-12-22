import { motion } from "framer-motion";
import { Code2, Terminal, Cpu } from "lucide-react";

const CodingStats = () => {
    const stats = [
        {
            platform: "LeetCode",
            role: "Problem Solving",
            solved: "50+",
            icon: <Code2 size={24} />,
            link: "https://leetcode.com/u/Kousigaraj/",
            color: "text-yellow-500",
            bg: "bg-yellow-500/10",
        },
        {
            platform: "HackerRank",
            role: "Problem Solving",
            solved: "3 Star",
            icon: <Terminal size={24} />,
            link: "https://www.hackerrank.com/profile/kousigaraj77",
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
        {
            platform: "HackerEarth",
            role: "Problem Solving",
            solved: "3+",
            icon: <Cpu size={24} />,
            link: "https://www.hackerearth.com/@kousigaraj77/",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
    ];

    return (
        <section className="py-10 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <motion.a
                            key={index}
                            href={stat.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-xl flex items-center justify-between hover:scale-105 transition-transform cursor-pointer group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{stat.platform}</h3>
                                    <p className="text-xs text-slate-400">{stat.role}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-secondary">{stat.solved}</p>
                                <p className="text-xs text-slate-500">Solved/Rank</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingStats;
