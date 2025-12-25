"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: "", email: "", message: "" });
            alert("Message sent! (Demo)");
        }, 1500);
    };

    return (
        <SectionWrapper id="contact" className="bg-secondary/20">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
                        <p className="text-xl text-muted-foreground">
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm border border-border">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <a href="mailto:nisharr03@gmail.com" className="font-medium hover:text-primary transition-colors">nisharr03@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm border border-border">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p className="font-medium">+971 0523519040</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm border border-border">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="font-medium">Dubai, UAE</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm relative overflow-hidden">

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full h-11 px-4 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full h-11 px-4 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                                placeholder="john@example.com"
                                value={formState.email}
                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                required
                                className="w-full h-32 p-4 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none resize-none"
                                placeholder="Tell me about your project..."
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};
