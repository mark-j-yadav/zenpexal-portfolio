import { useState } from 'react'
import { whatsappNumber } from '../data/siteData'
const initial = {name:'', email:'', phone:'', service:'', budget:'', message:''}
export default function ContactForm(){
  const [form,setForm]=useState(initial); const [errors,setErrors]=useState({})
  const set=(e)=>setForm({...form,[e.target.name]:e.target.value})
  const validate=()=>{const e={}; if(!form.name.trim()) e.name='Name is required'; if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email='Valid email is required'; if(!form.phone.trim()) e.phone='Phone is required'; if(!form.service) e.service='Please select a service'; if(!form.budget) e.budget='Please select a budget'; if(!form.message.trim()) e.message='Message is required'; return e}
  const submit=(ev)=>{ev.preventDefault(); const e=validate(); setErrors(e); if(Object.keys(e).length) return; const msg=`Hello, I am interested in your web development service.%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService Needed: ${form.service}%0ABudget: ${form.budget}%0AMessage: ${form.message}`; window.open(`https://wa.me/${whatsappNumber.replace(/\D/g,'')}?text=${msg}`,'_blank')}
  const input='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300'
  return <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-8">
    <div className="grid gap-5 md:grid-cols-2">
      {['name','email','phone'].map(k=><label key={k} className="block"><span className="capitalize text-white/75">{k}</span><input name={k} value={form[k]} onChange={set} className={input}/>{errors[k]&&<p className="mt-1 text-sm text-red-300">{errors[k]}</p>}</label>)}
      <label><span className="text-white/75">Service Needed</span><select name="service" value={form.service} onChange={set} className={input}><option value="">Select service</option><option>MERN Stack Development</option><option>Next.js Development</option><option>WordPress Development</option><option>Shopify Store</option><option>Landing Page</option><option>SEO Optimization</option></select>{errors.service&&<p className="mt-1 text-sm text-red-300">{errors.service}</p>}</label>
      <label><span className="text-white/75">Budget</span><select name="budget" value={form.budget} onChange={set} className={input}><option value="">Select budget</option><option>₹5,000 - ₹15,000</option><option>₹15,000 - ₹40,000</option><option>₹40,000 - ₹1,00,000</option><option>₹1,00,000+</option></select>{errors.budget&&<p className="mt-1 text-sm text-red-300">{errors.budget}</p>}</label>
      <label className="md:col-span-2"><span className="text-white/75">Message</span><textarea name="message" value={form.message} onChange={set} rows="5" className={input}/>{errors.message&&<p className="mt-1 text-sm text-red-300">{errors.message}</p>}</label>
    </div><button className="mt-6 w-full rounded-full bg-cyan-400 px-7 py-4 font-black text-slate-950 hover:bg-cyan-300">Submit on WhatsApp</button>
  </form>
}
