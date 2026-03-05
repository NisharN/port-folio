"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";

interface Message {
    role: "bot" | "user";
    text: string;
    showWhatsApp?: boolean;
}

const WHATSAPP_URL = "https://wa.me/9710523519040";

const knowledgeBase: { keywords: string[]; response: string }[] = [
    {
        keywords: ["service", "services", "what do you do", "offer", "help"],
        response:
            "I offer 5 core services:\n\n• **Web Development** — Custom websites, SaaS platforms, dashboards\n• **AI Solutions** — Chatbots, AI automation, business intelligence\n• **Dashboards & Analytics** — Power BI, Excel automation, KPI tracking\n• **Automation** — n8n, Make, Zapier workflow automation\n• **Digital Marketing** — Paid ads, SEO, funnels, branding\n\nWould you like to know more about any specific service?",
    },
    {
        keywords: ["case study", "case studies", "portfolio", "work", "examples", "projects"],
        response:
            "Here are my featured case studies:\n\n1. **E-commerce & Travel Ads** — Improved ROI through structured ad campaigns\n2. **FinTech Blog SEO** — Organic growth via keyword-based content strategy\n3. **Agency Automation** — Automated workflows saving hours weekly\n4. **Multi-Domain Software** — Systems across Real Estate, SaaS, CRM\n\nWant a detailed walkthrough of any case study?",
    },
    {
        keywords: ["domain", "industry", "industries", "experience", "worked"],
        response:
            "I've worked across these domains:\n\n• Real Estate (PropTech)\n• FinTech\n• EdTech\n• E-commerce\n• CRM Systems\n• ERP Solutions\n• SaaS Platforms\n\nAll focused on the UAE and surrounding markets.",
    },
    {
        keywords: ["approach", "process", "how", "methodology", "method"],
        response:
            "My 5-step approach:\n\n1. **Understand** your business model\n2. **Identify** bottlenecks & inefficiencies\n3. **Design** a tailored digital system\n4. **Implement** software + AI solutions\n5. **Optimize** for measurable growth\n\nEvery engagement starts with understanding before building.",
    },
    {
        keywords: ["price", "pricing", "cost", "budget", "rate", "charge", "consultation", "consult", "book", "meeting", "call"],
        response:
            "I'd love to discuss your project in detail! Every business is different, so I tailor my solutions and pricing accordingly.\n\nLet's have a quick chat on WhatsApp to understand your needs better.",
    },
    {
        keywords: ["tool", "tools", "technology", "tech", "stack"],
        response:
            "I use the right tool for every solution:\n\n• **Development**: React, Next.js, Node.js, WordPress, Shopify\n• **AI**: Python, LangChain, OpenAI, TensorFlow\n• **Analytics**: Power BI, Excel, Google Analytics\n• **Automation**: n8n, Make, Zapier\n• **Marketing**: Meta Ads, Google Ads, SEO, Canva\n\nTool selection depends on the business problem, not personal preference.",
    },
    {
        keywords: ["hi", "hello", "hey", "greetings", "good morning", "good evening"],
        response:
            "Hello! 👋 Welcome! I'm Nishar's assistant.\n\nI can help you learn about:\n• My services & solutions\n• Case studies & projects\n• Industries I work with\n• My approach to solving problems\n\nWhat would you like to know?",
    },
    {
        keywords: ["automation", "automate", "n8n", "make", "zapier"],
        response:
            "I specialize in business automation using:\n\n• **n8n** — Open-source workflow automation\n• **Make (Integromat)** — Visual automation builder\n• **Zapier** — App-to-app integrations\n\nI automate CRM flows, email sequences, data syncing, task management, and client onboarding — so teams can focus on growth instead of manual tasks.",
    },
    {
        keywords: ["ai", "artificial intelligence", "chatbot", "machine learning", "gpt"],
        response:
            "My AI solutions include:\n\n• **AI Chatbots** for customer support & lead qualification\n• **Document Analysis** using RAG architecture\n• **Business Intelligence** dashboards powered by AI\n• **Process Automation** with intelligent workflows\n\nI focus on practical AI that reduces costs and improves decision-making.",
    },
    {
        keywords: ["uae", "dubai", "abu dhabi", "location", "where"],
        response:
            "I'm based in **Dubai, UAE** 🇦🇪\n\nI work with businesses across the UAE — from startups to established companies — helping them transform operations through technology.\n\nWould you like to discuss a project?",
    },
];

function findResponse(input: string): string {
    const lower = input.toLowerCase();

    for (const entry of knowledgeBase) {
        if (entry.keywords.some((kw) => lower.includes(kw))) {
            return entry.response;
        }
    }

    return "I appreciate your question! For more detailed or specific inquiries, I'd recommend connecting directly with me on WhatsApp for a faster response.";
}

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "bot",
            text: "Hello! 👋 I'm Nishar's assistant. I can help you learn about my services, case studies, and approach. What would you like to know?",
        },
    ]);
    const [input, setInput] = useState("");
    const [messageCount, setMessageCount] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = { role: "user", text: input };
        const newCount = messageCount + 1;
        setMessageCount(newCount);

        const response = findResponse(input);
        const shouldShowWhatsApp =
            newCount >= 3 ||
            input.toLowerCase().includes("consult") ||
            input.toLowerCase().includes("price") ||
            input.toLowerCase().includes("book") ||
            input.toLowerCase().includes("meeting") ||
            input.toLowerCase().includes("call");

        const botMsg: Message = {
            role: "bot",
            text: response,
            showWhatsApp: shouldShowWhatsApp,
        };

        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-colors"
                        aria-label="Open chat"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[520px] rounded-2xl bg-card border border-border/50 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-border/50 flex items-center justify-between bg-card">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">Nishar&apos;s Assistant</h4>
                                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[280px] max-h-[340px]">
                            {messages.map((msg, i) => (
                                <div key={i}>
                                    <div
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-br-md"
                                                : "bg-secondary text-secondary-foreground rounded-bl-md"
                                                }`}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: msg.text
                                                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                                        .replace(/\n/g, "<br/>")
                                                        .replace(/• /g, "• "),
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* WhatsApp Redirect */}
                                    {msg.showWhatsApp && msg.role === "bot" && (
                                        <div className="mt-3 ml-1">
                                            <a
                                                href={WHATSAPP_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                Continue on WhatsApp
                                                <ArrowRight className="w-3 h-3" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-border/50 bg-card">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about my services..."
                                    className="flex-1 h-10 px-4 rounded-xl bg-background border border-input text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
                                    aria-label="Send message"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
