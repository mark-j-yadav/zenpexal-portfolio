import ContactForm from '../components/ContactForm'
import AnimatedSection from '../components/AnimatedSection'
import { socialLinks } from '../data/siteData'
export default function Contact(){return <main className="px-5 py-20"><AnimatedSection className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2"><div><h1 className="text-5xl font-black md:text-6xl">Let’s Build Your Website</h1><p className="mt-5 text-white/65">Fill the form and it will open WhatsApp with a professional pre-filled project message.</p><div className="mt-8 flex flex-wrap gap-3">{socialLinks.map(s=>{const Icon=s.icon;return <a key={s.name} href={s.url} target="_blank" className="glass rounded-full p-3 hover:text-cyan-300"><Icon size={20}/></a>})}</div></div><ContactForm/></AnimatedSection></main>}
