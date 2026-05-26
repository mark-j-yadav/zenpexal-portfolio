import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import AnimatedSection from "../components/AnimatedSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";

import {
  githubUrl,
  projects,
  services,
} from "../data/siteData";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-5 py-24 md:py-32">
        <motion.div
          className="absolute left-10 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <motion.div
          className="absolute right-10 top-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
          animate={{ y: [0, -35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
            >
              Premium Web Development Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black leading-tight md:text-7xl"
            >
              Premium Websites That{" "}
              <span className="gradient-text">
                Convert Visitors Into Clients
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg text-white/70"
            >
              I build modern, responsive and high-performing websites using
              MERN Stack, Next.js, WordPress, Shopify and advanced web
              technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="rounded-full bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-300"
              >
                View Services
              </Link>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="rounded-full border border-white/20 px-7 py-4 font-black transition hover:bg-white/10"
              >
                Contact on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass relative rounded-[2rem] p-8 shadow-neon"
          >
            <Code2 className="text-cyan-300" size={48} />

            <h2 className="mt-6 text-3xl font-black">
              Modern Stack. Premium UI. Business Results.
            </h2>

            <p className="mt-4 text-white/65">
              React, Next.js, MERN, WordPress, Shopify, SEO, speed optimization
              and conversion-focused design.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "React.js",
                "Next.js",
                "Tailwind",
                "Shopify",
                "WordPress",
                "Node.js",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-2xl bg-white/5 p-4 text-center font-bold text-white/80"
                >
                  {x}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <AnimatedSection className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Premium Services
          </h2>

          <p className="mt-3 text-white/65">
            Every service page is built to show value, trust and technical
            capability.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* WHY CHOOSE */}
      <AnimatedSection className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            "Clean Code",
            "Premium Design",
            "Fast Loading",
            "Lead Focused",
          ].map((x, i) => (
            <div key={x} className="glass rounded-3xl p-6">
              <p className="gradient-text text-5xl font-black">
                0{i + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold">{x}</h3>

              <p className="mt-2 text-white/60">
                Built with strategy, performance and a professional user
                experience.
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* PROJECTS */}
      <AnimatedSection className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Featured Projects</h2>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* GITHUB */}
      <AnimatedSection className="px-5 py-16">
        <div className="glass mx-auto max-w-5xl rounded-[2rem] p-10 text-center">
          <FaGithub className="mx-auto text-cyan-300" size={52} />

          <h2 className="mt-5 text-4xl font-black">
            My Code & Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Explore my development work, real projects and code quality on
            GitHub.
          </p>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 font-black text-slate-950"
          >
            Visit GitHub
          </a>
        </div>
      </AnimatedSection>

      {/* PROCESS */}
      <AnimatedSection className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">My Process</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {["Discovery", "Design", "Development", "Launch"].map((x) => (
              <div key={x} className="glass rounded-3xl p-6">
                <h3 className="text-xl font-bold">{x}</h3>

                <p className="mt-2 text-white/60">
                  Clear communication, clean execution and final delivery with
                  support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TESTIMONIALS */}
      <AnimatedSection className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Testimonials</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Premium quality and fast delivery.",
              "The website looked modern and professional.",
              "Clear process and strong technical skills.",
            ].map((t) => (
              <div key={t} className="glass rounded-3xl p-6">
                <p className="text-white/75">“{t}”</p>

                <p className="mt-4 font-bold text-cyan-300">
                  Client Review
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </main>
  );
}