import {
  Code2,
  ShoppingCart,
  Globe2,
  Rocket,
  Gauge,
  Palette,
  RefreshCcw,
  Search,
  Wrench,
  Layers3,
  Briefcase,
  Database,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

export const whatsappNumber = "+919358595763";
export const githubUrl = "https://github.com/mark-j-yadav";

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: githubUrl,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/jitender-yadav-82626b3bb",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/zenpexal",
  },
  {
    name: "X/Twitter",
    icon: FaXTwitter,
    url: "https://x.com/markjyadav_",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com/yourusername",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
  },
];

export const services = [
  { title: "MERN Stack Web Development", slug: "mern-stack-development", icon: Database, desc: "Full-stack web apps with MongoDB, Express, React and Node.js.", tech: ["MongoDB", "Express", "React", "Node.js", "REST APIs"] },
  { title: "Next.js Website Development", slug: "nextjs-development", icon: Rocket, desc: "Fast, SEO-friendly websites and apps powered by Next.js.", tech: ["Next.js", "React", "SSR", "SEO", "Vercel"] },
  { title: "WordPress Website Development", slug: "wordpress-development", icon: Globe2, desc: "Premium business websites, landing pages and custom WordPress builds.", tech: ["WordPress", "Elementor", "WooCommerce", "SEO"] },
  { title: "Shopify Store Development", slug: "shopify-development", icon: ShoppingCart, desc: "Conversion-focused Shopify stores built for sales and scale.", tech: ["Shopify", "Liquid", "Apps", "Payments"] },
  { title: "E-commerce Website Development", slug: "ecommerce-development", icon: Briefcase, desc: "Modern online stores with smooth checkout and product flows.", tech: ["React", "Shopify", "WooCommerce", "Stripe"] },
  { title: "Landing Page Design", slug: "landing-page-design", icon: Palette, desc: "High-converting landing pages for ads, leads and launches.", tech: ["React", "Tailwind", "Framer Motion", "Analytics"] },
  { title: "Website Redesign", slug: "website-redesign", icon: RefreshCcw, desc: "Transform outdated sites into modern premium digital experiences.", tech: ["UI/UX", "React", "WordPress", "Performance"] },
  { title: "SEO Optimization", slug: "seo-optimization", icon: Search, desc: "On-page SEO, structure, metadata and search-ready pages.", tech: ["Technical SEO", "Schema", "Meta Tags", "Content"] },
  { title: "Speed Optimization", slug: "speed-optimization", icon: Gauge, desc: "Improve load speed, Core Web Vitals and user experience.", tech: ["Lighthouse", "Caching", "Image Optimization", "Code Split"] },
  { title: "Website Maintenance", slug: "website-maintenance", icon: Wrench, desc: "Monthly updates, security, backups and technical support.", tech: ["Backups", "Security", "Updates", "Monitoring"] },
  { title: "Custom Web Applications", slug: "custom-web-applications", icon: Layers3, desc: "Custom dashboards, portals, booking systems and SaaS-style apps.", tech: ["React", "Node.js", "APIs", "Auth"] },
  { title: "Business Website Development", slug: "business-website-development", icon: Code2, desc: "Professional company websites that build trust and generate leads.", tech: ["React", "WordPress", "SEO", "Forms"] },
];

export const projects = [
  {
    title: "Premium Travel Agency Website",
    stack: "React • Tailwind • Framer Motion",
    desc: "Lead-focused travel website with elegant service sections and CTA flow.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    live: "#",
    github: "#",
  },
  {
    title: "Shopify Fashion Store",
    stack: "Shopify • Liquid • Conversion UX",
    desc: "Modern e-commerce store with optimized product pages and checkout journey.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    live: "#",
    github: "#",
  },
  {
    title: "MERN SaaS Dashboard",
    stack: "MongoDB • Express • React • Node",
    desc: "Secure dashboard with authentication, analytics cards and API integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    live: "#",
    github: "#",
  },
];
