import { motion } from 'framer-motion'
export default function Button({children, className='', as='button', ...props}){
  const Comp = motion[as] || motion.button
  return <Comp whileHover={{scale:1.04}} whileTap={{scale:.97}} className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition shadow-neon ${className}`} {...props}>{children}</Comp>
}
