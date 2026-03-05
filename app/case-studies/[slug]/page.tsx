"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudy {
    slug: string;
    title: string;
    tag: string;
    image: string;
    domain: string;
    problem: string[];
    solution: string[];
    tools: string[];
    results: string[];
    narrative: string;
}

const caseStudiesData: Record<string, CaseStudy> = {
    "ecommerce-travel-ads": {
        slug: "ecommerce-travel-ads",
        title: "E-commerce & Travel Company — Paid Ads Campaign",
        tag: "Paid Advertising",
        image: "/src/image/travel.jpg",
        domain: "E-commerce & Travel",
        problem: [
            "Low conversions from online advertising campaigns",
            "Poor audience targeting leading to wasted ad spend",
            "No structured analytics or conversion tracking",
            "Disconnected sales funnels with high drop-off rates",
        ],
        solution: [
            "Designed and ran targeted paid ad campaigns on Meta and Google platforms",
            "Optimized sales funnels with clear CTAs and conversion-focused landing pages",
            "Implemented end-to-end conversion tracking and analytics dashboards",
            "Created structured A/B testing framework for continuous improvement",
        ],
        tools: ["Meta Ads", "Google Ads", "Google Analytics", "Power BI", "Canva"],
        results: [
            "Significantly improved ROI on advertising spend",
            "Structured ad system with measurable KPIs",
            "Reduced cost-per-acquisition through better targeting",
            "Real-time dashboards for performance monitoring",
        ],
        narrative:
            "The client was spending heavily on ads with little return. I conducted a full audit of their ad accounts, restructured campaigns by audience segments, built conversion-focused landing pages, and implemented proper tracking. The result was a complete turnaround — their ad spend started generating real, measurable returns.",
    },
    "fintech-blog-seo": {
        slug: "fintech-blog-seo",
        title: "FinTech Blog Platform — Organic Growth via SEO",
        tag: "SEO & Content",
        image: "/src/image/crefin.jpg",
        domain: "FinTech",
        problem: [
            "Low organic reach and minimal website traffic",
            "No structured content strategy or editorial calendar",
            "Poor technical SEO fundamentals",
            "Content not ranking for target keywords",
        ],
        solution: [
            "Built a structured SEO blog platform using Next.js",
            "Developed keyword-based content strategy targeting high-intent searches",
            "Implemented technical SEO optimizations (meta tags, schema, site speed)",
            "Set up content pipeline with regular publishing schedule",
        ],
        tools: ["Next.js", "PostgreSQL", "Docker", "Kubernetes", "SEO Tools"],
        results: [
            "Consistent organic traffic growth month over month",
            "Improved domain authority and search rankings",
            "Established thought leadership in the fintech space",
            "Reduced dependency on paid traffic",
        ],
        narrative:
            "The fintech company had a website but no content strategy. I built them a high-performance blog on Next.js, developed a keyword research framework, and created a content pipeline. Within months, their organic traffic started growing consistently, reducing their dependence on paid channels.",
    },
    "agency-workflow-automation": {
        slug: "agency-workflow-automation",
        title: "Agency Workflow Automation — Eliminating Manual Tasks",
        tag: "Automation",
        image: "/src/image/ayla.jpg",
        domain: "Digital Agency",
        problem: [
            "Team spending hours on repetitive manual tasks",
            "No standardized workflows across projects",
            "Client onboarding taking too long",
            "CRM data not synced across platforms",
        ],
        solution: [
            "Designed automated workflows using n8n and Make",
            "Integrated CRM with project management and communication tools",
            "Created automated client onboarding sequences",
            "Built notification systems for task assignments and deadlines",
        ],
        tools: ["n8n", "Make (Integromat)", "Zapier", "CRM Integration", "Slack API"],
        results: [
            "Significant time savings on routine operations",
            "Standardized workflows across all projects",
            "Faster client onboarding process",
            "Higher team efficiency and reduced human error",
        ],
        narrative:
            "The agency was drowning in manual work — copy-pasting data, sending reminder emails, updating spreadsheets. I mapped out their entire workflow, identified the repetitive bottlenecks, and automated them using n8n and Make. The team reclaimed hours every week, allowing them to focus on creative and strategic work.",
    },
    "multi-domain-software": {
        slug: "multi-domain-software",
        title: "Multi-Domain Software Solutions — Strategic Systems",
        tag: "Software Development",
        image: "/src/image/real-estate.jpg",
        domain: "Multi-Industry",
        problem: [
            "Different businesses needing custom software solutions",
            "No scalable architecture for growing companies",
            "Disconnected systems causing data silos",
            "Manual processes limiting business growth",
        ],
        solution: [
            "Built real estate property management systems with CRM integration",
            "Developed SaaS platforms with subscription models and admin dashboards",
            "Created custom CRM solutions tailored to each business workflow",
            "Implemented analytics dashboards for business intelligence",
        ],
        tools: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker"],
        results: [
            "Scalable systems supporting business growth",
            "Centralized data across all business operations",
            "Reduced manual processes by implementing automation",
            "Real-time business intelligence and reporting",
        ],
        narrative:
            "Across multiple engagements — real estate companies, SaaS startups, and SMEs — I've built systems that go beyond code. Each solution starts with understanding the business model, identifying what's broken or missing, and then designing a digital system that solves the core problem. The focus is always on scalability and business impact.",
    },
};

const slugOrder = [
    "ecommerce-travel-ads",
    "fintech-blog-seo",
    "agency-workflow-automation",
    "multi-domain-software",
];

export default function CaseStudyDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const cs = caseStudiesData[slug];

    if (!cs) {
        return (
            <main className="page-container">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
                    <Link href="/case-studies">
                        <Button variant="outline">Back to Case Studies</Button>
                    </Link>
                </div>
            </main>
        );
    }

    const currentIndex = slugOrder.indexOf(slug);
    const nextSlug = slugOrder[(currentIndex + 1) % slugOrder.length];
    const nextCs = caseStudiesData[nextSlug];

    return (
        <main className="page-container">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="container mx-auto">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block text-xs font-medium text-primary bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20 mb-3">
                                {cs.tag}
                            </span>
                            <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl">
                                {cs.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        {cs.narrative}
                    </p>
                </motion.div>

                {/* Problem */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#27272A] text-[#A1A1AA] flex items-center justify-center text-sm font-bold">
                            !
                        </span>
                        The Problem
                    </h2>
                    <div className="space-y-3 pl-10">
                        {cs.problem.map((p) => (
                            <p key={p} className="text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#A1A1AA]/60 shrink-0" />
                                {p}
                            </p>
                        ))}
                    </div>
                </motion.section>

                {/* Solution */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#27272A] text-[#E5E7EB] flex items-center justify-center text-sm font-bold">
                            ✓
                        </span>
                        The Solution
                    </h2>
                    <div className="space-y-3 pl-10">
                        {cs.solution.map((s) => (
                            <p key={s} className="text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                                {s}
                            </p>
                        ))}
                    </div>
                </motion.section>

                {/* Tools Used */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-xl font-bold mb-4">Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        {cs.tools.map((t) => (
                            <span
                                key={t}
                                className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border/50"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.section>

                {/* Results */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm font-bold">
                            ↑
                        </span>
                        The Results
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-10">
                        {cs.results.map((r) => (
                            <div
                                key={r}
                                className="p-4 rounded-xl border border-border/50 bg-card"
                            >
                                <p className="text-sm text-foreground">{r}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Next Case Study */}
                <div className="border-t border-border/50 pt-8">
                    <Link href={`/case-studies/${nextSlug}`}>
                        <div className="flex items-center justify-between p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all group">
                            <div>
                                <span className="text-xs text-muted-foreground">
                                    Next Case Study
                                </span>
                                <h3 className="font-semibold group-hover:text-primary transition-colors">
                                    {nextCs.title}
                                </h3>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
