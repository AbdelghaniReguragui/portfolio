import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Certifications } from '@/components/certifications';
import { Languages } from '@/components/languages';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abdelghanireguragui.com';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdelghani Reguragui',
  alternateName: 'عبد الغني رعراعي',
  url: SITE_URL,
  image: `${SITE_URL}/images/abdelghanireguragui.jpeg`,
  jobTitle: 'Software Engineer',
  telephone: '+212629832941',
  email: 'abdelghanireguragui@gmail.com',
  worksFor: {
    '@type': 'Organization',
    name: 'Akkodis',
    url: 'https://www.akkodis.com/',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  sameAs: [
    'https://www.linkedin.com/in/abdelghani-reguragui-5b89ab174/',
    'https://www.abdelghanireguragui.com',
  ],
  knowsAbout: [
    '.NET',
    'C#',
    'React',
    'Angular',
    'Microservices',
    'Clean Architecture',
    'CQRS',
    'DDD',
    'Kafka',
    'MongoDB',
    'Azure DevOps',
  ],
};

export default function LocalizedHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}