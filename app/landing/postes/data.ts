export interface JobDetail {
  slug: string
  title: string
  location: string
  type: string
  tag: string
  sections: { heading: string; items: string[] }[]
  footer: string
}

export const jobDetails: Record<string, JobDetail> = {
  "devops-cloud-engineer": {
    slug: "devops-cloud-engineer",
    title: "DevOps Cloud Engineer",
    location: "Paris",
    type: "CDI",
    tag: "remote-friendly",
    sections: [
      {
        heading: "Le poste",
        items: [
          "Iterato recrute pour un grand groupe à Paris en pleine refonte de sa plateforme technique. L'enjeu : moderniser une infrastructure critique, migrer vers le cloud et industrialiser les pratiques de delivery pour des équipes engineering qui grossissent vite. C'est un projet structurant, avec un vrai impact sur la façon dont les équipes produit travaillent au quotidien.",
        ],
      },
      {
        heading: "Ce que tu feras",
        items: [
          "Concevoir et automatiser le provisioning d'infrastructure cloud et le déploiement d'applications sur AWS",
          "Construire et maintenir des pipelines CI/CD robustes pour permettre aux équipes de livrer rapidement et de qualité",
          "Développer de l'infrastructure-as-code pour garantir scalabilité, fiabilité et cohérence des environnements",
          "Architecturer des solutions réseau sécurisées et résilientes, avec une attention particulière à la continuité de service et au disaster recovery",
          "Collaborer avec des équipes engineering réparties sur plusieurs fonctions et régions",
        ],
      },
      {
        heading: "Tu dois avoir",
        items: [
          "3 à 5 ans d'expérience en DevOps, cloud engineering ou automatisation d'infrastructure",
          "Une solide expérience sur AWS et la conception d'architectures cloud",
          "La maîtrise des outils d'infrastructure-as-code, de la conteneurisation et du configuration management",
          "Un bon sens de la communication et l'habitude de travailler en environnement cross-fonctionnel",
        ],
      },
      {
        heading: "Les plus",
        items: [
          "Certification AWS (Solutions Architect Associate ou Professional)",
          "Expérience avec le serverless et des langages comme Python ou Java",
          "Background dans les marchés financiers ou un secteur régulé",
        ],
      },
    ],
    footer: "Ça te parle ou tu connais quelqu'un ? Envoie-moi un message.",
  },
  "senior-reliability-engineer": {
    slug: "senior-reliability-engineer",
    title: "Senior Reliability Engineer",
    location: "Paris",
    type: "CDI",
    tag: "remote-friendly",
    sections: [
      {
        heading: "Le poste",
        items: [
          "Iterato recrute pour un client à Paris — une start-up en pleine phase de scale. L'équipe Platform Engineering cherche un SRE senior pour renforcer le pôle Scalability, avec un rôle central sur l'orchestration de conteneurs et un impact direct sur la façon dont les équipes produit buildent et délivrent.",
        ],
      },
      {
        heading: "Ce que tu feras",
        items: [
          "Concevoir, développer et maintenir des solutions Kubernetes en production pour améliorer sécurité, fiabilité et scalabilité",
          "Contribuer à la stratégie et à la priorisation de la roadmap Scalability",
          "Collaborer directement avec les équipes produit et les parties prenantes pour construire les bonnes solutions",
          "Gérer le monitoring, le troubleshooting et les incidents",
          "Accompagner les profils moins seniors de l'équipe",
        ],
      },
      {
        heading: "Tu dois avoir",
        items: [
          "Une expérience solide sur Kubernetes en production — conception, implémentation, maintenance",
          "Une maîtrise d'Azure et de ses services",
          "Un bon niveau en Go et Python",
          "Linux, Terraform et Argo CD dans ta stack",
          "Une expérience réseau avec Istio ou équivalent",
          "Une expérience en monitoring et gestion d'incidents",
        ],
      },
      {
        heading: "Les plus",
        items: [
          "Expérience en développement backend",
          "Tu prends tes sujets en main sans qu'on te pousse",
        ],
      },
    ],
    footer: "Ça te parle ou tu connais quelqu'un ? Envoie-moi un message.",
  },
}
