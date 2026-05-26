import { useParams, Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import CTASection from '../components/CTASection'
import { services, whatsappNumber } from '../data/siteData'
export default function ServicePage(){
 const {slug}=useParams(); const service=services.find(s=>s.slug===slug); if(!service) return <main className="px-5 py-24 text-center"><h1 className="text-4xl font-black">Service not found</h1><Link to="/services" className="mt-5 inline-block text-cyan-300">Back to services</Link></main>
 const Icon=service.icon
 return <main><section className="px-5 py-24"><div className="glass mx-auto max-w-6xl rounded-[2rem] p-10 text-center shadow-neon"><Icon className="mx-auto text-cyan-300" size={60}/><h1 className="mt-6 text-5xl font-black md:text-6xl">{service.title}</h1><p className="mx-auto mt-5 max-w-3xl text-lg text-white/65">{service.desc} I create premium digital experiences focused on trust, performance, user experience and client conversions.</p><a href={`https://wa.me/${whatsappNumber.replace(/\D/g,'')}`} className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950">Get Quote on WhatsApp</a></div></section>
 <AnimatedSection className="px-5 py-12"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{['What I Offer','Client Benefits','Features'].map((h,i)=><div key={h} className="glass rounded-3xl p-7"><h2 className="text-2xl font-black">{h}</h2><ul className="mt-5 space-y-3 text-white/65"><li>✓ Premium responsive design</li><li>✓ Clean and scalable structure</li><li>✓ SEO-friendly implementation</li><li>✓ Conversion-focused sections</li><li>✓ Fast loading experience</li></ul></div>)}</div></AnimatedSection>
 <AnimatedSection className="px-5 py-12"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black">Technologies Used</h2><div className="mt-6 flex flex-wrap gap-3">{service.tech.map(t=><span key={t} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-200">{t}</span>)}</div></div></AnimatedSection><CTASection/></main>
}
