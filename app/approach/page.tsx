"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Search, Target, PenTool, Cpu, TrendingUp } from "lucide-react";

const steps = [
    {
        num: "01",
        icon: <Search className="w-8 h-8" />,
        title: "Understand Business Model",
        description:
            "Deep dive into your business — understand your revenue model, customer journey, competitive landscape, and current pain points. Nothing gets built without understanding the full picture.",
    },
    {
        num: "02",
        icon: <Target className="w-8 h-8" />,
        title: "Identify Bottlenecks",
        description:
            "Map out where inefficiencies exist — manual processes, data silos, weak funnels, or missed opportunities. These bottlenecks are costing you time, money, and growth.",
    },
    {
        num: "03",
        icon: <PenTool className="w-8 h-8" />,
        title: "Design Digital System",
        description:
            "Create a tailored digital system architecture — choosing the right mix of software, automation, AI, and marketing tools to solve the identified problems.",
    },
    {
        num: "04",
        icon: <Cpu className="w-8 h-8" />,
        title: "Implement Software + AI",
        description:
            "Build and deploy the solution — from custom dashboards and automated workflows to AI-powered tools and optimized websites. Hands-on execution, not just strategy.",
    },
    {
        num: "05",
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Optimize for Growth",
        description:
            "Monitor performance, analyze data, and continuously optimize. Technology is only valuable when it's driving measurable business results.",
    },
];

export default function ApproachPage() {
    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Methodology
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        How I Solve
                        <br />
                        <span className="text-gradient">Business Problems</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        A structured, strategic approach that transforms business challenges into scalable digital solutions.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="max-w-3xl mx-auto space-y-0">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="relative"
                        >
                            {/* Connecting Line */}
                            {i < steps.length - 1 && (
                                <div className="absolute left-[39px] top-[76px] w-px h-[calc(100%-40px)] bg-gradient-to-b from-primary/30 to-transparent" />
                            )}

                            <div className="flex gap-6 p-6 rounded-2xl hover:bg-card/50 transition-colors group">
                                {/* Number + Icon */}
                                <div className="shrink-0">
                                    <div className="w-[54px] h-[54px] rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold text-primary/50 tracking-widest">
                                            STEP {step.num}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl font-semibold mb-2">
                        Ready to start the process?
                    </p>
                    <p className="text-muted-foreground mb-6">
                        Let&apos;s understand your business and build the right system.
                    </p>
                    <a href="https://wa.me/9710523519040" target="_blank">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 h-14 px-10 text-base rounded-xl transition-colors"
                        >
                            Book Free Consultation
                        </motion.button>
                    </a>
                </motion.div>
            </SectionWrapper>
        </main>
    );
}
