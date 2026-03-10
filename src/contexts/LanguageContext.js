import React, { createContext, useState, useContext } from 'react';

const translations = {
  fr: {
    navbar: {
      logo: "Aifrica Logo",
      yoafrica: {
        title: "Yo! Aifrica",
        subtitle: "Découvrez notre univers d'innovation",
        links: {
          plateforme: "Plateforme Aifrica",
          plateforme_desc: "Découvrez notre écosystème",
          accompagnement: "Accompagnement IA",
          accompagnement_desc: "Support personnalisé",
          data: "Data Intelligence",
          data_desc: "Valorisez vos données",
          generative: "IA Générative",
          generative_desc: "Solutions créatives",
          agentique: "IA Agentique",
          agentique_desc: "Automatisation intelligente"
        }
      },
      services: {
        title: "Services",
        subtitle: "Nos Services",
        description: "Des solutions adaptées à vos besoins",
        links: {
          diagnostic: "Diagnostic Data & IA",
          diagnostic_desc: "Audit complet",
          consulting: "Consulting IA & Data",
          consulting_desc: "Expertise stratégique",
          acculturation: "Acculturation IA",
          acculturation_desc: "Formation & sensibilisation",
          solution: "Solution IA avancée",
          solution_desc: "Développement sur mesure"
        }
      },
      infos: {
        title: "Infos",
        subtitle: "Nos Infos",
        description: "Découvrez nos actualités",
        links: {
          afrique: "Afrique",
          afrique_desc: "Actualités africaines",
          industrie: "Industrie/Economie",
          industrie_desc: "Secteurs économiques",
          metier: "Métier",
          metier_desc: "Carrières et compétences",
          technologie: "Technologie",
          technologie_desc: "Innovations tech"
        }
      },
      approach: "Approche",
      partner: "Partenaire",
      contact: "Contact",
      contact_mobile: "Contactez-nous"
    },
    header: {
      title: "Concevez, contruisez et déployez l'",
      title_highlight: "IA au sein de votre entreprise en Afrique",
      description: "Construisez des applications intelligentes adaptées à vos besoins, et déployez-les en toute confiance avec l'accompagnement de Aifrica.",
      start_project: "Démarrer un projet",
      explore_solutions: "Explorer les solutions"
    },
    services: {
      title: "Services",
      page: {
        badge: "Nos Services",
        title: "Accompagnement complet pour votre transformation ",
        title_highlight: "Data & IA",
        description: "Nous accompagnons votre organisation dans l'adoption de l'IA : stratégie, consulting, formations et solutions IA avancées pour propulser votre entreprise vers l'excellence digitale.",
        discover: "Découvrir",
        popular: "Populaire",
        items: {
          diagnostic: {
            title: "Diagnostic",
            description: "Evaluation de la maturité Data & IA de votre entreprise"
          },
          consulting: {
            title: "Consulting",
            description: "Définition et accompagnement de vos besoins en data et intelligence artificielle"
          },
          acculturation: {
            title: "Acculturation",
            description: "Formation sur les enjeux de l'IA pour votre métier et votre secteur d'activité"
          },
          solution: {
            title: "Solution avancée",
            description: "Implémentation des solutions sur mesure pour des besoins spécifiques"
          },
          orchestration: {
            title: "Orchestration",
            description: "Gestion de bout en bout de projets et de risques sur volet transverse de la transformation Data & IA"
          }
        }
      }
    },
    iaGenerative: {
      badge: "IA Générative",
      title: "Libérez la créativité avec ",
      title_highlight: "l'IA générative",
      quote: "La créativité est l'intelligence qui s'amuse.",
      description: "Transformez votre manière de créer, innover et communiquer. Aifrica vous accompagne dans l'adoption de l'IA générative pour révolutionner vos processus créatifs et opérationnels.",
      explore_possibilities: "Explorer les possibilités",
      sections: {
        applications: {
          label: "Applications",
          title: "Cas d'usage variés",
          subtitle: "Découvrez comment l'IA générative peut transformer vos activités.",
          items: {
            text_generation: {
              title: "Génération de Texte",
              description: "Création de contenu, rédaction, traduction et optimisation de textes avec IA générative."
            },
            image_creation: {
              title: "Création d'Images",
              description: "Génération d'images, illustrations et visuels personnalisés avec l'IA."
            },
            code_generation: {
              title: "Génération de Code",
              description: "Assistance au développement, génération de code et optimisation algorithmique."
            },
            chatbots: {
              title: "Chatbots & Conversation",
              description: "Agents conversationnels intelligents pour le service client et l'engagement."
            },
            creativity: {
              title: "Créativité & Design",
              description: "Soutien à la création artistique, design thinking et brainstorming IA."
            },
            predictive_analysis: {
              title: "Analyse Prédictive",
              description: "Prédictions et analyses basées sur des modèles génératifs avancés."
            }
          }
        },
        solutions: {
          label: "Nos solutions",
          title: "Déploiement complet",
          subtitle: "De la stratégie à l'industrialisation, nous vous accompagnons à chaque étape.",
          items: {
            rapid_deployment: {
              title: "Déploiement Rapide",
              description: "Mise en production rapide de solutions IA génératives adaptées à vos besoins."
            },
            security: {
              title: "Sécurité & Conformité",
              description: "Déploiement sécurisé respectant les normes RGPD et l'éthique de l'IA."
            },
            training: {
              title: "Formation & Accompagnement",
              description: "Montée en compétences de vos équipes pour maîtriser l'IA générative."
            }
          }
        },
        benefits: {
          label: "Bénéfices",
          title: "Pourquoi l'IA générative ?",
          subtitle: "Les avantages concrets pour votre entreprise africaine.",
          items: {
            productivity: {
              title: "Productivité x3",
              description: "Augmentation significative de la productivité grâce à l'automatisation des tâches créatives."
            },
            innovation: {
              title: "Innovation Continue",
              description: "Accélération de l'innovation et génération d'idées nouvelles constamment."
            },
            competitive_advantage: {
              title: "Avantage Concurrentiel",
              description: "Différenciation sur le marché grâce à des contenus et services uniques."
            }
          }
        },
        process: {
          label: "Processus",
          title: "Notre approche",
          subtitle: "Une méthodologie éprouvée pour garantir le succès de vos projets IA générative.",
          items: {
            audit: {
              title: "Audit & Use Cases",
              description: "Identification des cas d'usage pertinents pour l'IA générative dans votre entreprise."
            },
            poc: {
              title: "PoC & Validation",
              description: "Développement de preuves de concept pour valider la pertinence des solutions."
            },
            industrialization: {
              title: "Industrialisation",
              description: "Déploiement à l'échelle des solutions validées avec monitoring continu."
            },
            optimization: {
              title: "Optimisation",
              description: "Amélioration continue des modèles et des processus pour maximiser la valeur."
            }
          }
        },
        faq: {
          label: "FAQ",
          title: "Questions fréquentes",
          subtitle: "Tout ce que vous devez savoir sur l'IA générative",
          items: [
            {
              q: "Qu'est-ce que l'IA générative ?",
              a: "L'IA générative est une technologie capable de créer du contenu original (texte, images, code, etc.) à partir de modèles entraînés sur de vastes données."
            },
            {
              q: "L'IA générative est-elle sûre pour mon entreprise ?",
              a: "Oui, nous mettons en place des garde-fous, des filtres de sécurité et assurons la conformité avec les régulations en vigueur."
            },
            {
              q: "Quel ROI attendre de l'IA générative ?",
              a: "Nos clients observent en moyenne une réduction de 60% du temps de création et une augmentation de 40% de la qualité des contenus produits."
            },
            {
              q: "Faut-il des compétences techniques en interne ?",
              a: "Nous fournissons des solutions clé en main et formons vos équipes. Des compétences de base sont suffisantes pour démarrer."
            }
          ]
        },
        cta: {
          title: "Prêt à ",
          title_highlight: "révolutionner",
          title_end: " votre créativité ?",
          description: "Rejoignez les entreprises africaines qui transforment leur innovation avec l'IA générative.",
          button: "Démarrer maintenant"
        }
      }
    },
    iaAgentique: {
      badge: "IA Agentique",
      title: "Automatisez l'intelligence avec ",
      title_highlight: "les agents IA",
      quote: "Le meilleur agent est celui qui agit sans qu'on lui demande.",
      description: "Révolutionnez votre opérationnel avec des agents IA autonomes qui travaillent 24/7 pour optimiser vos processus, servir vos clients et prendre des décisions intelligentes.",
      start_automation: "Démarrer l'automatisation",
      sections: {
        agents: {
          label: "Nos agents",
          title: "Agents spécialisés",
          subtitle: "Découvrez notre gamme d'agents IA pour transformer vos activités.",
          items: {
            conversational: {
              title: "Agents Conversationnels",
              description: "Chatbots intelligents pour le service client, support technique et engagement utilisateur."
            },
            process: {
              title: "Agents de Processus",
              description: "Automatisation intelligente des workflows métier et optimisation des opérations."
            },
            analysis: {
              title: "Agents d'Analyse",
              description: "Agents spécialisés dans l'analyse de données et la génération d'insights."
            },
            sales: {
              title: "Agents de Vente",
              description: "Assistants virtuels pour la prospection, qualification et suivi commercial."
            },
            security: {
              title: "Agents de Sécurité",
              description: "Surveillance proactive et détection automatique des menaces de sécurité."
            },
            monitoring: {
              title: "Agents de Monitoring",
              description: "Supervision continue des systèmes et alertes intelligentes prédictives."
            }
          }
        },
        capabilities: {
          label: "Capacités",
          title: "Puissance et autonomie",
          subtitle: "Les caractéristiques qui font la force de nos agents IA.",
          items: {
            autonomy: {
              title: "Autonomie Complète",
              description: "Agents capables de prendre des décisions et d'agir de manière autonome selon les règles définies."
            },
            learning: {
              title: "Apprentissage Continu",
              description: "Agents qui s'améliorent avec le temps grâce au machine learning et à l'adaptation."
            },
            integration: {
              title: "Intégration Multi-Source",
              description: "Connexion avec vos systèmes existants pour une vue complète et des actions coordonnées."
            }
          }
        },
        benefits: {
          label: "Bénéfices",
          title: "Pourquoi l'IA agentique ?",
          subtitle: "Les avantages concrets pour votre entreprise africaine.",
          items: {
            availability: {
              title: "24/7 Disponibilité",
              description: "Vos agents travaillent sans interruption pour garantir une continuité de service parfaite."
            },
            efficiency: {
              title: "Efficacité x4",
              description: "Réduction drastique des temps de traitement et augmentation de la productivité."
            },
            quality: {
              title: "Qualité Consistante",
              description: "Standardisation des processus et élimination des erreurs humaines."
            }
          }
        },
        process: {
          label: "Processus",
          title: "Notre méthodologie",
          subtitle: "Une approche structurée pour déployer vos agents IA avec succès.",
          items: {
            analysis: {
              title: "Analyse des Processus",
              description: "Identification des tâches répétitives et des opportunités d'automatisation."
            },
            design: {
              title: "Conception des Agents",
              description: "Définition des comportements, règles et intégrations nécessaires."
            },
            development: {
              title: "Développement & Tests",
              description: "Création des agents avec validation en conditions réelles."
            },
            deployment: {
              title: "Déploiement & Monitoring",
              description: "Mise en production avec supervision continue et optimisation."
            }
          }
        },
        faq: {
          label: "FAQ",
          title: "Questions fréquentes",
          subtitle: "Tout ce que vous devez savoir sur l'IA agentique",
          items: [
            {
              q: "Qu'est-ce que l'IA agentique ?",
              a: "L'IA agentique utilise des agents intelligents autonomes capables de percevoir leur environnement, prendre des décisions et exécuter des actions pour atteindre des objectifs spécifiques."
            },
            {
              q: "Les agents IA sont-ils vraiment autonomes ?",
              a: "Oui, nos agents peuvent fonctionner de manière autonome dans le cadre de règles prédéfinies, avec supervision humaine pour les décisions critiques."
            },
            {
              q: "Quel ROI peut-on attendre ?",
              a: "Nos clients observent en moyenne une réduction de 70% des coûts opérationnels et une amélioration de 80% de la rapidité de traitement."
            },
            {
              q: "Comment garantir la sécurité des agents ?",
              a: "Nous mettons en place des protocoles de sécurité avancés, des sandboxs et des mécanismes de validation pour garantir des opérations sécurisées."
            }
          ]
        },
        cta: {
          title: "Prêt à ",
          title_highlight: "automatiser",
          title_end: " votre excellence ?",
          description: "Rejoignez les entreprises africaines qui transforment leur opérationnel avec des agents IA autonomes.",
          button: "Démarrer maintenant"
        }
      }
    },
    iaGenerativeComponent: {
      main_title: "Découvrons ensemble cette révolution",
      title: "IA",
      title_highlight: "Générative",
      subtitle: "<span class=\"ia-strong\">L'IA générative</span> : une <span class=\"ia-strong\">révolution</span> au cœur de l'intelligence artificielle",
      description: "Voici un paragraphe court, clair et percutant pour une page d'accueil : L'IA générative transforme profondément la manière dont les entreprises créent, innovent et travaillent. Capable de produire du texte, du code, des images ou des supports marketing, elle ouvre la voie à une automatisation intelligente et à une créativité démultipliée. Quel que soit leur taille, les organisations peuvent accélérer leurs projets, optimiser leurs décisions et gagner en efficacité. Construite sur cette nouvelle génération d'IA, la plateforme Aifrica met cette puissance au service de votre entreprise.",
      button: "En savoir plus sur l'IA Générative",
      alt: "IA Générative"
    },
    iaAgentiqueComponent: {
      title: "IA",
      title_highlight: "Agentique",
      subtitle: "<span class=\"ia-strong\">L'IA agentique</span> : <span class=\"ia-strong\">l'automatisation</span> au cœur de votre entreprise",
      description: "L'IA agentique révolutionne la manière dont les entreprises automatisent leurs processus. Capable de créer des agents intelligents qui travaillent de manière autonome, elle offre une automatisation poussée et une optimisation continue des opérations. Nos agents IA s'intègrent parfaitement à vos systèmes existants pour transformer votre efficacité opérationnelle.",
      button: "En savoir plus sur l'IA Agentique",
      alt: "IA Agentique"
    },
    dataAnalytique: {
      title: "Data <span>Analytique</span> et <span>l'intelligence</span> des <span>données</span>",
      subtitle: "<span>La donnée :</span> le <span>carburant</span> essentiel de l'intelligence artificielle",
      description: "La Data Analytique permet à votre entreprise de transformer ses données en décisions éclairées, en anticipant les tendances, les risques et les opportunités. Dans l'univers de l'IA, la qualité des données est essentielle : elles constituent le socle sur lequel s'entraînent les modèles pour détecter des patterns, établir des corrélations et générer des prédictions fiables. Des données riches et bien structurées garantissent des performances optimales pour toutes vos initiatives d'intelligence artificielle.",
      button: "En savoir plus sur la Data Analytics",
      alt: "Serveurs"
    },
    maturiteIa: {
      title: "Il faut toujours un point de <span class=\"highlight\">départ</span> dans une <span class=\"highlight\">aventure</span> !",
      subtitle: "Vous souhaitez évaluer votre <span class=\"highlight\">maturité IA</span> ?",
      description: "Nous vous proposons un diagnostic en 10 minutes et recevez une analyse personnalisée de vos résultats avec un expert.",
      button: "Commencer le diagnostic",
      alt: "diagnostic IA"
    },
    blogAccueil: {
      title: "LES <span>Infos</span>",
      categories: ["Afrique", "Entreprise", "Métier", "Technologie"],
      blogs: [
        {
          title: "Baromètre européen de l'IA : les tendances pour 2025",
          category: "Afrique",
          date: "19/03/2025",
          description: "Le Baromètre européen de l'IA dévoile les tendances majeures attendues en 2025."
        },
        {
          title: "Comment l'IA transforme les entreprises africaines",
          category: "Afrique",
          date: "20/02/2025",
          description: "L'impact de l'intelligence artificielle dans les PME en Afrique."
        },
        {
          title: "L'IA dans le secteur de la finance",
          category: "Entreprise",
          date: "15/03/2025",
          description: "Comment les entreprises financières utilisent l'IA pour optimiser leurs opérations."
        },
        {
          title: "L'essor du Big Data dans l'agriculture",
          category: "Technologie",
          date: "10/03/2025",
          description: "Le Big Data révolutionne l'agriculture avec des solutions innovantes."
        },
        {
          title: "L'avenir du travail avec l'automatisation",
          category: "Métier",
          date: "05/03/2025",
          description: "L'automatisation transforme les métiers et crée de nouvelles opportunités."
        },
        {
          title: "Cybersécurité et protection des données",
          category: "Technologie",
          date: "01/03/2025",
          description: "Les enjeux de la cybersécurité à l'ère de l'intelligence artificielle."
        }
      ],
      readMore: "Lire plus"
    },
    contact: {
      title: "Diagnostic Data & <span class=\"highlighted\">Intelligence Artificielle</span>",
      description: "Ce questionnaire a pour objectif de mieux comprendre votre organisation, vos enjeux Data & IA et de vous proposer un accompagnement adapté.",
      duration: "Temps estimé : 3 à 5 minutes",
      successMessage: "Votre diagnostic a été envoyé avec succès ! Nous vous contacterons dans les plus brefs délais.",
      errorMessage: "Une erreur est survenue. Veuillez réessayer plus tard.",
      stepTitles: ["Contact", "Profil de l'entreprise", "Situation Data actuelle", "Besoins & priorités", "Accompagnement souhaité"],
      stepLabel: "Étape {step} — {title}",
      previous: "Précédent",
      next: "Suivant",
      submit: "Envoyer le diagnostic",
      countries: ["Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", "Burundi", "Cameroun", "Cap-Vert", "Centrafrique", "Comores", "Congo", "Côte d'Ivoire", "Djibouti", "Égypte", "Érythrée", "Eswatini", "Éthiopie", "Gabon", "Gambie", "Ghana", "Guinée", "Guinée-Bissau", "Guinée équatoriale", "Kenya", "Lesotho", "Liberia", "Libye", "Madagascar", "Malawi", "Mali", "Maroc", "Maurice", "Mauritanie", "Mozambique", "Namibie", "Niger", "Nigeria", "Ouganda", "RD Congo", "Rwanda", "São Tomé-et-Príncipe", "Sénégal", "Seychelles", "Sierra Leone", "Somalie", "Soudan", "Soudan du Sud", "Tanzanie", "Tchad", "Togo", "Tunisie", "Zambie", "Zimbabwe", "International"],
      step1: {
        nameLabel: "Nom & prénom",
        namePlaceholder: "Votre nom complet",
        functionLabel: "Fonction",
        functionOptions: ["Dirigeant", "Manager", "Responsable IT / Data", "Autre"],
        emailLabel: "Email professionnel",
        emailPlaceholder: "votre@email.com",
        phoneLabel: "Téléphone",
        phoneOptional: "(optionnel)",
        phonePlaceholder: "Votre numéro",
        consent: "J'accepte d'être contacté par Aifrica"
      },
      step2: {
        orgTypeLabel: "Type d'organisation",
        orgTypeOptions: ["PME", "Startup", "Grande entreprise", "Institution / Organisation publique"],
        secteurLabel: "Secteur d'activité",
        secteurOptions: ["Finance / Assurance", "Télécoms", "Industrie / Énergie", "Commerce / Distribution", "Logistique / Transport", "Santé", "Agriculture", "Autre"],
        tailleLabel: "Taille de l'organisation",
        tailleOptions: ["1–10 employés", "11–50", "51–200", "200+"],
        paysLabel: "Pays principal d'activité",
        paysPlaceholder: "-- Sélectionnez un pays --"
      },
      step3: {
        gestionDataLabel: "Comment gérez-vous vos données aujourd'hui ?",
        gestionDataOptions: ["Principalement sur Excel / Google Sheets", "Plusieurs outils non connectés", "Outils BI (Power BI, Tableau, etc.)", "Systèmes data structurés (bases, cloud, etc.)", "Je ne sais pas / Pas encore structuré"],
        fiabiliteLabel: "Vos données sont-elles fiables et exploitables ?",
        fiabiliteOptions: ["Oui, en grande partie", "Partiellement", "Non", "Je ne sais pas"],
        equipeDataLabel: "Avez-vous une équipe data / IT dédiée ?",
        equipeDataOptions: ["Oui (interne)", "Oui (prestataires)", "Non", "En cours de structuration"]
      },
      step4: {
        enjeuxLabel: "Quels sont vos principaux enjeux aujourd'hui ?",
        enjeuxOptions: ["Meilleure prise de décision", "Optimisation des coûts", "Amélioration de la relation client", "Prévision (ventes, demande, risques...)", "Automatisation de processus", "Structuration des données", "Innovation / avantage concurrentiel"],
        enjeuxMultiple: "(choix multiple)",
        envisageIALabel: "Avez-vous déjà envisagé l'IA dans votre organisation ?",
        envisageIAOptions: ["Oui, déjà en cours", "Oui, à l'étude", "Non, mais intéressé", "Non, pas encore prêt"],
        objectifLabel: "Quel est votre objectif principal avec la data / l'IA ?",
        objectifOptional: "(optionnel)",
        objectifPlaceholder: 'Ex : "Mieux comprendre nos clients"'
      },
      step5: {
        accompagnementLabel: "Quel type d'accompagnement recherchez-vous ?",
        accompagnementOptions: ["Diagnostic Data & IA", "Conseil stratégique", "Formation / acculturation", "Développement de solutions IA", "Pilotage global de projets", "Je ne sais pas encore"],
        horizonLabel: "Horizon de temps",
        horizonOptions: ["Immédiat (0–3 mois)", "Court terme (3–6 mois)", "Moyen terme (6–12 mois)", "Exploration / réflexion"]
      },
      errors: {
        name: "Le nom est requis",
        fonction: "La fonction est requise",
        email: "L'email est requis",
        emailInvalid: "L'email n'est pas valide",
        consent: "Veuillez accepter d'être contacté",
        orgType: "Le type d'organisation est requis",
        secteur: "Le secteur est requis",
        taille: "La taille est requise",
        pays: "Le pays est requis",
        gestionData: "Ce champ est requis",
        fiabilite: "Ce champ est requis",
        equipeData: "Ce champ est requis",
        enjeux: "Sélectionnez au moins un enjeu",
        envisageIA: "Ce champ est requis",
        accompagnement: "Ce champ est requis",
        horizon: "Ce champ est requis"
      }
    },
    plateformeAifrica: {
      header: {
        title: "Plateforme AIFRICA",
        subtitle: "L'intelligence artificielle au service de l'innovation africaine. Transformez vos idées en solutions intelligentes avec notre plateforme IA de pointe.",
        start_free: "Commencer Gratuitement",
        see_demo: "Voir la Démo"
      },
      intro: {
        badge: "À propos d'AIFRICA",
        title: "La Data et l'IA au service de la",
        title_highlight: "transformation",
        title_end: "des entreprises africaines",
        paragraph1: "L'Afrique entre dans une nouvelle ère économique. Portées par une jeunesse dynamique, une urbanisation accélérée et une connectivité en pleine expansion, les entreprises du continent font face à des opportunités immenses — mais aussi à des défis de taille : compétitivité, efficacité opérationnelle, prise de décision dans un environnement en constante évolution.",
        context: "C'est dans ce contexte que AIFRICA voit le jour.",
        paragraph2: "AIFRICA est une entreprise spécialisée dans l'accompagnement des organisations africaines vers la transformation numérique par la Data et l'Intelligence Artificielle. Notre mission est simple : mettre ces technologies au service de la réalité des entreprises africaines, pour des résultats",
        paragraph2_highlight: "concrets, mesurables et durables",
        paragraph3: "Qu'il s'agisse d'optimiser des processus métiers, d'exploiter des données encore inexploitées, d'automatiser des tâches à faible valeur ajoutée ou de construire des outils décisionnels sur mesure, AIFRICA propose un accompagnement structuré,",
        paragraph3_highlight: "de la stratégie jusqu'à l'implémentation",
        highlight_block: "Nous croyons que la Data et l'IA ne sont pas réservées aux grandes entreprises mondiales. Elles sont aujourd'hui",
        highlight_block_strong: "accessibles, adaptables",
        highlight_block_end: "et peuvent devenir un levier de croissance puissant pour toute organisation — quelle que soit sa taille ou son secteur d'activité.",
        tagline: "AIFRICA, c'est l'intelligence de demain, au service de l'Afrique d'aujourd'hui.",
        pillars: {
          data: "Data",
          ia: "Intelligence Artificielle",
          marche: "Marché Africain",
          transformation: "Transformation Numérique"
        }
      },
      solutions: {
        title: "Nos Solutions IA",
        subtitle: "Découvrez notre gamme complète de solutions d'intelligence artificielle conçues pour répondre aux défis spécifiques du marché africain.",
        items: {
          generative: {
            title: "IA Générative",
            description: "Créez du contenu unique et personnalisé avec nos modèles d'IA générative de pointe.",
            features: [
              "Génération de texte multilingue",
              "Création d'images et designs",
              "Traduction automatique avancée",
              "Synthèse vocale naturelle"
            ]
          },
          analyse: {
            title: "Analyse de Données",
            description: "Transformez vos données brutes en insights pertinents pour prendre des décisions éclairées.",
            features: [
              "Analyse prédictive",
              "Visualisation interactive",
              "Reporting automatisé",
              "Détection d'anomalies"
            ]
          },
          agentique: {
            title: "IA Agentique",
            description: "Déployez des agents intelligents autonomes pour automatiser vos processus métier.",
            features: [
              "Agents conversationnels",
              "Automatisation intelligente",
              "Apprentissage continu",
              "Intégration multi-plateforme"
            ]
          },
          personnalisation: {
            title: "Personnalisation",
            description: "Offrez des expériences uniques à chaque utilisateur avec l'IA adaptative.",
            features: [
              "Recommandations personnalisées",
              "Segmentation dynamique",
              "Optimisation en temps réel",
              "Profils utilisateurs intelligents"
            ]
          },
          securite: {
            title: "Sécurité IA",
            description: "Protégez vos systèmes avec nos solutions de sécurité basées sur l'intelligence artificielle.",
            features: [
              "Détection de menaces",
              "Analyse comportementale",
              "Sécurité prédictive",
              "Réponse automatique"
            ]
          },
          optimisation: {
            title: "Optimisation",
            description: "Maximisez l'efficacité de vos opérations avec l'IA d'optimisation.",
            features: [
              "Optimisation des ressources",
              "Planification intelligente",
              "Réduction des coûts",
              "Amélioration continue"
            ]
          }
        }
      },
      developpement: {
        title: "Comment Ça Marche",
        subtitle: "Notre approche méthodologique garantit le succès de votre transformation IA. Chaque étape est conçue pour maximiser la valeur et minimiser les risques.",
        steps: [
          {
            number: "1",
            title: "Analyse & Conseil",
            description: "Nous étudions vos besoins spécifiques et élaborons une stratégie IA sur mesure pour votre entreprise. Notre équipe d'experts analyse vos processus actuels et identifie les opportunités d'optimisation."
          },
          {
            number: "2",
            title: "Développement",
            description: "Nos ingénieurs développent des solutions IA personnalisées en utilisant les dernières technologies. Nous suivons une méthodologie agile pour garantir une livraison rapide et itérative."
          },
          {
            number: "3",
            title: "Intégration",
            description: "Nous intégrons harmonieusement nos solutions IA dans votre écosystème technologique existant. Nos équipes assurent une transition en douceur sans perturber vos opérations."
          },
          {
            number: "4",
            title: "Formation",
            description: "Nous formons vos équipes à l'utilisation des nouvelles solutions IA pour maximiser leur adoption et leur efficacité. Des sessions personnalisées sont organisées selon vos besoins."
          },
          {
            number: "5",
            title: "Support Continu",
            description: "Notre équipe reste à votre disposition pour assurer la maintenance, les mises à jour et l'amélioration continue de vos solutions IA. Un support 24/7 est disponible pour nos clients premium."
          }
        ]
      },
      faq: {
        title: "Questions Fréquentes",
        subtitle: "Vous avez des questions sur notre plateforme ? Trouvez les réponses ci-dessous ou contactez notre équipe pour plus d'informations.",
        items: [
          {
            question: "Qu'est-ce que la plateforme AIFRICA ?",
            answer: "AIFRICA est une plateforme d'intelligence artificielle complète conçue spécifiquement pour le marché africain. Elle offre des solutions IA personnalisées pour aider les entreprises à automatiser leurs processus, analyser leurs données et prendre des décisions plus intelligentes."
          },
          {
            question: "Quels types d'entreprises peuvent utiliser AIFRICA ?",
            answer: "Notre plateforme s'adapte à tous les secteurs d'activité : finance, santé, éducation, agriculture, commerce, logistique et bien d'autres. Que vous soyez une startup, une PME ou une grande entreprise, nous avons des solutions adaptées à vos besoins."
          },
          {
            question: "Comment commencer avec AIFRICA ?",
            answer: "Le processus est simple : contactez-nous pour une consultation gratuite, notre équipe analyse vos besoins, nous vous proposons une solution personnalisée, et après validation, nous procédons à l'implémentation. Vous pouvez commencer par un projet pilote pour tester nos solutions."
          },
          {
            question: "Quelles sont les technologies utilisées ?",
            answer: "Nous utilisons les technologies IA les plus avancées : machine learning, deep learning, NLP, computer vision, et IA générative. Notre plateforme est basée sur des architectures cloud modernes et sécurisées, garantissant performance et scalabilité."
          },
          {
            question: "Mes données sont-elles sécurisées ?",
            answer: "Absolument. La sécurité est notre priorité absolue. Vos données sont chiffrées de bout en bout, stockées dans des centres de données sécurisés, et nous respectons toutes les réglementations de protection des données, y compris le RGPD."
          },
          {
            question: "Quel est le coût des solutions AIFRICA ?",
            answer: "Nos tarifs sont flexibles et adaptés à votre budget. Nous proposons différents modèles : abonnement mensuel, paiement à l'utilisation, ou projets sur mesure. Contactez-nous pour obtenir un devis personnalisé selon vos besoins spécifiques."
          },
          {
            question: "Offrez-vous une formation aux équipes ?",
            answer: "Oui, nous proposons des programmes de formation complets pour vos équipes. De la sensibilisation à l'IA jusqu'à l'expertise technique, nos formateurs certifiés assurent que votre personnel maîtrise parfaitement nos solutions."
          },
          {
            question: "Quel est le délai de mise en place ?",
            answer: "Le délai varie selon la complexité de votre projet. Pour nos solutions standards, la mise en place peut prendre de 2 à 4 semaines. Pour les projets personnalisés, le délai moyen est de 2 à 3 mois. Nous vous fournissons un planning détaillé lors de la phase de conception."
          }
        ]
      },
      cta: {
        title: "Prêt à Transformer Votre Entreprise avec l'IA ?",
        description: "Rejoignez des centaines d'entreprises africaines qui utilisent déjà AIFRICA pour accélérer leur croissance et innover dans leur secteur.",
        button: "Demander une Démo Gratuite"
      },
      page: {
        navbar: {
          solutions: "Solutions",
          processus: "Processus", 
          faq: "FAQ",
          contact: "Contact",
          demo: "Démo Gratuite"
        },
        hero: {
          tag: "Plateforme IA · Afrique",
          title: "L'Intelligence",
          title_line2: "Artificielle au",
          title_line3: "Service de",
          title_highlight: "l'Afrique",
          description: "Transformez vos opérations, accélérez votre croissance et prenez des décisions éclairées grâce à nos solutions IA conçues pour le marché africain.",
          start_free: "Commencer Gratuitement",
          see_demo: "Voir la Démo",
          discover: "Découvrir"
        },
        stats: [
          { num: "500+", label: "Entreprises accompagnées" },
          { num: "15+", label: "Pays africains couverts" },
          { num: "98%", label: "Satisfaction client" },
          { num: "3×", label: "ROI moyen constaté" }
        ],
        ticker: ["IA Générative", "Analyse de Données", "IA Agentique", "Sécurité IA", "Personnalisation", "Optimisation", "Afrique & Innovation", "Transformation Digitale"],
        mission: {
          tag: "Notre Mission",
          title: "La Data et l'IA au service des entreprises africaines",
          paragraph1: "L'Afrique entre dans une nouvelle ère économique. Portées par une jeunesse dynamique, une urbanisation accélérée et une connectivité en pleine expansion, les entreprises du continent font face à des opportunités immenses — mais aussi à des défis de taille.",
          paragraph2: "AIFRICA est spécialisée dans l'accompagnement des organisations africaines vers la transformation numérique par la Data et l'Intelligence Artificielle. Notre mission est de mettre ces technologies au service de la réalité des entreprises africaines, pour des résultats concrets, mesurables et durables.",
          paragraph3: "Nous croyons que la Data et l'IA ne sont pas réservées aux grandes entreprises mondiales. Elles sont accessibles, adaptables, et peuvent devenir un levier de croissance puissant pour toute organisation — quelle que soit sa taille ou son secteur d'activité.",
          quote: "AIFRICA, c'est l'intelligence de demain, au service de l'Afrique d'aujourd'hui.",
          why_title: "Pourquoi AIFRICA ?",
          features: [
            ["✓", "Solutions adaptées aux réalités africaines", "Contexte local, infrastructure disponible, langues parlées"],
            ["✓", "Équipe d'experts certifiés en IA & Data", "Senior data scientists et ingénieurs ML expérimentés"],
            ["✓", "Accompagnement de bout en bout", "Du conseil à la mise en production, nous sommes là"],
            ["✓", "ROI mesurable et garanti", "Résultats chiffrés dès les 90 premiers jours"],
            ["✓", "Sécurité et conformité", "Données hébergées localement, conformité RGPD garantie"]
          ]
        },
        solutions_page: {
          tag: "Nos Solutions",
          title: "Une suite complète de solutions IA",
          description: "Des technologies de pointe adaptées aux défis spécifiques du marché africain, déployées avec expertise.",
          items: [
            {
              title: "IA Générative",
              desc: "Créez du contenu unique et personnalisé avec des modèles d'IA générative adaptés au contexte africain.",
              feats: ["Génération de texte multilingue", "Création d'images et designs", "Traduction automatique avancée", "Synthèse vocale naturelle"]
            },
            {
              title: "Analyse de Données",
              desc: "Transformez vos données brutes en insights pertinents pour prendre des décisions éclairées.",
              feats: ["Analyse prédictive", "Visualisation interactive", "Reporting automatisé", "Détection d'anomalies"]
            },
            {
              title: "IA Agentique",
              desc: "Déployez des agents intelligents autonomes pour automatiser vos processus métier critiques.",
              feats: ["Agents conversationnels", "Automatisation intelligente", "Apprentissage continu", "Intégration multi-plateforme"]
            },
            {
              title: "Sécurité IA",
              desc: "Protégez vos systèmes et vos données avec nos solutions de sécurité basées sur l'IA.",
              feats: ["Détection de menaces", "Analyse comportementale", "Sécurité prédictive", "Réponse automatique"]
            },
            {
              title: "Personnalisation",
              desc: "Offrez des expériences uniques à chaque utilisateur avec l'IA adaptative en temps réel.",
              feats: ["Recommandations personnalisées", "Segmentation dynamique", "Optimisation temps réel", "Profils intelligents"]
            },
            {
              title: "Optimisation",
              desc: "Maximisez l'efficacité de vos opérations et réduisez les coûts avec l'IA d'optimisation.",
              feats: ["Optimisation des ressources", "Planification intelligente", "Réduction des coûts", "Amélioration continue"]
            }
          ]
        },
        process: {
          tag: "Notre Processus",
          title: "Comment nous travaillons ensemble",
          description: "Une méthodologie éprouvée, pensée pour minimiser les risques et maximiser la valeur à chaque étape de votre transformation IA. Résultats garantis dès les 90 premiers jours.",
          steps: [
            { n: "01", title: "Analyse & Conseil", desc: "Nous étudions vos besoins et élaborons une stratégie IA sur mesure. Notre équipe analyse vos processus actuels et identifie les opportunités d'optimisation les plus impactantes." },
            { n: "02", title: "Développement", desc: "Nos ingénieurs développent des solutions IA personnalisées en utilisant les technologies les plus adaptées à votre contexte, avec une méthodologie agile garantissant des livraisons rapides." },
            { n: "03", title: "Intégration", desc: "Nous intégrons nos solutions dans votre écosystème technologique existant de façon transparente, sans perturber vos opérations en cours." },
            { n: "04", title: "Formation des équipes", desc: "Nous formons vos collaborateurs à l'utilisation des nouvelles solutions pour maximiser l'adoption et l'efficacité. Des sessions personnalisées sont organisées selon vos besoins." },
            { n: "05", title: "Support Continu", desc: "Notre équipe reste disponible pour la maintenance, les mises à jour et l'amélioration continue. Un support réactif est disponible pour tous nos clients." }
          ]
        },
        faq_page: {
          tag: "FAQ",
          title: "Questions fréquentes",
          description: "Vous ne trouvez pas la réponse à votre question ? Notre équipe est disponible du lundi au vendredi pour vous accompagner.",
          contact: "Contacter un expert",
          items: [
            { q: "Qu'est-ce que la plateforme AIFRICA ?", a: "AIFRICA est une plateforme d'intelligence artificielle complète conçue spécifiquement pour le marché africain. Elle offre des solutions IA personnalisées pour automatiser les processus, analyser les données et prendre des décisions plus intelligentes." },
            { q: "Quels types d'entreprises peuvent utiliser AIFRICA ?", a: "Notre plateforme s'adapte à tous les secteurs : finance, santé, éducation, agriculture, commerce, logistique et bien d'autres. Que vous soyez une startup, une PME ou une grande entreprise, nous avons des solutions adaptées à vos besoins." },
            { q: "Comment commencer avec AIFRICA ?", a: "Le processus est simple : contactez-nous pour une consultation gratuite, notre équipe analyse vos besoins, nous vous proposons une solution personnalisée, et après validation, nous procédons à l'implémentation." },
            { q: "Mes données sont-elles sécurisées ?", a: "Absolument. La sécurité est notre priorité. Vos données sont chiffrées de bout en bout, stockées dans des centres de données sécurisés, et nous respectons toutes les réglementations de protection des données, y compris le RGPD." },
            { q: "Quel est le coût des solutions AIFRICA ?", a: "Nos tarifs sont flexibles et adaptés à votre budget. Nous proposons différents modèles : abonnement mensuel, paiement à l'utilisation, ou projets sur mesure. Contactez-nous pour un devis personnalisé." },
            { q: "Quel est le délai de mise en place ?", a: "Le délai varie selon la complexité du projet. Pour les solutions standards, la mise en place prend de 2 à 4 semaines. Pour les projets personnalisés, le délai moyen est de 2 à 3 mois." },
            { q: "Offrez-vous une formation aux équipes ?", a: "Oui, nous proposons des programmes de formation complets pour vos équipes. De la sensibilisation à l'IA jusqu'à l'expertise technique, nos formateurs assurent que votre personnel maîtrise parfaitement nos solutions." },
            { q: "Dans quels pays intervenez-vous ?", a: "Nous intervenons dans plus de 15 pays africains : Côte d'Ivoire, Sénégal, Cameroun, Maroc, Kenya, Nigeria, Ghana, Madagascar et bien d'autres. Nous disposons d'experts locaux dans chaque région." }
          ]
        },
        cta_page: {
          tag: "Passez à l'action",
          title: "Prêt à transformer votre entreprise",
          title_highlight: "avec l'Intelligence Artificielle",
          title_end: "?",
          description: "Rejoignez des centaines d'entreprises africaines qui utilisent déjà AIFRICA pour accélérer leur croissance, optimiser leurs opérations et innover dans leur secteur.",
          main_button: "Demander une Démo Gratuite",
          ghost_button: "Parler à un Expert"
        },
        footer: {
          copyright: "© 2026 AIFRICA · L'intelligence de demain au service de l'Afrique d'aujourd'hui"
        }
      }
    },
    consultingIAData: {
      hero: {
        tag: "Expertise stratégique – Roadmap – Gouvernance",
        title: "Construisez une stratégie IA ",
        title_highlight: "alignée sur vos objectifs business",
        description: "L'intelligence artificielle n'est pas un projet technologique. C'est une transformation stratégique. Aifrica vous accompagne dans la définition d'une feuille de route Data & IA réaliste, priorisée et adaptée à votre contexte africain.",
        request_consulting: "Planifier un échange stratégique",
        discover_approach: "Découvrir l'approche",
        mission_title: "Notre mission",
        steps: [
          { n: "1", t: "Analyse métier", d: "Comprendre vos priorités stratégiques" },
          { n: "2", t: "Cas d'usage", d: "Identifier les opportunités à fort impact" },
          { n: "3", t: "Roadmap IA", d: "Feuille de route progressive et réaliste" },
          { n: "4", t: "Gouvernance", d: "Structurer pour durer" }
        ],
        duration_label: "Durée indicative",
        duration_value: "2 – 6 semaines"
      },
      problem: {
        eyebrow: "LE PROBLÈME",
        title: "Beaucoup d'organisations ",
        title_highlight: "multiplient les erreurs",
        subtitle: "Résultat : projets coûteux, faible adoption, impact limité.",
        items: [
          { ico: "🚀", t: "Projets IA sans vision globale", sub: "Initiatives isolées sans cohérence stratégique." },
          { ico: "📈", t: "Multiplication sans ROI mesurable", sub: "Investissements non suivis d'indicateurs de performance." },
          { ico: "🎯", t: "Mauvaise priorisation", sub: "Cas d'usage choisis sans analyse d'impact business." },
          { ico: "💡", t: "Confusion innovation/valeur", sub: "Technologie adoptée pour elle-même, pas pour le résultat." },
          { ico: "🏗️", t: "Gouvernance sous-estimée", sub: "Organisation et changement de culture négligés." }
        ],
        mission_title: "NOTRE MISSION",
        mission_description: "Transformer votre <strong>ambition IA</strong> en stratégie <strong>claire, structurée et exécutable</strong>. Nous traduisons vos objectifs métiers en initiatives Data & IA concrètes, hiérarchisées et mesurables.",
        mission_tags: ["Stratégie", "Exécution", "Mesure", "Durabilité"]
      },
      approach: {
        eyebrow: "NOTRE APPROCHE STRATÉGIQUE",
        title: "Une méthode ",
        title_highlight: "éprouvée",
        title_end: " en 4 étapes",
        subtitle: "De l'analyse métier à la gouvernance, nous construisons votre stratégie IA étape par étape.",
        cards: [
          { ico: "🎯", n: "01", title: "Analyse des objectifs métiers", items: ["Priorités stratégiques", "Irritants opérationnels", "Enjeux financiers", "Contraintes réglementaires"] },
          { ico: "🔍", n: "02", title: "Sélection des cas d'usage", items: ["Impact business potentiel", "Faisabilité technique", "Disponibilité des données", "Niveau de maturité"] },
          { ico: "🗺️", n: "03", title: "Construction de la roadmap", items: ["Quick wins identifiés", "Projets structurants", "Jalons clairs", "Budget estimatif"] },
          { ico: "🏗️", n: "04", title: "Gouvernance & organisation", items: ["Rôles & responsabilités", "Gouvernance data", "Processus décisionnels", "Gestion du changement"] }
        ]
      },
      deliverables: {
        eyebrow: "CE QUE VOUS OBTENEZ",
        title: "Des livrables ",
        title_highlight: "concrets",
        title_end: " et actionnables",
        subtitle: "Notre intervention se traduit par des documents et outils que vous pouvez utiliser immédiatement.",
        items: [
          { ico: "🗺️", txt: "Roadmap IA priorisée (3–12 mois)" },
          { ico: "📋", txt: "Document stratégique complet" },
          { ico: "📝", txt: "Backlog détaillé des cas d'usage" },
          { ico: "🏛️", txt: "Modèle de gouvernance" },
          { ico: "📊", txt: "Indicateurs de succès mesurables" },
          { ico: "⚡", txt: "Plan d'exécution réaliste" }
        ],
        count_label: "Livrables stratégiques"
      },
      caseStudies: {
        eyebrow: "CAS D'USAGE AFRIQUE",
        title: "Des exemples ",
        title_highlight: "concrets",
        title_end: " de notre approche",
        subtitle: "Découvrez comment nous appliquons notre méthodologie à des contextes africains réels.",
        telecom: {
          title: "Télécom – Réduction du churn",
          problem: "Problème : Taux de résiliation élevé, service client saturé.",
          duration: "9 mois",
          approach: {
            tag: "Approche stratégique",
            items: [
              "Priorisation d'un modèle de prédiction churn",
              "Automatisation partielle du support",
              "Mise en place d'un reporting décisionnel"
            ]
          },
          roadmap: {
            tag: "Roadmap progressive",
            items: [
              "Phase 1: Data quality & baseline",
              "Phase 2: Modèle prédictif simple",
              "Phase 3: Industrialisation & scaling"
            ]
          },
          organization: {
            tag: "Organisation",
            items: [
              "Équipe data dédiée",
              "Gouvernance des algorithmes",
              "Formation des équipes métiers"
            ]
          },
          results: {
            tag: "Résultats attendus",
            items: [
              "−30% taux de churn",
              "−40% coûts support",
              "+25% satisfaction client"
            ]
          }
        },
        administration: {
          title: "Administration publique",
          problem: "Problème : Difficulté à analyser les demandes citoyennes.",
          duration: "6 mois",
          approach: {
            tag: "Approche",
            items: [
              "Structuration des données",
              "Mise en place d'indicateurs",
              "Déploiement progressif d'automatisations"
            ]
          },
          prioritization: {
            tag: "Priorisation",
            items: [
              "Demandes les plus fréquentes",
              "Goulot d'étranglement identifié",
              "Quick wins sur processus simples"
            ]
          },
          governance: {
            tag: "Gouvernance",
            items: [
              "Comité de pilotage inter-services",
              "Référentiel de données unique",
              "Formation continue des agents"
            ]
          },
          impact: {
            tag: "Impact",
            items: [
              "−50% délais de traitement",
              "+60% visibilité performance",
              "Meilleure satisfaction usagers"
            ]
          }
        }
      },
      duration: {
        eyebrow: "DURÉE INDICATIVE",
        title: "2 à 6 semaines selon ",
        title_highlight: "périmètre",
        title_end: " et disponibilité",
        subtitle: "Une intervention modulaire qui s'adapte à votre contexte et vos contraintes.",
        express: {
          ico: "⚡",
          title: "Version Express",
          description: "Pour les organisations qui ont déjà une maturité Data & IA et besoin d'un regard externe pour valider leur stratégie.",
          items: [
            "2 semaines de travail intensif",
            "Focus sur les quick wins prioritaires",
            "Livrable: roadmap condensée"
          ]
        },
        complete: {
          ico: "🏗️",
          title: "Version Complète",
          description: "Pour les organisations qui partent de zéro ou veulent une transformation en profondeur avec accompagnement long terme.",
          items: [
            "4-6 semaines avec ateliers co-construits",
            "Analyse approfondie et gouvernance",
            "Livrables complets + suivi 3 mois"
          ]
        }
      },
      targets: {
        eyebrow: "POUR QUI ?",
        title: "Nous accompagnons ",
        title_highlight: "tous les types",
        title_end: " d'organisations",
        subtitle: "Notre approche s'adapte à votre taille, votre secteur et votre maturité Data & IA.",
        items: [
          { ico: "🏢", label: "Grandes entreprises africaines" },
          { ico: "🚀", label: "PME en croissance" },
          { ico: "🏛️", label: "Administrations" },
          { ico: "🔗", label: "Organisations multi-équipes" },
          { ico: "🌍", label: "Écosystèmes innovants" }
        ]
      },
      why: {
        eyebrow: "POURQUOI AIFRICA ?",
        title: "L'expertise ",
        title_highlight: "africaine",
        title_end: " au service de votre stratégie",
        subtitle: "Nous combinons expertise technique et compréhension des réalités locales pour vous garantir le succès.",
        items: [
          { bold: "Expertise Data & IA", rest: " — double compétence technique et business." },
          { bold: "Compréhension des réalités africaines", rest: " — adapté aux contextes locaux." },
          { bold: "Vision stratégique + exécution opérationnelle", rest: " — du conseil à l'implémentation." },
          { bold: "Approche progressive et pragmatique", rest: " — sans révolution brutale." },
          { bold: "Focus ROI mesurable", rest: " — chaque initiative évaluée sur sa valeur business." }
        ],
        brand_wordmark: "AIF",
        brand_wordmark_end: "RICA",
        brand_sub: "EXPERTISE DATA & IA",
        values: ["Expertise technique", "Vision business", "Contexte africain", "Résultats mesurables"]
      },
      cta: {
        eyebrow: "PRÊT À AGIR ?",
        title: "Donnez une direction ",
        title_highlight: "claire",
        title_end: " à votre ",
        title_italic: "transformation IA",
        description: "Transformez votre ambition en stratégie concrète avec notre expertise Data & IA adaptée au contexte africain.",
        button: "Discuter de votre stratégie Data & IA"
      },
      footer: {
        logo: "AIF",
        logo_end: "RICA",
        copyright: "© 2024 Aifrica - Expertise Data & IA pour l'Afrique"
      }
    },
    acculturationIA: {
      hero: {
        tag: "ORCHESTRATION IA",
        title: "Sécurisez et pilotez vos projets IA ",
        title_highlight: "de bout en bout",
        description: "Un projet IA ne réussit pas uniquement grâce à la technologie. Il réussit grâce à une coordination efficace, une gouvernance claire et un alignement stratégique constant. Aifrica orchestre vos projets Data & IA pour garantir impact, adoption et résultats mesurables.",
        request_discussion: "Discuter de votre projet IA",
        discover_method: "Découvrir notre méthode",
        role_title: "NOTRE RÔLE",
        steps: [
          { n: "🎯", t: "Alignement métier", d: "Objectifs & stratégie" },
          { n: "👥", t: "Coordination équipes", d: "Technique & opérationnel" },
          { n: "🤝", t: "Partenaires externes", d: "Intégration & synergie" },
          { n: "⚖️", t: "Conformité", d: "Réglementaire & éthique" }
        ],
        approach_label: "Approche",
        approach_value: "Chef d'orchestre"
      },
      problem: {
        eyebrow: "LE PROBLÈME",
        title: "De nombreux projets IA ",
        title_highlight: "échouent à cause de",
        subtitle: "L'IA nécessite une orchestration structurée pour réussir.",
        items: [
          { ico: "🔄", t: "Manque de coordination", sub: "Entre métier, IT et data, silos communication." },
          { ico: "🎯", t: "Objectifs mal définis", sub: "Vision floue, attentes non alignées, priorités confuses." },
          { ico: "⏰", t: "Délais non maîtrisés", sub: "Planning irréaliste, dépendances mal gérées." },
          { ico: "🏛️", t: "Absence de gouvernance", sub: "Décisions non structurées, responsabilités floues." },
          { ico: "👥", t: "Faible adoption", sub: "Équipes non engagées, résistance au changement." },
          { ico: "🖼️", t: "Projets vitrine", sub: "Technologie pour la technologie, sans valeur business." }
        ],
        role_title: "NOTRE RÔLE",
        role_description: "Aifrica agit comme <strong>chef d'orchestre stratégique</strong>. Nous alignons :",
        role_aligns: [
          "Les objectifs métiers",
          "Les équipes techniques",
          "Les partenaires externes",
          "Les contraintes réglementaires",
          "Les délais et budgets"
        ]
      },
      methodology: {
        eyebrow: "NOTRE MÉTHODOLOGIE",
        title: "Une orchestration ",
        title_highlight: "structurée",
        title_end: " en 5 phases",
        subtitle: "De l'initialisation à la capitalisation, nous garantissons la réussite de vos projets IA.",
        steps: [
          { 
            n: "1", 
            title: "Cadrage stratégique", 
            desc: "Fondations du projet",
            items: ["Définition objectifs mesurables", "Clarification périmètre", "Identification parties prenantes", "Définition indicateurs clés"]
          },
          { 
            n: "2", 
            title: "Gouvernance & planification", 
            desc: "Structure organisationnelle",
            items: ["RACI (rôles & responsabilités)", "Planification détaillée", "Jalons & livrables", "Gestion dépendances"]
          },
          { 
            n: "3", 
            title: "Coordination opérationnelle", 
            desc: "Pilotage au quotidien",
            items: ["Réunions de pilotage", "Suivi avancement", "Gestion risques", "Arbitrage stratégique"]
          },
          { 
            n: "4", 
            title: "Gestion du changement", 
            desc: "Adoption et accompagnement",
            items: ["Communication interne", "Formation équipes", "Adoption progressive", "Alignement stratégique continu"]
          },
          { 
            n: "5", 
            title: "Reporting & capitalisation", 
            desc: "Mesure et amélioration",
            items: ["Reporting exécutif", "Synthèse performances", "Retour expérience", "Plan amélioration continue"]
          }
        ]
      },
      deliverables: {
        eyebrow: "CE QUE VOUS OBTENEZ",
        title: "Des garanties ",
        title_highlight: "mesurables",
        title_end: " de succès",
        subtitle: "Notre orchestration vous assure une maîtrise complète de vos projets IA.",
        items: [
          { ico: "🏛️", txt: "Gouvernance structurée" },
          { ico: "🎯", txt: "Pilotage rigoureux" },
          { ico: "🛡️", txt: "Gestion des risques maîtrisée" },
          { ico: "🔄", txt: "Alignement stratégique constant" },
          { ico: "👥", txt: "Adoption facilitée" },
          { ico: "📊", txt: "Résultats mesurables" }
        ],
        count_label: "Garanties de succès"
      },
      caseStudies: {
        eyebrow: "CAS D'USAGE AFRIQUE",
        title: "Des orchestrations ",
        title_highlight: "complexes",
        title_end: " menées avec succès",
        subtitle: "Découvrez comment nous coordonnons des projets multi-acteurs dans des contextes exigeants.",
        logistics: {
          title: "Projet logistique multi-équipes",
          problem: "Contexte : Optimisation des itinéraires dans un environnement terrain complexe.",
          type: "Coordination",
          challenge: {
            tag: "Défi",
            description: "Coordination entre opérationnel, IT, data et direction avec des intérêts divergents et des contraintes terrain fortes."
          },
          orchestration: {
            tag: "Orchestration Aifrica",
            items: [
              "Cadrage clair avec toutes parties prenantes",
              "Planification progressive par sprints",
              "Reporting stratégique hebdomadaire",
              "Gestion active des dépendances"
            ]
          },
          method: {
            tag: "Méthode",
            description: "Comité de pilotage mensuel, réunions techniques hebdomadaires, communication transparente, gestion proactive des risques."
          },
          results: {
            tag: "Résultat attendu",
            items: [
              "Projet livré dans les délais",
              "Adoption terrain facilitée",
              "ROI atteint à 6 mois"
            ]
          }
        },
        telecom: {
          title: "Projet télécom",
          problem: "Coordination entre service client, équipe data, IT et direction.",
          type: "Réduction churn",
          objective: {
            tag: "Objectif",
            description: "Réduction du churn client avec suivi KPI précis et adoption par les équipes commerciales et support."
          },
          coordination: {
            tag: "Coordination",
            items: [
              "Alignement objectifs métiers-techniques",
              "Gestion intégration systèmes existants",
              "Formation progressive des équipes",
              "Monitoring continu des performances"
            ]
          },
          governance: {
            tag: "Gouvernance",
            description: "RACI clarifié, comité de suivi hebdomadaire, reporting exécutif mensuel, gestion des changements anticipée."
          },
          impact: {
            tag: "Impact",
            items: [
              "−25% taux de churn",
              "+40% satisfaction client",
              "Adoption 95% équipes"
            ]
          }
        }
      },
      targets: {
        eyebrow: "POUR QUI ?",
        title: "Nous orchestrons ",
        title_highlight: "les projets complexes",
        title_end: " nécessitant coordination",
        subtitle: "Notre expertise est particulièrement précieuse pour les projets multi-acteurs et stratégiques.",
        items: [
          { ico: "🏢", label: "Grandes entreprises" },
          { ico: "🏛️", label: "Administrations" },
          { ico: "🔗", label: "Organisations multi-départements" },
          { ico: "🤝", label: "Projets multi-partenaires" }
        ]
      },
      why: {
        eyebrow: "POURQUOI AIFRICA ?",
        title: "L'orchestration ",
        title_highlight: "africaine",
        title_end: " qui garantit le succès",
        subtitle: "Nous combinons vision stratégique et expertise terrain pour piloter vos projets IA vers l'excellence.",
        items: [
          { bold: "Vision stratégique + expertise technique", rest: " — double compétence rare et précieuse." },
          { bold: "Compréhension des réalités africaines", rest: " — adapté aux contextes locaux." },
          { bold: "Approche structurée et progressive", rest: " — méthode éprouvée et flexible." },
          { bold: "Focus sur adoption et impact", rest: " — technologie au service du business." },
          { bold: "Accompagnement exécutif", rest: " — soutien au plus haut niveau." }
        ],
        brand_wordmark: "AIF",
        brand_wordmark_end: "RICA",
        brand_sub: "ORCHESTRATION IA",
        values: ["Vision stratégique", "Coordination experte", "Résultats garantis", "Excellence opérationnelle"]
      },
      duration: {
        eyebrow: "DURÉE",
        title: "Engagement ",
        title_highlight: "flexible",
        title_end: " selon vos besoins",
        subtitle: "De quelques semaines à plusieurs mois, nous nous adaptons à la complexité de vos projets.",
        description: {
          ico: "⏱️",
          title: "Engagement variable selon le projet",
          content: "Notre durée d'intervention s'adapte à la complexité, la taille et les enjeux de votre projet IA. De l'accompagnement ponctuel au pilotage long terme, nous trouvons le bon équilibre entre expertise transférée et autonomie préservée."
        }
      },
      cta: {
        eyebrow: "PRÊT À RÉUSSIR ?",
        title: "Transformez vos projets IA en ",
        title_highlight: "succès opérationnel",
        title_end: " ",
        title_italic: "durable",
        description: "Confiez vos projets Data & IA à notre expertise en orchestration pour garantir impact, adoption et résultats mesurables.",
        button: "Planifier un échange stratégique"
      },
      footer: {
        logo: "AIF",
        logo_end: "RICA",
        copyright: "© 2024 Aifrica - Orchestration IA pour l'Afrique"
      }
    },
    solutionIAAvancee: {
      hero: {
        tag: "Développement sur mesure – Agents IA – Automatisation",
        title: "Développez des solutions IA ",
        title_highlight: "adaptées à votre réalité africaine",
        description: "Nous concevons et déployons des solutions intelligentes sur mesure — agents IA, automatisations, modèles prédictifs et dashboards avancés — alignées sur vos objectifs métiers et vos contraintes opérationnelles.",
        request_feasibility: "Demander une étude de faisabilité",
        see_realizations: "Voir nos réalisations",
        approach_title: "NOTRE APPROCHE",
        steps: [
          { n: "1", t: "Architecture réaliste", d: "Adaptée à vos contraintes" },
          { n: "2", t: "Intégration existante", d: "Avec vos outils actuels" },
          { n: "3", t: "Adoption mesurable", d: "Formation et accompagnement" },
          { n: "4", t: "Montée en puissance", d: "Progressive et sécurisée" }
        ],
        approach_label: "Développement",
        approach_value: "Sur mesure"
      },
      problem: {
        eyebrow: "LE PROBLÈME",
        title: "De nombreuses organisations africaines ",
        title_highlight: "font face à",
        subtitle: "L'IA peut transformer ces défis en avantage compétitif — à condition d'être bien conçue et adaptée au terrain.",
        items: [
          { ico: "🔄", t: "Processus manuels répétitifs", sub: "Tâches chronophages qui ralentissent les équipes et créent des erreurs." },
          { ico: "📞", t: "Service client saturé", sub: "Équipes débordées, temps de réponse longs, qualité inégale." },
          { ico: "🎲", t: "Décisions à l'intuition", sub: "Absence de données objectives pour piloter l'entreprise." },
          { ico: "📊", t: "Manque de prévision", sub: "Difficulté à anticiper ventes, stocks, churn et risques." },
          { ico: "🌍", t: "Outils génériques inadaptés", sub: "Solutions conçues pour d'autres contextes, inefficaces localement." }
        ],
        approach_title: "NOTRE APPROCHE",
        approach_description: "Chez Aifrica, nous développons des solutions IA <strong>progressives, robustes</strong> et <strong>adaptées aux réalités africaines</strong>.",
        approach_checks: [
          "Une architecture réaliste",
          "Une intégration avec vos outils existants",
          "Une adoption mesurable par vos équipes",
          "Une montée en puissance progressive"
        ]
      },
      solutions: {
        eyebrow: "CE QUE NOUS DÉVELOPPONS",
        title: "Des solutions ",
        title_highlight: "intelligentes",
        title_end: " pour chaque besoin",
        subtitle: "De l'agent conversationnel au dashboard prédictif, nous couvrons tout le spectre de l'IA appliquée.",
        items: [
          {
            ico: "🤖",
            title: "Agents IA personnalisés",
            items: [
              "Chatbots internes (support RH, procédures, FAQ)",
              "Assistants clients 24/7",
              "Agents RAG connectés à vos documents"
            ]
          },
          {
            ico: "⚡",
            title: "Automatisation intelligente",
            items: [
              "Automatisation du support client",
              "Workflow automatisé (emails, CRM, relances)",
              "Classification automatique de documents"
            ]
          },
          {
            ico: "📈",
            title: "Modèles prédictifs",
            items: [
              "Prévision des ventes",
              "Détection de fraude",
              "Scoring crédit",
              "Prédiction churn"
            ]
          },
          {
            ico: "📊",
            title: "Dashboards décisionnels avancés",
            items: [
              "KPI en temps réel",
              "Indicateurs financiers",
              "Performance commerciale",
              "Optimisation logistique"
            ]
          }
        ]
      },
      methodology: {
        eyebrow: "NOTRE MÉTHODOLOGIE",
        title: "Un développement ",
        title_highlight: "structuré",
        title_end: " en 6 étapes",
        subtitle: "De l'idée à la production, nous vous accompagnons à chaque phase du projet.",
        steps: [
          { n: "1", title: "Cadrage stratégique", desc: "Besoin métier, contraintes, objectifs" },
          { n: "2", title: "Conception & Architecture", desc: "Structure data, tech, sécurité" },
          { n: "3", title: "Développement & Intégration", desc: "Construction et connexion systèmes" },
          { n: "4", title: "Tests & Validation", desc: "Robustesse, performance, cas limites" },
          { n: "5", title: "Formation & Adoption", desc: "Compétences et documentation" },
          { n: "6", title: "Suivi & Optimisation", desc: "KPIs et amélioration continue" }
        ]
      },
      caseStudies: {
        eyebrow: "CAS D'USAGE AFRIQUE",
        title: "Des applications ",
        title_highlight: "concrètes",
        title_end: " qui transforment le business",
        subtitle: "Découvrez comment l'IA résout des problèmes réels dans différents secteurs africains.",
        ecommerce: {
          title: "E-commerce",
          problem: "Chatbot 24/7 pour répondre aux questions fréquentes et suivre les commandes.",
          type: "Service client",
          problem_tag: "Problème",
          problem_description: "Équipe support surchargée, temps de réponse supérieur à 24h, perte de clients sur questions simples.",
          solution_tag: "Solution",
          solution_description: "Chatbot intelligent connecté au catalogue et système de commandes, avec handover vers humain.",
          tech_tag: "Technologies",
          tech_description: "RAG sur documentation produit, intégration API e-commerce, interface WhatsApp/Web.",
          results: {
            tag: "Résultats",
            items: [
              "−70% tickets support simples",
              "+40% satisfaction client",
              "24/7 disponibilité"
            ]
          }
        },
        logistics: {
          title: "Logistique",
          problem: "Optimisation des itinéraires pour réduire coûts carburant et délais.",
          type: "Optimisation",
          problem_tag: "Problème",
          problem_description: "Itinéraires non optimisés, coûts carburant élevés, retards fréquents, faible utilisation flotte.",
          solution_tag: "Solution",
          solution_description: "Algorithme d'optimisation multi-critères avec contraintes locales (routes, trafic, zones).",
          tech_tag: "Technologies",
          tech_description: "GPS tracking, algorithmes optimisation, dashboard temps réel, application mobile chauffeurs.",
          results: {
            tag: "Résultats",
            items: [
              "−25% coûts carburant",
              "−30% temps de livraison",
              "+50% utilisation véhicules"
            ]
          }
        },
        microfinance: {
          title: "Microfinance",
          problem: "Automatisation d'un scoring simple avec garde-fous humains.",
          type: "Scoring",
          problem_tag: "Problème",
          problem_description: "Évaluation manuelle des risques, temps de traitement 2-3 jours, critères incohérents.",
          solution_tag: "Solution",
          solution_description: "Modèle scoring ML avec variables locales, interface validation humaine, apprentissage continu.",
          tech_tag: "Technologies",
          tech_description: "Machine learning, intégration données clients, dashboard validation, API banque partenaires.",
          results: {
            tag: "Résultats",
            items: [
              "−80% temps de traitement",
              "+15% précision scoring",
              "Réduction risque 20%"
            ]
          }
        },
        distribution: {
          title: "Distribution",
          problem: "Prévision des ventes pour réduire les ruptures en saison forte.",
          type: "Prévision",
          problem_tag: "Problème",
          problem_description: "Ruptures fréquentes en haute saison, surstocks autres périodes, pertes opportunités.",
          solution_tag: "Solution",
          solution_description: "Modèle prédictif ventes par point de vente, alertes réapprovisionnement, recommendations stocks.",
          tech_tag: "Technologies",
          tech_description: "Time series forecasting, données ventes historiques, variables saisonnières, dashboard stocks.",
          results: {
            tag: "Résultats",
            items: [
              "−60% ruptures stock",
              "−25% surstocks",
              "+35% ventes saison"
            ]
          }
        }
      },
      targets: {
        eyebrow: "POUR QUI ?",
        title: "Nous servons ",
        title_highlight: "divers secteurs",
        title_end: " de l'économie africaine",
        subtitle: "Notre expertise couvre les besoins spécifiques de chaque industrie.",
        items: [
          { ico: "🚀", label: "PME en croissance" },
          { ico: "🏢", label: "Grandes entreprises" },
          { ico: "📡", label: "Acteurs télécom" },
          { ico: "🛒", label: "Distribution & retail" },
          { ico: "💰", label: "Finance & microfinance" },
          { ico: "🛍️", label: "E-commerce" },
          { ico: "🚚", label: "Logistique" }
        ]
      },
      difference: {
        eyebrow: "NOTRE DIFFÉRENCE",
        title: "L'expertise ",
        title_highlight: "africaine",
        title_end: " qui fait la différence",
        subtitle: "Nous combinons excellence technique et compréhension des réalités locales pour garantir votre succès.",
        items: [
          { bold: "Solutions adaptées aux infrastructures locales", rest: " — conçues pour les réalités techniques africaines." },
          { bold: "Approche progressive et réaliste", rest: " — sans révolution brutale, avec montée en puissance maîtrisée." },
          { bold: "Focus ROI mesurable", rest: " — chaque solution évaluée sur sa valeur business concrète." },
          { bold: "Expertise Data & IA combinée", rest: " — double compétence rare et précieuse." },
          { bold: "Accompagnement stratégique + opérationnel", rest: " — du conseil à la mise en production." }
        ],
        count_label: "Avantages concurrentiels"
      },
      deliverables: {
        eyebrow: "CE QUE VOUS OBTENEZ",
        title: "Des livrables ",
        title_highlight: "complets",
        title_end: " pour pérenniser votre succès",
        subtitle: "Notre intervention vous laisse avec une solution autonome et évolutionnaire.",
        title: "Package complet de livraison",
        items: [
          "Une solution IA fonctionnelle et documentée",
          "Une architecture claire et maintenable",
          "Un plan d'évolution sur 12-24 mois",
          "Des indicateurs de performance mesurables",
          "Une équipe formée et autonome"
        ]
      },
      cta: {
        eyebrow: "PRÊT À TRANSFORMER ?",
        title: "Transformez vos ",
        title_highlight: "opérations",
        title_end: " grâce à ",
        title_italic: "l'IA",
        description: "Développez votre solution IA sur mesure avec notre expertise technique et notre compréhension des réalités africaines.",
        button: "Planifier un échange stratégique"
      },
      footer: {
        logo: "AIF",
        logo_end: "RICA",
        copyright: "© 2024 Aifrica - Solutions IA avancées pour l'Afrique"
      }
    },
    afrique: {
      topBand: {
        label: "Dossier Spécial · Afrique & IA",
        date: "Février 2026",
        back: "← Accueil"
      },
      hero: {
        tag: "Dossier Spécial",
        title: "L'",
        title_highlight: "Afrique",
        title_part1: "& l'Intel",
        title_part2: "ligence",
        title_part3: "Artificielle",
        subtitle: "Analyses, initiatives et décryptages sur la transformation numérique du continent africain — au cœur de l'actualité mondiale.",
        stats: {
          articles: "Articles",
          countries: "Pays",
          news: "Actualité"
        },
        featured: {
          tag: "⭐ À la une",
          read: "Lire l'article"
        }
      },
      ticker: {
        items: [
          "Intelligence Artificielle", "Innovation Africaine", "Souveraineté Numérique",
          "Talents & Formation", "Infrastructures IA", "Partenariats Stratégiques", "Transformation Digitale"
        ]
      },
      body: {
        sectionLabel: "Actualités",
        sectionTitle: "Dernières analyses",
        sectionCount: "articles"
      },
      article: {
        read: "Lire l'article"
      },
      sidebar: {
        highlights: {
          title: "À retenir"
        },
        about: {
          tag: "À propos du dossier",
          title: "L'Afrique au cœur de la révolution IA",
          text: "Ce dossier compile les initiatives, partenariats et analyses qui positionnent le continent africain comme acteur incontournable de l'intelligence artificielle mondiale en 2026.",
          countries: ["Nigeria", "Maroc", "Kenya", "Ghana", "Afrique du Sud", "Sénégal"]
        }
      },
      footer: {
        brand: "Dossier <span>Afrique & IA</span> — 2026",
        back: "← Retour à l'accueil"
      }
    },
    diagnosticDataIA: {
      hero: {
        tag: "Porte d'entrée stratégique d'Aifrica",
        title: "Clarifiez votre potentiel ",
        title_highlight: "Data & IA",
        title_end: " avant d'investir.",
        description: "Le Diagnostic Aifrica identifie vos opportunités concrètes, vos risques réels et votre trajectoire réaliste de transformation — en 2 à 4 semaines, sans jargon.",
        request_diagnostic: "Demander mon diagnostic",
        discover_method: "Découvrir la méthode",
        approach_title: "Notre approche en 4 étapes",
        steps: [
          { n: "1", title: "Audit complet", desc: "Données, outils et processus" },
          { n: "2", title: "Évaluation de maturité", desc: "Technique & organisationnelle" },
          { n: "3", title: "Cas d'usage IA", desc: "Priorisés par impact et ROI" },
          { n: "4", title: "Roadmap stratégique", desc: "0 à 12 mois, actionnable" }
        ],
        duration_label: "Durée indicative",
        duration_value: "2 – 4 semaines"
      },
      stats: [
        { num: 4, suffix: "", label: "axes d'analyse couverts" },
        { num: 6, suffix: "", label: "livrables stratégiques inclus" },
        { num: 12, suffix: " mois", label: "de roadmap opérationnelle" },
        { num: 100, suffix: "%", label: "orienté impact mesurable" }
      ],
      challenges: {
        eyebrow: "Pourquoi un diagnostic d'abord",
        title: "Les défis courants",
        title_line2: "des organisations",
        title_line3: "en ",
        title_highlight: "Afrique",
        subtitle: "La majorité des entreprises africaines partagent ces obstacles avant de lancer un projet IA ou data.",
        items: [
          { ico: "📊", title: "Données dispersées", desc: "Entre Excel, ERP, CRM et papier, sans synchronisation." },
          { ico: "📋", title: "Reporting inexistant", desc: "Absence de tableaux de bord et d'indicateurs fiables." },
          { ico: "🎯", title: "Décisions sans données", desc: "Pilotage à vue, sans KPIs de performance clairs." },
          { ico: "🤖", title: "IA : par où commencer ?", desc: "Ambition d'IA sans feuille de route ni méthode." },
          { ico: "💸", title: "Investissements mal ciblés", desc: "Outils achetés sans stratégie ni mesure de retour." }
        ],
        risk_title: "Sans diagnostic,",
        risk_title_line2: "quel est le vrai risque ?",
        risk_description: "Budgets gaspillés sur des outils inadaptés. Projets IA sans suite. Équipes démotivées face à des promesses non tenues. Le diagnostic vous donne une vision claire avant d'investir quoi que ce soit.",
        risk_tags: ["Temps économisé", "Budget optimisé", "Risques maîtrisés", "Décisions éclairées"]
      },
      analysis: {
        eyebrow: "Notre périmètre d'analyse",
        title: "Ce que nous ",
        title_highlight: "analysons",
        subtitle: "Quatre dimensions clés pour une vision complète et honnête de votre potentiel data et IA.",
        cards: [
          { ico: "🗃️", n: "01", title: "Vos données", items: ["Sources existantes", "Formats & structures", "Qualité & cohérence", "Accessibilité"] },
          { ico: "⚙️", n: "02", title: "Vos outils", items: ["ERP & CRM", "Logiciels métiers", "Tableurs & fichiers", "Infrastructure IT"] },
          { ico: "🛡️", n: "03", title: "Maturité Data & IA", items: ["Gouvernance", "Sécurité des données", "Compétences internes", "Processus décisionnels"] },
          { ico: "💡", n: "04", title: "Opportunités IA", items: ["Cas d'usage clés", "Quick wins identifiés", "ROI potentiel chiffré", "Risques & contraintes"] }
        ]
      },
      methodology: {
        eyebrow: "Notre approche",
        title: "Une méthodologie ",
        title_highlight: "éprouvée",
        subtitle: "Structurée, rigoureuse et profondément adaptée aux réalités africaines. Cliquez sur chaque étape.",
        steps: [
          { n: "1", title: "Audit", desc: "Analyse complète de vos flux de données, systèmes et processus opérationnels.", chips: ["Flux data", "Systèmes"] },
          { n: "2", title: "Évaluation", desc: "Diagnostic approfondi de maturité technique et organisationnelle.", chips: ["Technique", "Organisation"] },
          { n: "3", title: "Opportunités", desc: "Qualification des cas d'usage IA par impact, faisabilité et ROI estimé.", chips: ["Impact", "ROI", "Coût"] },
          { n: "4", title: "Roadmap", desc: "Feuille de route stratégique priorisée sur 3, 6 et 12 mois.", chips: ["0–3m", "3–6m", "6–12m"] }
        ]
      },
      deliverables: {
        eyebrow: "Vos livrables",
        title: "Ce que vous ",
        title_highlight: "obtenez",
        items: [
          { ico: "📋", text: "Rapport de diagnostic détaillé" },
          { ico: "🗺️", text: "Cartographie complète de vos données" },
          { ico: "📌", text: "Plan d'action priorisé" },
          { ico: "⚡", text: "Identification des quick wins" },
          { ico: "🔧", text: "Recommandations technologiques réalistes" },
          { ico: "🎯", text: "Vision stratégique alignée business" }
        ],
        count_label: "livrables inclus"
      },
      caseStudy: {
        eyebrow: "Terrain africain",
        title: "Un cas ",
        title_highlight: "concret",
        company: "PME de distribution",
        sector: "Commerce de gros · Afrique de l'Ouest",
        badge: "Cas réel",
        problem: {
          tag: "Problème",
          description: "Données de ventes et stocks dispersées entre Excel et logiciel de caisse, sans synchronisation ni visibilité en temps réel."
        },
        diagnostic: {
          tag: "Diagnostic",
          items: [
            "Absence d'indicateurs fiables",
            "Ruptures de stock fréquentes",
            "Surstocks en basse saison"
          ]
        },
        recommendation: {
          tag: "Recommandation",
          items: [
            "Structuration des données historiques",
            "Création de KPIs simples et actionnables",
            "Modèle de prévision progressif"
          ]
        },
        result: {
          tag: "Résultat attendu",
          description: "Réduction des ruptures, meilleure gestion de trésorerie, ROI mesurable dès 3 mois d'implémentation."
        }
      },
      duration: {
        eyebrow: "Format & durée",
        title: "Comment ",
        title_highlight: "ça se passe",
        indicative: {
          ico: "⏱️",
          title: "Durée indicative",
          description: "2 à 4 semaines selon la taille de votre organisation et la disponibilité des données. Nous nous adaptons entièrement à votre rythme opérationnel."
        },
        format: {
          ico: "📌",
          title: "Format du diagnostic",
          items: [
            "Entretiens stratégiques avec vos décideurs clés",
            "Analyse documentaire et revue des systèmes en place",
            "Synthèse exécutive et rapport de maturité complet",
            "Restitution claire et actionnée aux équipes dirigeantes"
          ]
        }
      },
      targets: {
        eyebrow: "Pour qui",
        title: "Ce diagnostic est fait ",
        title_highlight: "pour vous",
        items: [
          { ico: "🏢", label: "PME en croissance" },
          { ico: "🚀", label: "Startups ambitieuses" },
          { ico: "🏛️", label: "Grandes entreprises" },
          { ico: "🏗️", label: "Administrations publiques" },
          { ico: "🔗", label: "Organisations data-first" }
        ]
      },
      why: {
        eyebrow: "Notre différence",
        title: "Pourquoi ",
        title_highlight: "Aifrica",
        title_end: " ?",
        items: [
          { bold: "Approche africaine", rest: " — adaptée aux réalités locales et aux contextes spécifiques du continent." },
          { bold: "Stratégie + opérationnel", rest: " — vision long terme combinée à un pragmatisme terrain immédiat." },
          { bold: "Impact mesurable", rest: " — chaque recommandation est orientée vers un résultat concret et quantifié." },
          { bold: "Honnêteté radicale", rest: " — aucune promesse irréaliste, aucun effet de mode technologique." },
          { bold: "Trajectoire maîtrisée", rest: " — progression progressive et sécurisée, sans rupture brutale." }
        ],
        brand_wordmark: "Ai",
        brand_wordmark_end: "frica",
        brand_sub: "Data & IA pour l'Afrique",
        values: ["Expertise locale", "Vision stratégique", "Pragmatisme opérationnel", "Impact mesurable"]
      },
      cta: {
        eyebrow: "Passez à l'action",
        title: "Évitez les",
        title_highlight: "erreurs coûteuses.",
        description: "Démarrez votre transformation data sur des bases solides, réalistes et adaptées à votre contexte.",
        button: "Planifier mon diagnostic"
      },
      footer: {
        logo: "Ai·frica",
        copyright: "© 2025 Aifrica · Data & IA pour l'Afrique"
      }
    },
    footer: {
      newsletter: {
        title: "Restez informé de nos dernières innovations",
        subtitle: "Recevez nos actualités, études de cas et conseils IA directement dans votre boîte mail",
        placeholder: "Votre adresse email",
        button: "S'abonner"
      },
      about: {
        title: "Aifrica",
        description: "Plateforme d'intelligence artificielle dédiée à accompagner les entreprises africaines dans leur transformation digitale. Nous combinons IA générative, analyse de données et agents IA pour automatiser, optimiser et innover."
      },
      platform: {
        title: "Plateforme",
        links: [
          { to: "/pateforme-aifrica", label: "Plateforme Aifrica" },
          { to: "/accompagnement-IA", label: "Accompagnement IA" },
          { to: "/dataIntelligence", label: "Data Intelligence" },
          { to: "/IA-Générative", label: "IA Générative" }
        ]
      },
      services: {
        title: "Services",
        links: [
          { to: "/diagnosticDataIA", label: "Diagnostic Data & IA" },
          { to: "/consultingIaData", label: "Consulting IA & Data" },
          { to: "/acculturationIA", label: "Acculturation IA" },
          { to: "/solutionIASurMesure", label: "Solution IA avancée" }
        ]
      },
      contact: {
        title: "Contact",
        emailLabel: "Email",
        email: "contact@aifrica.com",
        locationLabel: "Localisation",
        location: "Cyber Cité Ebène, Ile Maurice"
      },
      legal: {
        copyright: "© {year} Aifrica. Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        cookies: "Cookies"
      }
    },
    accompagnementIA: {
      hero: {
        badge: "Accompagnement IA",
        title: "Adoptez l'IA avec",
        title_highlight: "méthode & sécurité",
        quote: "Sur l'IA, l'Afrique n'a plus le droit de perdre du temps.",
        description: "Aifrica vous accompagne pour intégrer l'IA dans vos métiers, vos processus et votre stratégie — de manière structurée, efficace et sécurisée.",
        cta: "Démarrer l'accompagnement"
      },
      why: {
        label: "Pourquoi nous choisir",
        title: "Un accompagnement IA est indispensable",
        subtitle: "La majorité des entreprises s'intéresse à l'IA, mais peu réussissent à l'industrialiser ou à créer des résultats concrets. C'est là où Aifrica fait réellement la différence.",
        features: [
          "Identifier les bons cas d'usage IA",
          "Démystifier l'IA et simplifier les choix technologiques",
          "Sensibiliser vos équipes aux risques, conformité et éthique",
          "Sélectionner les solutions IA adaptées à vos besoins",
          "Déployer une méthodologie garantissant un ROI rapide"
        ],
        stat: {
          number: "100%",
          label: "Accompagnement stratégique",
          description: "Une intégration IA pensée pour vos objectifs métier, avec un suivi continu et des résultats mesurables à chaque étape."
        }
      },
      axes: {
        label: "Notre approche",
        title: "Nos axes d'accompagnement",
        subtitle: "Aifrica met en place une approche structurée, sécurisée et adaptée à vos enjeux.",
        items: [
          {
            title: "Identifier les cas d'usage IA",
            description: "Analyse métier, cartographie des processus et sélection des cas d'usage les plus pertinents pour votre entreprise."
          },
          {
            title: "Démystifier l'IA",
            description: "Vulgarisation du jargon IA et aide à comprendre les technologies utiles à vos besoins."
          },
          {
            title: "Sensibilisation aux risques",
            description: "Cybersécurité, conformité légale, éthique, gestion des risques et acculturation de vos équipes."
          },
          {
            title: "Choisir la bonne solution IA",
            description: "Sélection rigoureuse des technologies adaptées à vos besoins et votre environnement applicatif."
          },
          {
            title: "Méthodologie IA",
            description: "Approche structurée garantissant un déploiement maîtrisé et un retour sur investissement mesurable."
          },
          {
            title: "Accélération de projets IA",
            description: "Contournez les freins internes, déployez rapidement, obtenez des résultats concrets grâce à nos experts IA."
          }
        ]
      },
      steps: {
        label: "Processus",
        title: "Sécuriser l'adoption de l'IA",
        subtitle: "Une IA responsable, maîtrisée et sécurisée : un impératif pour toutes les entreprises africaines.",
        items: [
          {
            number: "1",
            title: "Protection des données",
            description: "Mise en place de protocoles robustes et conformité réglementaire renforcée."
          },
          {
            number: "2",
            title: "Audit des risques IA",
            description: "Détection des biais, analyse des risques éthiques et sécurisation des systèmes."
          },
          {
            number: "3",
            title: "Déploiement maîtrisé",
            description: "Intégration dans vos métiers avec supervision continue et suivi régulier."
          },
          {
            number: "4",
            title: "Adoption sécurisée",
            description: "Accompagnement complet pour éviter erreurs, cyber-risques et mauvaises décisions automatisées."
          }
        ]
      },
      faq: {
        label: "FAQ",
        title: "Questions fréquentes",
        subtitle: "Tout ce que vous devez savoir sur notre accompagnement IA",
        items: [
          {
            question: "Pourquoi un accompagnement IA est-il important ?",
            answer: "La plupart des entreprises peinent à industrialiser l'IA ou à aligner leurs projets avec leurs enjeux métiers. Aifrica vous aide à structurer, sécuriser et accélérer vos initiatives."
          },
          {
            question: "Comment identifier les bons cas d'usage IA ?",
            answer: "Nous analysons vos processus, vos données et vos objectifs afin de détecter les cas d'usage réellement pertinents pour votre entreprise."
          },
          {
            question: "Comment Aifrica sécurise-t-elle l'adoption de l'IA ?",
            answer: "Nous mettons en place des protocoles de sécurité, des mécanismes de conformité, ainsi que des audits de risques pour garantir une IA maîtrisée et éthique."
          },
          {
            question: "Comment Aifrica aide-t-elle à démystifier l'IA ?",
            answer: "Nous vulgarisons les concepts, clarifions les choix technologiques et accompagnons vos équipes pour rendre l'IA accessible et compréhensible."
          },
          {
            question: "Est-ce que l'accompagnement IA assure un ROI ?",
            answer: "Oui. Notre approche vise à structurer vos projets pour maximiser les résultats, réduire les coûts et accélérer la valeur générée par l'IA."
          }
        ]
      },
      cta: {
        title: "Prêt à accélérer votre",
        title_highlight: "transformation IA",
        title_end: "?",
        description: "Rejoignez les entreprises africaines qui font confiance à Aifrica pour structurer, sécuriser et maximiser leur adoption de l'intelligence artificielle.",
        button: "Nous contacter"
      }
    },
    dataIntelligence: {
      hero: {
        badge: "Data Intelligence",
        title: "Valorisez vos données avec",
        title_highlight: "intelligence",
        quote: "Les données sont le pétrole du 21ème siècle, mais l'intelligence est le raffinage.",
        description: "Transformez vos données en avantage concurrentiel. Aifrica vous accompagne dans la mise en place d'une stratégie data complète, de la collecte à l'industrialisation.",
        cta: "Démarrer la transformation"
      },
      services: {
        label: "Nos services",
        title: "Une approche complète de la Data",
        subtitle: "De la collecte à l'industrialisation, nous couvrons toute la chaîne de valeur de vos données.",
        items: [
          {
            title: "Collecte & Stockage",
            description: "Infrastructure de données robuste et sécurisée pour collecter, stocker et gérer vos volumes de données."
          },
          {
            title: "Analyse & Visualisation",
            description: "Tableaux de bord interactifs et outils d'analyse pour transformer vos données en insights actionnables."
          },
          {
            title: "Data Mining",
            description: "Exploration avancée de vos données pour découvrir des tendances cachées et des opportunités."
          },
          {
            title: "Machine Learning",
            description: "Modèles prédictifs et algorithmes d'apprentissage pour automatiser vos processus décisionnels."
          },
          {
            title: "Gouvernance & Sécurité",
            description: "Conformité RGPD, anonymisation et protection des données pour garantir la confiance."
          },
          {
            title: "Industrialisation",
            description: "Déploiement à l'échelle et monitoring pour assurer la performance et la fiabilité."
          }
        ]
      },
      benefits: {
        label: "Bénéfices",
        title: "Pourquoi la Data Intelligence ?",
        subtitle: "Les avantages concrets pour votre entreprise africaine.",
        items: [
          {
            title: "Performance Opérationnelle",
            description: "Optimisez vos processus et réduisez vos coûts grâce à l'analyse prédictive."
          },
          {
            title: "Prise de Décision",
            description: "Basez vos stratégies sur des données fiables et des prédictions précises."
          },
          {
            title: "Avantage Concurrentiel",
            description: "Anticipez les tendances du marché et devancez vos concurrents."
          }
        ]
      },
      process: {
        label: "Processus",
        title: "Notre méthodologie",
        subtitle: "Une approche structurée pour garantir le succès de votre transformation data.",
        items: [
          {
            number: "1",
            title: "Audit Data",
            description: "Évaluation complète de votre patrimoine de données et de vos infrastructures."
          },
          {
            number: "2",
            title: "Stratégie",
            description: "Définition d'une feuille de route data alignée avec vos objectifs business."
          },
          {
            number: "3",
            title: "Déploiement",
            description: "Mise en œuvre des solutions d'analyse et de machine learning."
          },
          {
            number: "4",
            title: "Optimisation",
            description: "Monitoring continu et amélioration itérative de vos performances."
          }
        ]
      },
      faq: {
        label: "FAQ",
        title: "Questions fréquentes",
        subtitle: "Tout ce que vous devez savoir sur la Data Intelligence",
        items: [
          {
            question: "Qu'est-ce que la Data Intelligence ?",
            answer: "La Data Intelligence est l'ensemble des processus et technologies qui permettent de transformer les données brutes en informations pertinentes pour prendre de meilleures décisions business."
          },
          {
            question: "Comment garantir la sécurité de mes données ?",
            answer: "Nous mettons en place des protocoles de sécurité avancés, respectons les normes RGPD et assurons la confidentialité totale de vos informations."
          },
          {
            question: "Quel ROI attendre de la Data Intelligence ?",
            answer: "Nos clients observent en moyenne une réduction de 30% des coûts opérationnels et une augmentation de 25% de leur chiffre d'affaires grâce aux insights data."
          },
          {
            question: "Faut-il des compétences techniques en interne ?",
            answer: "Nous accompagnons vos équipes et assurons la montée en compétences. Une équipe data minimale est suffisante pour démarrer."
          }
        ]
      },
      cta: {
        title: "Prêt à transformer vos",
        title_highlight: "données en valeur",
        title_end: "?",
        description: "Rejoignez les entreprises africaines qui accélèrent leur croissance grâce à l'intelligence de leurs données.",
        button: "Nous contacter"
      }
    },
    entreprise: {
      topband: {
        label: "Industrie & Économie · IA & Secteurs",
        date: "2026",
        back: "← Accueil"
      },
      hero: {
        tag: "Industrie & Économie",
        title: "L'IA & les",
        title_highlight: "Secteurs",
        title_end: "Économiques",
        subtitle: "Commerce, transport, santé, finance, agriculture, tourisme, éducation — comment l'intelligence artificielle redessine chaque industrie, en Afrique et dans le monde.",
        stats: {
          articles: "Articles",
          sectors: "Secteurs",
          perspectives: "Perspectives"
        },
        featured: {
          tag: "⭐ À la une",
          read_article: "Lire l'article"
        }
      },
      ticker: {
        items: ["Commerce & Retail", "Transport & Logistique", "Santé Digitale", "Banque & Assurance", "Agriculture Intelligente", "Tourisme", "Éducation", "Innovation Africaine"]
      },
      body: {
        section: {
          label: "Analyses",
          title: "Tous les articles",
          count: "articles"
        },
        article: {
          africa: "Afrique",
          read_article: "Lire l'article"
        },
        sidebar: {
          highlights: {
            title: "À retenir"
          },
          sectors: {
            title: "Secteurs couverts",
            articles: "articles"
          },
          about: {
            tag: "À propos de la rubrique",
            title: "L'IA redessine l'économie mondiale",
            text: "Chaque secteur est analysé sous deux angles : les tendances mondiales et les réalités africaines, pour une vision complète et nuancée de la transformation en cours.",
            tags: ["Retail", "Logistique", "Santé", "Fintech", "AgriTech", "TourTech", "EdTech", "Afrique"]
          }
        }
      },
      footer: {
        brand: "Rubrique Industrie & Économie — 2026",
        back: "← Retour à l'accueil"
      }
    },
    metier: {
      topband: {
        label: "Rubrique Métiers · IA & Entreprise",
        date: "2026",
        back: "← Accueil"
      },
      hero: {
        tag: "Rubrique Métiers",
        title: "L'IA & les",
        title_highlight: "Métiers",
        title_end: "de l'Entreprise",
        subtitle: "Comment l'intelligence artificielle transforme les ressources humaines, la finance, le marketing et les fonctions commerciales — en Afrique et dans le monde.",
        stats: {
          articles: "Articles",
          domains: "Domaines",
          perspectives: "Perspectives"
        },
        featured: {
          tag: "⭐ À la une",
          read_article: "Lire l'article"
        }
      },
      ticker: {
        items: ["Ressources Humaines", "Finance d'Entreprise", "Stratégie Marketing", "Commerce & Ventes", "IA & Métiers", "Transformation Digitale", "Innovation Africaine"]
      },
      body: {
        section: {
          label: "Analyses",
          title: "Tous les articles",
          count: "articles"
        },
        article: {
          read_article: "Lire l'article"
        },
        sidebar: {
          highlights: {
            title: "À retenir"
          },
          domains: {
            title: "Domaines couverts",
            articles: "articles"
          },
          about: {
            tag: "À propos de la rubrique",
            title: "L'IA au cœur des métiers",
            text: "Chaque domaine est analysé sous deux angles complémentaires : les tendances mondiales et les réalités africaines, pour une vision complète de la transformation en cours.",
            tags: ["RH", "Finance", "Marketing", "Ventes", "IA Générative", "PME", "Afrique"]
          }
        }
      },
      footer: {
        brand: "Rubrique Métiers & IA — 2026",
        back: "← Retour à l'accueil"
      }
    },
    technologie: {
      topband: {
        label: "Dossier Spécial · Technologie & IA",
        date: "Février 2025",
        back: "← Accueil"
      },
      hero: {
        tag: "Dossier Spécial",
        title: "Technologie",
        title_highlight: "Inno-va-tion",
        title_end: "IA",
        subtitle: "Analyses, comparatifs et guides techniques sur les dernières avancées en intelligence artificielle, data architecture et cloud computing.",
        stats: {
          articles: "Articles",
          topics: "Sujets",
          watch: "Veille"
        },
        featured: {
          tag: "⭐ À la une",
          read_article: "Lire l'article"
        }
      },
      ticker: {
        items: ["Data Architecture", "LLMs", "Data Science", "Cloud Computing", "Agents IA", "MCP", "Gouvernance Data", "Snowflake", "BigQuery", "RAG", "Fine-tuning", "Intelligence Artificielle"]
      },
      body: {
        section: {
          label: "Veille Technologique",
          title: "Dernières analyses",
          count: "articles"
        },
        article: {
          read_article: "Lire l'article"
        },
        sidebar: {
          highlights: {
            title: "À retenir"
          },
          about: {
            tag: "À propos du dossier",
            title: "Technologie & IA au cœur de l'innovation",
            text: "Ce dossier compile les analyses techniques, comparatifs et guides sur les dernières avancées en intelligence artificielle, data architecture et cloud computing pour les décideurs technologiques.",
            topics: ["Data Governance", "LLMs", "RAG", "Fine-tuning", "Agents", "Cloud", "MCP", "Data Science"]
          }
        }
      },
      footer: {
        brand: "Dossier Technologie & IA — 2025",
        back: "← Retour à l'accueil"
      }
    }
  },
  en: {
    navbar: {
      logo: "Aifrica Logo",
      yoafrica: {
        title: "Yo! Aifrica",
        subtitle: "Discover our innovation universe",
        links: {
          plateforme: "Aifrica Platform",
          plateforme_desc: "Discover our ecosystem",
          accompagnement: "AI Support",
          accompagnement_desc: "Personalized support",
          data: "Data Intelligence",
          data_desc: "Enhance your data",
          generative: "Generative AI",
          generative_desc: "Creative solutions",
          agentique: "Agentic AI",
          agentique_desc: "Intelligent automation"
        }
      },
      services: {
        title: "Services",
        subtitle: "Our Services",
        description: "Solutions tailored to your needs",
        links: {
          diagnostic: "Data & AI Diagnostic",
          diagnostic_desc: "Complete audit",
          consulting: "AI & Data Consulting",
          consulting_desc: "Strategic expertise",
          acculturation: "AI Acculturation",
          acculturation_desc: "Training & awareness",
          solution: "Advanced AI Solution",
          solution_desc: "Custom development"
        }
      },
      infos: {
        title: "Infos",
        subtitle: "Our Info",
        description: "Discover our news",
        links: {
          afrique: "Africa",
          afrique_desc: "African news",
          industrie: "Industry/Economy",
          industrie_desc: "Economic sectors",
          metier: "Career",
          metier_desc: "Careers & skills",
          technologie: "Technology",
          technologie_desc: "Tech innovations"
        }
      },
      approach: "Approach",
      partner: "Partner",
      contact: "Contact",
      contact_mobile: "Contact Us"
    },
    header: {
      title: "Design, build and deploy ",
      title_highlight: "AI within your company in Africa",
      description: "Build intelligent applications tailored to your needs, and deploy them with confidence with Aifrica's support.",
      start_project: "Start a project",
      explore_solutions: "Explore solutions"
    },
    services: {
      title: "Services",
      page: {
        badge: "Our Services",
        title: "Complete support for your ",
        title_highlight: "Data & AI",
        description: "We support your organization in AI adoption: strategy, consulting, training and advanced AI solutions to propel your company towards digital excellence.",
        discover: "Discover",
        popular: "Popular",
        items: {
          diagnostic: {
            title: "Diagnostic",
            description: "Evaluation of your company's Data & AI maturity"
          },
          consulting: {
            title: "Consulting",
            description: "Definition and support for your data and artificial intelligence needs"
          },
          acculturation: {
            title: "Acculturation",
            description: "Training on AI issues for your profession and business sector"
          },
          solution: {
            title: "Advanced Solution",
            description: "Implementation of custom solutions for specific needs"
          },
          orchestration: {
            title: "Orchestration",
            description: "End-to-end management of projects and risks on the transverse aspect of Data & AI transformation"
          }
        }
      }
    },
    iaGenerative: {
      badge: "Generative AI",
      title: "Unleash creativity with ",
      title_highlight: "generative AI",
      quote: "Creativity is intelligence having fun.",
      description: "Transform the way you create, innovate and communicate. Aifrica supports you in adopting generative AI to revolutionize your creative and operational processes.",
      explore_possibilities: "Explore possibilities",
      sections: {
        applications: {
          label: "Applications",
          title: "Various Use Cases",
          subtitle: "Discover how generative AI can transform your activities.",
          items: {
            text_generation: {
              title: "Text Generation",
              description: "Content creation, writing, translation and text optimization with generative AI."
            },
            image_creation: {
              title: "Image Creation",
              description: "Generation of images, illustrations and personalized visuals with AI."
            },
            code_generation: {
              title: "Code Generation",
              description: "Development assistance, code generation and algorithmic optimization."
            },
            chatbots: {
              title: "Chatbots & Conversation",
              description: "Intelligent conversational agents for customer service and engagement."
            },
            creativity: {
              title: "Creativity & Design",
              description: "Support for artistic creation, design thinking and AI brainstorming."
            },
            predictive_analysis: {
              title: "Predictive Analysis",
              description: "Predictions and analyses based on advanced generative models."
            }
          }
        },
        solutions: {
          label: "Our Solutions",
          title: "Complete Deployment",
          subtitle: "From strategy to industrialization, we support you every step of the way.",
          items: {
            rapid_deployment: {
              title: "Rapid Deployment",
              description: "Rapid production deployment of generative AI solutions tailored to your needs."
            },
            security: {
              title: "Security & Compliance",
              description: "Secure deployment respecting GDPR standards and AI ethics."
            },
            training: {
              title: "Training & Support",
              description: "Skills development for your teams to master generative AI."
            }
          }
        },
        benefits: {
          label: "Benefits",
          title: "Why Generative AI?",
          subtitle: "Concrete advantages for your African company.",
          items: {
            productivity: {
              title: "Productivity x3",
              description: "Significant productivity increase through automation of creative tasks."
            },
            innovation: {
              title: "Continuous Innovation",
              description: "Acceleration of innovation and constant generation of new ideas."
            },
            competitive_advantage: {
              title: "Competitive Advantage",
              description: "Market differentiation through unique content and services."
            }
          }
        },
        process: {
          label: "Process",
          title: "Our Approach",
          subtitle: "A proven methodology to ensure the success of your generative AI projects.",
          items: {
            audit: {
              title: "Audit & Use Cases",
              description: "Identification of relevant use cases for generative AI in your company."
            },
            poc: {
              title: "PoC & Validation",
              description: "Development of proof of concepts to validate the relevance of solutions."
            },
            industrialization: {
              title: "Industrialization",
              description: "Scale deployment of validated solutions with continuous monitoring."
            },
            optimization: {
              title: "Optimization",
              description: "Continuous improvement of models and processes to maximize value."
            }
          }
        },
        faq: {
          label: "FAQ",
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about generative AI",
          items: [
            {
              q: "What is generative AI?",
              a: "Generative AI is a technology capable of creating original content (text, images, code, etc.) from models trained on vast data."
            },
            {
              q: "Is generative AI safe for my business?",
              a: "Yes, we implement safeguards, security filters and ensure compliance with current regulations."
            },
            {
              q: "What ROI to expect from generative AI?",
              a: "Our clients observe on average a 60% reduction in creation time and a 40% increase in content quality produced."
            },
            {
              q: "Do we need technical skills in-house?",
              a: "We provide turnkey solutions and train your teams. Basic skills are sufficient to start."
            }
          ]
        },
        cta: {
          title: "Ready to ",
          title_highlight: "revolutionize",
          title_end: " your creativity?",
          description: "Join African companies transforming their innovation with generative AI.",
          button: "Start Now"
        }
      }
    },
    iaAgentique: {
      badge: "Agentic AI",
      title: "Automate intelligence with ",
      title_highlight: "AI agents",
      quote: "The best agent is the one who acts without being asked.",
      description: "Revolutionize your operations with autonomous AI agents that work 24/7 to optimize your processes, serve your customers and make intelligent decisions.",
      start_automation: "Start automation",
      sections: {
        agents: {
          label: "Our Agents",
          title: "Specialized Agents",
          subtitle: "Discover our range of AI agents to transform your activities.",
          items: {
            conversational: {
              title: "Conversational Agents",
              description: "Intelligent chatbots for customer service, technical support and user engagement."
            },
            process: {
              title: "Process Agents",
              description: "Intelligent automation of business workflows and operations optimization."
            },
            analysis: {
              title: "Analysis Agents",
              description: "Agents specialized in data analysis and insights generation."
            },
            sales: {
              title: "Sales Agents",
              description: "Virtual assistants for prospecting, qualification and sales follow-up."
            },
            security: {
              title: "Security Agents",
              description: "Proactive monitoring and automatic detection of security threats."
            },
            monitoring: {
              title: "Monitoring Agents",
              description: "Continuous systems supervision and predictive intelligent alerts."
            }
          }
        },
        capabilities: {
          label: "Capabilities",
          title: "Power and Autonomy",
          subtitle: "The features that make our AI agents powerful.",
          items: {
            autonomy: {
              title: "Full Autonomy",
              description: "Agents capable of making decisions and acting autonomously according to defined rules."
            },
            learning: {
              title: "Continuous Learning",
              description: "Agents that improve over time thanks to machine learning and adaptation."
            },
            integration: {
              title: "Multi-Source Integration",
              description: "Connection with your existing systems for a complete view and coordinated actions."
            }
          }
        },
        benefits: {
          label: "Benefits",
          title: "Why Agentic AI?",
          subtitle: "Concrete advantages for your African company.",
          items: {
            availability: {
              title: "24/7 Availability",
              description: "Your agents work without interruption to ensure perfect service continuity."
            },
            efficiency: {
              title: "Efficiency x4",
              description: "Drastic reduction in processing times and increased productivity."
            },
            quality: {
              title: "Consistent Quality",
              description: "Process standardization and elimination of human errors."
            }
          }
        },
        process: {
          label: "Process",
          title: "Our Methodology",
          subtitle: "A structured approach to successfully deploy your AI agents.",
          items: {
            analysis: {
              title: "Process Analysis",
              description: "Identification of repetitive tasks and automation opportunities."
            },
            design: {
              title: "Agent Design",
              description: "Definition of behaviors, rules and necessary integrations."
            },
            development: {
              title: "Development & Testing",
              description: "Creation of agents with validation in real conditions."
            },
            deployment: {
              title: "Deployment & Monitoring",
              description: "Production deployment with continuous supervision and optimization."
            }
          }
        },
        faq: {
          label: "FAQ",
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about agentic AI",
          items: [
            {
              q: "What is agentic AI?",
              a: "Agentic AI uses autonomous intelligent agents capable of perceiving their environment, making decisions and executing actions to achieve specific objectives."
            },
            {
              q: "Are AI agents really autonomous?",
              a: "Yes, our agents can operate autonomously within predefined rules, with human supervision for critical decisions."
            },
            {
              q: "What ROI can we expect?",
              a: "Our clients observe on average a 70% reduction in operational costs and an 80% improvement in processing speed."
            },
            {
              q: "How to ensure agent security?",
              a: "We implement advanced security protocols, sandboxes and validation mechanisms to ensure secure operations."
            }
          ]
        },
        cta: {
          title: "Ready to ",
          title_highlight: "automate",
          title_end: " your excellence?",
          description: "Join African companies transforming their operations with autonomous AI agents.",
          button: "Start Now"
        }
      }
    },
    iaGenerativeComponent: {
      main_title: "Let's discover this revolution together",
      title: "AI",
      title_highlight: "Generative",
      subtitle: "<span class=\"ia-strong\">Generative AI</span>: a <span class=\"ia-strong\">revolution</span> at the heart of artificial intelligence",
      description: "Here is a short, clear and impactful paragraph for a homepage: Generative AI is profoundly transforming the way companies create, innovate and work. Capable of producing text, code, images or marketing materials, it opens the way to intelligent automation and multiplied creativity. Whatever their size, organizations can accelerate their projects, optimize their decisions and gain efficiency. Built on this new generation of AI, the Aifrica platform puts this power at the service of your company.",
      button: "Learn more about Generative AI",
      alt: "Generative AI"
    },
    iaAgentiqueComponent: {
      title: "AI",
      title_highlight: "Agentic",
      subtitle: "<span class=\"ia-strong\">Agentic AI</span>: <span class=\"ia-strong\">automation</span> at the heart of your company",
      description: "Agentic AI revolutionizes the way companies automate their processes. Capable of creating intelligent agents that work autonomously, it offers advanced automation and continuous optimization of operations. Our AI agents integrate perfectly with your existing systems to transform your operational efficiency.",
      button: "Learn more about Agentic AI",
      alt: "Agentic AI"
    },
    dataAnalytique: {
      title: "Data <span>Analytics</span> and <span>data</span> <span>intelligence</span>",
      subtitle: "<span>Data:</span> the essential <span>fuel</span> of artificial intelligence",
      description: "Data Analytics enables your company to transform its data into informed decisions, by anticipating trends, risks and opportunities. In the AI universe, data quality is essential: they constitute the foundation on which models are trained to detect patterns, establish correlations and generate reliable predictions. Rich and well-structured data guarantee optimal performance for all your artificial intelligence initiatives.",
      button: "Learn more about Data Analytics",
      alt: "Servers"
    },
    maturiteIa: {
      title: "You always need a <span class=\"highlight\">starting point</span> in an <span class=\"highlight\">adventure</span>!",
      subtitle: "Do you want to assess your <span class=\"highlight\">AI maturity</span>?",
      description: "We offer you a 10-minute diagnostic and receive a personalized analysis of your results with an expert.",
      button: "Start the diagnostic",
      alt: "AI diagnostic"
    },
    blogAccueil: {
      title: "THE <span>News</span>",
      categories: ["Africa", "Business", "Career", "Technology"],
      blogs: [
        {
          title: "European AI Barometer: Trends for 2025",
          category: "Africa",
          date: "19/03/2025",
          description: "The European AI Barometer unveils the major trends expected for 2025."
        },
        {
          title: "How AI is transforming African businesses",
          category: "Africa",
          date: "20/02/2025",
          description: "The impact of artificial intelligence in African SMEs."
        },
        {
          title: "AI in the finance sector",
          category: "Business",
          date: "15/03/2025",
          description: "How financial companies use AI to optimize their operations."
        },
        {
          title: "The rise of Big Data in agriculture",
          category: "Technology",
          date: "10/03/2025",
          description: "Big Data is revolutionizing agriculture with innovative solutions."
        },
        {
          title: "The future of work with automation",
          category: "Career",
          date: "05/03/2025",
          description: "Automation transforms jobs and creates new opportunities."
        },
        {
          title: "Cybersecurity and data protection",
          category: "Technology",
          date: "01/03/2025",
          description: "Cybersecurity challenges in the age of artificial intelligence."
        }
      ],
      readMore: "Read more"
    },
    contact: {
      title: "Data & <span class=\"highlighted\">Artificial Intelligence</span> Diagnostic",
      description: "This questionnaire aims to better understand your organization, your Data & AI challenges and to offer you appropriate support.",
      duration: "Estimated time: 3 to 5 minutes",
      successMessage: "Your diagnostic has been successfully sent! We will contact you as soon as possible.",
      errorMessage: "An error occurred. Please try again later.",
      stepTitles: ["Contact", "Company Profile", "Current Data Situation", "Needs & Priorities", "Desired Support"],
      stepLabel: "Step {step} — {title}",
      previous: "Previous",
      next: "Next",
      submit: "Send diagnostic",
      countries: ["South Africa", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Comoros", "Congo", "Ivory Coast", "Djibouti", "Egypt", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Equatorial Guinea", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Morocco", "Mauritius", "Mauritania", "Mozambique", "Namibia", "Niger", "Nigeria", "Uganda", "DRC Congo", "Rwanda", "São Tomé & Príncipe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "Sudan", "South Sudan", "Tanzania", "Chad", "Togo", "Tunisia", "Zambia", "Zimbabwe", "International"],
      step1: {
        nameLabel: "First & Last Name",
        namePlaceholder: "Your full name",
        functionLabel: "Position",
        functionOptions: ["Executive", "Manager", "IT / Data Manager", "Other"],
        emailLabel: "Professional Email",
        emailPlaceholder: "your@email.com",
        phoneLabel: "Phone",
        phoneOptional: "(optional)",
        phonePlaceholder: "Your number",
        consent: "I agree to be contacted by Aifrica"
      },
      step2: {
        orgTypeLabel: "Organization Type",
        orgTypeOptions: ["SME", "Startup", "Large Enterprise", "Institution / Public Organization"],
        secteurLabel: "Business Sector",
        secteurOptions: ["Finance / Insurance", "Telecoms", "Industry / Energy", "Commerce / Distribution", "Logistics / Transport", "Health", "Agriculture", "Other"],
        tailleLabel: "Organization Size",
        tailleOptions: ["1–10 employees", "11–50", "51–200", "200+"],
        paysLabel: "Main Country of Activity",
        paysPlaceholder: "-- Select a country --"
      },
      step3: {
        gestionDataLabel: "How do you manage your data today?",
        gestionDataOptions: ["Mainly on Excel / Google Sheets", "Several disconnected tools", "BI tools (Power BI, Tableau, etc.)", "Structured data systems (databases, cloud, etc.)", "I don't know / Not yet structured"],
        fiabiliteLabel: "Are your data reliable and usable?",
        fiabiliteOptions: ["Yes, for the most part", "Partially", "No", "I don't know"],
        equipeDataLabel: "Do you have a dedicated data / IT team?",
        equipeDataOptions: ["Yes (internal)", "Yes (service providers)", "No", "Currently being structured"]
      },
      step4: {
        enjeuxLabel: "What are your main challenges today?",
        enjeuxOptions: ["Better decision making", "Cost optimization", "Customer relationship improvement", "Forecasting (sales, demand, risks...)", "Process automation", "Data structuring", "Innovation / competitive advantage"],
        enjeuxMultiple: "(multiple choice)",
        envisageIALabel: "Have you already considered AI in your organization?",
        envisageIAOptions: ["Yes, already in progress", "Yes, under study", "No, but interested", "No, not ready yet"],
        objectifLabel: "What is your main objective with data / AI?",
        objectifOptional: "(optional)",
        objectifPlaceholder: 'Ex: "Better understand our customers"'
      },
      step5: {
        accompagnementLabel: "What type of support are you looking for?",
        accompagnementOptions: ["Data & AI Diagnostic", "Strategic Consulting", "Training / Acculturation", "AI Solution Development", "Global Project Management", "I don't know yet"],
        horizonLabel: "Time Horizon",
        horizonOptions: ["Immediate (0–3 months)", "Short term (3–6 months)", "Medium term (6–12 months)", "Exploration / reflection"]
      },
      errors: {
        name: "Name is required",
        fonction: "Position is required",
        email: "Email is required",
        emailInvalid: "Email is not valid",
        consent: "Please accept to be contacted",
        orgType: "Organization type is required",
        secteur: "Sector is required",
        taille: "Size is required",
        pays: "Country is required",
        gestionData: "This field is required",
        fiabilite: "This field is required",
        equipeData: "This field is required",
        enjeux: "Select at least one challenge",
        envisageIA: "This field is required",
        accompagnement: "This field is required",
        horizon: "This field is required"
      }
    },
    plateformeAifrica: {
      header: {
        title: "AIFRICA Platform",
        subtitle: "Artificial intelligence at the service of African innovation. Transform your ideas into intelligent solutions with our cutting-edge AI platform.",
        start_free: "Start for Free",
        see_demo: "See Demo"
      },
      intro: {
        badge: "About AIFRICA",
        title: "Data and AI at the service of",
        title_highlight: "transformation",
        title_end: "of African companies",
        paragraph1: "Africa is entering a new economic era. Driven by dynamic youth, accelerated urbanization and expanding connectivity, companies on the continent face immense opportunities—but also major challenges: competitiveness, operational efficiency, decision-making in a constantly changing environment.",
        context: "It's in this context that AIFRICA was born.",
        paragraph2: "AIFRICA is a company specializing in supporting African organizations towards digital transformation through Data and Artificial Intelligence. Our mission is simple: to put these technologies at the service of the reality of African companies, for",
        paragraph2_highlight: "concrete, measurable and sustainable results",
        paragraph3: "Whether optimizing business processes, exploiting untapped data, automating low-value tasks, or building custom decision-making tools, AIFRICA provides structured support,",
        paragraph3_highlight: "from strategy to implementation",
        highlight_block: "We believe that Data and AI are not reserved for large global companies. They are today",
        highlight_block_strong: "accessible, adaptable",
        highlight_block_end: "and can become a powerful growth lever for any organization—whatever its size or sector of activity.",
        tagline: "AIFRICA is tomorrow's intelligence at the service of today's Africa.",
        pillars: {
          data: "Data",
          ia: "Artificial Intelligence",
          marche: "African Market",
          transformation: "Digital Transformation"
        }
      },
      solutions: {
        title: "Our AI Solutions",
        subtitle: "Discover our complete range of artificial intelligence solutions designed to meet the specific challenges of the African market.",
        items: {
          generative: {
            title: "Generative AI",
            description: "Create unique and personalized content with our cutting-edge generative AI models.",
            features: [
              "Multilingual text generation",
              "Image and design creation",
              "Advanced automatic translation",
              "Natural voice synthesis"
            ]
          },
          analyse: {
            title: "Data Analysis",
            description: "Transform your raw data into relevant insights to make informed decisions.",
            features: [
              "Predictive analysis",
              "Interactive visualization",
              "Automated reporting",
              "Anomaly detection"
            ]
          },
          agentique: {
            title: "Agentic AI",
            description: "Deploy autonomous intelligent agents to automate your business processes.",
            features: [
              "Conversational agents",
              "Intelligent automation",
              "Continuous learning",
              "Multi-platform integration"
            ]
          },
          personnalisation: {
            title: "Personalization",
            description: "Offer unique experiences to each user with adaptive AI.",
            features: [
              "Personalized recommendations",
              "Dynamic segmentation",
              "Real-time optimization",
              "Intelligent user profiles"
            ]
          },
          securite: {
            title: "AI Security",
            description: "Protect your systems with our AI-based security solutions.",
            features: [
              "Threat detection",
              "Behavioral analysis",
              "Predictive security",
              "Automatic response"
            ]
          },
          optimisation: {
            title: "Optimization",
            description: "Maximize the efficiency of your operations with AI optimization.",
            features: [
              "Resource optimization",
              "Intelligent planning",
              "Cost reduction",
              "Continuous improvement"
            ]
          }
        }
      },
      developpement: {
        title: "How It Works",
        subtitle: "Our methodological approach guarantees the success of your AI transformation. Each step is designed to maximize value and minimize risks.",
        steps: [
          {
            number: "1",
            title: "Analysis & Consulting",
            description: "We study your specific needs and develop a customized AI strategy for your company. Our team of experts analyzes your current processes and identifies optimization opportunities."
          },
          {
            number: "2",
            title: "Development",
            description: "Our engineers develop customized AI solutions using the latest technologies. We follow an agile methodology to guarantee fast and iterative delivery."
          },
          {
            number: "3",
            title: "Integration",
            description: "We seamlessly integrate our AI solutions into your existing technological ecosystem. Our teams ensure a smooth transition without disrupting your operations."
          },
          {
            number: "4",
            title: "Training",
            description: "We train your teams to use the new AI solutions to maximize their adoption and efficiency. Personalized sessions are organized according to your needs."
          },
          {
            number: "5",
            title: "Continuous Support",
            description: "Our team remains at your disposal to ensure maintenance, updates and continuous improvement of your AI solutions. 24/7 support is available for our premium clients."
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Do you have questions about our platform? Find the answers below or contact our team for more information.",
        items: [
          {
            question: "What is the AIFRICA platform?",
            answer: "AIFRICA is a complete artificial intelligence platform designed specifically for the African market. It offers customized AI solutions to help companies automate their processes, analyze their data and make smarter decisions."
          },
          {
            question: "What types of companies can use AIFRICA?",
            answer: "Our platform adapts to all sectors: finance, health, education, agriculture, commerce, logistics and many others. Whether you are a startup, an SME or a large company, we have solutions adapted to your needs."
          },
          {
            question: "How to start with AIFRICA?",
            answer: "The process is simple: contact us for a free consultation, our team analyzes your needs, we offer you a personalized solution, and after validation, we proceed with implementation. You can start with a pilot project to test our solutions."
          },
          {
            question: "What technologies are used?",
            answer: "We use the most advanced AI technologies: machine learning, deep learning, NLP, computer vision, and generative AI. Our platform is based on modern and secure cloud architectures, guaranteeing performance and scalability."
          },
          {
            question: "Are my data secure?",
            answer: "Absolutely. Security is our absolute priority. Your data is end-to-end encrypted, stored in secure data centers, and we respect all data protection regulations, including GDPR."
          },
          {
            question: "What is the cost of AIFRICA solutions?",
            answer: "Our rates are flexible and adapted to your budget. We offer different models: monthly subscription, pay-per-use, or custom projects. Contact us to get a personalized quote according to your specific needs."
          },
          {
            question: "Do you offer team training?",
            answer: "Yes, we offer complete training programs for your teams. From AI awareness to technical expertise, our certified trainers ensure that your staff perfectly masters our solutions."
          },
          {
            question: "What is the implementation time?",
            answer: "The time varies depending on the complexity of your project. For our standard solutions, implementation can take 2 to 4 weeks. For custom projects, the average time is 2 to 3 months. We provide you with a detailed schedule during the design phase."
          }
        ]
      },
      cta: {
        title: "Ready to Transform Your Company with AI?",
        description: "Join hundreds of African companies already using AIFRICA to accelerate their growth and innovate in their sector.",
        button: "Request a Free Demo"
      },
      page: {
        navbar: {
          solutions: "Solutions",
          processus: "Process", 
          faq: "FAQ",
          contact: "Contact",
          demo: "Free Demo"
        },
        hero: {
          tag: "AI Platform · Africa",
          title: "Artificial",
          title_line2: "Intelligence at",
          title_line3: "Service of",
          title_highlight: "Africa",
          description: "Transform your operations, accelerate your growth and make informed decisions thanks to our AI solutions designed for the African market.",
          start_free: "Start for Free",
          see_demo: "See Demo",
          discover: "Discover"
        },
        stats: [
          { num: "500+", label: "Companies supported" },
          { num: "15+", label: "African countries covered" },
          { num: "98%", label: "Customer satisfaction" },
          { num: "3×", label: "Average ROI observed" }
        ],
        ticker: ["Generative AI", "Data Analysis", "Agentic AI", "AI Security", "Personalization", "Optimization", "Africa & Innovation", "Digital Transformation"],
        mission: {
          tag: "Our Mission",
          title: "Data and AI at the service of African companies",
          paragraph1: "Africa is entering a new economic era. Driven by dynamic youth, accelerated urbanization and expanding connectivity, companies on the continent face immense opportunities—but also major challenges.",
          paragraph2: "AIFRICA specializes in supporting African organizations towards digital transformation through Data and Artificial Intelligence. Our mission is to put these technologies at the service of the reality of African companies, for concrete, measurable and sustainable results.",
          paragraph3: "We believe that Data and AI are not reserved for large global companies. They are accessible, adaptable, and can become a powerful growth lever for any organization—whatever its size or sector of activity.",
          quote: "AIFRICA is tomorrow's intelligence at the service of today's Africa.",
          why_title: "Why AIFRICA?",
          features: [
            ["✓", "Solutions adapted to African realities", "Local context, available infrastructure, spoken languages"],
            ["✓", "Team of certified AI & Data experts", "Senior data scientists and experienced ML engineers"],
            ["✓", "End-to-end support", "From consulting to production deployment, we are there"],
            ["✓", "Measurable and guaranteed ROI", "Quantified results from the first 90 days"],
            ["✓", "Security and compliance", "Data hosted locally, GDPR compliance guaranteed"]
          ]
        },
        solutions_page: {
          tag: "Our Solutions",
          title: "A complete suite of AI solutions",
          description: "Cutting-edge technologies adapted to the specific challenges of the African market, deployed with expertise.",
          items: [
            {
              title: "Generative AI",
              desc: "Create unique and personalized content with generative AI models adapted to the African context.",
              feats: ["Multilingual text generation", "Image and design creation", "Advanced automatic translation", "Natural voice synthesis"]
            },
            {
              title: "Data Analysis",
              desc: "Transform your raw data into relevant insights to make informed decisions.",
              feats: ["Predictive analysis", "Interactive visualization", "Automated reporting", "Anomaly detection"]
            },
            {
              title: "Agentic AI",
              desc: "Deploy autonomous intelligent agents to automate your critical business processes.",
              feats: ["Conversational agents", "Intelligent automation", "Continuous learning", "Multi-platform integration"]
            },
            {
              title: "AI Security",
              desc: "Protect your systems and your data with our AI-based security solutions.",
              feats: ["Threat detection", "Behavioral analysis", "Predictive security", "Automatic response"]
            },
            {
              title: "Personalization",
              desc: "Offer unique experiences to each user with real-time adaptive AI.",
              feats: ["Personalized recommendations", "Dynamic segmentation", "Real-time optimization", "Intelligent profiles"]
            },
            {
              title: "Optimization",
              desc: "Maximize the efficiency of your operations and reduce costs with AI optimization.",
              feats: ["Resource optimization", "Intelligent planning", "Cost reduction", "Continuous improvement"]
            }
          ]
        },
        process: {
          tag: "Our Process",
          title: "How we work together",
          description: "A proven methodology, designed to minimize risks and maximize value at each step of your AI transformation. Guaranteed results from the first 90 days.",
          steps: [
            { n: "01", title: "Analysis & Consulting", desc: "We study your needs and develop a customized AI strategy. Our team analyzes your current processes and identifies the most impactful optimization opportunities." },
            { n: "02", title: "Development", desc: "Our engineers develop customized AI solutions using the technologies best suited to your context, with an agile methodology guaranteeing rapid deliveries." },
            { n: "03", title: "Integration", desc: "We integrate our solutions into your existing technological ecosystem transparently, without disrupting your current operations." },
            { n: "04", title: "Team Training", desc: "We train your employees to use the new solutions to maximize adoption and efficiency. Personalized sessions are organized according to your needs." },
            { n: "05", title: "Continuous Support", desc: "Our team remains available for maintenance, updates and continuous improvement. Responsive support is available for all our clients." }
          ]
        },
        faq_page: {
          tag: "FAQ",
          title: "Frequently Asked Questions",
          description: "Can't find the answer to your question? Our team is available Monday to Friday to support you.",
          contact: "Contact an expert",
          items: [
            { q: "What is the AIFRICA platform?", a: "AIFRICA is a complete artificial intelligence platform designed specifically for the African market. It offers customized AI solutions to automate processes, analyze data and make smarter decisions." },
            { q: "What types of companies can use AIFRICA?", a: "Our platform adapts to all sectors: finance, health, education, agriculture, commerce, logistics and many others. Whether you are a startup, an SME or a large company, we have solutions adapted to your needs." },
            { q: "How to start with AIFRICA?", a: "The process is simple: contact us for a free consultation, our team analyzes your needs, we offer you a personalized solution, and after validation, we proceed with implementation." },
            { q: "Are my data secure?", a: "Absolutely. Security is our priority. Your data is end-to-end encrypted, stored in secure data centers, and we respect all data protection regulations, including GDPR." },
            { q: "What is the cost of AIFRICA solutions?", a: "Our rates are flexible and adapted to your budget. We offer different models: monthly subscription, pay-per-use, or custom projects. Contact us for a personalized quote." },
            { q: "What is the implementation time?", a: "The time varies depending on the complexity of the project. For standard solutions, implementation takes 2 to 4 weeks. For custom projects, the average time is 2 to 3 months." },
            { q: "Do you offer team training?", a: "Yes, we offer complete training programs for your teams. From AI awareness to technical expertise, our trainers ensure that your staff perfectly masters our solutions." },
            { q: "In which countries do you operate?", a: "We operate in more than 15 African countries: Ivory Coast, Senegal, Cameroon, Morocco, Kenya, Nigeria, Ghana, Madagascar and many others. We have local experts in each region." }
          ]
        },
        cta_page: {
          tag: "Take Action",
          title: "Ready to transform your company",
          title_highlight: "with Artificial Intelligence",
          title_end: "?",
          description: "Join hundreds of African companies already using AIFRICA to accelerate their growth, optimize their operations and innovate in their sector.",
          main_button: "Request a Free Demo",
          ghost_button: "Talk to an Expert"
        },
        footer: {
          copyright: "© 2026 AIFRICA · Tomorrow's intelligence at the service of today's Africa"
        }
      }
    },
    accompagnementIA: {
      hero: {
        badge: "AI Support",
        title: "Adopt AI with",
        title_highlight: "method & security",
        quote: "On AI, Africa can no longer afford to waste time.",
        description: "Aifrica supports you to integrate AI into your business, processes and strategy — in a structured, efficient and secure way.",
        cta: "Start the support"
      },
      why: {
        label: "Why choose us",
        title: "AI support is essential",
        subtitle: "Most companies are interested in AI, but few succeed in industrializing it or creating concrete results. This is where Aifrica really makes a difference.",
        features: [
          "Identify the right AI use cases",
          "Demystify AI and simplify technology choices",
          "Raise awareness of risks, compliance and ethics",
          "Select AI solutions adapted to your needs",
          "Deploy a methodology guaranteeing rapid ROI"
        ],
        stat: {
          number: "100%",
          label: "Strategic support",
          description: "An AI integration designed for your business objectives, with continuous follow-up and measurable results at every step."
        }
      },
      axes: {
        label: "Our approach",
        title: "Our support axes",
        subtitle: "Aifrica implements a structured, secure approach adapted to your challenges.",
        items: [
          {
            title: "Identify AI use cases",
            description: "Business analysis, process mapping and selection of the most relevant use cases for your company."
          },
          {
            title: "Demystify AI",
            description: "Simplifying AI jargon and helping to understand technologies useful for your needs."
          },
          {
            title: "Risk awareness",
            description: "Cybersecurity, legal compliance, ethics, risk management and acculturation of your teams."
          },
          {
            title: "Choose the right AI solution",
            description: "Rigorous selection of technologies adapted to your needs and your application environment."
          },
          {
            title: "AI methodology",
            description: "Structured approach ensuring controlled deployment and measurable return on investment."
          },
          {
            title: "AI project acceleration",
            description: "Overcome internal barriers, deploy quickly, get concrete results thanks to our AI experts."
          }
        ]
      },
      steps: {
        label: "Process",
        title: "Secure AI adoption",
        subtitle: "Responsible, controlled and secure AI: an imperative for all African companies.",
        items: [
          {
            number: "1",
            title: "Data protection",
            description: "Implementation of robust protocols and reinforced regulatory compliance."
          },
          {
            number: "2",
            title: "AI risk audit",
            description: "Detection of biases, ethical risk analysis and system security."
          },
          {
            number: "3",
            title: "Controlled deployment",
            description: "Integration into your business with continuous supervision and regular follow-up."
          },
          {
            number: "4",
            title: "Secure adoption",
            description: "Complete support to avoid errors, cyber-risks and bad automated decisions."
          }
        ]
      },
      faq: {
        label: "FAQ",
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about our AI support",
        items: [
          {
            question: "Why is AI support important?",
            answer: "Most companies struggle to industrialize AI or align their projects with their business challenges. Aifrica helps you structure, secure and accelerate your initiatives."
          },
          {
            question: "How to identify the right AI use cases?",
            answer: "We analyze your processes, data and objectives to detect really relevant use cases for your company."
          },
          {
            question: "How does Aifrica secure AI adoption?",
            answer: "We implement security protocols, compliance mechanisms, as well as risk audits to guarantee controlled and ethical AI."
          },
          {
            question: "How does Aifrica help demystify AI?",
            answer: "We simplify concepts, clarify technology choices and support your teams to make AI accessible and understandable."
          },
          {
            question: "Does AI support guarantee ROI?",
            answer: "Yes. Our approach aims to structure your projects to maximize results, reduce costs and accelerate the value generated by AI."
          }
        ]
      },
      cta: {
        title: "Ready to accelerate your",
        title_highlight: "AI transformation",
        title_end: "?",
        description: "Join African companies that trust Aifrica to structure, secure and maximize their adoption of artificial intelligence.",
        button: "Contact us"
      }
    },
    dataIntelligence: {
      hero: {
        badge: "Data Intelligence",
        title: "Enhance your data with",
        title_highlight: "intelligence",
        quote: "Data is the oil of the 21st century, but intelligence is the refining.",
        description: "Transform your data into competitive advantage. Aifrica supports you in implementing a complete data strategy, from collection to industrialization.",
        cta: "Start the transformation"
      },
      services: {
        label: "Our services",
        title: "A complete approach to Data",
        subtitle: "From collection to industrialization, we cover the entire value chain of your data.",
        items: [
          {
            title: "Collection & Storage",
            description: "Robust and secure data infrastructure to collect, store and manage your data volumes."
          },
          {
            title: "Analysis & Visualization",
            description: "Interactive dashboards and analysis tools to transform your data into actionable insights."
          },
          {
            title: "Data Mining",
            description: "Advanced exploration of your data to discover hidden trends and opportunities."
          },
          {
            title: "Machine Learning",
            description: "Predictive models and learning algorithms to automate your decision-making processes."
          },
          {
            title: "Governance & Security",
            description: "GDPR compliance, anonymization and data protection to guarantee trust."
          },
          {
            title: "Industrialization",
            description: "Scale deployment and monitoring to ensure performance and reliability."
          }
        ]
      },
      benefits: {
        label: "Benefits",
        title: "Why Data Intelligence?",
        subtitle: "Concrete advantages for your African company.",
        items: [
          {
            title: "Operational Performance",
            description: "Optimize your processes and reduce costs through predictive analysis."
          },
          {
            title: "Decision Making",
            description: "Base your strategies on reliable data and accurate predictions."
          },
          {
            title: "Competitive Advantage",
            description: "Anticipate market trends and outperform your competitors."
          }
        ]
      },
      process: {
        label: "Process",
        title: "Our methodology",
        subtitle: "A structured approach to guarantee the success of your data transformation.",
        items: [
          {
            number: "1",
            title: "Data Audit",
            description: "Complete assessment of your data assets and infrastructure."
          },
          {
            number: "2",
            title: "Strategy",
            description: "Definition of a data roadmap aligned with your business objectives."
          },
          {
            number: "3",
            title: "Deployment",
            description: "Implementation of analysis and machine learning solutions."
          },
          {
            number: "4",
            title: "Optimization",
            description: "Continuous monitoring and iterative improvement of your performance."
          }
        ]
      },
      faq: {
        label: "FAQ",
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about Data Intelligence",
        items: [
          {
            question: "What is Data Intelligence?",
            answer: "Data Intelligence is the set of processes and technologies that enable transforming raw data into relevant information to make better business decisions."
          },
          {
            question: "How to guarantee the security of my data?",
            answer: "We implement advanced security protocols, respect GDPR standards and ensure total confidentiality of your information."
          },
          {
            question: "What ROI to expect from Data Intelligence?",
            answer: "Our clients observe on average a 30% reduction in operational costs and a 25% increase in their revenue thanks to data insights."
          },
          {
            question: "Do we need technical skills in-house?",
            answer: "We support your teams and ensure skills development. A minimal data team is sufficient to start."
          }
        ]
      },
      cta: {
        title: "Ready to transform your",
        title_highlight: "data into value",
        title_end: "?",
        description: "Join African companies accelerating their growth through their data intelligence.",
        button: "Contact us"
      }
    },
    footer: {
      newsletter: {
        title: "Stay informed about our latest innovations",
        subtitle: "Receive our news, case studies and AI tips directly in your inbox",
        placeholder: "Your email address",
        button: "Subscribe"
      },
      about: {
        title: "Aifrica",
        description: "Artificial intelligence platform dedicated to supporting African companies in their digital transformation. We combine generative AI, data analysis and AI agents to automate, optimize and innovate."
      },
      platform: {
        title: "Platform",
        links: [
          { to: "/pateforme-aifrica", label: "Aifrica Platform" },
          { to: "/accompagnement-IA", label: "AI Support" },
          { to: "/dataIntelligence", label: "Data Intelligence" },
          { to: "/IA-Générative", label: "Generative AI" }
        ]
      },
      services: {
        title: "Services",
        links: [
          { to: "/diagnosticDataIA", label: "Data & AI Diagnostic" },
          { to: "/consultingIaData", label: "AI & Data Consulting" },
          { to: "/acculturationIA", label: "AI Acculturation" },
          { to: "/solutionIASurMesure", label: "Advanced AI Solution" }
        ]
      },
      contact: {
        title: "Contact",
        emailLabel: "Email",
        email: "contact@aifrica.com",
        locationLabel: "Location",
        location: "Cyber City Ebène, Mauritius"
      },
      legal: {
        copyright: "© {year} Aifrica. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        cookies: "Cookies"
      }
    },
    consultingIAData: {
      hero: {
        tag: "Strategic expertise – Roadmap – Governance",
        title: "Build an AI strategy ",
        title_highlight: "aligned with your business objectives",
        description: "Artificial intelligence is not a technology project. It's a strategic transformation. Aifrica supports you in defining a realistic, prioritized Data & AI roadmap adapted to your African context.",
        request_consulting: "Schedule a strategic discussion",
        discover_approach: "Discover the approach",
        mission_title: "Our mission",
        steps: [
          { n: "1", t: "Business analysis", d: "Understand your strategic priorities" },
          { n: "2", t: "Use cases", d: "Identify high-impact opportunities" },
          { n: "3", t: "AI roadmap", d: "Progressive and realistic roadmap" },
          { n: "4", t: "Governance", d: "Structure for sustainability" }
        ],
        duration_label: "Estimated duration",
        duration_value: "2 – 6 weeks"
      },
      problem: {
        eyebrow: "THE PROBLEM",
        title: "Many organizations ",
        title_highlight: "multiply mistakes",
        subtitle: "Result: costly projects, low adoption, limited impact.",
        items: [
          { ico: "🚀", t: "AI projects without global vision", sub: "Isolated initiatives without strategic coherence." },
          { ico: "📈", t: "Multiplication without measurable ROI", sub: "Investments not followed by performance indicators." },
          { ico: "🎯", t: "Poor prioritization", sub: "Use cases chosen without business impact analysis." },
          { ico: "💡", t: "Innovation/value confusion", sub: "Technology adopted for itself, not for the result." },
          { ico: "🏗️", t: "Underestimated governance", sub: "Organization and culture change neglected." }
        ],
        mission_title: "OUR MISSION",
        mission_description: "Transform your <strong>AI ambition</strong> into a <strong>clear, structured and executable</strong> strategy. We translate your business objectives into concrete, prioritized and measurable Data & AI initiatives.",
        mission_tags: ["Strategy", "Execution", "Measurement", "Sustainability"]
      },
      approach: {
        eyebrow: "OUR STRATEGIC APPROACH",
        title: "A ",
        title_highlight: "proven",
        title_end: " method in 4 steps",
        subtitle: "From business analysis to governance, we build your AI strategy step by step.",
        cards: [
          { ico: "🎯", n: "01", title: "Business objectives analysis", items: ["Strategic priorities", "Operational irritants", "Financial issues", "Regulatory constraints"] },
          { ico: "🔍", n: "02", title: "Use case selection", items: ["Potential business impact", "Technical feasibility", "Data availability", "Maturity level"] },
          { ico: "🗺️", n: "03", title: "Roadmap construction", items: ["Identified quick wins", "Structuring projects", "Clear milestones", "Estimated budget"] },
          { ico: "🏗️", n: "04", title: "Governance & organization", items: ["Roles & responsibilities", "Data governance", "Decision-making processes", "Change management"] }
        ]
      },
      deliverables: {
        eyebrow: "WHAT YOU GET",
        title: "Deliverables that are ",
        title_highlight: "concrete",
        title_end: " and actionable",
        subtitle: "Our intervention translates into documents and tools that you can use immediately.",
        items: [
          { ico: "🗺️", txt: "Prioritized AI roadmap (3–12 months)" },
          { ico: "📋", txt: "Complete strategic document" },
          { ico: "📝", txt: "Detailed use case backlog" },
          { ico: "🏛️", txt: "Governance model" },
          { ico: "📊", txt: "Measurable success indicators" },
          { ico: "⚡", txt: "Realistic execution plan" }
        ],
        count_label: "Strategic deliverables"
      },
      caseStudies: {
        eyebrow: "AFRICAN USE CASES",
        title: "Concrete examples of our approach",
        title_highlight: "",
        title_end: "",
        subtitle: "Discover how we apply our methodology to real African contexts.",
        telecom: {
          title: "Telecom – Churn reduction",
          problem: "Problem: High churn rate, saturated customer service.",
          duration: "9 months",
          approach: {
            tag: "Strategic approach",
            items: [
              "Prioritization of a churn prediction model",
              "Partial support automation",
              "Implementation of decision-making reporting"
            ]
          },
          roadmap: {
            tag: "Progressive roadmap",
            items: [
              "Phase 1: Data quality & baseline",
              "Phase 2: Simple predictive model",
              "Phase 3: Industrialization & scaling"
            ]
          },
          organization: {
            tag: "Organization",
            items: [
              "Dedicated data team",
              "Algorithm governance",
              "Business team training"
            ]
          },
          results: {
            tag: "Expected results",
            items: [
              "−30% churn rate",
              "−40% support costs",
              "+25% customer satisfaction"
            ]
          }
        },
        administration: {
          title: "Public administration",
          problem: "Problem: Difficulty analyzing citizen requests.",
          duration: "6 months",
          approach: {
            tag: "Approach",
            items: [
              "Data structuring",
              "Implementation of indicators",
              "Progressive deployment of automations"
            ]
          },
          prioritization: {
            tag: "Prioritization",
            items: [
              "Most frequent requests",
              "Identified bottleneck",
              "Quick wins on simple processes"
            ]
          },
          governance: {
            tag: "Governance",
            items: [
              "Inter-department steering committee",
              "Single data repository",
              "Continuous agent training"
            ]
          },
          impact: {
            tag: "Impact",
            items: [
              "−50% processing times",
              "+60% performance visibility",
              "Better user satisfaction"
            ]
          }
        }
      },
      duration: {
        eyebrow: "ESTIMATED DURATION",
        title: "2 to 6 weeks according to ",
        title_highlight: "scope",
        title_end: " and availability",
        subtitle: "A modular intervention that adapts to your context and constraints.",
        express: {
          ico: "⚡",
          title: "Express Version",
          description: "For organizations that already have Data & AI maturity and need an external perspective to validate their strategy.",
          items: [
            "2 weeks of intensive work",
            "Focus on priority quick wins",
            "Deliverable: condensed roadmap"
          ]
        },
        complete: {
          ico: "🏗️",
          title: "Complete Version",
          description: "For organizations starting from scratch or wanting a deep transformation with long-term support.",
          items: [
            "4-6 weeks with co-built workshops",
            "In-depth analysis and governance",
            "Complete deliverables + 3-month follow-up"
          ]
        }
      },
      targets: {
        eyebrow: "FOR WHOM?",
        title: "We support ",
        title_highlight: "all types",
        title_end: " of organizations",
        subtitle: "Our approach adapts to your size, sector and Data & AI maturity.",
        items: [
          { ico: "🏢", label: "Large African companies" },
          { ico: "🚀", label: "Growing SMEs" },
          { ico: "🏛️", label: "Administrations" },
          { ico: "🔗", label: "Multi-team organizations" },
          { ico: "🌍", label: "Innovative ecosystems" }
        ]
      },
      why: {
        eyebrow: "WHY AIFRICA?",
        title: "African expertise at the service of your strategy",
        subtitle: "We combine technical expertise and understanding of local realities to guarantee your success.",
        items: [
          { bold: "Data & AI expertise", rest: " — dual technical and business competence." },
          { bold: "Understanding of African realities", rest: " — adapted to local contexts." },
          { bold: "Strategic vision + operational execution", rest: " — from consulting to implementation." },
          { bold: "Progressive and pragmatic approach", rest: " — without brutal revolution." },
          { bold: "Focus on measurable ROI", rest: " — each initiative evaluated on its business value." }
        ],
        brand_wordmark: "AIF",
        brand_wordmark_end: "RICA",
        brand_sub: "DATA & AI EXPERTISE",
        values: ["Technical expertise", "Business vision", "African context", "Measurable results"]
      },
      cta: {
        eyebrow: "READY TO ACT?",
        title: "Give a ",
        title_highlight: "clear",
        title_end: " direction to your ",
        title_italic: "AI transformation",
        description: "Transform your ambition into a concrete strategy with our Data & AI expertise adapted to the African context.",
        button: "Discuss your Data & AI strategy"
      },
      footer: {
        logo: "AIF",
        logo_end: "RICA",
        copyright: "© 2024 Aifrica - Data & AI Expertise for Africa"
      }
    },
    acculturationIA: {
      hero: {
        tag: "AI ORCHESTRATION",
        title: "Secure and steer your AI projects ",
        title_highlight: "end to end",
        description: "An AI project doesn't succeed just through technology. It succeeds through effective coordination, clear governance, and constant strategic alignment. Aifrica orchestrates your Data & AI projects to guarantee impact, adoption, and measurable results.",
        request_discussion: "Discuss your AI project",
        discover_method: "Discover our method",
        role_title: "OUR ROLE",
        steps: [
          { n: "🎯", t: "Business alignment", d: "Objectives & strategy" },
          { n: "👥", t: "Team coordination", d: "Technical & operational" },
          { n: "🤝", t: "External partners", d: "Integration & synergy" },
          { n: "⚖️", t: "Compliance", d: "Regulatory & ethical" }
        ],
        approach_label: "Approach",
        approach_value: "Orchestra conductor"
      },
      problem: {
        eyebrow: "THE PROBLEM",
        title: "Many AI projects ",
        title_highlight: "fail due to",
        subtitle: "AI requires structured orchestration to succeed.",
        items: [
          { ico: "🔄", t: "Lack of coordination", sub: "Between business, IT and data, communication silos." },
          { ico: "🎯", t: "Poorly defined objectives", sub: "Unclear vision, misaligned expectations, confused priorities." },
          { ico: "⏰", t: "Uncontrolled deadlines", sub: "Unrealistic planning, poorly managed dependencies." },
          { ico: "🏛️", t: "Absence of governance", sub: "Unstructured decisions, unclear responsibilities." },
          { ico: "👥", t: "Low adoption", sub: "Unengaged teams, resistance to change." },
          { ico: "🖼️", t: "Showcase projects", sub: "Technology for technology's sake, without business value." }
        ],
        role_title: "OUR ROLE",
        role_description: "Aifrica acts as a <strong>strategic orchestra conductor</strong>. We align:",
        role_aligns: [
          "Business objectives",
          "Technical teams",
          "External partners",
          "Regulatory constraints",
          "Deadlines and budgets"
        ]
      },
      methodology: {
        eyebrow: "OUR METHODOLOGY",
        title: "A ",
        title_highlight: "structured",
        title_end: " orchestration in 5 phases",
        subtitle: "From initialization to capitalization, we guarantee the success of your AI projects.",
        steps: [
          { 
            n: "1", 
            title: "Strategic framing", 
            desc: "Project foundations",
            items: ["Definition of measurable objectives", "Scope clarification", "Stakeholder identification", "Definition of key indicators"]
          },
          { 
            n: "2", 
            title: "Governance & planning", 
            desc: "Organizational structure",
            items: ["RACI (roles & responsibilities)", "Detailed planning", "Milestones & deliverables", "Dependency management"]
          },
          { 
            n: "3", 
            title: "Operational coordination", 
            desc: "Day-to-day steering",
            items: ["Steering meetings", "Progress monitoring", "Risk management", "Strategic arbitration"]
          },
          { 
            n: "4", 
            title: "Change management", 
            desc: "Adoption and support",
            items: ["Internal communication", "Team training", "Progressive adoption", "Continuous strategic alignment"]
          },
          { 
            n: "5", 
            title: "Reporting & capitalization", 
            desc: "Measurement and improvement",
            items: ["Executive reporting", "Performance synthesis", "Experience feedback", "Continuous improvement plan"]
          }
        ]
      },
      deliverables: {
        eyebrow: "WHAT YOU GET",
        title: "Measurable ",
        title_highlight: "guarantees",
        title_end: " of success",
        subtitle: "Our orchestration ensures complete mastery of your AI projects.",
        items: [
          { ico: "🏛️", txt: "Structured governance" },
          { ico: "🎯", txt: "Rigorous steering" },
          { ico: "🛡️", txt: "Mastered risk management" },
          { ico: "🔄", txt: "Constant strategic alignment" },
          { ico: "👥", txt: "Facilitated adoption" },
          { ico: "📊", txt: "Measurable results" }
        ],
        count_label: "Success guarantees"
      },
      caseStudies: {
        eyebrow: "AFRICAN USE CASES",
        title: "Complex orchestrations ",
        title_highlight: "successfully",
        title_end: " conducted",
        subtitle: "Discover how we coordinate multi-stakeholder projects in demanding contexts.",
        logistics: {
          title: "Multi-team logistics project",
          problem: "Context: Route optimization in a complex field environment.",
          type: "Coordination",
          challenge: {
            tag: "Challenge",
            description: "Coordination between operational, IT, data and management with divergent interests and strong field constraints."
          },
          orchestration: {
            tag: "Aifrica orchestration",
            items: [
              "Clear framing with all stakeholders",
              "Progressive sprint planning",
              "Weekly strategic reporting",
              "Active dependency management"
            ]
          },
          method: {
            tag: "Method",
            description: "Monthly steering committee, weekly technical meetings, transparent communication, proactive risk management."
          },
          results: {
            tag: "Expected result",
            items: [
              "Project delivered on time",
              "Facilitated field adoption",
              "ROI achieved at 6 months"
            ]
          }
        },
        telecom: {
          title: "Telecom project",
          problem: "Coordination between customer service, data team, IT and management.",
          type: "Churn reduction",
          objective: {
            tag: "Objective",
            description: "Customer churn reduction with precise KPI monitoring and adoption by sales and support teams."
          },
          coordination: {
            tag: "Coordination",
            items: [
              "Business-technical objectives alignment",
              "Existing system integration management",
              "Progressive team training",
              "Continuous performance monitoring"
            ]
          },
          governance: {
            tag: "Governance",
            description: "Clarified RACI, weekly monitoring committee, monthly executive reporting, anticipated change management."
          },
          impact: {
            tag: "Impact",
            items: [
              "−25% churn rate",
              "+40% customer satisfaction",
              "95% team adoption"
            ]
          }
        }
      },
      targets: {
        eyebrow: "FOR WHOM?",
        title: "We orchestrate ",
        title_highlight: "complex projects",
        title_end: " requiring coordination",
        subtitle: "Our expertise is particularly valuable for multi-stakeholder and strategic projects.",
        items: [
          { ico: "🏢", label: "Large companies" },
          { ico: "🏛️", label: "Administrations" },
          { ico: "🔗", label: "Multi-department organizations" },
          { ico: "🤝", label: "Multi-partner projects" }
        ]
      },
      why: {
        eyebrow: "WHY AIFRICA?",
        title: "African ",
        title_highlight: "orchestration",
        title_end: " that guarantees success",
        subtitle: "We combine strategic vision and field expertise to steer your AI projects toward excellence.",
        items: [
          { bold: "Strategic vision + technical expertise", rest: " — rare and valuable dual competence." },
          { bold: "Understanding of African realities", rest: " — adapted to local contexts." },
          { bold: "Structured and progressive approach", rest: " — proven and flexible method." },
          { bold: "Focus on adoption and impact", rest: " — technology at the service of business." },
          { bold: "Executive support", rest: " — support at the highest level." }
        ],
        brand_wordmark: "AIF",
        brand_wordmark_end: "RICA",
        brand_sub: "AI ORCHESTRATION",
        values: ["Strategic vision", "Expert coordination", "Guaranteed results", "Operational excellence"]
      },
      duration: {
        eyebrow: "DURATION",
        title: "Flexible ",
        title_highlight: "commitment",
        title_end: " according to your needs",
        subtitle: "From a few weeks to several months, we adapt to the complexity of your projects.",
        description: {
          ico: "⏱️",
          title: "Variable commitment according to project",
          content: "Our intervention duration adapts to the complexity, size and stakes of your AI project. From occasional support to long-term steering, we find the right balance between transferred expertise and preserved autonomy."
        }
      },
      cta: {
        eyebrow: "READY TO SUCCEED?",
        title: "Transform your AI projects into ",
        title_highlight: "operational success",
        title_end: " ",
        title_italic: "sustainable",
        description: "Trust your Data & AI projects to our orchestration expertise to guarantee impact, adoption, and measurable results.",
        button: "Plan a strategic discussion"
      },
      footer: {
        logo: "AIF",
        logo_end: "RICA",
        copyright: "© 2024 Aifrica - AI Orchestration for Africa"
      }
    },
    solutionIAAvancee: {
      hero: {
        tag: "Custom Development – AI Agents – Automation",
        title: "Develop AI solutions ",
        title_highlight: "adapted to your African reality",
        description: "We design and deploy custom intelligent solutions — AI agents, automations, predictive models and advanced dashboards — aligned with your business objectives and operational constraints.",
        request_feasibility: "Request a feasibility study",
        see_realizations: "See our achievements",
        approach_title: "OUR APPROACH",
        steps: [
          { n: "1", t: "Realistic architecture", d: "Adapted to your constraints" },
          { n: "2", t: "Existing integration", d: "With your current tools" },
          { n: "3", t: "Measurable adoption", d: "Training and support" },
          { n: "4", t: "Gradual scaling", d: "Progressive and secure" }
        ],
        approach_label: "Development",
        approach_value: "Custom"
      },
      problem: {
        eyebrow: "THE PROBLEM",
        title: "Many African organizations ",
        title_highlight: "face",
        subtitle: "AI can transform these challenges into competitive advantage — provided it's well-designed and adapted to the ground.",
        items: [
          { ico: "🔄", t: "Repetitive manual processes", sub: "Time-consuming tasks that slow down teams and create errors." },
          { ico: "📞", t: "Overloaded customer service", sub: "Overwhelmed teams, long response times, inconsistent quality." },
          { ico: "🎲", t: "Intuition-based decisions", sub: "Lack of objective data to drive the business." },
          { ico: "📊", t: "Lack of forecasting", sub: "Difficulty anticipating sales, inventory, churn and risks." },
          { ico: "🌍", t: "Unsuitable generic tools", sub: "Solutions designed for other contexts, ineffective locally." }
        ],
        approach_title: "OUR APPROACH",
        approach_description: "At Aifrica, we develop <strong>progressive, robust</strong> AI solutions <strong>adapted to African realities</strong>.",
        approach_checks: [
          "A realistic architecture",
          "Integration with your existing tools",
          "Measurable adoption by your teams",
          "Gradual scaling"
        ]
      },
      solutions: {
        eyebrow: "WHAT WE DEVELOP",
        title: "Intelligent ",
        title_highlight: "solutions",
        title_end: " for every need",
        subtitle: "From conversational agents to predictive dashboards, we cover the entire spectrum of applied AI.",
        items: [
          {
            ico: "🤖",
            title: "Custom AI Agents",
            items: [
              "Internal chatbots (HR support, procedures, FAQ)",
              "24/7 customer assistants",
              "RAG agents connected to your documents"
            ]
          },
          {
            ico: "⚡",
            title: "Smart Automation",
            items: [
              "Customer service automation",
              "Automated workflow (emails, CRM, follow-ups)",
              "Automatic document classification"
            ]
          },
          {
            ico: "📈",
            title: "Predictive Models",
            items: [
              "Sales forecasting",
              "Fraud detection",
              "Credit scoring",
              "Churn prediction"
            ]
          },
          {
            ico: "📊",
            title: "Advanced Decision Dashboards",
            items: [
              "Real-time KPIs",
              "Financial indicators",
              "Commercial performance",
              "Logistics optimization"
            ]
          }
        ]
      },
      methodology: {
        eyebrow: "OUR METHODOLOGY",
        title: "A ",
        title_highlight: "structured",
        title_end: " development in 6 steps",
        subtitle: "From idea to production, we support you at every phase of the project.",
        steps: [
          { n: "1", title: "Strategic framing", desc: "Business need, constraints, objectives" },
          { n: "2", title: "Design & Architecture", desc: "Data structure, tech, security" },
          { n: "3", title: "Development & Integration", desc: "Construction and system connections" },
          { n: "4", title: "Testing & Validation", desc: "Robustness, performance, edge cases" },
          { n: "5", title: "Training & Adoption", desc: "Skills and documentation" },
          { n: "6", title: "Monitoring & Optimization", desc: "KPIs and continuous improvement" }
        ]
      },
      caseStudies: {
        eyebrow: "AFRICAN USE CASES",
        title: "Concrete ",
        title_highlight: "applications",
        title_end: " that transform business",
        subtitle: "Discover how AI solves real problems in different African sectors.",
        ecommerce: {
          title: "E-commerce",
          problem: "24/7 chatbot to answer frequent questions and track orders.",
          type: "Customer service",
          problem_tag: "Problem",
          problem_description: "Overloaded support team, response time over 24h, customer loss on simple questions.",
          solution_tag: "Solution",
          solution_description: "Intelligent chatbot connected to catalog and order system, with human handover.",
          tech_tag: "Technologies",
          tech_description: "RAG on product documentation, e-commerce API integration, WhatsApp/Web interface.",
          results: {
            tag: "Results",
            items: [
              "−70% simple support tickets",
              "+40% customer satisfaction",
              "24/7 availability"
            ]
          }
        },
        logistics: {
          title: "Logistics",
          problem: "Route optimization to reduce fuel costs and delays.",
          type: "Optimization",
          problem_tag: "Problem",
          problem_description: "Unoptimized routes, high fuel costs, frequent delays, low fleet utilization.",
          solution_tag: "Solution",
          solution_description: "Multi-criteria optimization algorithm with local constraints (roads, traffic, zones).",
          tech_tag: "Technologies",
          tech_description: "GPS tracking, optimization algorithms, real-time dashboard, driver mobile app.",
          results: {
            tag: "Results",
            items: [
              "−25% fuel costs",
              "−30% delivery time",
              "+50% vehicle utilization"
            ]
          }
        },
        microfinance: {
          title: "Microfinance",
          problem: "Automation of simple scoring with human safeguards.",
          type: "Scoring",
          problem_tag: "Problem",
          problem_description: "Manual risk assessment, 2-3 day processing time, inconsistent criteria.",
          solution_tag: "Solution",
          solution_description: "ML scoring model with local variables, human validation interface, continuous learning.",
          tech_tag: "Technologies",
          tech_description: "Machine learning, customer data integration, validation dashboard, partner bank API.",
          results: {
            tag: "Results",
            items: [
              "−80% processing time",
              "+15% scoring accuracy",
              "20% risk reduction"
            ]
          }
        },
        distribution: {
          title: "Distribution",
          problem: "Sales forecasting to reduce stockouts during peak season.",
          type: "Forecasting",
          problem_tag: "Problem",
          problem_description: "Frequent stockouts in high season, overstocks other periods, lost opportunities.",
          solution_tag: "Solution",
          solution_description: "Predictive sales model per point of sale, restocking alerts, stock recommendations.",
          tech_tag: "Technologies",
          tech_description: "Time series forecasting, historical sales data, seasonal variables, stock dashboard.",
          results: {
            tag: "Results",
            items: [
              "−60% stockouts",
              "−25% overstocks",
              "+35% season sales"
            ]
          }
        }
      },
      targets: {
        eyebrow: "FOR WHOM?",
        title: "We serve ",
        title_highlight: "diverse sectors",
        title_end: " of the African economy",
        subtitle: "Our expertise covers the specific needs of each industry.",
        items: [
          { ico: "🚀", label: "Growing SMEs" },
          { ico: "🏢", label: "Large companies" },
          { ico: "📡", label: "Telecom actors" },
          { ico: "🛒", label: "Distribution & retail" },
          { ico: "💰", label: "Finance & microfinance" },
          { ico: "🛍️", label: "E-commerce" },
          { ico: "🚚", label: "Logistics" }
        ]
      },
      difference: {
        eyebrow: "OUR DIFFERENCE",
        title: "African ",
        title_highlight: "expertise",
        title_end: " that makes the difference",
        subtitle: "We combine technical excellence and understanding of local realities to guarantee your success.",
        items: [
          { bold: "Solutions adapted to local infrastructures", rest: " — designed for African technical realities." },
          { bold: "Progressive and realistic approach", rest: " — without brutal revolution, with controlled scaling." },
          { bold: "Focus on measurable ROI", rest: " — each solution evaluated on its concrete business value." },
          { bold: "Combined Data & AI expertise", rest: " — rare and valuable dual competence." },
          { bold: "Strategic + operational support", rest: " — from consulting to production deployment." }
        ],
        count_label: "Competitive advantages"
      },
      deliverables: {
        eyebrow: "WHAT YOU GET",
        title: "Complete ",
        title_highlight: "deliverables",
        title_end: " to sustain your success",
        subtitle: "Our intervention leaves you with an autonomous and evolutionary solution.",
        title: "Complete delivery package",
        items: [
          "A functional and documented AI solution",
          "A clear and maintainable architecture",
          "A 12-24 month evolution plan",
          "Measurable performance indicators",
          "A trained and autonomous team"
        ]
      },
      cta: {
        eyebrow: "READY TO TRANSFORM?",
        title: "Transform your ",
        title_highlight: "operations",
        title_end: " thanks to ",
        title_italic: "AI",
        description: "Develop your custom AI solution with our technical expertise and understanding of African realities.",
        button: "Plan a strategic discussion"
      },
      footer: {
        logo: "AIF",
        logo_end: "RICA",
        copyright: "© 2024 Aifrica - Advanced AI Solutions for Africa"
      }
    },
    afrique: {
      topBand: {
        label: "Special Feature · Africa & AI",
        date: "February 2026",
        back: "← Home"
      },
      hero: {
        tag: "Special Feature",
        title: "",
        title_highlight: "Africa",
        title_part1: "& Artificial",
        title_part2: "Intelligence",
        title_part3: "",
        subtitle: "Analysis, initiatives and insights on the digital transformation of the African continent — at the heart of global news.",
        stats: {
          articles: "Articles",
          countries: "Countries",
          news: "News"
        },
        featured: {
          tag: "⭐ Featured",
          read: "Read article"
        }
      },
      ticker: {
        items: [
          "Artificial Intelligence", "African Innovation", "Digital Sovereignty",
          "Talent & Training", "AI Infrastructure", "Strategic Partnerships", "Digital Transformation"
        ]
      },
      body: {
        sectionLabel: "News",
        sectionTitle: "Latest analysis",
        sectionCount: "articles"
      },
      article: {
        read: "Read article"
      },
      sidebar: {
        highlights: {
          title: "Key points"
        },
        about: {
          tag: "About this feature",
          title: "Africa at the heart of the AI revolution",
          text: "This feature compiles initiatives, partnerships and analyses that position the African continent as a key player in global artificial intelligence in 2026.",
          countries: ["Nigeria", "Morocco", "Kenya", "Ghana", "South Africa", "Senegal"]
        }
      },
      footer: {
        brand: "Feature <span>Africa & AI</span> — 2026",
        back: "← Back to home"
      }
    },
    diagnosticDataIA: {
      hero: {
        tag: "Strategic gateway to Aifrica",
        title: "Clarify your ",
        title_highlight: "Data & AI",
        title_end: " potential before investing.",
        description: "The Aifrica Diagnostic identifies your concrete opportunities, real risks and realistic transformation trajectory — in 2 to 4 weeks, without jargon.",
        request_diagnostic: "Request my diagnostic",
        discover_method: "Discover the method",
        approach_title: "Our 4-step approach",
        steps: [
          { n: "1", title: "Complete audit", desc: "Data, tools and processes" },
          { n: "2", title: "Maturity assessment", desc: "Technical & organizational" },
          { n: "3", title: "AI use cases", desc: "Prioritized by impact and ROI" },
          { n: "4", title: "Strategic roadmap", desc: "0 to 12 months, actionable" }
        ],
        duration_label: "Estimated duration",
        duration_value: "2 – 4 weeks"
      },
      stats: [
        { num: 4, suffix: "", label: "analysis axes covered" },
        { num: 6, suffix: "", label: "strategic deliverables included" },
        { num: 12, suffix: " months", label: "operational roadmap" },
        { num: 100, suffix: "%", label: "impact-oriented" }
      ],
      challenges: {
        eyebrow: "Why a diagnostic first",
        title: "Common challenges",
        title_line2: "of organizations",
        title_line3: "in ",
        title_highlight: "Africa",
        subtitle: "The majority of African companies share these obstacles before launching an AI or data project.",
        items: [
          { ico: "📊", title: "Scattered data", desc: "Between Excel, ERP, CRM and paper, without synchronization." },
          { ico: "📋", title: "Non-existent reporting", desc: "Absence of dashboards and reliable indicators." },
          { ico: "🎯", title: "Decisions without data", desc: "Flying blind, without clear performance KPIs." },
          { ico: "🤖", title: "AI: where to start?", desc: "AI ambition without roadmap or method." },
          { ico: "💸", title: "Poorly targeted investments", desc: "Tools purchased without strategy or return measurement." }
        ],
        risk_title: "Without diagnostic,",
        risk_title_line2: "what is the real risk?",
        risk_description: "Wasted budgets on unsuitable tools. AI projects without follow-up. Demotivated teams facing unkept promises. The diagnostic gives you clear vision before investing anything.",
        risk_tags: ["Time saved", "Optimized budget", "Controlled risks", "Informed decisions"]
      },
      analysis: {
        eyebrow: "Our analysis scope",
        title: "What we ",
        title_highlight: "analyze",
        subtitle: "Four key dimensions for a complete and honest vision of your data and AI potential.",
        cards: [
          { ico: "🗃️", n: "01", title: "Your data", items: ["Existing sources", "Formats & structures", "Quality & consistency", "Accessibility"] },
          { ico: "⚙️", n: "02", title: "Your tools", items: ["ERP & CRM", "Business software", "Spreadsheets & files", "IT infrastructure"] },
          { ico: "🛡️", n: "03", title: "Data & AI Maturity", items: ["Governance", "Data security", "Internal skills", "Decision-making processes"] },
          { ico: "💡", n: "04", title: "AI Opportunities", items: ["Key use cases", "Identified quick wins", "Quantified potential ROI", "Risks & constraints"] }
        ]
      },
      methodology: {
        eyebrow: "Our approach",
        title: "A ",
        title_highlight: "proven",
        title_end: " methodology",
        subtitle: "Structured, rigorous and deeply adapted to African realities. Click on each step.",
        steps: [
          { n: "1", title: "Audit", desc: "Complete analysis of your data flows, systems and operational processes.", chips: ["Data flows", "Systems"] },
          { n: "2", title: "Assessment", desc: "In-depth diagnosis of technical and organizational maturity.", chips: ["Technical", "Organizational"] },
          { n: "3", title: "Opportunities", desc: "Qualification of AI use cases by impact, feasibility and estimated ROI.", chips: ["Impact", "ROI", "Cost"] },
          { n: "4", title: "Roadmap", desc: "Strategic roadmap prioritized over 3, 6 and 12 months.", chips: ["0–3m", "3–6m", "6–12m"] }
        ]
      },
      deliverables: {
        eyebrow: "Your deliverables",
        title: "What you ",
        title_highlight: "get",
        items: [
          { ico: "📋", text: "Detailed diagnostic report" },
          { ico: "🗺️", text: "Complete mapping of your data" },
          { ico: "📌", text: "Prioritized action plan" },
          { ico: "⚡", text: "Identification of quick wins" },
          { ico: "🔧", text: "Realistic technological recommendations" },
          { ico: "🎯", text: "Business-aligned strategic vision" }
        ],
        count_label: "deliverables included"
      },
      caseStudy: {
        eyebrow: "African field",
        title: "A ",
        title_highlight: "concrete",
        title_end: " case",
        company: "Distribution SME",
        sector: "Wholesale trade · West Africa",
        badge: "Real case",
        problem: {
          tag: "Problem",
          description: "Sales and stock data scattered between Excel and cash register software, without synchronization or real-time visibility."
        },
        diagnostic: {
          tag: "Diagnostic",
          items: [
            "Absence of reliable indicators",
            "Frequent stockouts",
            "Overstocks in low season"
          ]
        },
        recommendation: {
          tag: "Recommendation",
          items: [
            "Structuring of historical data",
            "Creation of simple and actionable KPIs",
            "Progressive forecasting model"
          ]
        },
        result: {
          tag: "Expected result",
          description: "Reduction of stockouts, better cash management, measurable ROI from 3 months of implementation."
        }
      },
      duration: {
        eyebrow: "Format & duration",
        title: "How ",
        title_highlight: "it works",
        indicative: {
          ico: "⏱️",
          title: "Estimated duration",
          description: "2 to 4 weeks depending on your organization size and data availability. We adapt completely to your operational pace."
        },
        format: {
          ico: "📌",
          title: "Diagnostic format",
          items: [
            "Strategic interviews with your key decision-makers",
            "Documentary analysis and review of existing systems",
            "Executive summary and complete maturity report",
            "Clear and actionable restitution to management teams"
          ]
        }
      },
      targets: {
        eyebrow: "For whom",
        title: "This diagnostic is made ",
        title_highlight: "for you",
        items: [
          { ico: "🏢", label: "Growing SMEs" },
          { ico: "🚀", label: "Ambitious startups" },
          { ico: "🏛️", label: "Large companies" },
          { ico: "🏗️", label: "Public administrations" },
          { ico: "🔗", label: "Data-first organizations" }
        ]
      },
      why: {
        eyebrow: "Our difference",
        title: "Why ",
        title_highlight: "Aifrica",
        title_end: " ?",
        items: [
          { bold: "African approach", rest: " — adapted to local realities and specific contexts of the continent." },
          { bold: "Strategy + operational", rest: " — long-term vision combined with immediate operational pragmatism." },
          { bold: "Measurable impact", rest: " — each recommendation is oriented towards a concrete and quantified result." },
          { bold: "Radical honesty", rest: " — no unrealistic promises, no technological fashion effect." },
          { bold: "Controlled trajectory", rest: " — progressive and secure progression, without brutal break." }
        ],
        brand_wordmark: "Ai",
        brand_wordmark_end: "frica",
        brand_sub: "Data & AI for Africa",
        values: ["Local expertise", "Strategic vision", "Operational pragmatism", "Measurable impact"]
      },
      cta: {
        eyebrow: "Take action",
        title: "Avoid",
        title_highlight: "costly mistakes.",
        description: "Start your data transformation on solid, realistic and adapted foundations to your context.",
        button: "Plan my diagnostic"
      }
    },
    metier: {
      topband: {
        label: "Careers Section · AI & Enterprise",
        date: "2026",
        back: "← Home"
      },
      hero: {
        tag: "Careers Section",
        title: "AI &",
        title_highlight: "Careers",
        title_end: "in Enterprise",
        subtitle: "How artificial intelligence is transforming human resources, finance, marketing and business functions — in Africa and worldwide.",
        stats: {
          articles: "articles"
        },
        featured: {
          tag: "⭐ Featured",
          read_article: "Read article"
        }
      },
      ticker: {
        items: ["Human Resources", "Corporate Finance", "Marketing Strategy", "Sales & Commerce", "AI & Careers", "Digital Transformation", "African Innovation"]
      },
      body: {
        section: {
          label: "Analysis",
          title: "All articles",
          count: "articles"
        },
        article: {
          read_article: "Read article"
        },
        sidebar: {
          highlights: {
            title: "Key points"
          },
          domains: {
            title: "Covered domains",
            articles: "articles"
          },
          about: {
            tag: "About this section",
            title: "AI at the heart of careers",
            text: "Each domain is analyzed from two complementary angles: global trends and African realities, for a complete view of ongoing transformation.",
            tags: ["HR", "Finance", "Marketing", "Sales", "Generative AI", "SMEs", "Africa"]
          }
        }
      },
      footer: {
        brand: "Careers & AI Section — 2026",
        back: "← Back to home"
      }
    },
    entreprise: {
      topband: {
        label: "Industry & Economy · AI & Sectors",
        date: "2026",
        back: "← Home"
      },
      hero: {
        tag: "Industry & Economy",
        title: "AI &",
        title_highlight: "Economic",
        title_end: "Sectors",
        subtitle: "Commerce, transport, health, finance, agriculture, tourism, education — how artificial intelligence is reshaping every industry, in Africa and worldwide.",
        stats: {
          articles: "Articles",
          sectors: "Sectors",
          perspectives: "Perspectives"
        },
        featured: {
          tag: "⭐ Featured",
          read_article: "Read article"
        }
      },
      ticker: {
        items: ["Commerce & Retail", "Transport & Logistics", "Digital Health", "Banking & Insurance", "Smart Agriculture", "Tourism", "Education", "African Innovation"]
      },
      body: {
        section: {
          label: "Analysis",
          title: "All articles",
          count: "articles"
        },
        article: {
          africa: "Africa",
          read_article: "Read article"
        },
        sidebar: {
          highlights: {
            title: "Key points"
          },
          sectors: {
            title: "Covered sectors",
            articles: "articles"
          },
          about: {
            tag: "About this section",
            title: "AI is reshaping the global economy",
            text: "Each sector is analyzed from two angles: global trends and African realities, for a complete and nuanced view of the ongoing transformation.",
            tags: ["Retail", "Logistics", "Health", "Fintech", "AgriTech", "TourTech", "EdTech", "Africa"]
          }
        }
      },
      footer: {
        brand: "Industry & Economy Section — 2026",
        back: "← Back to home"
      }
    },
    technologie: {
      topband: {
        label: "Special Feature · Technology & AI",
        date: "February 2025",
        back: "← Home"
      },
      hero: {
        tag: "Special Feature",
        title: "Technology",
        title_highlight: "Inno-va-tion",
        title_end: "AI",
        subtitle: "Analysis, comparisons and technical guides on the latest advances in artificial intelligence, data architecture and cloud computing.",
        stats: {
          articles: "Articles",
          topics: "Topics",
          watch: "Watch"
        },
        featured: {
          tag: "⭐ Featured",
          read_article: "Read article"
        }
      },
      ticker: {
        items: ["Data Architecture", "LLMs", "Data Science", "Cloud Computing", "AI Agents", "MCP", "Data Governance", "Snowflake", "BigQuery", "RAG", "Fine-tuning", "Artificial Intelligence"]
      },
      body: {
        section: {
          label: "Technology Watch",
          title: "Latest analyses",
          count: "articles"
        },
        article: {
          read_article: "Read article"
        },
        sidebar: {
          highlights: {
            title: "Key points"
          },
          about: {
            tag: "About this feature",
            title: "Technology & AI at the heart of innovation",
            text: "This feature compiles technical analyses, comparisons and guides on the latest advances in artificial intelligence, data architecture and cloud computing for technology decision-makers.",
            topics: ["Data Governance", "LLMs", "RAG", "Fine-tuning", "Agents", "Cloud", "MCP", "Data Science"]
          }
        }
      },
      footer: {
        brand: "Technology & AI Feature — 2025",
        back: "← Back to home"
      }
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
