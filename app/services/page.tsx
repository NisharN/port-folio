"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import {
    Code2,
    Bot,
    BarChart3,
    Zap,
    Megaphone,
    CheckCircle,
} from "lucide-react";

const services = [
    {
        icon: <Code2 className="w-10 h-10" />,
        title: "Web Development",
        description:
            "From high-converting landing pages to complex SaaS platforms — I build web solutions that drive business results.",
        categories: [
            {
                label: "Through Code",
                items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
            },
            {
                label: "No-Code & CMS",
                items: ["WordPress", "Shopify"],
            },
        ],
        deliverables: [
            "High-converting websites",
            "Custom dashboards",
            "SaaS platforms",
            "Booking systems",
            "CRM integrations",
        ],
    },
    {
        icon: <Bot className="w-10 h-10" />,
        title: "AI Solutions",
        description:
            "Leverage artificial intelligence to reduce costs, automate decisions, and gain competitive advantage.",
        categories: [
            {
                label: "Technologies",
                items: ["AI Frameworks", "LangChain", "OpenAI", "TensorFlow", "RAG"],
            },
        ],
        deliverables: [
            "AI chatbot systems",
            "Document analysis tools",
            "Business intelligence",
            "AI-powered dashboards",
            "Process automation with AI",
        ],
    },
    {
        icon: <BarChart3 className="w-10 h-10" />,
        title: "Dashboards & Analytics",
        description:
            "Turn raw data into actionable insights. I build dashboards that help you make better decisions, faster.",
        categories: [
            {
                label: "Tools",
                items: ["Excel Automation", "Power BI", "Google Analytics"],
            },
        ],
        deliverables: [
            "Performance tracking systems",
            "Sales & marketing analytics",
            "Executive dashboards",
            "Automated reporting",
            "KPI monitoring",
        ],
    },
    {
        icon: <Zap className="w-10 h-10" />,
        title: "Automation Systems",
        description:
            "I automate repetitive tasks so businesses can focus on growth. Stop wasting hours on manual work.",
        categories: [
            {
                label: "Platforms",
                items: ["n8n", "Make (Integromat)", "Zapier"],
            },
        ],
        deliverables: [
            "Workflow automation",
            "CRM integration flows",
            "Email sequences",
            "Data sync pipelines",
            "Task management automation",
        ],
    },
    {
        icon: <Megaphone className="w-10 h-10" />,
        title: "Digital Marketing Systems",
        description:
            "Not just marketing — I build growth engines. Structured ad systems, conversion funnels, and measurable ROI.",
        categories: [
            {
                label: "Channels",
                items: ["Meta Ads", "Google Ads", "SEO", "Funnels", "Canva Branding"],
            },
        ],
        deliverables: [
            "Paid ad campaign setup",
            "SEO optimization",
            "Conversion funnel design",
            "Performance tracking",
            "Brand identity systems",
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Solutions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        Digital Transformation
                        <br />
                        <span className="text-gradient">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        Every service is designed to solve a real business problem, not just deliver code. I focus on outcomes that matter.
                    </motion.p>
                </div>

                <div className="space-y-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/20 transition-all"
                        >
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left: Info */}
                                <div className="lg:w-1/2 space-y-4">
                                    <div className="text-primary">{service.icon}</div>
                                    <h2 className="text-2xl font-bold">{service.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Tool Categories */}
                                    <div className="space-y-3 pt-2">
                                        {service.categories.map((cat) => (
                                            <div key={cat.label}>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                                    {cat.label}
                                                </span>
                                                <div className="flex flex-wrap gap-2 mt-1.5">
                                                    {cat.items.map((item) => (
                                                        <span
                                                            key={item}
                                                            className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Deliverables */}
                                <div className="lg:w-1/2">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                                        Key Deliverables
                                    </h4>
                                    <div className="space-y-3">
                                        {service.deliverables.map((d) => (
                                            <div
                                                key={d}
                                                className="flex items-center gap-3 text-sm"
                                            >
                                                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                                <span>{d}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}
