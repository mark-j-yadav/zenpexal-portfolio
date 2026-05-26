import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'
export default function CTASection(){
  return <AnimatedSection className="px-5 py-20"><div className="glass mx-auto max-w-5xl rounded-[2rem] p-10 text-center shadow-neon"><h2 className="text-3xl font-black md:text-5xl">Ready to build a premium website?</h2><p className="mx-auto mt-4 max-w-2xl text-white/65">Let’s create a high-performing website that builds trust, gets leads and helps your business grow.</p><Link to="/contact" className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 hover:bg-cyan-300">Start Your Project</Link></div></AnimatedSection>
}
