import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function MutualNda() {
  const sections = [
    {
      id: 'definitions',
      title: '1. Definitioner',
      content: (
        <>
          <p className="mb-4">
            <strong>&ldquo;Konfidentiell Information&rdquo;</strong> avser all icke-offentlig, proprietär eller konfidentiell
            information som lämnas ut av någon av parterna till den andra, oavsett om den lämnas muntligt, skriftligt,
            elektroniskt eller i annan form.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-light-gray rounded-xl p-5">
              <h4 className="font-heading font-bold text-nordic-blue mb-3 text-sm uppercase tracking-wide">Från kunden till Norhill</h4>
              <ul className="space-y-2 text-sm text-dark-gray">
                <li>• IT-arkitektur, systemdesign och tekniska specifikationer</li>
                <li>• Affärsstrategier, planer och finansiell information</li>
                <li>• Tekniska utmaningar och riskbedömningar</li>
                <li>• Organisationsstruktur och beslutsramverk</li>
                <li>• Leverantörsrelationer och avtal</li>
              </ul>
            </div>
            <div className="bg-light-gray rounded-xl p-5">
              <h4 className="font-heading font-bold text-nordic-blue mb-3 text-sm uppercase tracking-wide">Från Norhill till kunden</h4>
              <ul className="space-y-2 text-sm text-dark-gray">
                <li>• Analys, rekommendationer och insikter</li>
                <li>• Bedömningsmetodologier och ramverk</li>
                <li>• Affärspraxis och prissättningsinformation</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-dark-gray">
            <strong>&ldquo;Tjänsten&rdquo;</strong> avser den kostnadsfria 90-minuters Arkitekturella Snabbgenomlysningen eller annat
            konsultengagemang mellan parterna.
          </p>
        </>
      ),
    },
    {
      id: 'obligations',
      title: '2. Ömsesidiga konfidentialitetsförpliktelser',
      content: (
        <>
          <p className="mb-4">Varje part (som &ldquo;Mottagande Part&rdquo;) samtycker till att:</p>
          <ul className="space-y-2 text-dark-gray mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-nordic-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">a</span>
              Hålla den andra partens Konfidentiella Information i sträng konfidentialitet
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-nordic-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">b</span>
              Inte lämna ut Konfidentiell Information till tredje part utan föregående skriftligt samtycke
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-nordic-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">c</span>
              Använda Konfidentiell Information enbart för avtalat syfte
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-nordic-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">d</span>
              Vidta rimliga åtgärder för att skydda informationens konfidentialitet
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-nordic-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">e</span>
              Begränsa tillgången till de som har ett legitimt behov
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-forest-green/5 border border-forest-green/20 rounded-xl p-5">
              <h4 className="font-heading font-bold text-forest-green mb-3">🛡️ Specifikt kundskydd</h4>
              <ul className="space-y-2 text-sm text-dark-gray">
                <li>• Norhill använder inte kundens information för att hjälpa konkurrenter</li>
                <li>• Norhill refererar inte till kunden i marknadsföring utan samtycke</li>
                <li>• Skriftlig sammanfattning behandlas som kundens konfidentiella information</li>
              </ul>
            </div>
            <div className="bg-nordic-blue/5 border border-nordic-blue/20 rounded-xl p-5">
              <h4 className="font-heading font-bold text-nordic-blue mb-3">🔒 Specifikt Norhill-skydd</h4>
              <ul className="space-y-2 text-sm text-dark-gray">
                <li>• Kunden delar inte Norhills bedömningsmetodologier med tredje part</li>
                <li>• Kunden erbjuder Norhill möjlighet att leverera innan konkurrerande konsulter anlitas</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'exceptions',
      title: '3. Undantag',
      content: (
        <div className="text-dark-gray">
          <p className="mb-4">Konfidentialitetsförpliktelserna gäller <strong>inte</strong> för information som:</p>
          <ul className="space-y-2">
            <li>• Är eller blir allmänt tillgänglig utan brott mot detta avtal</li>
            <li>• Var känd för mottagande parten innan utlämnandet</li>
            <li>• Utvecklas självständigt utan användning av konfidentiell information</li>
            <li>• Rättmätigt mottas från tredje part utan konfidentialitetsbrott</li>
            <li>• Krävs att lämnas ut enligt lag, förordning eller domstolsbeslut (med förhandsvarning)</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'deletion',
      title: '4. Återlämnande, radering och kundens rättigheter',
      content: (
        <div className="text-dark-gray">
          <p className="mb-4">Vid begäran eller vid upphörande av diskussioner ska varje part:</p>
          <ul className="space-y-2 mb-6">
            <li>• Återlämna all Konfidentiell Information, eller</li>
            <li>• Förstöra all Konfidentiell Information och intyga detta skriftligt</li>
          </ul>
          <div className="bg-amber-gold/10 border border-amber-gold/30 rounded-xl p-5">
            <h4 className="font-heading font-bold text-amber-gold mb-2">📌 Kundens rätt att begära radering</h4>
            <p className="text-sm">
              Kunden kan <strong>när som helst</strong> begära att Norhill raderar eller återlämnar all Kundens Konfidentiella Information.
              Norhill ska följa en sådan begäran inom <strong>30 dagar</strong>, utom för information som krävs att behållas enligt lag.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'service-provisions',
      title: '5. Tjänstspecifika bestämmelser',
      content: (
        <div className="text-dark-gray">
          <div className="space-y-4">
            <div>
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">Tjänstens karaktär</h4>
              <ul className="space-y-1 text-sm">
                <li>• Gratis snabbgenomlysning tillhandahålls som kostnadsfri tjänst</li>
                <li>• Rekommendationer är preliminära och kan kräva ytterligare analys</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">Användning av information</h4>
              <ul className="space-y-1 text-sm">
                <li>• Norhill kan använda aggregerade, anonymiserade insikter för internt bruk</li>
                <li>• Ingen kundspecifik information identifieras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-nordic-blue mb-2">Skriftlig sammanfattning</h4>
              <ul className="space-y-1 text-sm">
                <li>• Sammanfattningen är enbart för kundens interna bruk</li>
                <li>• Får delas internt men inte distribueras externt utan Norhills samtycke</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'term',
      title: '6. Giltighetstid',
      content: (
        <div className="text-dark-gray">
          <ul className="space-y-2">
            <li>• Avtalet gäller i <strong>3 år</strong> från datum för senaste utlämnandet av Konfidentiell Information</li>
            <li>• Konfidentialitetsförpliktelserna fortsätter <strong>3 år efter upphörande</strong></li>
            <li>• För affärshemligheter gäller konfidentialiteten <strong>obestämd tid</strong></li>
          </ul>
        </div>
      ),
    },
    {
      id: 'liability',
      title: '7. Ansvar och begränsningar',
      content: (
        <div className="text-dark-gray">
          <ul className="space-y-2">
            <li>• Den kostnadsfria tjänsten tillhandahålls &ldquo;som den är&rdquo; utan garanti</li>
            <li>• Norhills totala ansvar för gratis tjänsten är begränsat till SEK 10 000</li>
            <li>• Kunden är ansvarig för beslut baserade på tjänsten</li>
            <li>• Kunden bör söka professionell rådgivning innan implementering</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'general',
      title: '8. Allmänna bestämmelser',
      content: (
        <div className="text-dark-gray">
          <ul className="space-y-2">
            <li>• <strong>Tillämplig lag:</strong> Svensk lag. Tvister avgörs i Stockholms tingsrätt.</li>
            <li>• <strong>Ändringar:</strong> Får endast ändras genom skriftligt avtal undertecknat av båda parter.</li>
            <li>• <strong>Överlåtelse:</strong> Får inte överlåtas utan föregående skriftligt samtycke.</li>
            <li>• <strong>Elektroniska underskrifter:</strong> Giltiga och bindande.</li>
            <li>• <strong>Språk:</strong> Upprättat på svenska och engelska. Vid diskrepans gäller den svenska versionen.</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div>
      <Seo
        title="Ömsesidigt sekretessavtal (NDA)"
        description="Alla Norhills engagemang omfattas av ett ömsesidigt sekretessavtal som skyddar båda parter. Läs om villkoren för konfidentialitet, dataskydd och raderingsrätt."
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
              to="/services"
              className="inline-flex items-center text-sky-blue hover:text-white mb-8 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Tillbaka till tjänster
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🔒</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold">
                  Ömsesidigt Sekretessavtal
                </h1>
                <p className="text-sky-blue text-lg mt-2">Mutual Non-Disclosure Agreement (NDA)</p>
              </div>
            </div>
            <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
              Alla våra engagemang – inklusive den kostnadsfria Arkitekturella Snabbgenomlysningen – omfattas av ett ömsesidigt
              sekretessavtal. Nedan finner du en sammanfattning av avtalets innehåll och villkor.
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
                { icon: '🤝', label: 'Ömsesidigt', desc: 'Båda parter skyddas' },
                { icon: '🔐', label: 'Strikt konfidentialitet', desc: 'All information skyddas' },
                { icon: '🗑️', label: 'Rätt att radera', desc: 'Begär radering när som helst' },
                { icon: '⚖️', label: 'Svensk lag', desc: 'Regleras av svensk rätt' },
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
                <h3 className="text-2xl font-heading font-bold text-nordic-blue mb-4">{section.title}</h3>
                {section.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download / Contact */}
      <section className="section-padding bg-gradient-to-b from-light-gray to-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-gray/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-4">Behöver du det fullständiga avtalet?</h2>
                <p className="text-dark-gray mb-6">
                  Det fullständiga avtalet skickas digitalt för signering innan engagemanget påbörjas.
                  Kontakta mig för att få en kopia eller om du har frågor om villkoren.
                </p>
                <div className="text-sm text-dark-gray/60 mb-8 space-y-1">
                  <p>Mallversion: 1.0</p>
                  <p>Status: Mall för Arkitekturell Snabbgenomlysning och konsulttjänster</p>
                  <p>Juridisk granskning: Rekommenderas före första användningen</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Kontakt
                  </Link>
                  <Link to="/services/gratis-snabbgenomlysning" className="btn-outline">
                    Boka gratis snabbgenomlysning
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

