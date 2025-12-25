"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { User, Code2, Brain } from "lucide-react";

const codeString = `const developer = {
  name: 'Nishar Ahamed',
  skills: [
    'React', 'NodeJS', 'Redux', 
    'Express', 'MongoDB', 'Python', 
    'AWS', 'NextJS'
  ],
  passionate: true,
  quickLearner: true,
  problemSolver: true,
  
  hire: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

export const About = () => {
    return (
        <SectionWrapper id="about" className="bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-medium">
                        <User className="w-5 h-5" />
                        <span>About Me</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Who I am?</h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I am <span className="text-foreground font-semibold">Nishar Ahamed</span>, a passionate Computer Science graduate and Full Stack Developer skilled in React and Node.js.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        With freelance and project experience, I embrace challenges and am eager to learn and contribute. I bring strong development and problem-solving skills to build innovative web solutions. As a quick learner and team player, I am always ready to take on new technologies and opportunities to grow.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                            <Code2 className="w-8 h-8 text-primary mb-2" />
                            <h3 className="font-bold">Full Stack</h3>
                            <p className="text-sm text-muted-foreground">MERN & Next.js</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                            <Brain className="w-8 h-8 text-purple-500 mb-2" />
                            <h3 className="font-bold">AI & ML</h3>
                            <p className="text-sm text-muted-foreground">Python & Integration</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Code Block */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-6 group-hover:rotate-12 transition-transform opacity-50" />
                    <motion.div
                        className="relative bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Mac-like Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 text-xs text-gray-400 font-mono">developer.js</span>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm md:text-base font-mono leading-relaxed">
                                <code className="text-gray-300">
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> {'{'}
                                    {'\n'}  <span className="text-red-400">name</span>: <span className="text-green-400">'Nishar Ahamed'</span>,
                                    {'\n'}  <span className="text-red-400">skills</span>: [
                                    {'\n'}    <span className="text-green-400">'React'</span>, <span className="text-green-400">'NodeJS'</span>, <span className="text-green-400">'Redux'</span>,
                                    {'\n'}    <span className="text-green-400">'Express'</span>, <span className="text-green-400">'MongoDB'</span>
                                    {'\n'}  ],
                                    {'\n'}  <span className="text-red-400">passionate</span>: <span className="text-yellow-400">true</span>,
                                    {'\n'}  <span className="text-red-400">quickLearner</span>: <span className="text-yellow-400">true</span>,
                                    {'\n'}  <span className="text-blue-400">hire</span>: <span className="text-purple-400">function</span>() {'{'}
                                    {'\n'}    <span className="text-purple-400">return</span> (
                                    {'\n'}      <span className="text-blue-400">this</span>.hardWorker &&
                                    {'\n'}      <span className="text-blue-400">this</span>.problemSolver
                                    {'\n'}    );
                                    {'\n'}  {'}'}
                                    {'\n'}{'}'};
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};
