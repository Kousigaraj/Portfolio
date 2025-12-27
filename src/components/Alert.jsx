import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

const Alert = ({ message, type = "success", onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const isSuccess = type === "success";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl glass border w-[90%] md:w-auto max-w-md ${isSuccess
                ? "border-green-500/20 bg-green-500/10 text-green-500"
                : "border-red-500/20 bg-red-500/10 text-red-500"
                }`}
        >
            {isSuccess ? <CheckCircle size={20} className="shrink-0" /> : <AlertCircle size={20} className="shrink-0" />}
            <span className="font-medium text-foreground flex-1">{message}</span>
            <button
                onClick={onClose}
                className={`p-1 rounded-full bg-transparent hover:bg-foreground/5 transition-colors ${isSuccess ? "text-green-500" : "text-red-500"
                    }`}
            >
                <X size={16} />
            </button>
        </motion.div>
    );
};

export default Alert;
