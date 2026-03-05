import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Tools", href: "/tools" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export const Footer = () => {
    return (
        <footer className="bg-card border-t border-border/50 py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">
                            Nishar<span className="text-primary">.</span>
                        </h3>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                            Transforming businesses in the UAE through smart digital systems, AI solutions, and strategic automation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            <Link
                                href="https://github.com/NisharN"
                                target="_blank"
                                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                            >
                                <Github className="w-4 h-4" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/Nishar03"
                                target="_blank"
                                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link
                                href="mailto:nisharr03@gmail.com"
                                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                            >
                                <Mail className="w-4 h-4" />
                            </Link>
                            <Link
                                href="https://wa.me/9710523519040"
                                target="_blank"
                                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground">Dubai, UAE</p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Nishar Ahamed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
