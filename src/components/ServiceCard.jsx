import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function ServiceCard({service}){
  const Icon = service.icon
  return <motion.div whileHover={{y:-10, rotateX:3, scale:1.02}} className="glass group rounded-3xl p-6 shadow-neon transition">
    <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950"><Icon size={28}/></div>
    <h3 className="text-xl font-bold">{service.title}</h3>
    <p className="mt-3 text-white/65">{service.desc}</p>
    <Link to={`/services/${service.slug}`} className="mt-6 inline-flex font-semibold text-cyan-300 hover:text-cyan-200">Explore Service →</Link>
  </motion.div>
}
