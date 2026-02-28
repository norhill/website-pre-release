import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'overview',
      title: '1. Översikt och tillämpning',
      content: (
        <>
          <p className="mb-4 text-dark-gray">
            Denna integritetspolicy beskriver hur Norhill AB (&ldquo;Norhill&rdquo;, &ldquo;vi&rdquo;, &ldquo;oss&rdquo;)
            behandlar personuppgifter i enlighet med Dataskyddsförordningen (GDPR) och kompletterande svensk
            lagstiftning. Policyn gäller när du kontaktar oss, använder våra tjänster, besöker vår webbplats eller
            på annat sätt interagerar med oss.
          </p>
          <p className="text-sm text-dark-gray">
            Norhill är personuppgiftsansvarig för de behandlingar som beskrivs här. Om du har frågor om hur vi
            behandlar dina personuppgifter är du välkommen att kontakta oss via{' '}
            <a href="mailto:info@norhill.se" className="text-nordic-blue underline">
              info@norhill.se
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'data-we-process',
      title: '2. Vilka personuppgifter vi behandlar',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Vi behandlar i huvudsak följande kategorier av personuppgifter, i den utsträckning de är relevanta för
            respektive ändamål:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-light-gray rounded-xl p-5">
              <h4 className="font-heading font-bold text-nordic-blue mb-3 text-sm uppercase tracking-wide">
                Kontakt- och identitetsuppgifter
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Namn och kontaktuppgifter (e-post, telefonnummer)</li>
                <li>• Titel, roll och arbetsgivare</li>
                <li>• Personnummer eller annan identitetsbeteckning när det är nödvändigt för tydlig identifiering</li>
                <li>• Korrespondens och möteshistorik</li>
              </ul>
            </div>
            <div className="bg-light-gray rounded-xl p-5">
              <h4 className="font-heading font-bold text-nordic-blue mb-3 text-sm uppercase tracking-wide">
                Användnings- och kommunikationsdata
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Uppgifter kopplade till förfrågningar, avtal och uppdrag</li>
                <li>• Uppgifter kopplade till kurser, event och nätverksträffar</li>
                <li>• Tekniska data från webbplatsen (t.ex. IP-adress, webbläsare, användningsmönster)</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            Vi behandlar normalt inte känsliga personuppgifter. Om du lämnar uppgifter om exempelvis specialkost vid
            event raderas dessa efter genomfört arrangemang. Personnummer behandlas endast när det är särskilt motiverat
            av ändamålet, när det finns en tydlig rättslig grund och med förstärkta säkerhetsåtgärder.
          </p>
        </div>
      ),
    },
    {
      id: 'purposes',
      title: '3. Ändamål och laglig grund',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Vi behandlar personuppgifter endast när vi har en laglig grund enligt GDPR. De huvudsakliga ändamålen och
            rättsliga grunderna är:
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-light-gray rounded-xl p-5">
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">
                A. Leverans av tjänster och uppdrag
              </h4>
              <p className="text-sm mb-2">
                För att kunna planera, genomföra och följa upp våra erbjudanden, såsom Arkitekturell
                Snabbgenomlysning, konsultuppdrag, coachning och relaterade tjänster. I vissa fall kan vi behöva
                personnummer för att säkert identifiera dig som avtalspart.
              </p>
              <p className="text-xs text-dark-gray/80">
                Laglig grund: Fullgörande av avtal och berättigat intresse (effektiv kommunikation och
                kvalitetssäkring).
              </p>
            </div>
            <div className="bg-white border border-light-gray rounded-xl p-5">
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">
                B. Kommunikation och relationsbyggande
              </h4>
              <p className="text-sm mb-2">
                För att kunna svara på förfrågningar, upprätthålla professionella kontakter, bjuda in till relevanta
                aktiviteter och dela kunskap inom våra expertområden.
              </p>
              <p className="text-xs text-dark-gray/80">
                Laglig grund: Berättigat intresse (nätverks- och kundrelationer) eller samtycke där så krävs
                (exempelvis vissa utskick).
              </p>
            </div>
            <div className="bg-white border border-light-gray rounded-xl p-5">
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">
                C. Marknadsföring, kurser och nyhetsbrev
              </h4>
              <p className="text-sm mb-2">
                För att kunna bjuda in till kurser, seminarier, event och skicka riktad information om våra tjänster
                när du har visat intresse för dessa.
              </p>
              <p className="text-xs text-dark-gray/80">
                Laglig grund: Samtycke eller berättigat intresse i enlighet med marknadsföringslagstiftningen.
              </p>
            </div>
            <div className="bg-white border border-light-gray rounded-xl p-5">
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">
                D. Administration, uppföljning och regelefterlevnad
              </h4>
              <p className="text-sm mb-2">
                För att hantera fakturering, avtalsdokumentation, kvalitetsuppföljning, intern statistik samt
                efterlevnad av rättsliga förpliktelser. Personnummer kan förekomma när det krävs enligt lag eller
                när det är nödvändigt för säker identifiering i avtal och annan dokumentation.
              </p>
              <p className="text-xs text-dark-gray/80">
                Laglig grund: Rättslig förpliktelse och berättigat intresse (effektiv och säker verksamhetsstyrning).
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'sources-retention',
      title: '4. Varifrån uppgifterna kommer och hur länge vi sparar dem',
      content: (
        <div className="text-dark-gray space-y-4">
          <p className="mb-2">
            Vi samlar in personuppgifter främst direkt från dig, till exempel när du:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>kontaktar oss via vår webbplats, e-post eller telefon</li>
            <li>delar dina uppgifter i samband med uppdrag, möten eller workshops</li>
            <li>anmäler dig till event, kurser, nyhetsbrev eller nätverk</li>
            <li>interagerar med vårt innehåll eller våra tjänster digitalt</li>
          </ul>
          <p className="text-sm">
            Vi kan i vissa fall komplettera uppgifter med information från offentliga källor eller professionella
            nätverk när det är relevant och förenligt med dina rättigheter.
          </p>
          <p className="text-sm">
            Personuppgifter sparas endast så länge de behövs för det ändamål de samlades in för, eller så länge vi är
            skyldiga enligt lag (t.ex. bokföringslagstiftning). Uppgifter som behandlas med stöd av samtycke raderas
            eller anonymiseras om du återkallar ditt samtycke eller när de inte längre behövs för det angivna ändamålet.
          </p>
          <p className="text-sm">
            Personnummer sparas endast när det finns ett tydligt behov av säker identifiering och tas bort eller
            anonymiseras när det inte längre är nödvändigt för detta syfte eller för att uppfylla rättsliga krav.
          </p>
        </div>
      ),
    },
    {
      id: 'sharing',
      title: '5. Delning av personuppgifter',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Vi säljer inte personuppgifter. Vi delar endast personuppgifter när det är nödvändigt och proportionerligt
            för angivna ändamål:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              med leverantörer och samarbetspartners som hjälper oss att leverera våra tjänster (t.ex. IT-,
              moln- och analysleverantörer), enligt personuppgiftsbiträdesavtal
            </li>
            <li>
              med myndigheter eller andra aktörer om det krävs enligt lag, myndighetsbeslut eller för att skydda våra
              rättsliga intressen
            </li>
          </ul>
          <p className="text-sm">
            Vi strävar efter att behandla personuppgifter inom EU/EES. Om överföring till land utanför EU/EES skulle
            bli aktuellt säkerställer vi lämpliga skyddsåtgärder enligt GDPR, exempelvis standardavtalsklausuler.
          </p>
        </div>
      ),
    },
    {
      id: 'security-cookies',
      title: '6. Informationssäkerhet, cookies och analys',
      content: (
        <div className="text-dark-gray space-y-4">
          <div>
            <h4 className="font-heading font-semibold text-nordic-blue mb-2">Informationssäkerhet</h4>
            <p className="text-sm">
              Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda personuppgifter mot
              obehörig åtkomst, förändring, spridning eller förstöring. Endast personer med ett faktiskt behov av
              uppgifterna för att utföra sitt arbete har åtkomst.
            </p>
            <p className="text-sm">
              Uppgifter som kan användas för stark identifiering, såsom personnummer, hanteras med särskilt höga krav
              på åtkomstkontroll, loggning och lagring.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-nordic-blue mb-2">Cookies och webbstatistik</h4>
            <p className="text-sm mb-2">
              Vår webbplats kan använda cookies och liknande tekniker för att förbättra användarupplevelsen, anpassa
              innehåll och samla in anonymiserad statistik om hur webbplatsen används.
            </p>
            <p className="text-sm">
              Du kan normalt hantera eller stänga av cookies via inställningarna i din webbläsare. Om du väljer att
              blockera cookies kan vissa funktioner på webbplatsen fungera sämre.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'rights',
      title: '7. Dina rättigheter enligt GDPR',
      content: (
        <div className="text-dark-gray space-y-4">
          <p>
            Som registrerad har du flera rättigheter kopplade till vår behandling av dina personuppgifter. Du har
            bland annat rätt att:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>begära bekräftelse på om vi behandlar personuppgifter om dig och få tillgång till dessa</li>
            <li>begära rättelse av felaktiga eller ofullständiga uppgifter</li>
            <li>
              begära radering (&ldquo;rätten att bli bortglömd&rdquo;) när uppgifterna inte längre behövs eller när
              behandlingen grundar sig på samtycke som återkallas
            </li>
            <li>begära begränsning av behandlingen i vissa situationer</li>
            <li>invända mot behandling som grundar sig på berättigat intresse</li>
            <li>få ut uppgifter du själv lämnat i ett strukturerat, allmänt använt och maskinläsbart format</li>
          </ul>
          <p className="text-sm">
            Om du vill utöva någon av dina rättigheter kontaktar du oss via de kontaktuppgifter som anges nedan. Vi
            kan behöva be dig om ytterligare information för att säkerställa din identitet innan vi hanterar din
            begäran.
          </p>
          <p className="text-sm">
            Du har också rätt att lämna in klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att vår
            behandling strider mot gällande dataskyddsregler.
          </p>
        </div>
      ),
    },
    {
      id: 'contact-changes',
      title: '8. Kontaktuppgifter och ändringar i policyn',
      content: (
        <div className="text-dark-gray space-y-4">
          <div className="bg-light-gray rounded-xl p-5">
            <h4 className="font-heading font-semibold text-nordic-blue mb-2">Kontakt kring dataskydd</h4>
            <p className="text-sm mb-1">
              Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter kan du kontakta oss:
            </p>
            <ul className="text-sm space-y-1">
              <li>• E-post: <a href="mailto:info@norhill.se" className="text-nordic-blue underline">info@norhill.se</a></li>
              <li>• Kontaktformulär: via sidan <Link to="/contact" className="text-nordic-blue underline">Kontakt</Link></li>
            </ul>
          </div>
          <p className="text-sm">
            Vi kan komma att uppdatera denna integritetspolicy för att återspegla förändringar i vår behandling eller
            gällande lagstiftning. Den senaste versionen finns alltid publicerad på denna sida. Vid väsentliga ändringar
            informerar vi, där det är lämpligt, via e-post eller andra kanaler.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div>
      <Seo
        title="Integritetspolicy"
        description="Norhills integritetspolicy beskriver hur vi behandlar personuppgifter i enlighet med GDPR. Läs om dina rättigheter, dataskydd och hur vi skyddar din information."
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
              <span className="text-5xl">🛡️</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold">
                  Integritetspolicy
                </h1>
                <p className="text-sky-blue text-lg mt-2">
                  Hur Norhill skyddar dina personuppgifter
                </p>
              </div>
            </div>
            <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
              Din integritet är viktig för oss. Här beskriver vi hur vi samlar in, använder och skyddar personuppgifter
              samt vilka rättigheter du har enligt dataskyddslagstiftningen.
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
                { icon: '🔐', label: 'GDPR', desc: 'Behandlar endast nödvändiga uppgifter' },
                { icon: '⚖️', label: 'Laglig grund', desc: 'Tydliga ändamål och rättslig grund' },
                { icon: '🧾', label: 'Dina rättigheter', desc: 'Tillgång, rättelse och radering' },
                { icon: '📩', label: 'Enkel kontakt', desc: 'Kontakta oss vid frågor eller önskemål' },
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


