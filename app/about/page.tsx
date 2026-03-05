"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import {
    Building2,
    Landmark,
    GraduationCap,
    ShoppingCart,
    Users,
    Boxes,
    Cloud,
} from "lucide-react";

const domains = [
    {
        icon: <Building2 className="w-8 h-8" />,
        title: "Real Estate (PropTech)",
        problem: "Manual property management, poor lead tracking, and fragmented systems slowing down deals.",
        approach: "Built integrated CRM systems, property listing platforms, and automated lead nurturing flows.",
        outcome: "Faster closings, centralized data, and improved agent productivity.",
    },
    {
        icon: <Landmark className="w-8 h-8" />,
        title: "FinTech",
        problem: "Low organic reach, scattered content strategy, and compliance-heavy communication needs.",
        approach: "Developed SEO-optimized blog platforms with structured content pipelines and technical optimization.",
        outcome: "Increased organic traffic, stronger domain authority, and compliant digital presence.",
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "EdTech",
        problem: "Outdated learning management, poor student engagement, and manual tracking systems.",
        approach: "Built custom LMS platforms with interactive assessments, progress tracking, and real-time analytics.",
        outcome: "Higher student engagement, automated reporting, and scalable course delivery.",
    },
    {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: "E-commerce",
        problem: "Low conversions, poor ad targeting, and disconnected sales funnels.",
        approach: "Optimized ad campaigns, built conversion-focused storefronts, and implemented end-to-end analytics.",
        outcome: "Improved ROI on ad spend, higher conversion rates, and data-driven decision making.",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "CRM Systems",
        problem: "Teams using spreadsheets, losing leads, and no visibility into the sales pipeline.",
        approach: "Customized and integrated CRM solutions with automated follow-ups and pipeline dashboards.",
        outcome: "Zero lead leakage, clear pipeline visibility, and accelerated sales cycles.",
    },
    {
        icon: <Boxes className="w-8 h-8" />,
        title: "ERP Solutions",
        problem: "Disconnected departments, manual data entry, and no unified business view.",
        approach: "Implemented integrated ERP modules connecting inventory, HR, finance, and operations.",
        outcome: "Unified business operations, reduced manual work, and real-time reporting.",
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "SaaS Platforms",
        problem: "Ideas stuck at MVP stage, poor user retention, and no scalable architecture.",
        approach: "Built production-ready SaaS platforms with subscription models, admin dashboards, and API integrations.",
        outcome: "Launch-ready products, improved user retention, and scalable infrastructure.",
    },
];

export default function AboutPage() {
    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Domain Expertise
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        Solving Business Problems
                        <br />
                        <span className="text-gradient">Across Industries</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        I don&apos;t just build software. I build systems that solve business problems. Here&apos;s my exposure across domains in the UAE and beyond.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {domains.map((domain, i) => (
                        <motion.div
                            key={domain.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                    {domain.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        {domain.title}
                                    </h3>
                                    <div className="space-y-2">
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">Problem</span>
                                            <p className="text-sm text-muted-foreground mt-0.5">{domain.problem}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-[#E5E7EB]">Approach</span>
                                            <p className="text-sm text-muted-foreground mt-0.5">{domain.approach}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80">Outcome</span>
                                            <p className="text-sm text-muted-foreground mt-0.5">{domain.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Positioning Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <blockquote className="text-2xl md:text-3xl font-bold text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                        &ldquo;I don&apos;t just build software.
                        <br />
                        <span className="text-gradient">I build systems that solve business problems.</span>&rdquo;
                    </blockquote>
                </motion.div>
            </SectionWrapper>
        </main>
    );
}
