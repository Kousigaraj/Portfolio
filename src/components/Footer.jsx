import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-background py-8 border-t border-foreground/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Kousigaraj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/kousigaraj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:kousigaraj77@gmail.com"
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-foreground/60 text-sm">
                    Designed & Built by <span className="text-primary">Kousigaraj P</span>
                </p>
            </div>
        </footer>
    );
};
