import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { socialLinks } from '../data/siteData'

const links = [['Home','/'],['About','/about'],['Services','/services'],['Portfolio','/portfolio'],['Contact','/contact']]
export default function Header(){
  const [open,setOpen]=useState(false)
  const nav = <>{links.map(([label,path])=><NavLink key={path} to={path} onClick={()=>setOpen(false)} className={({isActive})=>`text-sm font-medium hover:text-cyan-300 ${isActive?'text-cyan-300':'text-white/75'}`}>{label}</NavLink>)}</>
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <Link to="/" className="text-2xl font-black tracking-tight gradient-text">Zenpexal</Link>
      <nav className="hidden items-center gap-7 md:flex">{nav}</nav>
      <div className="hidden items-center gap-3 md:flex">
        {socialLinks.slice(0,4).map(s=>{const Icon=s.icon;return <a key={s.name} href={s.url} target="_blank" className="text-white/65 hover:text-cyan-300"><Icon size={18}/></a>})}
        <Link to="/contact" className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300">Hire Me</Link>
      </div>
      <button className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open && <div className="glass mx-4 mb-4 flex flex-col gap-5 rounded-2xl p-5 md:hidden">{nav}<Link to="/contact" onClick={()=>setOpen(false)} className="rounded-full bg-cyan-400 px-5 py-3 text-center font-bold text-slate-950">Hire Me</Link></div>}
  </header>
}
