"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        role: "FullStack Developer",
        company: "EMC Academy",
        period: "Sep 2024 - May 2025",
        type: "work",
        description: "Developed server-side web applications using React and NodeJS, reducing server response time by 15%."
    },
    {
        id: 2,
        role: "FullStack Developer",
        company: "Exposys Data Labs",
        period: "July 2024 - Aug 2024",
        type: "work",
        description: "Worked on full stack development projects gaining hands-on experience."
    },
    {
        id: 3,
        role: "Web Developer Intern",
        company: "OctaNet Services",
        period: "June 2024 - July 2024",
        type: "work",
        description: "Developed and maintained web applications."
    },
    {
        id: 4,
        role: "Self Employed",
        company: "Freelance",
        period: "Oct 2022 - Jan 2024",
        type: "work",
        description: "Collaborated on freelance projects and delivered custom solutions."
    }
];

const education = [
    {
        id: 1,
        degree: "Full Stack Development",
        school: "EMC Academy, Chennai",
        period: "Dec 2024",
        type: "education"
    },
    {
        id: 2,
        degree: "B.E in Computer Science Engineering",
        school: "Anna University, Chennai",
        period: "May 2024",
        type: "education"
    },
    {
        id: 3,
        degree: "Higher Secondary Education",
        school: "Kalimagal hr sec school, Thanjavur",
        period: "March 2020",
        type: "education"
    }
];

export const Experience = () => {
    const [activeTab, setActiveTab] = useState<"work" | "education">("work");

    return (
        <SectionWrapper id="experience">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
                <p className="text-muted-foreground">My professional journey and academic background.</p>
            </div>

            <div className="flex justify-center gap-4 mb-10">
                <Button
                    variant={activeTab === "work" ? "primary" : "outline"}
                    onClick={() => setActiveTab("work")}
                    className="gap-2"
                >
                    <Briefcase className="w-4 h-4" />
                    Work
                </Button>
                <Button
                    variant={activeTab === "education" ? "primary" : "outline"}
                    onClick={() => setActiveTab("education")}
                    className="gap-2"
                >
                    <GraduationCap className="w-4 h-4" />
                    Education
                </Button>
            </div>

            <div className="max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {(activeTab === "work" ? experiences : education).map((item) => (
                            <div
                                key={item.id}
                                className="bg-card hover:bg-accent/5 p-6 rounded-xl border border-border/50 shadow-sm transition-colors relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {'role' in item ? item.role : item.degree}
                                        </h3>
                                        <div className="text-primary font-medium">
                                            {'company' in item ? item.company : item.school}
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-3 h-3 mr-2" />
                                        {item.period}
                                    </div>
                                </div>
                                {'description' in item && (
                                    <p className="text-muted-foreground mt-2">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
};
