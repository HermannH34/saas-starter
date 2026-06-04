'use client'

import { useState } from 'react'

// ============================================================
// DATA
// ============================================================

const DATA = {
  hero: {
    label:
      "Cabinet de recrutement spécialisé DevOps, SRE et Platform Engineer en France",
    headlinePart1:
      "Les ingénieurs DevOps, SRE et Platform sont les plus difficiles à recruter.",
    headlinePart2: "On ne fait que ça.",
    subtitle:
      "Iterato connecte les équipes infras avec les meilleurs ingénieurs DevOps, SRE et Platform Engineer. Une seule spécialité, un réseau, un DevOps actif qui teste chaque profil. Premiers profils en moins de 2 semaines.",
    ctaPrimary: "Déposer un besoin",
    ctaSecondary: "Rejoindre le réseau",
  },
  team: {
    tagline: "Une recruteuse. Un ingénieur DevOps. Une seule niche.",
    members: [
      {
        initial: "C",
        name: "Clara",
        role: "La recruteuse",
        bio: "Chasseuse de têtes, Clara s'est spécialisée dans une seule niche : DevOps, SRE et Platform Engineer. Elle sait que recruter un bon ingénieur infra, ça ne s'improvise pas. Ça demande de comprendre les stacks, les contextes, les étapes de carrière. Ce qui la motive avant tout : le sourcing. Aller chercher les profils que personne d'autre ne trouve, ceux qui ne sont pas sur le marché. Elle ne vous envoie pas des profils pour en envoyer. Elle va chercher les bons, qu'ils soient en recherche ou pas.",
      },
      {
        initial: "H",
        name: "Hermann",
        role: "L'ingénieur DevOps",
        bio: "[à compléter]",
      },
    ],
  },
  process: {
    tagline: "Comment ça marche",
    steps: [
      {
        number: "01",
        title: "On cadre ensemble",
        description:
          "Un call de 30 minutes avec Clara et Hermann. On comprend votre stack, votre équipe, votre contexte. Pas un formulaire. Une vraie conversation technique.",
      },
      {
        number: "02",
        title: "On va chercher les profils",
        description:
          "On ne publie pas une annonce et on attend. On active notre réseau, on approche les bons profils y compris ceux qui ne cherchent pas.",
      },
      {
        number: "03",
        title: "On teste avant vous",
        description:
          "Chaque profil est qualifié techniquement par notre ingénieur DevOps en activité. Vous ne recevez que des profils qui tiennent la route sur le fond.",
      },
      {
        number: "04",
        title: "On vous présente les meilleurs",
        description:
          "Pas 10 CVs. 2 ou 3 profils max, tous pertinents. Avec un brief détaillé pour chacun.",
      },
      {
        number: "05",
        title: "On suit les premières semaines",
        description:
          "Le placement ne s'arrête pas à la signature. On reste en contact avec le candidat et avec vous pendant le premier mois — pour s'assurer que ça s'intègre bien des deux côtés.",
      },
    ],
  },
  ctaMid: {
    title: "Déposez votre besoin de recrutement.",
    subtitle:
      "Sous 48h, on vous dit si on peut vous aider, comment, et en combien de temps. Pas de pitch, pas de baratin.",
    button: "Déposer un besoin →",
    mention: "Réponse sous 48h · Sans engagement",
  },
  testimonials: {
    tagline: "",
    quotes: [
      {
        text: "Franchement on s'attendait pas à aller aussi vite. On cherchait depuis 4 mois. Iterato nous a présenté le bon profil en 10 jours. Pas 10 CVs, le bon.",
        author: "CTO, fintech parisienne, Série B",
      },
      {
        text: "Ils avaient compris ce qu'on cherchait mieux que certains candidats qu'on avait vus avant. La précision était là dès le premier call. Ils connaissaient notre stack, notre contexte. On a gagné du temps.",
        author: "VP Engineering, scale-up SaaS, Lyon",
      },
      {
        text: "Pour une fois on n'a pas eu à expliquer ce que voulait dire Kubernetes à notre recruteur. Clara a su approcher les bons profils — même ceux qui ne cherchaient pas. Pas besoin de lui répéter deux fois ce qu'on voulait.",
        author: "DRH, ETI en transformation digitale, Bordeaux",
      },
    ],
  },
   jobs: {
    tagline: "Postes en cours",
    listings: [
      {
        slug: "devops-cloud-engineer",
        title: "DevOps Cloud Engineer",
        location: "Paris",
        type: "CDI",
        salary: "Remote-friendly",
        description: "Iterato recrute pour un grand groupe à Paris en pleine refonte de sa plateforme technique. L'enjeu : moderniser une infrastructure critique, migrer vers le cloud et industrialiser les pratiques de delivery.",
      },
      {
        slug: "senior-reliability-engineer",
        title: "Senior Reliability Engineer",
        location: "Paris",
        type: "CDI",
        salary: "Remote-friendly",
        description: "Iterato recrute pour un client à Paris — une start-up en pleine phase de scale. L'équipe Platform Engineering cherche un SRE senior pour renforcer le pôle Scalability.",
      },
    ],
  },
  candidates: {
    title: "Vous êtes ingénieur DevOps, SRE ou Platform Engineer ?",
    subtitle: "On ne vous contactera pas pour n'importe quoi.",
    body: "Chez Iterato, vous êtes approché uniquement quand c'est pertinent — bonne stack, bon contexte, bonne étape de carrière. Par quelqu'un qui comprend ce que vous faites. Pas de perte de temps.",
    cta: "Rejoindre notre réseau",
  },
  faq: {
    tagline: "Questions fréquentes",
    items: [
      {
        q: "Quels types de profils recrutez-vous ?",
        a: "DevOps, SRE et Platform Engineers. Uniquement. Ce sont des profils pointus, difficiles à trouver via les canaux classiques. C'est précisément pour ça qu'on a construit un réseau dédié.",
      },
      {
        q: "Quels sont vos délais ?",
        a: "On vise une première sélection sous 2 semaines maximum. Pas 10 CVs. 3 profils vraiment pertinents.",
      },
      {
        q: "Comment fixez-vous vos honoraires ?",
        a: "On travaille au succès. Si vous ne signez pas un contrat avec un profil que nous vous présentons, nous ne facturons aucun honoraire.",
      },
      {
        q: "Proposez-vous une garantie ?",
        a: "Oui. Si le candidat part dans la période de 3 mois, on relance la recherche sans frais supplémentaires.",
      },
      {
        q: "Vous confirmez que vous ne facturez que si on recrute votre candidat ?",
        a: "On ne vous facture que si vous recrutez un de nos candidats. Pas de recrutement, pas de frais.",
      },
      {
        q: "On a déjà un service RH interne.",
        a: "On travaille en parallèle de votre RH, pas à la place. Deux canaux valent mieux qu'un, surtout sur des profils aussi pénuriques que les DevOps et SRE.",
      },
      {
        q: "Notre budget est serré.",
        a: "Parlons-en dès le départ. On cherche toujours une formule qui fonctionne pour les deux parties.",
      },
      {
        q: "On a mis une annonce sur les jobboards pendant 3 mois sans résultat.",
        a: "Les meilleurs profils DevOps ne sont pas sur Indeed — ils n'ont pas besoin d'y être. On va les chercher là où ils sont vraiment : chasse directe, communautés techniques, réseau.",
      },
      {
        q: "Et si on n'est pas satisfait ?",
        a: "On travaille uniquement au succès. Pas de recrutement, pas d'honoraires. Zéro risque financier.",
      },
      {
        q: "On veut déléguer entièrement ou rester impliqué — vous vous adaptez ?",
        a: "Évidemment. Certains clients veulent recevoir une shortlist et c'est tout. D'autres veulent être dans la boucle à chaque étape. On s'adapte à vous.",
      },
    ],
  },
  ctaFinal: {
    title: "Votre prochain ingénieur infrastructure est quelque part dans notre réseau.",
    subtitle:
      "Un call de 20 minutes pour voir si on peut vous aider. Pas de pitch. Juste une conversation franche sur votre besoin réel.",
    primary: "Déposer un besoin",
    secondary: "Réserver un call exploratoire",
    mention: "Réponse sous 48h · Sans engagement · Confidentiel",
  },
}

// ============================================================
// ACCENT COLOR MAP
// ============================================================

interface AccentColors {
  text: string
  bg: string
  bgHover: string
  border: string
  ring: string
  btn: string
  light: string
  dot: string
  divider: string
}

function accent(v: string): AccentColors {
  const map: Record<string, AccentColors> = {
    "2": {
      text: "text-[#CC785C]",
      bg: "bg-[#CC785C]/10",
      bgHover: "hover:bg-[#CC785C]/20",
      border: "border-[#CC785C]/30",
      ring: "ring-[#CC785C]/20",
      btn: "bg-[#CC785C] hover:bg-[#B86A50] text-black font-semibold",
      light: "text-[#CC785C]/60",
      dot: "bg-[#CC785C]",
      divider: "border-[#CC785C]/10",
    },
  }
  return map[v] || map["2"]
}

// ============================================================
// SHARED: BUTTON
// ============================================================

function Btn({ variant, children, secondary, onClick, href }: {
  variant: string
  children: React.ReactNode
  secondary?: boolean
  onClick?: () => void
  href?: string
}) {
  const c = accent(variant)
  const cls = secondary
    ? `px-6 py-3 rounded-lg border ${c.border} ${c.text} font-medium ${c.bgHover} transition-colors text-sm`
    : `px-6 py-3 rounded-lg ${c.btn} transition-all text-sm`

  if (href) {
    return (
      <a href={href} className={`inline-block ${cls}`}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

// ============================================================
// SHARED: AVATAR INITIALS
// ============================================================

function Avatar({ initial, variant, size }: {
  initial: string
  variant: string
  size?: string
}) {
  const c = accent(variant)
  const dims =
    size === "lg" ? "w-24 h-24 text-3xl" : "w-14 h-14 text-xl"
  return (
    <div
      className={`${dims} rounded-full ${c.bg} ${c.border} border-2 flex items-center justify-center font-bold ${c.text} shrink-0`}
    >
      {initial}
    </div>
  )
}

// ============================================================
// SHARED: SECTION WRAPPER
// ============================================================

function Section({ children, id }: {
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}

// ============================================================
// SHARED: TAGLINE (section header)
// ============================================================

function Tagline({ children, variant }: {
  children: React.ReactNode
  variant: string
}) {
  const c = accent(variant)
  return (
    <h2
      className={`${c.text} text-2xl md:text-3xl font-bold tracking-tight mb-4`}
    >
      {children}
    </h2>
  )
}

// ============================================================
// FORM MODAL (shared wrapper)
// ============================================================

function FormModal({ open, onClose, children }: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

// ============================================================
// FORM: DÉPOSER UN BESOIN
// ============================================================

function FormDeposerBesoin({ variant, onClose }: { variant: string; onClose: () => void }) {
  const c = accent(variant)
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [profil, setProfil] = useState('')
  const [contexte, setContexte] = useState('')
  const [niveau, setNiveau] = useState('')

  if (step === 'success') {
    return (
      <div className="text-center py-8">
        <div className={`w-16 h-16 rounded-full ${c.bg} ${c.border} border-2 flex items-center justify-center mx-auto mb-6`}>
          <svg className={`w-8 h-8 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Bien reçu</h3>
        <p className="text-white/50">Un membre d&apos;Iterato vous contacte sous 24h.</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: prenom, email, profileType: profil, context: contexte, experienceLevel: niveau, formType: 'deposer_besoin' }),
      })
    } catch (_) { /* fallback: show success anyway */ }
    setStep('success')
  }

  const selectCls = (selected: boolean) =>
    selected
      ? `${c.border} ${c.bg} ${c.text}`
      : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'

  return (
    <>
      <h3 className="text-xl font-bold mb-6 text-white">Déposer un besoin</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Prénom</label>
          <input type="text" placeholder="Cecile" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Email pro</label>
          <input type="email" placeholder="cecile@entreprise.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Quel profil recherchez-vous ?</label>
          <div className="space-y-2">
            {[
              'DevOps Engineer',
              'SRE — Site Reliability Engineer',
              'Platform Engineer',
            ].map((p) => (
              <button key={p} type="button" onClick={() => setProfil(p)} className={`w-full px-4 py-3 rounded-lg text-left text-sm border transition-colors ${selectCls(profil === p)}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Votre contexte</label>
          <div className="space-y-2">
            {[
              "Startup / Scale-up (équipe tech en croissance, besoin d'agilité)",
              'ETI / Grand groupe (environnement structuré, process établis)',
              'Agence / ESN (missions clients, profils polyvalents)',
            ].map((ctx) => (
              <button key={ctx} type="button" onClick={() => setContexte(ctx)} className={`w-full px-4 py-3 rounded-lg text-left text-xs border transition-colors ${selectCls(contexte === ctx)}`}>
                {ctx}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Niveau d&apos;expérience</label>
          <div className="flex gap-2">
            {['Junior', 'Intermédiaire', 'Senior'].map((n) => (
              <button key={n} type="button" onClick={() => setNiveau(n)} className={`flex-1 px-4 py-3 rounded-lg text-center border transition-colors ${selectCls(niveau === n)}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <button type="submit" className={`w-full py-3 rounded-lg ${c.btn} transition-all`}>
            Je veux ce profil
          </button>
          <button type="submit" className={`w-full py-3 rounded-lg border ${c.border} ${c.text} font-medium ${c.bgHover} transition-colors`}>
            Être rappelé par notre recruteuse
          </button>
        </div>
      </form>
    </>
  )
}

// ============================================================
// FORM: REJOINDRE LA COMMUNAUTÉ
// ============================================================

function FormRejoindreCommunaute({ variant, onClose }: { variant: string; onClose: () => void }) {
  const c = accent(variant)
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [profil, setProfil] = useState('')
  const [niveau, setNiveau] = useState('')

  if (step === 'success') {
    return (
      <div className="text-center py-8">
        <div className={`w-16 h-16 rounded-full ${c.bg} ${c.border} border-2 flex items-center justify-center mx-auto mb-6`}>
          <svg className={`w-8 h-8 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Bien reçu</h3>
        <p className="text-white/50">Un membre d&apos;Iterato vous contacte sous 24h.</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: prenom, email, profileType: profil, experienceLevel: niveau, formType: 'rejoindre_communaute' }),
      })
    } catch (_) { /* fallback: show success anyway */ }
    setStep('success')
  }

  const selectCls = (selected: boolean) =>
    selected
      ? `${c.border} ${c.bg} ${c.text}`
      : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'

  return (
    <>
      <h3 className="text-xl font-bold mb-6 text-white">Rejoindre la communauté</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Prénom</label>
          <input type="text" placeholder="Votre prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Email</label>
          <input type="email" placeholder="vous@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Votre profil</label>
          <div className="space-y-2">
            {[
              'DevOps Engineer',
              'SRE — Site Reliability Engineer',
              'Platform Engineer',
            ].map((p) => (
              <button key={p} type="button" onClick={() => setProfil(p)} className={`w-full px-4 py-3 rounded-lg text-left text-sm border transition-colors ${selectCls(profil === p)}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1.5">Niveau d&apos;expérience</label>
          <div className="flex gap-2">
            {['Junior', 'Intermédiaire', 'Senior'].map((n) => (
              <button key={n} type="button" onClick={() => setNiveau(n)} className={`flex-1 px-4 py-3 rounded-lg text-center border transition-colors ${selectCls(niveau === n)}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className={`w-full py-3 rounded-lg ${c.btn} font-semibold transition-all mt-2`}>
          Rejoindre
        </button>
      </form>
    </>
  )
}

// ============================================================
// HEADER
// ============================================================

function ProtoHeader({ variant, onDeposerBesoin }: { variant: string; onDeposerBesoin?: () => void }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  return (
    <header className="border-b border-white/5 bg-black sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className={`font-bold text-lg tracking-tight ${isTerminal ? "font-mono" : ""}`}
        >
          {isTerminal && (
            <span className={`${c.text}`}>&gt; </span>
          )}
          Iterato
        </span>
        <div className="flex items-center gap-5">
          <a
            href="#team"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:inline"
          >
            Équipe
          </a>
          <a
            href="#cta-mid"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:inline"
          >
            Déposer un besoin
          </a>
          <a
            href="#candidats"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:inline"
          >
            Intégrer notre réseau
          </a>
          <Btn variant={variant} onClick={onDeposerBesoin}>Déposer un besoin</Btn>
        </div>
      </nav>
    </header>
  )
}

// ============================================================
// HERO
// ============================================================

function ProtoHero({ variant, onDeposerBesoin, onRejoindreCommunaute }: { variant: string; onDeposerBesoin?: () => void; onRejoindreCommunaute?: () => void }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  const titleClass = isTerminal
    ? "font-mono text-3xl md:text-4xl lg:text-5xl leading-tight"
    : "font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"

  const wrapperClass = isAgency
    ? "flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
    : "flex flex-col items-start gap-8 max-w-4xl"

  return (
    <Section>
      <div className={wrapperClass}>
        <h1
          className={`text-xs font-medium tracking-wide uppercase ${isTerminal ? "font-mono" : ""} text-white/30 mb-4`}
        >
          {DATA.hero.label}
        </h1>

        <h2 className={titleClass}>
          {isTerminal && (
            <span className={`${c.text} mr-2`}>&gt;</span>
          )}
          {DATA.hero.headlinePart1}
          <br />
          <span className={c.text}>{DATA.hero.headlinePart2}</span>
        </h2>

        <p
          className={`text-white/50 max-w-2xl leading-relaxed ${isTerminal ? "font-mono text-base" : "text-lg"}`}
        >
          {DATA.hero.subtitle}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 pt-4`}
        >
          <Btn variant={variant} onClick={onDeposerBesoin}>{DATA.hero.ctaPrimary}</Btn>
          <Btn variant={variant} secondary onClick={onRejoindreCommunaute}>
            {DATA.hero.ctaSecondary}
          </Btn>
        </div>
      </div>
    </Section>
  )
}

// ============================================================
// TEAM
// ============================================================

function ProtoTeam({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  return (
    <Section id="team">
      <div className={isAgency ? "text-center" : ""}>
        <Tagline variant={variant}>L&apos;équipe</Tagline>
        <p
          className={`text-white/70 max-w-xl leading-relaxed mb-16 ${isTerminal ? "font-mono" : ""} ${isAgency ? "text-xl mx-auto" : "text-lg"}`}
        >
          {DATA.team.tagline}
        </p>
      </div>

      <div
        className={`grid gap-8 mb-12 ${
          isAgency
            ? "max-w-2xl mx-auto"
            : ""
        }`}
      >
        {DATA.team.members.map((m, i) => {
          if (isAgency) {
            return (
              <div key={i} className="text-center mb-10">
                <Avatar initial={m.initial} variant={variant} size="lg" />
                <h3 className="text-2xl font-bold mt-5 mb-1">{m.name}</h3>
                <p className={`${c.text} font-semibold mb-4`}>{m.role}</p>
                <p className="text-white/50 leading-relaxed max-w-lg mx-auto">
                  {m.bio}
                </p>
              </div>
            )
          }

          // Terminal variant
          return (
            <div
              key={i}
              className={`flex gap-5 p-6 rounded-lg ${c.bg} border-l-2 ${c.border}`}
            >
              <Avatar initial={m.initial} variant={variant} />
              <div>
                <h3 className="text-xl font-bold mb-0.5">
                  {isTerminal && (
                    <span className={c.light}>$ </span>
                  )}
                  {m.name}
                </h3>
                <p className={`${c.text} text-sm font-medium mb-3`}>
                  {m.role}
                </p>
                <p className="text-white/50 leading-relaxed text-sm">
                  {m.bio}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

// ============================================================
// PROCESS
// ============================================================

function ProtoProcess({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Section id="process">
      <div className={isAgency ? "text-center" : ""}>
        <Tagline variant={variant}>{DATA.process.tagline}</Tagline>
        <p
          className={`text-white/70 max-w-xl mb-16 ${isTerminal ? "font-mono" : ""} ${isAgency ? "text-xl mx-auto" : "text-lg"}`}
        >
          Un process conçu pour aller vite sans sacrifier la qualité.
        </p>
      </div>

      {variant === "2" ? (
        /* Variant 2: Accordion */
        <div className="max-w-2xl mx-auto space-y-3">
          {DATA.process.steps.map((s, i) => (
            <div
              key={i}
              className={`rounded-xl border ${c.border} overflow-hidden transition-colors`}
            >
              <button
                onClick={() =>
                  setOpen(open === i ? null : i)
                }
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                aria-expanded={open === i}
              >
                <span
                  className={`text-2xl font-bold ${c.light} w-10 shrink-0`}
                >
                  {s.number}
                </span>
                <span className="font-semibold flex-1">{s.title}</span>
                <svg
                  className={`w-5 h-5 ${c.text} transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-5 pb-5 pl-[68px] ${
                  open === i ? "" : "hidden"
                }`}
              >
                <p className="text-white/50 leading-relaxed text-sm">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Variant 1: Terminal vertical list */
        <div className="max-w-2xl space-y-0">
          {DATA.process.steps.map((s, i) => (
            <div
              key={i}
              className={`flex gap-5 py-6 ${i < DATA.process.steps.length - 1 ? `border-l-2 ${c.border} ml-[11px] pl-6` : "pl-[38px]"}`}
            >
              <span
                className={`font-mono font-bold text-sm ${c.text} -ml-[38px] w-[30px] shrink-0`}
              >
                [{s.number}]
              </span>
              <div>
                <h3 className="font-bold font-mono text-sm mb-1">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

// ============================================================
// CTA MID
// ============================================================

function ProtoCTAMid({ variant, onDeposerBesoin }: { variant: string; onDeposerBesoin?: () => void }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  return (
    <Section id="cta-mid">
      <div
        className={`${
          isAgency
            ? "text-center max-w-2xl mx-auto"
            : `border-l-2 ${c.border} ${c.bg} rounded-r-xl p-8 md:p-12 max-w-3xl`
        }`}
      >
        <h2
          className={`font-bold mb-4 ${isTerminal ? "font-mono text-2xl" : isAgency ? "text-4xl md:text-5xl tracking-tight" : "text-3xl md:text-4xl tracking-tight"}`}
        >
          {isTerminal && (
            <span className={c.text}>$ </span>
          )}
          {DATA.ctaMid.title}
        </h2>
        <p
          className={`text-white/50 mb-8 leading-relaxed ${isTerminal ? "font-mono text-sm" : "text-lg"} max-w-xl ${isAgency ? "mx-auto" : ""}`}
        >
          {DATA.ctaMid.subtitle}
        </p>
        <div
          className={`flex ${isAgency ? "justify-center" : ""} flex-col sm:flex-row items-center gap-4`}
        >
          <Btn variant={variant} onClick={onDeposerBesoin}>{DATA.ctaMid.button}</Btn>
          <span className="text-white/30 text-sm">
            {DATA.ctaMid.mention}
          </span>
        </div>
      </div>
    </Section>
  )
}

// ============================================================
// TESTIMONIALS
// ============================================================

function ProtoTestimonials({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  return (
    <Section id="testimonials">
      <div className={isAgency ? "text-center" : ""}>
        <Tagline variant={variant}>Témoignages</Tagline>
        {DATA.testimonials.tagline && (
          <p
            className={`text-white/70 mb-16 ${isTerminal ? "font-mono" : ""} ${isAgency ? "text-xl mx-auto max-w-xl" : "text-lg"}`}
          >
            {DATA.testimonials.tagline}
          </p>
        )}
      </div>

      {variant === "2" ? (
        /* Centered large quotes */
        <div className="max-w-2xl mx-auto space-y-12">
          {DATA.testimonials.quotes.map((q, i) => (
            <blockquote key={i} className="text-center">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/80 mb-5">
                &ldquo;{q.text}&rdquo;
              </p>
              <cite className={`${c.text} not-italic text-sm font-semibold`}>
                — {q.author}
              </cite>
            </blockquote>
          ))}
        </div>
      ) : (
        /* Terminal: blockquotes with left border */
        <div className="max-w-2xl space-y-8">
          {DATA.testimonials.quotes.map((q, i) => (
            <blockquote
              key={i}
              className={`border-l-2 ${c.border} pl-5`}
            >
              <p className="text-white/70 leading-relaxed text-sm mb-3 font-mono">
                {q.text}
              </p>
              <cite
                className={`${c.light} not-italic text-xs font-mono`}
              >
                &gt; {q.author}
              </cite>
            </blockquote>
          ))}
        </div>
      )}
    </Section>
  )
}

// ============================================================
// JOBS (new section)
// ============================================================

function ProtoJobs({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"
  const [current, setCurrent] = useState(0)
  const jobs = DATA.jobs.listings
  const total = jobs.length

  const next = () => setCurrent((p) => (p + 1) % total)
  const prev = () => setCurrent((p) => (p - 1 + total) % total)

  return (
    <Section id="postes">
      <div className={isAgency ? "text-center" : ""}>
        <Tagline variant={variant}>{DATA.jobs.tagline}</Tagline>
      </div>

      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={prev}
          className={`absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border ${c.border} ${c.bg} flex items-center justify-center ${c.text} hover:scale-110 transition-transform z-10`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className={`absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border ${c.border} ${c.bg} flex items-center justify-center ${c.text} hover:scale-110 transition-transform z-10`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Job cards carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {jobs.map((job, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2">
                <div
                  className={`rounded-xl border ${c.border} ${c.bg} p-6 md:p-8 max-w-lg mx-auto`}
                >
                  <h3 className={`font-bold text-xl mb-3 ${isTerminal ? "font-mono" : ""}`}>
                    {isTerminal && <span className={c.light}>$ </span>}
                    {job.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
                      {job.location}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
                      {job.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
                      {job.salary}
                    </span>
                  </div>
                  <a href={`/proto/postes/${job.slug}`} className={`inline-block px-5 py-2.5 rounded-lg ${c.btn} text-sm font-medium`}>
                    Voir le poste
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {jobs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? `${c.dot} w-6` : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

// ============================================================
// CANDIDATES (new section)
// ============================================================

function ProtoCandidates({ variant, onRejoindreCommunaute }: { variant: string; onRejoindreCommunaute?: () => void }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  return (
    <Section id="candidats">
      <div
        className={`${
          isAgency
            ? "text-center max-w-3xl mx-auto"
            : `border-l-2 ${c.border} ${c.bg} rounded-r-xl p-8 md:p-12 max-w-3xl`
        }`}
      >
        <h2
          className={`font-bold mb-5 ${isTerminal ? "font-mono text-2xl md:text-3xl" : isAgency ? "text-3xl md:text-4xl tracking-tight" : "text-2xl md:text-3xl tracking-tight"}`}
        >
          {isTerminal && (
            <span className={c.text}>$ </span>
          )}
          {DATA.candidates.title}
        </h2>
        <p
          className={`text-white/50 mb-8 leading-relaxed ${isTerminal ? "font-mono text-sm" : "text-lg"} max-w-xl ${isAgency ? "mx-auto" : ""}`}
        >
          <span className={`${c.text} font-semibold`}>{DATA.candidates.subtitle}</span>{" "}
          {DATA.candidates.body}
        </p>
        <div className={`flex ${isAgency ? "justify-center" : ""}`}>
          <Btn variant={variant} onClick={onRejoindreCommunaute}>{DATA.candidates.cta}</Btn>
        </div>
      </div>
    </Section>
  )
}

// ============================================================
// FAQ (new section)
// ============================================================

function ProtoFAQ({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Section id="faq">
      <div className={isAgency ? "text-center" : ""}>
        <Tagline variant={variant}>{DATA.faq.tagline}</Tagline>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {DATA.faq.items.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl border ${c.border} overflow-hidden transition-colors`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
              aria-expanded={open === i}
            >
              {isTerminal && (
                <span className={`${c.text} font-mono text-sm shrink-0`}>
                  &gt;
                </span>
              )}
              <span className={`font-semibold flex-1 ${isTerminal ? "font-mono text-sm" : ""}`}>
                {item.q}
              </span>
              <svg
                className={`w-5 h-5 ${c.text} transition-transform ${open === i ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`px-5 pb-5 ${isTerminal ? "pl-10" : "pl-[68px]"} ${
                open === i ? "" : "hidden"
              }`}
            >
              <p className={`text-white/50 leading-relaxed text-sm ${isTerminal ? "font-mono" : ""}`}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ============================================================
// CTA FINAL
// ============================================================

function ProtoCTAFinal({ variant, onDeposerBesoin }: { variant: string; onDeposerBesoin?: () => void }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  return (
    <Section>
      <div
        className={`${
          isAgency
            ? "text-center max-w-3xl mx-auto"
            : ""
        }`}
      >
        <h2
          className={`font-bold mb-5 ${isTerminal ? "font-mono text-2xl md:text-3xl" : isAgency ? "text-4xl md:text-6xl tracking-tight leading-[1.1]" : "text-3xl md:text-4xl tracking-tight"}`}
        >
          {isTerminal && (
            <span className={c.text}>$ echo &quot;</span>
          )}
          {DATA.ctaFinal.title}
          {isTerminal && (
            <span className={c.text}>&quot;</span>
          )}
        </h2>
        <p
          className={`text-white/50 mb-8 leading-relaxed ${isTerminal ? "font-mono text-sm" : "text-lg"} max-w-xl ${isAgency ? "mx-auto" : ""}`}
        >
          {DATA.ctaFinal.subtitle}
        </p>
        <div
          className={`flex ${isAgency ? "justify-center" : ""} flex-col sm:flex-row items-center gap-3`}
        >
          <Btn variant={variant} onClick={onDeposerBesoin}>{DATA.ctaFinal.primary}</Btn>
          <Btn variant={variant} secondary>
            {DATA.ctaFinal.secondary}
          </Btn>
        </div>
        <p className="text-white/30 text-sm mt-5">
          {DATA.ctaFinal.mention}
        </p>
      </div>
    </Section>
  )
}

// ============================================================
// FOOTER
// ============================================================

function ProtoFooter({ variant }: { variant: string }) {
  const isTerminal = variant === "1"
  return (
    <footer className="border-t border-white/5 bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span
            className={`font-bold ${isTerminal ? "font-mono" : ""}`}
          >
            Iterato
          </span>
          <span className="text-white/30 text-sm">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Confidentialité
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function ProtoContent() {
  const [showDeposer, setShowDeposer] = useState(false)
  const [showRejoindre, setShowRejoindre] = useState(false)
  const variant = "2"

  return (
    <>
      <FormModal open={showDeposer} onClose={() => setShowDeposer(false)}>
        <FormDeposerBesoin variant={variant} onClose={() => setShowDeposer(false)} />
      </FormModal>
      <FormModal open={showRejoindre} onClose={() => setShowRejoindre(false)}>
        <FormRejoindreCommunaute variant={variant} onClose={() => setShowRejoindre(false)} />
      </FormModal>
      <div className="bg-black text-white min-h-screen">
        <ProtoHeader variant={variant} onDeposerBesoin={() => setShowDeposer(true)} />
        <main>
          <ProtoHero variant={variant} onDeposerBesoin={() => setShowDeposer(true)} onRejoindreCommunaute={() => setShowRejoindre(true)} />
          <ProtoTeam variant={variant} />
          <ProtoProcess variant={variant} />
          <ProtoCTAMid variant={variant} onDeposerBesoin={() => setShowDeposer(true)} />
          <ProtoTestimonials variant={variant} />
          <ProtoJobs variant={variant} />
          <ProtoCandidates variant={variant} onRejoindreCommunaute={() => setShowRejoindre(true)} />
          <ProtoFAQ variant={variant} />
          <ProtoCTAFinal variant={variant} onDeposerBesoin={() => setShowDeposer(true)} />
        </main>
        <ProtoFooter variant={variant} />
      </div>
    </>
  )
}
