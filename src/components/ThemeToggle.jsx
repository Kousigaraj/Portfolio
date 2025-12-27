import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer hover:bg-white/10 transition-colors relative"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? (
                    <Moon size={20} className="text-secondary" />
                ) : (
                    <Sun size={20} className="text-orange-500" />
                )}
            </motion.div>
        </button>
    );
};
