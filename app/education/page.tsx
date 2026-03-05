"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
    {
        degree: "B.E in Computer Science Engineering",
        institution: "Anna University, Chennai",
        period: "2020 – 2024",
        type: "degree" as const,
        description:
            "Comprehensive computer science education covering data structures, algorithms, databases, networking, and software engineering principles.",
    },
    {
        degree: "Full Stack Development Certification",
        institution: "EMC Academy, Chennai",
        period: "2024",
        type: "certification" as const,
        description:
            "Intensive program covering MERN stack, React, Node.js, database design, API development, and deployment practices.",
    },
    {
        degree: "Generative AI Certification",
        institution: "Online Professional Program",
        period: "2024",
        type: "certification" as const,
        description:
            "Specialized training in large language models, RAG architecture, prompt engineering, LangChain, and AI application development.",
    },
    {
        degree: "Higher Secondary Education",
        institution: "Kalimagal Hr Sec School, Thanjavur",
        period: "2020",
        type: "degree" as const,
        description: "Foundation in science and mathematics.",
    },
];

const expertise = [
    "Full Stack Development",
    "AI/ML Integration",
    "Business Process Automation",
    "Digital Marketing Systems",
    "Dashboard & Analytics",
    "CRM/ERP Implementation",
];

export default function EducationPage() {
    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Background
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        Education &
                        <br />
                        <span className="text-gradient">Qualifications</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        Academic foundation combined with continuous professional development.
                    </motion.p>
                </div>

                {/* Education Timeline */}
                <div className="max-w-3xl mx-auto space-y-6 mb-16">
                    {education.map((item, i) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/30 group-hover:bg-primary transition-colors" />
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                                <div className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        {item.type === "degree" ? (
                                            <GraduationCap className="w-6 h-6 text-primary" />
                                        ) : (
                                            <Award className="w-6 h-6 text-primary" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                            {item.degree}
                                        </h3>
                                        <p className="text-sm text-primary/80 font-medium">
                                            {item.institution}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full shrink-0 w-fit">
                                    <Calendar className="w-3 h-3" />
                                    {item.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Areas of Expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-xl font-bold mb-6 text-center">
                        Areas of Expertise
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {expertise.map((item, i) => (
                            <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-4 py-2 rounded-full border border-border/50 bg-card text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </SectionWrapper>
        </main>
    );
}
