'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, X, Calendar, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useI18n, useT } from '@/components/i18n-provider';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const t = useT();
  const { locale } = useI18n();

  const arProjects = [
    {
      title: 'Seller - Octopia',
      description: 'تصميم وتطوير منصة تتيح لبائعي Cdiscount الاشتراك في قناة مبيعات مخصصة، مع إعداد آمن للبائعين وإدارة الاشتراكات.',
      technologies: ['.NET 6', 'ReactJS', 'MongoDB', 'Apache Kafka', 'Clean Architecture', 'DDD', 'CQRS', 'AES', 'RSA', 'XUnit', 'Azure DevOps'],
      image: '/images/cdiscount-logo.png',
      category: t('projects.categoryEcommerce'),
      details: {
        duration: '6 أشهر (فبراير 2022 - يوليو 2022)',
        team: '5 مطورين',
        role: 'مطور Full-Stack',
        challenges: [
          'تصميم وتطوير ثلاثة خدمات مصغرة (Seller, Subscription, Bank Account) وفق Clean Architecture وDDD وCQRS',
          'تنفيذ خوارزميات تشفير AES وRSA لتأمين البيانات المصرفية',
          'إعداد Apache Kafka للمزامنة الفورية بين الخدمات المصغرة',
          'تطوير نموذج اشتراك ديناميكي بـ ReactJS للبائعين'
        ],
        achievements: [
          'تسليم منصة آمنة وقابلة للتوسع لإعداد البائعين',
          'تعزيز أمان البيانات بتطبيق معايير التشفير (AES, RSA)',
          'تحسين موثوقية النظام وقابليته للتوسع عبر نظام الرسائل Kafka',
          'تحسين تجربة البائع بواجهة ReactJS سلسة'
        ],
        responsibilities: [
          'تصميم وتطوير ثلاثة خدمات مصغرة (Seller, Subscription, Bank Account) وفق Clean Architecture وDDD وCQRS',
          'تنفيذ خوارزميات تشفير AES وRSA لتأمين البيانات المصرفية',
          'إعداد Apache Kafka للمزامنة الفورية بين الخدمات المصغرة',
          'تطوير نموذج اشتراك ديناميكي بـ ReactJS للبائعين',
          'كتابة اختبارات الوحدة XUnit لضمان جودة الكود'
        ]
      }
    },
    {
      title: 'PIM (Product Information Management)',
      description: 'تصميم وتطوير حل لإدارة معلومات المنتجات (PIM) للإدارة المركزية للبيانات العامة والمحددة للمنتجات في Showroomprive.',
      technologies: ['.NET 6', 'ASP.NET MVC', 'Razor Pages', 'Kendo UI', 'MongoDB', 'Azure Service Bus', 'CQRS', 'DDD'],
      image: '/images/logo-showroomprive-2.png',
      category: t('projects.categoryEnterprise'),
      details: {
        duration: '15 شهراً (أكتوبر 2022 - ديسمبر 2023)',
        team: '6 مطورين',
        role: 'مهندس برمجيات .NET Full Stack',
        challenges: [
          'تحليل المتطلبات وتحديد المواصفات الوظيفية مع فرق الأعمال',
          'تصميم الحلول التقنية لقصص المستخدم بالتعاون مع أصحاب المصلحة',
          'تنفيذ معمارية خدمات مصغرة قابلة للتوسع مع Clean Architecture وDDD وCQRS',
          'ضمان مزامنة البيانات والتواصل بين الخدمات'
        ],
        achievements: [
          'المساهمة في تسليم نظام PIM مركزي يدير آلاف المنتجات',
          'تحسين جودة البرنامج بتقديم اختبارات الوحدة الآلية',
          'تصميم وتنفيذ معمارية خدمات مصغرة قابلة للصيانة والتوسع',
          'تحسين مزامنة البيانات بين الخدمات مع Azure Service Bus وEvent Hub'
        ],
        responsibilities: [
          'المشاركة في اجتماعات الأعمال لتحليل المتطلبات وتحديد المواصفات',
          'تصميم الحلول التقنية لقصص المستخدم مع فرق الأعمال',
          'تطوير 3 خدمات مصغرة مبنية على Clean Architecture وDDD وCQRS',
          'كتابة اختبارات الوحدة XUnit لكل قصة مستخدم',
          'بناء واجهة الإدارة بـ ASP.NET MVC وRazor Pages وKendo UI وVanilla JS وjQuery وAjax',
          'تنفيذ مزامنة البيانات بين الخدمات باستخدام Azure Service Bus وEvent Hub',
          'كتابة الوثائق التقنية للمشروع'
        ]
      }
    },
    {
      title: 'Return Marketplace',
      description: 'تطوير حل لإدارة إرجاع منتجات السوق على Showroomprive.com، مع أتمتة سير عمل الإرجاع وتحسين تجربة المستخدم.',
      technologies: ['.NET', 'Angular', 'WebForms', 'Front Microservices', 'XUnit', 'Azure DevOps', 'BFF Pattern'],
      image: '/images/logo-showroomprive-2.png',
      category: t('projects.categoryEcommerce'),
      details: {
        duration: '5 أشهر (يناير 2024 - مايو 2024)',
        team: '5 مطورين',
        role: 'مطور Full-Stack',
        challenges: [
          'أتمتة سير عمل الإرجاع المعقدة لمنتجات السوق',
          'صيانة وتحسين مكونات الواجهة الأمامية الحالية',
          'تنفيذ معمارية Backend For Frontend (BFF)',
          'بناء واجهة أمامية مصغرة مخصصة لتجربة مستخدم أفضل'
        ],
        achievements: [
          'تسليم حل متين لإدارة إرجاع منتجات السوق',
          'زيادة أتمتة العمليات وتقليل التدخل اليدوي',
          'تحسين أداء الواجهة الأمامية وتجربة المستخدم عبر Angular',
          'ضمان استمرارية النظام طويل الأمد عبر نقل المعرفة الداخلية'
        ],
        responsibilities: [
          'صيانة وتحسين مكونات الواجهة الأمامية الحالية',
          'أتمتة سير عمل إرجاع منتجات السوق',
          'كتابة وثائق التصميم التقني لكل ميزة جديدة',
          'تطوير Backend For Frontend (BFF) بـ .NET',
          'بناء واجهة أمامية مصغرة مخصصة بـ Angular',
          'تنفيذ اختبارات الوحدة للخادم بـ XUnit',
          'كتابة الوثائق التقنية النهائية',
          'دعم نقل المعرفة لمتعاون داخلي في Showroomprive'
        ]
      }
    },
    {
      title: 'منصة التوجيه التقني',
      description: 'تطوير حل للتوجيه التقني لـ Cdiscount يتكون من ثلاثة وحدات رئيسية: المصادر (إدارة التوظيف)، التحكم المالي وإدارة الموارد البشرية.',
      technologies: ['.NET 6', '.NET 8', 'Java 8', '.NET Framework 6', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'MySQL', 'Azure DevOps', 'Sciforma', 'Grafana'],
      image: '/images/cdiscount-logo.png',
      category: t('projects.categoryEnterprise'),
      details: {
        duration: 'جارٍ (يونيو 2024 - الحاضر)',
        team: '7 مطورين',
        role: 'مطور Full-Stack أول',
        challenges: [
          'تصميم وتنفيذ إخفاء هوية البيانات لضمان الامتثال للوائح الأوروبية',
          'تحسين API الـ PPM (Java 8) للأداء والموثوقية',
          'تحديد نطاق وتنفيذ إيقاف تشغيل أداة Kiffometer',
          'إدارة الترحيل المعقد إلى .NET 8 مع الحفاظ على استقرار الإنتاج'
        ],
        achievements: [
          'ضمان الامتثال للوائح حماية البيانات الأوروبية عبر إخفاء الهوية',
          'إيقاف تشغيل أداة قديمة (Kiffometer) وتبسيط النظام البيئي',
          'تحسين رصد النظام والمراقبة مع Grafana',
          'تسليم ترحيل مستقر إلى .NET 8 لضمان قابلية الصيانة على المدى الطويل'
        ],
        responsibilities: [
          'تصميم وتنفيذ إخفاء هوية البيانات للامتثال للوائح الأوروبية',
          'تحسين API الـ PPM (Java 8) للأداء والموثوقية',
          'تحديد نطاق وتنفيذ إيقاف تشغيل أداة Kiffometer',
          'ترحيل وظائف وخدمات الخادم إلى .NET 8',
          'معالجة تذاكر Run وMCO لضمان استقرار الإنتاج',
          'إعداد أداة Sciforma عبر Sciforma Designer',
          'دمج Grafana لمراقبة الوظائف والأداء'
        ]
      }
    }
  ];

  const projects = locale === 'fr'
    ? [
        {
          title: 'Seller - Octopia',
          description: "Conception et developpement d'une plateforme permettant aux vendeurs Cdiscount de souscrire a un canal de vente dedie, avec onboarding securise et gestion des abonnements.",
          technologies: ['.NET 6', 'ReactJS', 'MongoDB', 'Apache Kafka', 'Clean Architecture', 'DDD', 'CQRS', 'AES', 'RSA', 'XUnit', 'Azure DevOps'],
          image: '/images/cdiscount-logo.png',
          category: t('projects.categoryEcommerce'),
          details: {
            duration: '6 mois (fevrier 2022 - juillet 2022)',
            team: '5 developpeurs',
            role: 'Developpeur Full-Stack',
            challenges: [
              'Concevoir et developper trois microservices (Seller, Subscription, Bank Account) selon Clean Architecture, DDD et CQRS',
              'Implementer le chiffrement AES et RSA pour securiser les donnees bancaires',
              'Mettre en place Apache Kafka pour la synchronisation temps reel entre microservices',
              'Developper un formulaire de souscription dynamique en ReactJS pour les vendeurs'
            ],
            achievements: [
              'Livraison dune plateforme securisee et scalable pour l onboarding vendeurs',
              'Renforcement de la securite des donnees avec des standards de chiffrement (AES, RSA)',
              'Amelioration de la fiabilite et de la scalabilite via une messagerie basee sur Kafka',
              'Amelioration de l experience vendeur avec une interface ReactJS fluide'
            ],
            responsibilities: [
              'Concevoir et developper trois microservices (Seller, Subscription, Bank Account) selon Clean Architecture, DDD et CQRS',
              'Implementer le chiffrement AES et RSA pour securiser les donnees bancaires',
              'Configurer Apache Kafka pour la synchronisation temps reel entre microservices',
              'Developper un formulaire de souscription dynamique en ReactJS',
              'Ecrire des tests unitaires XUnit pour garantir la qualite du code'
            ]
          }
        },
        {
          title: 'PIM (Product Information Management)',
          description: 'Conception et developpement d une solution PIM pour la gestion centralisee des donnees produits generiques et specifiques chez Showroomprive.',
          technologies: ['.NET 6', 'ASP.NET MVC', 'Razor Pages', 'Kendo UI', 'MongoDB', 'Azure Service Bus', 'CQRS', 'DDD'],
          image: '/images/logo-showroomprive-2.png',
          category: t('projects.categoryEnterprise'),
          details: {
            duration: '15 mois (octobre 2022 - decembre 2023)',
            team: '6 developpeurs',
            role: 'Ingenieur logiciel .NET Full Stack',
            challenges: [
              'Analyser les besoins et definir les specifications fonctionnelles avec les equipes metier',
              'Concevoir les solutions techniques des User Stories avec les parties prenantes',
              'Mettre en place une architecture microservices scalable avec Clean Architecture, DDD et CQRS',
              'Assurer la synchronisation des donnees et la communication entre services'
            ],
            achievements: [
              'Contribution a la livraison d un PIM centralise gerant des milliers de references produits',
              'Amelioration de la qualite logicielle grace aux tests unitaires automatises',
              'Conception d une architecture microservices maintenable et performante',
              'Optimisation de la synchronisation inter-services avec Azure Service Bus et Event Hub'
            ],
            responsibilities: [
              'Participer aux ateliers metier pour analyser les besoins et cadrer les specifications',
              'Concevoir les solutions techniques des User Stories avec les equipes metier',
              'Developper 3 microservices bases sur Clean Architecture, DDD et CQRS',
              'Ecrire des tests unitaires XUnit pour chaque User Story',
              'Developper l interface frontend avec ASP.NET MVC, Razor Pages, Kendo UI, Vanilla JS, jQuery et Ajax',
              'Implementer la communication inter-services avec Azure Service Bus et Event Hub',
              'Rediger la documentation technique du projet'
            ]
          }
        },
        {
          title: 'Return Marketplace',
          description: 'Developpement d une solution de gestion des retours produits marketplace sur Showroomprive.com, automatisant le workflow de retour et ameliorant l experience utilisateur.',
          technologies: ['.NET', 'Angular', 'WebForms', 'Front Microservices', 'XUnit', 'Azure DevOps', 'BFF Pattern'],
          image: '/images/logo-showroomprive-2.png',
          category: t('projects.categoryEcommerce'),
          details: {
            duration: '5 mois (janvier 2024 - mai 2024)',
            team: '5 developpeurs',
            role: 'Developpeur Full-Stack',
            challenges: [
              'Automatiser des workflows de retour complexes pour les produits marketplace',
              'Maintenir et ameliorer les composants frontend existants',
              'Implementer une architecture Backend For Frontend (BFF)',
              'Construire un micro-frontend dedie pour une meilleure experience utilisateur'
            ],
            achievements: [
              'Livraison d une solution robuste de gestion des retours marketplace',
              'Augmentation de l automatisation et reduction des traitements manuels',
              'Amelioration des performances frontend et de l experience utilisateur via Angular',
              'Securisation de la continuite du systeme via transfert de competences interne'
            ],
            responsibilities: [
              'Maintenir et ameliorer les composants frontend existants',
              'Automatiser le workflow de retour pour les produits marketplace',
              'Rediger la documentation de conception technique pour chaque fonctionnalite',
              'Developper un Backend For Frontend (BFF) en .NET',
              'Construire un micro-frontend dedie en Angular',
              'Mettre en place les tests unitaires backend avec XUnit',
              'Rediger la documentation technique finale',
              'Accompagner le transfert de connaissances vers un collaborateur interne Showroomprive'
            ]
          }
        },
        {
          title: 'Plateforme de Pilotage Technique',
          description: 'Developpement d une solution de pilotage technique pour Cdiscount composee de trois modules principaux: Sourcing, Controle Financier et Pilotage RH.',
          technologies: ['.NET 6', '.NET 8', 'Java 8', '.NET Framework 6', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'MySQL', 'Azure DevOps', 'Sciforma', 'Grafana'],
          image: '/images/cdiscount-logo.png',
          category: t('projects.categoryEnterprise'),
          details: {
            duration: 'En cours (juin 2024 - aujourd hui)',
            team: '7 developpeurs',
            role: 'Developpeur Full-Stack Senior',
            challenges: [
              'Concevoir et implementer l anonymisation des donnees pour la conformite EU',
              'Ameliorer l API PPM (Java 8) pour plus de performance et fiabilite',
              'Cadrer et executer le decommissionnement de l outil Kiffometer',
              'Piloter des migrations complexes vers .NET 8 en maintenant la stabilite production'
            ],
            achievements: [
              'Conformite aux reglementations europeennes via l anonymisation des donnees',
              'Decommissionnement reussi d un outil legacy (Kiffometer) et simplification du SI',
              'Amelioration de l observabilite applicative avec Grafana',
              'Migration stable vers .NET 8 pour renforcer la maintenabilite long terme'
            ],
            responsibilities: [
              'Concevoir et implementer l anonymisation des donnees pour la conformite EU',
              'Ameliorer l API PPM (Java 8) pour ses performances et sa fiabilite',
              'Cadrer et executer le decommissionnement de l outil Kiffometer',
              'Migrer les jobs et services backend vers .NET 8',
              'Traiter les tickets Run et MCO pour garantir la stabilite en production',
              'Configurer l outil Sciforma via Sciforma Designer',
              'Integrer Grafana pour le monitoring des jobs et des performances'
            ]
          }
        }
      ]
    : locale === 'ar'
    ? arProjects
    : [
        {
          title: 'Seller - Octopia',
          description: 'Conception and Development of a platform enabling Cdiscount sellers to subscribe to a dedicated sales channel, featuring secure seller onboarding and subscription management.',
          technologies: ['.NET 6', 'ReactJS', 'MongoDB', 'Apache Kafka', 'Clean Architecture', 'DDD', 'CQRS', 'AES', 'RSA', 'XUnit', 'Azure DevOps'],
          image: '/images/cdiscount-logo.png',
          category: t('projects.categoryEcommerce'),
          details: {
            duration: '6 months (February 2022 - July 2022)',
            team: '5 developers',
            role: 'Full-Stack Developer',
            challenges: [
              'Designing and developing three microservices (Seller, Subscription, Bank Account) following Clean Architecture, DDD, and CQRS',
              'Implementing AES and RSA encryption algorithms to secure banking data',
              'Setting up Apache Kafka for real-time synchronization between microservices',
              'Developing a dynamic subscription form in ReactJS for sellers'
            ],
            achievements: [
              'Delivered a secure and scalable seller onboarding platform',
              'Strengthened data security by implementing industry-standard encryption (AES, RSA)',
              'Improved system reliability and scalability with Kafka-based messaging',
              'Enhanced seller experience with a user-friendly ReactJS interface'
            ],
            responsibilities: [
              'Designed and developed three microservices (Seller, Subscription, Bank Account) following Clean Architecture, DDD, and CQRS',
              'Implemented AES and RSA encryption algorithms to secure banking data',
              'Set up Apache Kafka for real-time synchronization between microservices',
              'Developed a dynamic subscription form in ReactJS for sellers',
              'Wrote unit tests with XUnit to ensure code quality'
            ]
          }
        },
        {
          title: 'PIM (Product Information Management)',
          description: 'Design and Development of a Product Information Management (PIM) solution for the centralized management of both generic and specific product data at Showroomprive.',
          technologies: ['.NET 6', 'ASP.NET MVC', 'Razor Pages', 'Kendo UI', 'MongoDB', 'Azure Service Bus', 'CQRS', 'DDD'],
          image: '/images/logo-showroomprive-2.png',
          category: t('projects.categoryEnterprise'),
          details: {
            duration: '15 months (October 2022 - December 2023)',
            team: '6 developers',
            role: '.NET Full Stack Software Engineer',
            challenges: [
              'Analyzing requirements and defining functional specifications with business teams',
              'Designing technical solutions for User Stories in collaboration with stakeholders',
              'Implementing scalable microservices architecture with Clean Architecture, DDD, and CQRS',
              'Ensuring data synchronization and communication between services'
            ],
            achievements: [
              'Contributed to the successful delivery of a centralized PIM system handling thousands of product references',
              'Improved software quality by introducing automated unit testing',
              'Designed and implemented a scalable microservices architecture ensuring maintainability and performance',
              'Optimized inter-service data synchronization with Azure Service Bus and Event Hub'
            ],
            responsibilities: [
              'Participated in business meetings to analyze requirements and define functional specifications',
              'Designed technical solutions for User Stories in collaboration with business teams',
              'Developed 3 microservices based on Clean Architecture, DDD, and CQRS principles',
              'Wrote unit tests for each User Story using XUnit',
              'Built the frontend interface using ASP.NET MVC, Razor Pages, Kendo UI, Vanilla JS, jQuery, and Ajax',
              'Implemented data synchronization and communication between services using Azure Service Bus and Event Hub',
              'Authored the project technical documentation'
            ]
          }
        },
        {
          title: 'Return Marketplace',
          description: 'Development of a Return Management Solution for marketplace products on Showroomprive.com, automating the product return workflow and enhancing user experience.',
          technologies: ['.NET', 'Angular', 'WebForms', 'Front Microservices', 'XUnit', 'Azure DevOps', 'BFF Pattern'],
          image: '/images/logo-showroomprive-2.png',
          category: t('projects.categoryEcommerce'),
          details: {
            duration: '5 months (January 2024 - May 2024)',
            team: '5 developers',
            role: 'Full-Stack Developer',
            challenges: [
              'Automating complex product return workflows for marketplace items',
              'Maintaining and improving existing frontend components',
              'Implementing Backend for Frontend (BFF) architecture',
              'Building dedicated micro-frontend for enhanced user experience'
            ],
            achievements: [
              'Delivered a robust solution for handling marketplace product returns',
              'Increased process automation, reducing manual intervention',
              'Improved frontend performance and user experience through Angular micro-frontend',
              'Secured long-term system continuity by onboarding and training internal staff'
            ],
            responsibilities: [
              'Maintained and improved existing frontend components',
              'Automated the product return workflow for marketplace items',
              'Authored technical design documentation for each new feature',
              'Developed a Backend for Frontend (BFF) using .NET',
              'Built a dedicated micro-frontend in Angular to enhance user experience',
              'Implemented unit testing on backend with XUnit',
              'Wrote final technical documentation',
              'Supported knowledge transfer by mentoring an internal Showroomprive collaborator'
            ]
          }
        },
        {
          title: 'Technical Steering Platform (Pilotage Technique)',
          description: 'Development of a technical steering solution for Cdiscount, consisting of three main modules: Sourcing (recruitment management), Financial Control (finance management), and Pilotage (HR administration).',
          technologies: ['.NET 6', '.NET 8', 'Java 8', '.NET Framework 6', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'MySQL', 'Azure DevOps', 'Sciforma', 'Grafana'],
          image: '/images/cdiscount-logo.png',
          category: t('projects.categoryEnterprise'),
          details: {
            duration: 'Ongoing (June 2024 - Present)',
            team: '7 developers',
            role: 'Senior Full-Stack Developer',
            challenges: [
              'Designing and implementing data anonymization to ensure compliance with EU policies',
              'Enhancing the PPM API (Java 8) for better performance and reliability',
              'Scoping and executing the decommissioning of the Kiffometer tool',
              'Managing complex migrations to .NET 8 while maintaining production stability'
            ],
            achievements: [
              'Ensured compliance with EU data protection regulations through anonymization',
              'Successfully decommissioned a legacy tool (Kiffometer), simplifying the ecosystem',
              'Improved system observability and monitoring with Grafana',
              'Delivered stable migration to .NET 8, securing long-term system maintainability'
            ],
            responsibilities: [
              'Designed and implemented data anonymization to ensure compliance with EU policies',
              'Enhanced the PPM API (Java 8) for better performance and reliability',
              'Scoped and executed the decommissioning of the Kiffometer tool',
              'Migrated jobs and backend services to .NET 8',
              'Resolved Run & MCO (maintenance in operational conditions) tickets to guarantee production stability',
              'Managed Sciforma tool configuration using Sciforma Designer',
              'Integrated Grafana for job monitoring and performance tracking'
            ]
          }
        }
      ];

  return (
  <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Subtle white overlay for depth */}
                <div className="absolute inset-0 bg-white/10 pointer-events-none z-10" />
                {/* Background image - different sizing based on logo type */}
                <div 
                  className={`absolute inset-0 bg-center bg-no-repeat ${
                    project.image.includes('cdiscount') ? 'bg-cover' : 'bg-contain'
                  } ${project.image.includes('showroomprive') ? 'bg-white' : ''}`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Overlay for Showroomprivé logo visibility in dark mode */}
                {project.image.includes('showroomprive') && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                )}
                {/* Very light overlay for subtle effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent group-hover:from-white/20 group-hover:via-white/5 transition-all duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 text-gray-800 text-xs px-3 py-1.5 rounded-full font-medium shadow-md">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <Code className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">{t('projects.techStack')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-emerald-400 dark:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('projects.viewDetails')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">{t('projects.duration')}</div>
                    <div className="text-sm text-muted-foreground">{selectedProject.details.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">{t('projects.teamSize')}</div>
                    <div className="text-sm text-muted-foreground">{selectedProject.details.team}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">{t('projects.myRole')}</div>
                    <div className="text-sm text-muted-foreground">{selectedProject.details.role}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">{t('projects.technologiesUsed')}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">{t('projects.keyChallenges')}</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">{t('projects.keyAchievements')}</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">{t('projects.myResponsibilities')}</h3>
                <ul className="space-y-2">
                  {selectedProject.details.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}