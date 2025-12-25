import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-border/50 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold">Nishar Ahamed</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Building innovative web solutions with passion and precision.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://github.com/NisharN" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com/in/Nishar03" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:nisharr03@gmail.com" className="p-2 rounded-full hover:bg-muted transition-colors">
                            <Mail className="w-5 h-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Nishar Ahamed. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Chennai, Tamilnadu, India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
