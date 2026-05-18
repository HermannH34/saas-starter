'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

// ============================================================
// DATA
// ============================================================

const DATA = {
  hero: {
    headlinePart1:
      "Les ingénieurs DevOps, SRE et Platform sont les plus difficiles à recruter.",
    headlinePart2: "On ne fait que ça.",
    subtitle:
      "Iterato est une agence de recrutement spécialisée dans les profils d'infrastructure. Pas de généralisme, pas de CVthèque. Une approche terrain, un réseau réel, des profils qualifiés techniquement avant d'arriver chez vous.",
    ctaPrimary: "Déposer un besoin",
    ctaSecondary: "Voir comment on travaille",
  },
  team: {
    tagline:
      "Deux expertises qui ne se trouvent jamais ensemble dans un même cabinet.",
    members: [
      {
        initial: "C",
        name: "Clara",
        role: "Le recrutement, c'est son métier",
        bio: "Clara a construit sa carrière dans l'écosystème startup et scale-up. Elle sait ce que c'est de recruter dans l'urgence, avec des budgets tendus, sur des profils que personne ne comprend vraiment dans les cabinets classiques. Elle ne vend pas des candidats. Elle trouve les bonnes personnes pour les bons moments de vie d'une boîte.",
      },
      {
        initial: "H",
        name: "Hermann",
        role: "Il a fait le métier avant de le recruter",
        bio: "Hermann a été DevOps, SRE et Platform Engineer sur le terrain. Il a géré des incidents à 3h du matin, construit des pipelines CI/CD from scratch, bataillé avec Kubernetes en production. Quand il lit un CV, il sait exactement ce qui est vrai, ce qui est gonflé, et ce qui manque. Aucun candidat ne passe sans passer par lui.",
      },
    ],
    conclusion:
      "Ensemble, ils font ce qu'un cabinet généraliste ne peut pas faire : recruter vite ET recruter juste.",
  },
  process: {
    tagline: "Un process conçu pour aller vite sans sacrifier la qualité.",
    steps: [
      {
        number: "01",
        title: "On comprend votre contexte (pas juste la fiche de poste)",
        description:
          "Un call avec vous et votre équipe tech. On veut comprendre votre stack, votre culture, ce qui a déjà échoué et pourquoi. Clara capte le contexte humain, Hermann traduit les enjeux techniques. Ce brief change tout.",
      },
      {
        number: "02",
        title: "On active le réseau, pas une base de données",
        description:
          "On ne publie pas d'annonce. On contacte directement les profils qui correspondent, y compris ceux qui ne cherchent pas activement. Ces gens-là répondent à Hermann parce qu'il parle leur langue.",
      },
      {
        number: "03",
        title: "Hermann valide techniquement. Clara valide humainement.",
        description:
          "Chaque candidat est qualifié en double : compétences réelles versus ce qui est annoncé sur le CV, et adéquation avec votre contexte. Vous ne recevez jamais plus de 3 profils. Mais chacun est sérieux.",
      },
      {
        number: "04",
        title: "On reste là après la signature",
        description:
          "L'intégration est le moment où tout peut déraper. On reste impliqués 3 mois. Si quelque chose cloche, on le sait avant vous — et on agit.",
      },
    ],
  },
  ctaMid: {
    title: "Dites-nous ce dont vous avez besoin.",
    subtitle:
      "On vous revient sous 48h avec une analyse honnête : est-ce qu'on peut vous aider, en combien de temps, et pourquoi. Sans engagement, sans jargon commercial.",
    button: "Déposer votre besoin",
    mention: "Réponse sous 48h · Confidentiel",
  },
  testimonials: {
    tagline: "Ils ont recruté avec Iterato. Voici ce qu'ils en disent.",
    quotes: [
      {
        text: 'En six mois à chercher seuls, on avait vu défiler des profils qui ne comprenaient pas ce que "SLO" voulait dire. Iterato nous a présenté notre SRE Senior en 10 jours. Le fait qu\'Hermann ait lui-même fait ce métier change radicalement la qualité de ce qui nous est envoyé.',
        author: "CTO, fintech parisienne, Série B",
      },
      {
        text: "Ce qui m'a convaincu c'est leur honnêteté dès le premier call. Ils nous ont dit que le profil qu'on cherchait allait être compliqué à trouver, pourquoi, et comment ils allaient s'y prendre. Pas de promesses en l'air. Et ils ont livré.",
        author: "VP Engineering, scale-up SaaS, Lyon",
      },
      {
        text: "Clara a su vendre notre projet à des candidats passifs qui n'avaient aucune raison de bouger. Elle comprend ce qui motive ces profils-là. Ce n'est pas qu'une question de salaire, et elle le sait.",
        author: "DRH, ETI en transformation digitale, Bordeaux",
      },
    ],
  },
  ctaFinal: {
    title:
      "Votre prochain ingénieur infrastructure est quelque part dans notre réseau.",
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
    "1": {
      text: "text-green-400",
      bg: "bg-green-400/10",
      bgHover: "hover:bg-green-400/20",
      border: "border-green-400/30",
      ring: "ring-green-400/20",
      btn: "bg-green-500 hover:bg-green-400 text-black font-semibold",
      light: "text-green-400/60",
      dot: "bg-green-400",
      divider: "border-green-400/10",
    },
    "2": {
      text: "text-amber-400",
      bg: "bg-amber-400/10",
      bgHover: "hover:bg-amber-400/20",
      border: "border-amber-400/30",
      ring: "ring-amber-400/20",
      btn: "bg-amber-500 hover:bg-amber-400 text-black font-semibold",
      light: "text-amber-400/60",
      dot: "bg-amber-400",
      divider: "border-amber-400/10",
    },
    "3": {
      text: "text-blue-400",
      bg: "bg-blue-400/10",
      bgHover: "hover:bg-blue-400/20",
      border: "border-blue-400/30",
      ring: "ring-blue-400/20",
      btn: "bg-blue-500 hover:bg-blue-400 text-black font-semibold",
      light: "text-blue-400/60",
      dot: "bg-blue-400",
      divider: "border-blue-400/10",
    },
  }
  return map[v] || map["2"]
}

// ============================================================
// SHARED: BUTTON
// ============================================================

function Btn({ variant, children, secondary }: {
  variant: string
  children: React.ReactNode
  secondary?: boolean
}) {
  const c = accent(variant)
  if (secondary) {
    return (
      <button
        className={`px-6 py-3 rounded-lg border ${c.border} ${c.text} font-medium ${c.bgHover} transition-colors text-sm`}
      >
        {children}
      </button>
    )
  }
  return (
    <button
      className={`px-6 py-3 rounded-lg ${c.btn} transition-all text-sm`}
    >
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
    <p
      className={`${c.text} text-sm font-semibold tracking-widest uppercase mb-3`}
    >
      {children}
    </p>
  )
}

// ============================================================
// HEADER
// ============================================================

function ProtoHeader({ variant }: { variant: string }) {
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
            href="#process"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:inline"
          >
            Process
          </a>
          <a
            href="#testimonials"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:inline"
          >
            Témoignages
          </a>
          <Btn variant={variant}>Déposer un besoin</Btn>
        </div>
      </nav>
    </header>
  )
}

// ============================================================
// HERO
// ============================================================

function ProtoHero({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  const titleClass = isTerminal
    ? "font-mono text-4xl md:text-5xl lg:text-6xl leading-tight"
    : isAgency
      ? "font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]"
      : "font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"

  const wrapperClass = isAgency
    ? "flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
    : "flex flex-col items-start gap-8 max-w-4xl"

  return (
    <Section>
      <div className={wrapperClass}>
        <h1 className={titleClass}>
          {isTerminal && (
            <span className={`${c.text} mr-2`}>&gt;</span>
          )}
          {DATA.hero.headlinePart1}
          <br />
          <span className={c.text}>{DATA.hero.headlinePart2}</span>
        </h1>

        <p
          className={`text-white/50 max-w-2xl leading-relaxed ${isTerminal ? "font-mono text-base" : "text-lg"} ${isAgency ? "text-xl" : ""}`}
        >
          {DATA.hero.subtitle}
        </p>

        <div
          className={`flex ${variant === "3" ? "flex-row" : "flex-col sm:flex-row"} gap-3 pt-4`}
        >
          <Btn variant={variant}>{DATA.hero.ctaPrimary}</Btn>
          <Btn variant={variant} secondary>
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
      {/* Tagline */}
      <div className={isAgency ? "text-center" : ""}>
        <Tagline variant={variant}>L&apos;équipe</Tagline>
        <p
          className={`text-white/70 max-w-xl leading-relaxed mb-16 ${isTerminal ? "font-mono" : ""} ${isAgency ? "text-xl mx-auto" : "text-lg"}`}
        >
          {DATA.team.tagline}
        </p>
      </div>

      {/* Members */}
      <div
        className={`grid gap-8 mb-12 ${
          variant === "3"
            ? "md:grid-cols-2"
            : isAgency
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

          if (variant === "3") {
            return (
              <div
                key={i}
                className={`p-8 rounded-2xl border ${c.border} ${c.bg} ${c.ring} ring-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar initial={m.initial} variant={variant} />
                  <div>
                    <h3 className="text-xl font-bold">{m.name}</h3>
                    <p className={`${c.text} text-sm font-medium`}>
                      {m.role}
                    </p>
                  </div>
                </div>
                <p className="text-white/50 leading-relaxed">{m.bio}</p>
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

      {/* Conclusion */}
      <p
        className={`text-white/70 ${isAgency ? "text-center text-xl font-medium" : isTerminal ? "font-mono text-sm" : "text-base"} max-w-2xl ${isAgency ? "mx-auto" : ""} leading-relaxed`}
      >
        {isTerminal && (
          <span className={c.text}># </span>
        )}
        {DATA.team.conclusion}
      </p>
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
        <Tagline variant={variant}>Comment on fonctionne</Tagline>
        <p
          className={`text-white/70 max-w-xl mb-16 ${isTerminal ? "font-mono" : ""} ${isAgency ? "text-xl mx-auto" : "text-lg"}`}
        >
          {DATA.process.tagline}
        </p>
      </div>

      {/* Variant 3: Horizontal steps */}
      {variant === "3" ? (
        <div className="grid md:grid-cols-4 gap-6">
          {DATA.process.steps.map((s, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border ${c.border} ${c.bg} relative`}
            >
              <span
                className={`text-3xl font-bold ${c.light} block mb-3`}
              >
                {s.number}
              </span>
              <h3 className="font-bold mb-2 text-sm">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      ) : variant === "2" ? (
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
              {open === i && (
                <div className="px-5 pb-5 pl-[68px]">
                  <p className="text-white/50 leading-relaxed text-sm">
                    {s.description}
                  </p>
                </div>
              )}
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

function ProtoCTAMid({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  return (
    <Section>
      <div
        className={`${
          variant === "3"
            ? `border ${c.border} ${c.bg} rounded-2xl p-10 md:p-16 max-w-3xl mx-auto text-center`
            : isAgency
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
          className={`text-white/50 mb-8 leading-relaxed ${isTerminal ? "font-mono text-sm" : "text-lg"} max-w-xl ${isAgency || variant === "3" ? "mx-auto" : ""}`}
        >
          {DATA.ctaMid.subtitle}
        </p>
        <div
          className={`flex ${isAgency || variant === "3" ? "justify-center" : ""} flex-col sm:flex-row items-center gap-4`}
        >
          <Btn variant={variant}>{DATA.ctaMid.button}</Btn>
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
        <p
          className={`text-white/70 mb-16 ${isTerminal ? "font-mono" : ""} ${isAgency ? "text-xl mx-auto max-w-xl" : "text-lg"}`}
        >
          {DATA.testimonials.tagline}
        </p>
      </div>

      {variant === "3" ? (
        /* Grid of 3 cards */
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.testimonials.quotes.map((q, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border ${c.border} ${c.bg} flex flex-col`}
            >
              <svg
                className={`w-8 h-8 ${c.light} mb-4 opacity-50`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                {q.text}
              </p>
              <div
                className={`pt-4 border-t ${c.divider}`}
              >
                <p className={`${c.text} text-sm font-medium`}>
                  {q.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : variant === "2" ? (
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
// CTA FINAL
// ============================================================

function ProtoCTAFinal({ variant }: { variant: string }) {
  const c = accent(variant)
  const isTerminal = variant === "1"
  const isAgency = variant === "2"

  return (
    <Section>
      <div
        className={`${
          variant === "3"
            ? `border ${c.border} ${c.bg} rounded-2xl p-10 md:p-16 max-w-3xl mx-auto text-center`
            : isAgency
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
          className={`text-white/50 mb-8 leading-relaxed ${isTerminal ? "font-mono text-sm" : "text-lg"} max-w-xl ${isAgency || variant === "3" ? "mx-auto" : ""}`}
        >
          {DATA.ctaFinal.subtitle}
        </p>
        <div
          className={`flex ${isAgency || variant === "3" ? "justify-center" : ""} flex-col sm:flex-row items-center gap-3`}
        >
          <Btn variant={variant}>{DATA.ctaFinal.primary}</Btn>
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
            Confidentalité
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
// VARIANT SWITCHER (floating bottom bar)
// ============================================================

function VariantSwitcher({ current }: { current: string }) {
  const variants = [
    { key: "1", label: "Terminal", emoji: ">" },
    { key: "2", label: "Agency", emoji: "◆" },
    { key: "3", label: "Corporate", emoji: "◈" },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-1 p-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl">
      {variants.map((v) => {
        const active = v.key === current
        return (
          <a
            key={v.key}
            href={`?v=${v.key}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              active
                ? "bg-white text-black"
                : "text-white/50 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className="font-mono">{v.emoji}</span>
            {v.label}
          </a>
        )
      })}
    </div>
  )
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function ProtoContent() {
  const searchParams = useSearchParams()
  const variant = searchParams.get("v") || "1"

  return (
    <>
      <VariantSwitcher current={variant} />
      <div className="bg-black text-white min-h-screen">
        <ProtoHeader variant={variant} />
        <main>
          <ProtoHero variant={variant} />
          <ProtoTeam variant={variant} />
          <ProtoProcess variant={variant} />
          <ProtoCTAMid variant={variant} />
          <ProtoTestimonials variant={variant} />
          <ProtoCTAFinal variant={variant} />
        </main>
        <ProtoFooter variant={variant} />
      </div>
      {/* Spacer for the floating bar */}
      <div className="h-20 bg-black" />
    </>
  )
}
