"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import {
    ExternalLink,
    Github,
    Linkedin,
    Layers,
    Bot,
    Code2,
    ShoppingBag,
    Car,
    GraduationCap,
    LayoutTemplate,
    BookOpen,
    Sparkles,
    Shirt,
} from "lucide-react";
import Link from "next/link";

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
    {
        id: 1,
        title: "AI Code Reviewer",
        category: "Professional",
        description:
            "Interactive server-client application using RAG model to analyze documents and review code with recommendations.",
        tech: ["MERN", "Gen AI", "LangChain", "RAG", "Groq"],
        github: "https://github.com/NisharN/codereviewer",
        linkedin:
            "https://www.linkedin.com/posts/nishar03_ai-machinelearning-rag-activity-7380223429842489344-rL1z",
    },
    {
        id: 2,
        title: "Fintech Blog Application",
        category: "Professional",
        description:
            "Developed a blog platform using Next.js with improved response times and Docker/Kubernetes deployment.",
        tech: ["NextJS", "Docker", "Kubernetes", "PostgreSQL"],
        link: "https://bulkpe.in/blog/",
    },
    {
        id: 3,
        title: "Fashion Ecommerce App",
        category: "Professional",
        description:
            "Scalable E-commerce application using Microservices and MVC Architecture with Role-based Access.",
        tech: ["MERN", "Microservices", "Redux", "JWT"],
        github: "https://github.com/NisharN/fullstackecommerce",
    },
    {
        id: 4,
        title: "Parking Management",
        category: "Professional",
        description:
            "Smart parking solution with real-time slot availability tracking, booking system, and automated billing.",
        tech: ["NextJS", "MongoDB", "Socket.io", "Tailwind"],
        link: "https://parkqwik.com/",
    },
    {
        id: 5,
        title: "Learning Management System",
        category: "Professional",
        description:
            "Educational platform for course delivery, student tracking, and interactive assessments.",
        tech: ["VueJS", "Firebase", "NodeJS"],
        link: "https://www.errormakesclever.com/",
    },
    {
        id: 6,
        title: "Fashion Ecommerce App",
        category: "Full Stack",
        description:
            "Scalable E-commerce application using Microservices and MVC Architecture with Role-based Access.",
        tech: ["MERN", "Redux", "Tailwind"],
        github: "https://github.com/NisharN/Nostra-an-Ecommerce-website",
        link: "https://nostra-an-ecommerce-website.vercel.app/",
    },
    {
        id: 7,
        title: "Replexio AI Agency",
        category: "Full Stack",
        description:
            "Modern agency website showcasing AI solutions with smooth animations and responsive design.",
        tech: ["React", "Framer Motion", "Tailwind"],
        link: "https://growth-engine-ai-ten.vercel.app/",
    },
    {
        id: 8,
        title: "Sneaker Showcase",
        category: "Full Stack",
        description:
            "User-friendly Nike sneaker website displaying details and specifications of various categories.",
        tech: ["React", "Tailwind", "API"],
        github: "https://github.com/NisharN/nike",
        link: "https://nike-seven-neon.vercel.app/",
    },
    {
        id: 9,
        title: "Dictionary App",
        category: "Full Stack",
        description:
            "App to get word meanings, synonyms, and use cases using external APIs.",
        tech: ["React", "Public API", "CSS"],
        github: "https://github.com/NisharN/dictionary-app",
        link: "https://dictionary-app-gamma-pied.vercel.app/",
    },
    {
        id: 10,
        title: "AI Code Reviewer",
        category: "AI/ML",
        description:
            "Interactive server-client application using RAG model to analyze documents and review code with recommendations.",
        tech: ["MERN", "Gen AI", "LangChain", "RAG", "Groq"],
        github: "https://github.com/NisharN/codereviewer",
        linkedin:
            "https://www.linkedin.com/posts/nishar03_ai-machinelearning-rag-activity-7380223429842489344-rL1z",
    },
    {
        id: 11,
        title: "RAG Application",
        category: "AI/ML",
        description:
            "Advanced Retrieval-Augmented Generation system for intelligent document querying and context retention.",
        tech: ["Python", "LangChain", "Pinecone", "OpenAI"],
        github: "https://github.com/NisharN/pdfchatbot",
        linkedin:
            "https://www.linkedin.com/posts/nishar03_ai-machinelearning-rag-activity-7380223429842489344-rL1z",
    },
    {
        id: 12,
        title: "Medical Diagnosis Chatbot",
        category: "AI/ML",
        description:
            "Healthcare assistant chatbot capable of preliminary symptom analysis and medical recommendation.",
        tech: ["Python", "TensorFlow", "NLP", "Flask"],
        github: "https://github.com/NisharN/medical-diagnosis",
    },
];

const getProjectIcon = (id: number) => {
    const iconClass =
        "w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300";
    switch (id) {
        case 1:
            return <Code2 className={iconClass} />;
        case 2:
            return <LayoutTemplate className={iconClass} />;
        case 3:
            return <ShoppingBag className={iconClass} />;
        case 4:
            return <Car className={iconClass} />;
        case 5:
            return <GraduationCap className={iconClass} />;
        case 6:
            return <Shirt className={iconClass} />;
        case 7:
            return <Sparkles className={iconClass} />;
        case 8:
            return <ShoppingBag className={iconClass} />;
        case 9:
            return <BookOpen className={iconClass} />;
        case 10:
            return <Code2 className={iconClass} />;
        case 11:
            return <Bot className={iconClass} />;
        case 12:
            return <Bot className={iconClass} />;
        default:
            return <Layers className={iconClass} />;
    }
};

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] =
        useState<Category>("Professional");
    const filteredProjects = projects.filter(
        (p) => p.category === activeCategory
    );

    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Portfolio
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        Projects &
                        <br />
                        <span className="text-gradient">Applications</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        A selection of projects from enterprise solutions to AI experiments.
                    </motion.p>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {(["Professional", "Full Stack", "AI/ML"] as Category[]).map(
                        (cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "primary" : "outline"}
                                onClick={() => setActiveCategory(cat)}
                                className="min-w-[120px]"
                            >
                                {cat}
                            </Button>
                        )
                    )}
                </div>

                {/* Projects Grid */}
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
                                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col h-full"
                            >
                                {/* Icon Area */}
                                <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-secondary/50 to-background flex items-center justify-center">
                                    <div className="absolute top-0 left-0 right-0 h-7 bg-zinc-950/20 backdrop-blur-md z-20 flex items-center px-3 gap-1.5 border-b border-white/5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                                    </div>
                                    <div className="pt-4 flex items-center justify-center">
                                        {getProjectIcon(project.id)}
                                    </div>

                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-30 pt-7">
                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="p-3 bg-secondary rounded-full hover:text-primary hover:scale-110 transition-all"
                                            >
                                                <Github className="w-5 h-5" />
                                            </Link>
                                        )}
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="p-3 bg-secondary rounded-full hover:text-primary hover:scale-110 transition-all"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        )}
                                        {project.linkedin && (
                                            <Link
                                                href={project.linkedin}
                                                target="_blank"
                                                className="p-3 bg-secondary rounded-full hover:text-primary hover:scale-110 transition-all"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                                            >
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
        </main>
    );
}
