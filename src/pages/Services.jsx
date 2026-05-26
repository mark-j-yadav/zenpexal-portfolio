import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { services } from '../data/siteData'
export default function Services(){return <main className="px-5 py-20"><AnimatedSection className="mx-auto max-w-7xl"><h1 className="text-5xl font-black md:text-6xl">Services</h1><p className="mt-4 max-w-3xl text-white/65">Choose a premium web development service designed for business growth, speed, conversion and trust.</p><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></AnimatedSection><CTASection/></main>}
