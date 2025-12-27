import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import Alert from "../components/Alert";

const Contact = () => {
    const formId = "xqazjwbn";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ message, type });
    };

    const closeAlert = () => {
        setAlert(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
            _subject: "Portfolio Inquiry",
        };
        try {
            await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            setName("");
            setEmail("");
            setMessage("");
            showAlert("Message sent successfully!", "success");
        } catch (error) {
            console.error("Error submitting form:", error);
            showAlert("Failed to send message. Please try again.", "error");
        }
    };

    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            <AnimatePresence>
                {alert && (
                    <Alert
                        message={alert.message}
                        type={alert.type}
                        onClose={closeAlert}
                    />
                )}
            </AnimatePresence>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
                    {/* <p className="text-foreground/60">Have a project in mind or just want to say hi?</p> */}
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-foreground">Let's Connect</h3>
                        <p className="text-foreground/70 leading-relaxed">
                            I'm always open to discussing web development work, internship opportunities, or partnerships. Feel free to reach out through any of the following platforms.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:kousigaraj77@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                                <div className="w-12 h-12 bg-foreground/5 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/60">Email Me</p>
                                    <p className="font-medium">kousigaraj77@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-foreground/80 group">
                                <div className="w-12 h-12 bg-foreground/5 rounded-lg flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/60">Location</p>
                                    <p className="font-medium">Sathyamangalam, Erode, TN</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-foreground/10">
                            <p className="text-foreground/60 mb-4">Follow me on</p>
                            <div className="flex gap-4">
                                <a href="https://linkedin.com/in/kousigaraj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:bg-foreground hover:text-background transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/Kousigaraj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:bg-foreground hover:text-background transition-all">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:outline-none focus:border-primary/50 text-foreground placeholder-foreground/30 transition-colors"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:outline-none focus:border-primary/50 text-foreground placeholder-foreground/30 transition-colors"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:outline-none focus:border-primary/50 text-foreground placeholder-foreground/30 transition-colors resize-none"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary cursor-pointer text-background font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
