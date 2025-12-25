"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Cpu } from "lucide-react";

const skills = [
    "React", "NextJS", "NodeJS", "Express", "MongoDB",
    "Python", "Java", "JavaScript", "TypeScript",
    "Tailwind", "AWS", "Firebase", "Git", "Docker",
    "Figma", "Canva", "MySQL", "Redux", "MaterialUI"
];

export const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-background">
            <div className="flex flex-col items-center text-center mb-12">
                <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <Cpu className="w-5 h-5" />
                    <span>My Toolkit</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                <p className="text-muted-foreground max-w-2xl">
                    Technologies and tools I use to build scalable and efficient solutions.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                        className="bg-secondary/30 border border-border/50 rounded-xl p-4 flex items-center justify-center font-medium hover:bg-secondary/60 transition-colors cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
