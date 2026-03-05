"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const caseStudies = [
    {
        slug: "ecommerce-travel-ads",
        title: "E-commerce & Travel Company — Paid Ads Campaign",
        tag: "Paid Advertising",
        image: "/src/image/travel.jpg",
        excerpt:
            "Revamped ad targeting and funnel strategy for an e-commerce and travel company, driving improved ROI and structured analytics.",
    },
    {
        slug: "fintech-blog-seo",
        title: "FinTech Blog Platform — Organic Growth via SEO",
        tag: "SEO & Content",
        image: "/src/image/crefin.jpg",
        excerpt:
            "Built a structured SEO blog platform with keyword-based content strategies for a fintech company, boosting organic reach.",
    },
    {
        slug: "agency-workflow-automation",
        title: "Agency Workflow Automation — Eliminating Manual Tasks",
        tag: "Automation",
        image: "/src/image/ayla.jpg",
        excerpt:
            "Automated routine workflows for a growing agency using n8n and Make, reducing repetitive work and increasing efficiency.",
    },
    {
        slug: "multi-domain-software",
        title: "Multi-Domain Software Solutions — Strategic Systems",
        tag: "Software Development",
        image: "/src/image/real-estate.jpg",
        excerpt:
            "Delivered software solutions across Real Estate, SaaS, CRM, and business dashboards with strategic system thinking.",
    },
];

export default function CaseStudiesPage() {
    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Case Studies
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        Real Problems.
                        <br />
                        <span className="text-gradient">Real Solutions.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        Detailed breakdowns of how I solved business challenges using software, AI, and automation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((cs, i) => (
                        <motion.div
                            key={cs.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={`/case-studies/${cs.slug}`}>
                                <article className="rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={cs.image}
                                            alt={cs.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <span className="text-xs font-medium text-primary bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
                                                {cs.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                                            {cs.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {cs.excerpt}
                                        </p>
                                        <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read Case Study <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}
