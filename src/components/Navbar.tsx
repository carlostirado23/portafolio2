import { useState } from "react";
import { Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const menuItems = [
    { id: "home", label: "Inicio", href: "#home" },
    { id: "about", label: "Sobre mí", href: "#about" },
    { id: "projects", label: "Proyectos", href: "#projects" },
    { id: "technologies", label: "Tecnologías", href: "#technologies" },
    { id: "contact", label: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    const handleNavClick = (id: string, href: string) => {
        setActiveLink(id);
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-5xl px-6 py-2 rounded-full shadow-lg bg-gray-100/30 dark:bg-dark-bg/30 backdrop-blur-md">
            {/* Nombre en desktop, icono animado en mobile */}
            <div className="flex items-center">
                {/* Desktop: Nombre */}
                <span className="hidden text-2xl font-bold select-none md:inline">
                    <span className="text-2xl font-bold text-transparent cursor-pointer bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text">
                        Carlos Tirado
                    </span>
                </span>
                {/* Mobile: Icono animado */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="inline md:hidden">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark">
                        <div className="flex items-center justify-center bg-white rounded-full w-9 h-9 dark:bg-dark-bg">
                            <Code2 size={28} className="text-primary" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Navegación Desktop */}
            <nav className="items-center hidden space-x-8 md:flex">
                {menuItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.id, item.href);
                        }}
                        className={`transition-colors duration-200 px-4 py-1 rounded-md font-semibold ${
                            activeLink === item.id
                                ? "bg-blue-300/50 text-blue-900 dark:bg-primary/30 dark:text-white"
                                : "text-blue-900 dark:text-white hover:bg-blue-200/40 dark:hover:bg-primary/10"
                        }`}>
                        {item.label}
                    </a>
                ))}
                <button
                    onClick={toggleTheme}
                    className="p-2 ml-2 text-gray-700 transition-all duration-300 bg-gray-100 rounded-full dark:bg-dark-card dark:text-gray-300 hover:bg-primary-light dark:hover:bg-primary/20">
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </nav>

            {/* Solo botón de tema en mobile */}
            <div className="flex items-center md:hidden">
                <button
                    onClick={toggleTheme}
                    className="p-2 text-gray-700 bg-gray-100 rounded-full dark:bg-dark-card dark:text-gray-300">
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </header>
    );
}
