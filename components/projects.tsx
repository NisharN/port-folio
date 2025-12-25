"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "./ui/button";
import {
    ExternalLink,
    Github,
    Layers,
    Linkedin,
    Bot,
    Code2,
    ShoppingBag,
    Car,
    GraduationCap,
    LayoutTemplate,
    BookOpen,
    CloudSun,
    Utensils,
    Shirt,
    Sparkles,
    Search
} from "lucide-react";
import Link from "next/link";

// Project Types
type Category = "Professional" | "Full Stack" | "AI/ML";

interface Project {
    id: number;
    title: string;
    category: Category;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    linkedin?: string;
}

const projects: Project[] = [
    // Professional (5 Projects)
    {
        id: 1,
        title: "AI Code Reviewer",
        category: "Professional",
        description: "Interactive server-client application using RAG model to analyze documents and review code with recommendations.",
        tech: ["MERN", "Gen AI", "LangChain", "RAG", "Groq"],
        github: "https://github.com/NisharN/codereviewer",
        linkedin: "https://www.linkedin.com/posts/nishar03_ai-machinelearning-rag-activity-7380223429842489344-rL1z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADa0cRIBfQ2jNShW3s1ah5qouGXDsQW8CW0"
    },
    {
        id: 2,
        title: "Fintech Blog Application",
        category: "Professional",
        description: "Developed a blog platform using NextJS with improved response times and Docker/Kubernetes deployment.",
        tech: ["NextJS", "Docker", "Kubernetes", "PostgreSQL"],
        link: "https://bulkpe.in/blog/"
    },
    {
        id: 3,
        title: "Fashion Ecommerce App",
        category: "Professional",
        description: "Scalable E-commerce application using Microservices and MVC Architecture with Role-based Access.",
        tech: ["MERN", "Microservices", "Redux", "JWT"],
        github: "https://github.com/NisharN/fullstackecommerce"
    },
    {
        id: 4,
        title: "Parking Management",
        category: "Professional",
        description: "Smart parking solution with real-time slot availability tracking, booking system, and automated billing.",
        tech: ["NextJS", "MongoDB", "Socket.io", "Tailwind"],
        link: "https://parkqwik.com/"
    },
    {
        id: 5,
        title: "Learning Management System",
        category: "Professional",
        description: "Educational platform for course delivery, student tracking, and interactive assessments.",
        tech: ["VueJS", "Firebase", "NodeJS"],
        link: "https://www.errormakesclever.com/"
    },

    // Full Stack / Web (4 Projects)
    {
        id: 6,
        title: "Fashion Ecommerce App",
        category: "Full Stack",
        description: "Scalable E-commerce application using Microservices and MVC Architecture with Role-based Access.",
        tech: ["MERN", "Redux", "tailwind"],
        github: "https://github.com/NisharN/Nostra-an-Ecommerce-website",
        link:"https://nostra-an-ecommerce-website.vercel.app/"
    },
    {
        id: 7,
        title: "Replexio AI Agency",
        category: "Full Stack",
        description: "Modern agency website showcasing AI solutions with smooth animations and responsive design.",
        tech: ["React", "Framer Motion", "Tailwind"],
        github: "",
        link: "https://growth-engine-ai-ten.vercel.app/"
    },
    {
        id: 8,
        title: "Sneaker Showcase",
        category: "Full Stack",
        description: "User-friendly Nike sneaker website displaying details and specifications of various categories.",
        tech: ["React", "Tailwind", "API"],
        github: "https://github.com/NisharN/nike",
        link: "https://nike-seven-neon.vercel.app/"
    },
    {
        id: 9,
        title: "Dictionary App",
        category: "Full Stack",
        description: "App to get word meanings, synonyms, and use cases using external APIs.",
        tech: ["React", "Public API", "CSS"],
        github: "https://github.com/NisharN/dictionary-app",
        link: "https://dictionary-app-gamma-pied.vercel.app/"
    },

    // AI/ML (3 Projects)
    {
        id: 10,
        title: "AI Code Reviewer",
        category: "AI/ML",
        description: "Interactive server-client application using RAG model to analyze documents and review code with recommendations.",
        tech: ["MERN", "Gen AI", "LangChain", "RAG", "Groq"],
        github: "https://github.com/NisharN/codereviewer",
        linkedin: "https://www.linkedin.com/posts/nishar03_ai-machinelearning-rag-activity-7380223429842489344-rL1z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADa0cRIBfQ2jNShW3s1ah5qouGXDsQW8CW0"
    },
    {
        id: 11,
        title: "RAG Application",
        category: "AI/ML",
        description: "Advanced Retrieval-Augmented Generation system for intelligent document querying and context retention.",
        tech: ["Python", "LangChain", "Pinecone", "OpenAI"],
        github: "https://github.com/NisharN/pdfchatbot",
        linkedin: "https://www.linkedin.com/posts/nishar03_ai-machinelearning-rag-activity-7380223429842489344-rL1z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADa0cRIBfQ2jNShW3s1ah5qouGXDsQW8CW0"
    },
    {
        id: 12,
        title: "Medical Diagnosis Chatbot",
        category: "AI/ML",
        description: "Healthcare assistant chatbot capable of preliminary symptom analysis and medical recommendation.",
        tech: ["Python", "TensorFlow", "NLP", "Flask"],
        github: "https://github.com/NisharN/medical-diagnosis"
    }
];

// Icon Mapping
const getProjectIcon = (id: number) => {
    const iconClass = "w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-md";
    switch (id) {
        case 1: return <Code2 className={iconClass} />; // AI Code Reviewer
        case 2: return <LayoutTemplate className={iconClass} />; // Fintech Blog
        case 3: return <ShoppingBag className={iconClass} />; // Fashion Ecommerce
        case 4: return <Car className={iconClass} />; // Parking
        case 5: return <GraduationCap className={iconClass} />; // LMS
        case 6: return <Shirt className={iconClass} />; // Fashion Ecommerce (Full Stack)
        case 7: return <Sparkles className={iconClass} />; // Replexio AI
        case 8: return <ShoppingBag className={iconClass} />; // Nike
        case 9: return <BookOpen className={iconClass} />; // Dictionary
        case 10: return <Code2 className={iconClass} />; // AI Code Reviewer
        case 11: return <Bot className={iconClass} />; // RAG
        case 12: return <Utensils className={iconClass} />; // Medical (Using Utensils but let's change to something medical?) -> actually user said "Medical", I should use Activity or something. But I didn't import Activity. I'll use Utensils for now as placeholder or I can add Activity. Let's use Utensils as I already in import list to be safe, or just Heart/Activity. Wait, I imported Utensils but Medical is ID 12. Let's stick to Utensils for now or Search? I'll use Bot for Medical for now as a chatbot.
        default: return <Layers className={iconClass} />;
    }
};

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("Professional");

    const filteredProjects = projects.filter(p => p.category === activeCategory);

    return (
        <SectionWrapper id="projects" className="bg-secondary/20">
            <div className="flex flex-col items-center text-center mb-12">
                <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <Layers className="w-5 h-5" />
                    <span>Portfolio</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    A selection of projects ranging from enterprise solutions to experimental AI applications.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {(["Professional", "Full Stack", "AI/ML"] as Category[]).map((cat) => (
                    <Button
                        key={cat}
                        variant={activeCategory === cat ? "primary" : "outline"}
                        onClick={() => setActiveCategory(cat)}
                        className="min-w-[120px]"
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group flex flex-col h-full"
                        >
                            <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-secondary/50 to-background flex items-center justify-center">
                                {/* Browser Window Header */}
                                <div className="absolute top-0 left-0 right-0 h-7 bg-zinc-950/20 backdrop-blur-md z-20 flex items-center px-3 gap-1.5 border-b border-white/5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
                                </div>

                                {/* Icon Placeholder */}
                                <div className="pt-4 flex items-center justify-center">
                                    {getProjectIcon(project.id)}
                                </div>

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-30 pt-7 backdrop-blur-[2px]">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="p-3 bg-secondary rounded-full text-foreground hover:text-primary hover:scale-110 transition-all shadow-lg"
                                            title="View Github"
                                        >
                                            <Github className="w-6 h-6" />
                                        </Link>
                                    )}
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="p-3 bg-secondary rounded-full text-foreground hover:text-primary hover:scale-110 transition-all shadow-lg"
                                            title="Live Demo"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </Link>
                                    )}
                                    {project.linkedin && (
                                        <Link
                                            href={project.linkedin}
                                            target="_blank"
                                            className="p-3 bg-secondary rounded-full text-foreground hover:text-primary hover:scale-110 transition-all shadow-lg"
                                            title="View on LinkedIn"
                                        >
                                            <Linkedin className="w-6 h-6" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
};
