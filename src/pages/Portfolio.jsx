import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { projects } from '../data/siteData'
export default function Portfolio(){return <main className="px-5 py-20"><AnimatedSection className="mx-auto max-w-7xl"><h1 className="text-5xl font-black md:text-6xl">Portfolio / Projects</h1><p className="mt-4 text-white/65">Replace these placeholders with your real website screenshots, live links and GitHub links.</p><div className="mt-10 grid gap-7 md:grid-cols-3">{projects.map(p=><ProjectCard key={p.title} project={p}/>)}</div></AnimatedSection><CTASection/></main>}
