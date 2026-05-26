import { Link } from 'react-router-dom'
import { services, socialLinks, whatsappNumber } from '../data/siteData'
export default function Footer(){
  return <footer className="border-t border-white/10 bg-slate-950/80 px-5 py-12">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
      <div><h2 className="text-3xl font-black gradient-text">Zenpexal</h2><p className="mt-4 text-white/65">Premium web development for businesses that need trust, speed, conversion and modern digital presence.</p></div>
      <div><h3 className="font-bold">Quick Links</h3><div className="mt-4 flex flex-col gap-2 text-white/65"><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/portfolio">Portfolio</Link><Link to="/contact">Contact</Link></div></div>
      <div><h3 className="font-bold">Services</h3><div className="mt-4 flex flex-col gap-2 text-white/65">{services.slice(0,6).map(s=><Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}</div></div>
      <div><h3 className="font-bold">Connect</h3><div className="mt-4 flex gap-3">{socialLinks.map(s=>{const Icon=s.icon;return <a key={s.name} href={s.url} target="_blank" className="glass rounded-full p-3 hover:text-cyan-300"><Icon size={18}/></a>})}</div><a href={`https://wa.me/${whatsappNumber.replace(/\D/g,'')}`} className="mt-5 inline-block rounded-full bg-emerald-400 px-5 py-3 font-bold text-slate-950">WhatsApp Contact</a></div>
    </div>
    <p className="mt-10 text-center text-sm text-white/45">© {new Date().getFullYear()} Zenpexal. All rights reserved.</p>
  </footer>
}
