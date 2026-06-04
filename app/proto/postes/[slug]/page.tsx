'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { jobDetails } from '../data'

function AccentColors() {
  return {
    text: 'text-[#CC785C]',
    bg: 'bg-[#CC785C]/10',
    bgHover: 'hover:bg-[#CC785C]/20',
    border: 'border-[#CC785C]/30',
    ring: 'ring-[#CC785C]/20',
    btn: 'bg-[#CC785C] hover:bg-[#B86A50] text-white font-semibold',
    light: 'text-[#CC785C]/60',
    dot: 'bg-[#CC785C]',
    divider: 'border-[#CC785C]/10',
  }
}

export default function JobDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const job = jobDetails[slug]
  const c = AccentColors()

  if (!job) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Poste non trouvé</h1>
          <Link href="/proto" className={`${c.text} hover:underline`}>
            ← Retour
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="border-b border-white/5 bg-black sticky top-0 z-40">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/proto" className="font-bold text-lg tracking-tight">
            Iterato
          </Link>
          <Link
            href="/proto#postes"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ← Retour aux postes
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
            {job.location}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
            {job.type}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
            {job.tag}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">
          {job.title}
          <span className={`${c.text} text-lg block mt-1 font-medium`}>{job.location}</span>
        </h1>

        {/* Sections */}
        <div className="space-y-10">
          {job.sections.map((section: typeof job.sections[number], i: number) => (
            <div key={i}>
              <h2 className={`text-lg font-bold mb-4 ${c.text}`}>
                {section.heading}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item: string, j: number) => (
                  <li key={j} className="flex gap-3 text-white/70 leading-relaxed">
                    <span className={`${c.text} shrink-0 mt-1`}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            {job.footer}
          </p>
          <Link
            href="/proto"
            className={`inline-block px-6 py-3 rounded-lg ${c.btn} transition-all text-sm`}
          >
            Déposer un besoin
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-bold">Iterato</span>
          <span className="text-white/30 text-sm ml-2">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  )
}
