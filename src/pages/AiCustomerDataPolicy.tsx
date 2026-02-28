import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function AiCustomerDataPolicy() {
  const sections = [
    {
      id: 'overview',
      title: '1. Översikt och syfte',
      content: (
        <>
          <p className="mb-4 text-dark-gray">
            Denna policy beskriver hur Norhill AB (&ldquo;Norhill&rdquo;, &ldquo;vi&rdquo;, &ldquo;oss&rdquo;) använder
            kunddata i samband med artificiella intelligens-tjänster (&ldquo;AI-tjänster&rdquo;), såsom analys- och
            beslutsstöd, textgenerering, strukturering av information och andra liknande funktioner.
          </p>
          <p className="text-sm text-dark-gray">
            Policyn kompletterar vår generella integritetspolicy och förtydligar hur vi säkerställer att användningen av
            AI-tjänster sker i enlighet med dataskyddsförordningen (GDPR), annan tillämplig lagstiftning och god etik.
          </p>
        </>
      ),
    },
    {
      id: 'data-types',
      title: '2. Vilken kunddata som kan användas i AI-tjänster',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Vilken typ av data som används beror på uppdragets karaktär och dina instruktioner. Exempel på
            kunddata som kan behandlas i AI-tjänster är:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-light-gray rounded-xl p-5">
              <h4 className="font-heading font-bold text-nordic-blue mb-3 text-sm uppercase tracking-wide">
                Verksamhets- och systemdata
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Dokumentation om processer, system och arkitektur</li>
                <li>• Kravspecifikationer, beslutsunderlag och modeller</li>
                <li>• Projektplaner, mötesanteckningar och rapporter</li>
              </ul>
            </div>
            <div className="bg-light-gray rounded-xl p-5">
              <h4 className="font-heading font-bold text-nordic-blue mb-3 text-sm uppercase tracking-wide">
                Person- och kundrelaterad data
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Kontaktuppgifter och roller kopplade till verksamheten</li>
                <li>• Referenser till användare, kunder eller andra intressenter</li>
                <li>• Andra uppgifter som du som kund uttryckligen delar inom ramen för uppdraget</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            Vi strävar efter att minimera mängden personuppgifter i AI-tjänster och använder där det är möjligt
            anonymisering eller pseudonymisering. Känsliga personuppgifter ska som utgångspunkt inte användas i
            AI-tjänster om det inte finns uttryckligt avtalat och en tydlig rättslig grund.
          </p>
        </div>
      ),
    },
    {
      id: 'purposes-legal-basis',
      title: '3. Ändamål och rättslig grund för AI-användning',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Vi använder AI-tjänster endast när det stödjer tydligt definierade och legitima ändamål. De vanligaste
            ändamålen är:
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-light-gray rounded-xl p-5">
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">
                A. Analys, strukturering och kvalitetssäkring
              </h4>
              <p className="text-sm mb-2">
                För att analysera, strukturera och kvalitetssäkra information, exempelvis underlag inför
                arkitekturella bedömningar, coachning eller verksamhetsutveckling.
              </p>
              <p className="text-xs text-dark-gray/80">
                Laglig grund: Fullgörande av avtal (när AI används direkt i uppdraget) och berättigat intresse
                (effektiv och träffsäker leverans), efter en intresseavvägning.
              </p>
            </div>
            <div className="bg-white border border-light-gray rounded-xl p-5">
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">
                B. Förbättring av arbetssätt och metoder
              </h4>
              <p className="text-sm mb-2">
                För att utveckla och förbättra våra interna metoder, ramverk och arbetssätt, till exempel genom
                att identifiera mönster i anonymiserade eller aggregerade data.
              </p>
              <p className="text-xs text-dark-gray/80">
                Laglig grund: Berättigat intresse (kontinuerlig förbättring av våra tjänster), där vi begränsar
                personuppgiftsbehandling och använder anonymisering när det är möjligt.
              </p>
            </div>
            <div className="bg-white border border-light-gray rounded-xl p-5">
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">
                C. Beslutsstöd och generering av förslag
              </h4>
              <p className="text-sm mb-2">
                För att generera förslag på analyser, texter, modeller eller andra artefakter som sedan granskas
                och valideras av Norhills konsulter innan de används.
              </p>
              <p className="text-xs text-dark-gray/80">
                Laglig grund: Fullgörande av avtal och berättigat intresse (effektiv leverans och högre kvalitet
                i beslutsunderlag).
              </p>
            </div>
          </div>
          <p className="text-sm">
            Vi använder inte AI-tjänster för att fatta automatiserade beslut med rättsliga följder eller på liknande
            sätt betydande konsekvenser för enskilda, utan mänsklig medverkan, om detta inte uttryckligen avtalats och
            uppfyller kraven i GDPR.
          </p>
        </div>
      ),
    },
    {
      id: 'providers',
      title: '4. AI-leverantörer och personuppgiftsbiträden',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            När vi använder externa AI-tjänster samarbetar vi endast med leverantörer som uppfyller höga krav på
            informationssäkerhet och dataskydd.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>vi ingår personuppgiftsbiträdesavtal när leverantören behandlar personuppgifter för vår räkning</li>
            <li>vi säkerställer att personuppgifter inte används av leverantören för egna ändamål (t.ex. träning av generella modeller) utan avtalat stöd</li>
            <li>vi strävar efter att använda leverantörer inom EU/EES eller med adekvat skyddsnivå</li>
          </ul>
          <p className="text-sm">
            Om överföring till land utanför EU/EES är aktuell säkerställer vi lämpliga skyddsåtgärder enligt GDPR,
            exempelvis standardavtalsklausuler och särskilda tekniska kontroller.
          </p>
        </div>
      ),
    },
    {
      id: 'minimisation-security',
      title: '5. Dataminimering, anonymisering och säkerhet',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Vi tillämpar principen om dataminimering när vi använder AI-tjänster. Det innebär bland annat att:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>vi begränsar mängden personuppgifter till vad som är nödvändigt för det aktuella ändamålet</li>
            <li>vi använder anonymisering eller pseudonymisering när det är möjligt</li>
            <li>vi undviker att inkludera känsliga personuppgifter i AI-underlag</li>
          </ul>
          <p className="text-sm">
            Vi vidtar tekniska och organisatoriska säkerhetsåtgärder för att skydda data som används i AI-tjänster,
            inklusive åtkomstkontroller, loggning, kryptering där det är lämpligt och tydliga interna riktlinjer för
            hur AI-tjänster får användas.
          </p>
        </div>
      ),
    },
    {
      id: 'rights-transparency',
      title: '6. Transparens och dina rättigheter',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Dina rättigheter enligt GDPR gäller även när vi använder AI-tjänster. Det innebär bland annat att du har
            rätt att:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>få information om om och hur dina personuppgifter används i AI-tjänster</li>
            <li>begära tillgång till de personuppgifter om dig som ingår i underlag vi behandlar</li>
            <li>begära rättelse eller radering av uppgifter, samt begränsning av behandlingen</li>
            <li>invända mot viss användning av dina personuppgifter, inklusive beroende på AI-teknik</li>
          </ul>
          <p className="text-sm">
            Om AI-tjänster används i ett uppdrag där du är registrerad kommer vi, i den mån det är praktiskt möjligt
            och lämpligt, att förklara hur AI har använts i framtagandet av leverabler och beslutstöd.
          </p>
        </div>
      ),
    },
    {
      id: 'customer-choices',
      title: '7. Kundens val och styrning',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Som kund kan du påverka hur vi använder AI-tjänster inom ramen för ett uppdrag. Exempel:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>du kan be oss att begränsa eller avstå från att använda AI-tjänster i ett specifikt uppdrag</li>
            <li>du kan be oss att endast använda anonymiserat underlag i AI-tjänster</li>
            <li>du kan begära information om vilka typer av AI-tjänster vi använder i ditt uppdrag</li>
          </ul>
          <p className="text-sm">
            Sådana önskemål kan påverka hur vi utformar och genomför uppdraget. Vi diskuterar alltid eventuella
            konsekvenser öppet med dig som kund.
          </p>
        </div>
      ),
    },
    {
      id: 'contact-changes',
      title: '8. Kontakt och ändringar i policyn',
      content: (
        <div className="text-dark-gray space-y-4">
          <div className="bg-light-gray rounded-xl p-5">
            <h4 className="font-heading font-semibold text-nordic-blue mb-2">Kontakt kring AI och kunddata</h4>
            <p className="text-sm mb-1">
              Om du har frågor om hur vi använder kunddata i AI-tjänster, eller vill utöva dina rättigheter, kan du
              kontakta oss:
            </p>
            <ul className="text-sm space-y-1">
              {/*<li>
                • E-post:{' '}
                <a href="mailto:info@norhill.se" className="text-nordic-blue underline">
                  info@norhill.se
                </a>
              </li>*/}
              <li>
                • Kontaktformulär: via sidan{' '}
                <Link to="/contact" className="text-nordic-blue underline">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-sm">
            Vi utvecklar löpande våra arbetssätt kopplade till AI. Denna policy kan därför komma att uppdateras för att
            återspegla förändringar i teknik, lagstiftning eller våra interna riktlinjer. Den senaste versionen finns
            alltid publicerad på denna sida.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div>
      <Seo
        title="Policy för kunddata och AI-tjänster"
        description="Norhills policy för ansvarsfull användning av AI-tjänster med kunddata. GDPR-kompatibel hantering, dataminimering och transparens kring AI-användning."
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-nordic-blue to-slate-gray text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center text-sky-blue hover:text-white mb-8 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Till startsidan
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🤖</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold">
                  Policy för kunddata och AI-tjänster
                </h1>
                <p className="text-sky-blue text-lg mt-2">
                  Ansvarsfull användning av artificiell intelligens
                </p>
              </div>
            </div>
            <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
              Vi använder AI som ett verktyg för att skapa bättre analyser, beslutsunderlag och underlag för
              verksamhetsutveckling – alltid med respekt för kunddata, integritet och gällande regelverk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Points Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {[
                { icon: '🧠', label: 'Kontrollerad AI', desc: 'Mänsklig granskning av alla leverabler' },
                { icon: '🛡️', label: 'Dataskydd', desc: 'GDPR och informationssäkerhet i fokus' },
                { icon: '⚙️', label: 'Dataminimering', desc: 'Behandlar endast nödvändig data' },
                { icon: '📣', label: 'Transparens', desc: 'Tydlig information om hur AI används' },
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-light-gray rounded-xl p-5 text-center"
                >
                  <div className="text-3xl mb-2">{point.icon}</div>
                  <h3 className="font-heading font-bold text-nordic-blue text-sm">{point.label}</h3>
                  <p className="text-dark-gray text-xs mt-1">{point.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding bg-gradient-to-b from-light-gray to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-md p-8"
                id={section.id}
              >
                <h3 className="text-2xl font-heading font-bold text-nordic-blue mb-4">
                  {section.title}
                </h3>
                {section.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


