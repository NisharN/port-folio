"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import Image from "next/image";

interface Tool {
    name: string;
    icon?: string;
    purpose: string;
}

interface ToolCategory {
    category: string;
    description: string;
    tools: Tool[];
}

const toolCategories: ToolCategory[] = [
    {
        category: "Web Development",
        description: "Building high-performance websites, dashboards, and platforms",
        tools: [
            { name: "HTML", icon: "/src/svg/skills/html.svg", purpose: "Page structure & semantics" },
            { name: "CSS", icon: "/src/svg/skills/css.svg", purpose: "Styling & responsive design" },
            { name: "JavaScript", icon: "/src/svg/skills/javascript.svg", purpose: "Interactivity & logic" },
            { name: "TypeScript", icon: "/src/svg/skills/typescript.svg", purpose: "Type-safe development" },
            { name: "React", icon: "/src/svg/skills/react.svg", purpose: "Component-based UIs" },
            { name: "Next.js", icon: "/src/svg/skills/nextJS.svg", purpose: "Full-stack web apps & SSR" },
            { name: "WordPress", icon: "/src/svg/skills/wordpress.svg", purpose: "CMS websites & blogs" },
            { name: "Tailwind", icon: "/src/svg/skills/tailwind.svg", purpose: "Rapid UI development" },
            { name: "Bootstrap", icon: "/src/svg/skills/bootstrap.svg", purpose: "Responsive frameworks" },
        ],
    },
    {
        category: "AI & Intelligence",
        description: "Integrating AI to automate decisions and build intelligent systems",
        tools: [
            { name: "Python", icon: "/src/svg/skills/python.svg", purpose: "AI/ML scripts & backends" },
            { name: "TensorFlow", icon: "/src/svg/skills/tensorflow.svg", purpose: "Machine learning models" },
            { name: "PyTorch", icon: "/src/svg/skills/pytorch.svg", purpose: "Deep learning research" },
            { name: "OpenAI", purpose: "GPT integration & chatbots" },
            { name: "LangChain", purpose: "RAG & LLM orchestration" },
            { name: "NumPy", icon: "/src/svg/skills/numpy.svg", purpose: "Numerical computing" },
        ],
    },
    {
        category: "Dashboards & Analytics",
        description: "Turning raw data into actionable business insights",
        tools: [
            { name: "Power BI", purpose: "Interactive business dashboards" },
            { name: "Excel", icon: "/src/svg/skills/microsoftoffice.svg", purpose: "Data analysis & automation" },
            { name: "Google Analytics", purpose: "Website performance tracking" },
            { name: "GraphQL", icon: "/src/svg/skills/graphql.svg", purpose: "Efficient data querying" },
        ],
    },
    {
        category: "Automation",
        description: "Eliminating repetitive tasks so teams focus on growth",
        tools: [
            { name: "n8n", purpose: "Open-source workflow automation" },
            { name: "Make (Integromat)", purpose: "Visual automation builder" },
            { name: "Zapier", purpose: "App-to-app integrations" },
        ],
    },
    {
        category: "Digital Marketing",
        description: "Building growth engines with structured campaigns and branding",
        tools: [
            { name: "Meta Ads", purpose: "Facebook & Instagram advertising" },
            { name: "Google Ads", purpose: "Search & display campaigns" },
            { name: "SEO Tools", purpose: "Keyword research & optimization" },
            { name: "Canva", icon: "/src/svg/skills/canva.svg", purpose: "Brand design & content" },
            { name: "Figma", icon: "/src/svg/skills/figma.svg", purpose: "UI/UX design" },
        ],
    },
    {
        category: "Infrastructure & Backend",
        description: "Scalable, reliable systems that power business applications",
        tools: [
            { name: "Node.js", purpose: "Server-side JavaScript" },
            { name: "MongoDB", icon: "/src/svg/skills/mongoDB.svg", purpose: "NoSQL database" },
            { name: "PostgreSQL", icon: "/src/svg/skills/postgresql.svg", purpose: "Relational database" },
            { name: "MySQL", icon: "/src/svg/skills/mysql.svg", purpose: "Relational database" },
            { name: "Firebase", icon: "/src/svg/skills/firebase.svg", purpose: "Real-time backend & auth" },
            { name: "Docker", icon: "/src/svg/skills/docker.svg", purpose: "Containerization & deployment" },
            { name: "AWS", icon: "/src/svg/skills/aws.svg", purpose: "Cloud infrastructure" },
            { name: "Git", icon: "/src/svg/skills/git.svg", purpose: "Version control" },
            { name: "Nginx", icon: "/src/svg/skills/nginx.svg", purpose: "Web server & reverse proxy" },
        ],
    },
];

export default function ToolsPage() {
    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Toolkit
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        The Right Tool
                        <br />
                        <span className="text-gradient">For Every Solution</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        I choose tools based on the business problem, not the other way around. Here&apos;s what I use and why.
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {toolCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.08 }}
                        >
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-1">{cat.category}</h2>
                                <p className="text-sm text-muted-foreground">{cat.description}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {cat.tools.map((tool, toolIdx) => (
                                    <motion.div
                                        key={tool.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: toolIdx * 0.03 }}
                                        whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:bg-accent/30 transition-all cursor-default"
                                    >
                                        {tool.icon ? (
                                            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                                                <Image
                                                    src={tool.icon}
                                                    alt={tool.name}
                                                    width={32}
                                                    height={32}
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold">
                                                {tool.name.substring(0, 2).toUpperCase()}
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="font-medium text-sm">{tool.name}</h3>
                                            <p className="text-xs text-muted-foreground">{tool.purpose}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}
