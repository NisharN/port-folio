"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
    {
        title: "Full-Stack Certified",
        issuer: "The Complete Web Development Bootcamp",
        description: "Comprehensive program covering Front-end (React, HTML/CSS) and Back-end (NodeJS, Express, MongoDB)."
    },
    {
        title: "Front-End Development",
        issuer: "Meta",
        description: "Professional certification covering React, interactive UIs, and modern web development practices."
    },
    {
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        description: "Mastery of responsive layouts, CSS Grid/Flexbox, and mobile-first design principles."
    },
    {
        title: "Cloud Computing",
        issuer: "Edureka | DevOps",
        description: "Fundamentals of Cloud (AWS, Azure, GCP) and DevOps practices including CI/CD and deployment."
    },
    {
        title: "Generative AI",
        issuer: "DeepLearning.AI",
        description: "Deep dive into GANs, VAEs, Transformer models, and building generative AI applications."
    },
    {
        title: "Prompt Engineering",
        issuer: "ChatGPT",
        description: "Advanced techniques for prompt design, tuning, and optimizing LLM interactions."
    },
    {
        title: "Data Analytics",
        issuer: "Machine Learning Integration",
        description: "Data preprocessing, feature engineering, and building predictive models using ML algorithms."
    }
];

export const Certifications = () => {
    return (
        <SectionWrapper id="certifications" className="bg-background">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 text-primary font-medium mb-4">
                    <Award className="w-5 h-5" />
                    <span>Achievments</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Validating skills and commitment to continuous learning through professional certifications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card hover:shadow-lg transition-all p-6 rounded-xl border border-border/50 group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                        <p className="text-sm font-medium text-purple-500 mb-3">{cert.issuer}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {cert.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
