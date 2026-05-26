import { motion } from 'framer-motion'
export default function AnimatedSection({ children, className='' }){
  return <motion.section className={className} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.15}} transition={{duration:.7}}>{children}</motion.section>
}
