"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/50 border border-accent text-sm font-medium text-accent-foreground mb-4">
                        Available for work
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        Hello, This is <br className="hidden md:block" />
                        <span className="text-primary">NISHAR AHAMED</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mb-8"
                >
                    I&apos;m a <span className="text-foreground font-semibold">Software Developer</span> passionate about building modern web applications and AI-driven solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="#contact">
                        <Button size="lg" className="group">
                            Contact Me
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/resume.pdf" target="_blank" download>
                        <Button variant="outline" size="lg">
                            Get Resume
                            <Download className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
