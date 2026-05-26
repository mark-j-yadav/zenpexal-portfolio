import { motion } from 'framer-motion'
export default function ProjectCard({project}){
  return <motion.div whileHover={{y:-8}} className="glass overflow-hidden rounded-3xl">
    <img src={project.image} alt={project.title} className="h-56 w-full object-cover opacity-90" />
    <div className="p-6"><p className="text-sm text-cyan-300">{project.stack}</p><h3 className="mt-2 text-2xl font-bold">{project.title}</h3><p className="mt-3 text-white/65">{project.desc}</p>
    <div className="mt-6 flex gap-3"><a href="#" className="rounded-full bg-white px-5 py-2 font-bold text-slate-950">Live Demo</a><a href="#" className="rounded-full border border-white/20 px-5 py-2 font-bold">GitHub</a></div></div>
  </motion.div>
}
