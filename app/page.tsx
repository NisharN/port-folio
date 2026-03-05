"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, TrendingUp, Bot, BarChart3, Zap, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/section-wrapper";

const industries = [
  "Real Estate (PropTech)",
  "FinTech",
  "EdTech",
  "E-commerce",
  "CRM Systems",
  "ERP Solutions",
  "SaaS Platforms",
];

const services = [
  { icon: <Building2 className="w-6 h-6" />, title: "Web Development", desc: "Custom & no-code websites, SaaS platforms, dashboards" },
  { icon: <Bot className="w-6 h-6" />, title: "AI Solutions", desc: "Chatbots, AI frameworks, business intelligence" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Dashboards & Analytics", desc: "Power BI, Excel automation, performance tracking" },
  { icon: <Zap className="w-6 h-6" />, title: "Automation", desc: "n8n, Make, Zapier — automate repetitive tasks" },
  { icon: <Megaphone className="w-6 h-6" />, title: "Digital Marketing", desc: "Paid ads, SEO, funnels, conversion tracking" },
];

const caseStudyPreviews = [
  { slug: "ecommerce-travel-ads", title: "E-commerce & Travel Ads", tag: "Paid Advertising" },
  { slug: "fintech-blog-seo", title: "FinTech Blog Platform", tag: "SEO & Content" },
  { slug: "agency-workflow-automation", title: "Agency Automation", tag: "Workflow" },
  { slug: "multi-domain-software", title: "Multi-Domain Solutions", tag: "Software" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              Digital Transformation Specialist
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Transforming Businesses
              <br />
              <span className="text-gradient">in UAE</span> Through
              <br />
              Software, AI & Automation
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I help Real Estate, FinTech, E-commerce & SaaS companies scale using smart digital systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/case-studies">
              <Button size="lg" className="group">
                View Case Studies
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="https://wa.me/9710523519040" target="_blank">
              <Button variant="outline" size="lg">
                Book Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What I Do */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">What I Do</h2>
          <p className="section-subheading mx-auto">
            End-to-end digital transformation services designed to grow your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all group"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="font-semibold mb-1 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services">
            <Button variant="ghost" className="group text-primary">
              View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Industries I&apos;ve Worked With</h2>
          <p className="section-subheading mx-auto">
            Deep domain expertise across multiple verticals in the UAE and beyond.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-full border border-border/50 bg-card text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </SectionWrapper>

      {/* My Approach (mini) */}
      <SectionWrapper className="bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-4">My Approach</h2>
          <p className="section-subheading mx-auto mb-10">
            Problem → System → Growth
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Understand", desc: "Deep dive into your business model and challenges" },
              { num: "02", title: "Systematize", desc: "Design a tailored digital system with software & AI" },
              { num: "03", title: "Scale", desc: "Implement, optimize, and drive measurable growth" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-4xl font-bold text-primary/30">{step.num}</span>
                <h3 className="font-semibold mt-2 mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/approach">
              <Button variant="ghost" className="group text-primary">
                See Full Approach <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Case Studies */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Featured Case Studies</h2>
          <p className="section-subheading mx-auto">
            Real problems. Real solutions. Real results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudyPreviews.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/case-studies/${cs.slug}`}>
                <div className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group h-full">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {cs.tag}
                  </span>
                  <h3 className="font-semibold mt-4 group-hover:text-primary transition-colors">
                    {cs.title}
                  </h3>
                  <span className="text-xs text-muted-foreground mt-2 flex items-center gap-1 group-hover:text-primary transition-colors">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-card/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-heading mb-4">Ready to Transform Your Business?</h2>
          <p className="section-subheading mx-auto mb-8">
            Let&apos;s discuss how software, AI, and automation can solve your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link href="https://wa.me/9710523519040" target="_blank">
              <Button variant="outline" size="lg">
                WhatsApp Me
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
