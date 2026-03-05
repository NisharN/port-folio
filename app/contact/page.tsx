"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: "", email: "", message: "" });
            alert("Message sent! I'll get back to you soon.");
        }, 1500);
    };

    return (
        <main className="page-container">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-6"
                    >
                        Let&apos;s Work
                        <br />
                        <span className="text-gradient">Together</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-subheading mx-auto"
                    >
                        Have a business challenge? Let&apos;s discuss how I can help you scale with the right digital systems.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                                    <a
                                        href="mailto:nisharr03@gmail.com"
                                        className="font-medium hover:text-primary transition-colors"
                                    >
                                        nisharr03@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                                    <p className="font-medium">+971 0523519040</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                                    <p className="font-medium">Dubai, UAE</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <Link href="https://wa.me/9710523519040" target="_blank">
                            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all flex items-center gap-4 group cursor-pointer mt-8">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-emerald-500" />
                                </div>
                                <div>
                                    <p className="font-semibold group-hover:text-emerald-400 transition-colors">
                                        WhatsApp Me
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Quick response for business inquiries
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-2xl border border-border/50 bg-card"
                    >
                        <h3 className="text-lg font-bold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full h-11 px-4 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm"
                                    placeholder="Your name"
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState({ ...formState, name: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full h-11 px-4 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm"
                                    placeholder="your@email.com"
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({ ...formState, email: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    className="w-full h-32 p-4 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none resize-none text-sm"
                                    placeholder="Tell me about your business challenge..."
                                    value={formState.message}
                                    onChange={(e) =>
                                        setFormState({ ...formState, message: e.target.value })
                                    }
                                />
                            </div>

                            <Button type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </SectionWrapper>
        </main>
    );
}
