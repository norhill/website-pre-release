import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function FreeAssessment() {
  const steps = [
    { num: '1', title: 'Boka en session', desc: 'Kontakta via LinkedIn, mejl eller kalenderbokning för att boka en 90-minuters session.' },
    { num: '2', title: 'NDA', desc: 'Vi tecknar ett ömsesidigt sekretessavtal som skickas digitalt för signering.' },
    { num: '3', title: 'Förberedelse', desc: 'Du skickar kortfattad bakgrund (valfritt) – organisation, huvudutmaningar, vad du hoppas få ut.' },
    { num: '4', title: '60 min genomgång', desc: 'Vi går igenom din situation och utmaningar tillsammans – allt under konfidentialitet.' },
    { num: '5', title: 'Sammanfattning', desc: 'Du får konkreta insikter vid 30 min uppföljning, rekommendationer och nästa steg (skickas konfidentiellt).' },
    { num: '6', title: 'Uppföljning', desc: 'Om det finns match diskuterar vi öppet hur vi kan hjälpa vidare.' },
  ]

  const topics = [
    { icon: '', title: 'Arkitekturmognad', desc: 'Var står ni idag och vad behöver ni för att nå nästa nivå?' },
    { icon: '', title: 'Tekniska beslut', desc: 'Står ni inför val av plattform, molnstrategi eller AI-implementering?' },
    { icon: '', title: 'Riskhantering', desc: 'Vilka är era största tekniska risker och hur hanterar ni dem?' },
    { icon: '', title: 'Kostnadseffektivisering', desc: 'Var läcker pengar ut ur er IT-miljö?' },
    { icon: '', title: 'Förmågeutveckling', desc: 'Hur stärker ni er interna arkitekturkompetens?' },
    { icon: '', title: 'Transformation', desc: 'Planerar ni större förändringar och behöver förstå nuvarande läge?' },
  ]

  const audiences = [
    'IT-chefer eller CTO som behöver en oberoende blick på sin arkitektur',
    'Organisationer som står inför tekniska beslut och behöver rådgivning',
    'Team som känner att de har rörigt men inte vet var de ska börja',
    'Ledare som misstänker att dokumentationen inte stämmer med verkligheten',
    'Organisationer som planerar transformationer och vill förstå nuvarande läge',
  ]

  return (
    <div>
      <Seo
        title="Gratis arkitekturell snabbgenomlysning"
        description="Kostnadsfri 90-minuters genomgång av din IT-arkitektur med en senior arkitekt. Konkreta rekommendationer, skriftlig rapport och allt under ömsesidigt NDA."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Arkitekturell Snabbgenomlysning',
          provider: { '@type': 'Organization', name: 'Norhill AB' },
          description: 'Kostnadsfri 90-minuters genomgång av din IT-arkitektur med konkreta rekommendationer och skriftlig rapport.',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
          areaServed: { '@type': 'Country', name: 'Sweden' },
        }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-800/80 via-yellow-700/60 to-yellow-400/60 text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-red-700/60 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <span className="text-amber-gold font-bold text-sm uppercase tracking-wider">Kostnadsfritt</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80 text-sm">90 minuter</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80 text-sm">Under NDA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Arkitekturell Snabbgenomlysning
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray leading-relaxed mb-8">
              En oberoende blick på din IT-arkitektur och tekniska utmaningar. Inget säljtryck – bara ärlig bedömning och konkreta rekommendationer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-amber-gold hover:bg-amber-gold/90">
                Boka din snabbgenomlysning
              </Link>
              <Link to="/documents/mutual-nda" className="btn-outline border-white text-white hover:bg-white/10">
                Läs om vårt sekretessavtal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vad du får */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Vad du får</h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">En genomgång av din arkitektur med konkreta insikter och rekommendationer</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🔍',
                title: '60 min digital genomgång',
                items: [
                  'Analys av nuvarande IT-arkitektur eller tekniska utmaningar',
                  'Identifiering av kritiska beroenden och riskområden',
                  'Diskussion om strategiska IT-beslut',
                  'Omedelbar feedback och första intryck',
                ],
              },
              {
                icon: '📋',
                title: '30 min sammanfattning',
                items: [
                  'Konkreta rekommendationer',
                  'Tydliga nästa steg',
                  'Prioritering av viktigaste områdena',
                  'Öppet samtal om vägen framåt',
                ],
              },
              {
                icon: '📄',
                title: 'Skriftlig rapport (1–2 sidor)',
                items: [
                  'De 3 viktigaste insikterna',
                  'Kortfattade rekommendationer',
                  'Förslag på nästa steg',
                  'Skickas konfidentiellt',
                ],
              },
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-light-gray rounded-2xl p-8 h-full"
              >
                {/*<div className="text-4xl mb-4">{block.icon}</div>*/}
                <h3 className="text-xl font-heading font-bold text-nordic-blue mb-4">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-dark-gray text-sm">
                      <span className="bg-forest-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hur det fungerar */}
      <section className="section-padding bg-gradient-to-b from-light-gray to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Hur det fungerar</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-nordic-blue/20 hidden md:block" />
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-nordic-blue text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                      {step.num}
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                      <h3 className="text-lg font-heading font-bold text-nordic-blue mb-1">{step.title}</h3>
                      <p className="text-dark-gray text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diskussionsämnen */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Exempel på vad vi kan diskutera</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topics.map((topic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-heading font-bold text-nordic-blue mb-2">{topic.title}</h3>
                <p className="text-dark-gray text-sm">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vem passar det för */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Vem passar det för?</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {audiences.map((audience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-light-gray rounded-xl p-5"
              >
                <span className="text-2xl">✅</span>
                <span className="text-dark-gray">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Efteråt */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <h3 className="text-xl font-heading font-bold text-forest-green mb-4">✅ Om vi hittar värdefulla möjligheter</h3>
              <ul className="space-y-3 text-dark-gray text-sm">
                <li>• Vi diskuterar öppet om en mer omfattande analys kan hjälpa</li>
                <li>• Inget säljtryck – bara ärlig bedömning</li>
                <li>• Du bestämmer helt själv om och när du vill gå vidare</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <h3 className="text-xl font-heading font-bold text-nordic-blue mb-4">💡 Om det inte finns match</h3>
              <ul className="space-y-3 text-dark-gray text-sm">
                <li>• Du får ändå värdefulla insikter och rekommendationer</li>
                <li>• Inga förpliktelser eller påföljder</li>
                <li>• Du kan alltid höra av dig senare om situationen förändras</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Konfidentialitet & NDA */}
      <section className="section-padding bg-gradient-to-br from-light-gray to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-nordic-blue"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🔒</span>
                <h2 className="text-3xl font-heading font-bold text-nordic-blue">Konfidentialitet &amp; NDA</h2>
              </div>
              <p className="text-dark-gray text-lg mb-6">
                Alla snabbgenomlysningar sker under strikt konfidentialitet. Innan sessionen tecknar vi ett ömsesidigt sekretessavtal (NDA) som skyddar båda parter.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Ömsesidigt sekretessavtal (NDA) innan sessionen',
                  'All information behandlas konfidentiellt',
                  'Delas aldrig med tredje part utan ditt godkännande',
                  'Skriftlig sammanfattning skickas enbart till dig',
                  'Du kan när som helst begära att informationen raderas',
                  'Tryggt ramverk för öppen diskussion',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="bg-nordic-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-dark-gray text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/documents/mutual-nda"
                className="inline-flex items-center gap-2 text-nordic-blue hover:text-forest-green font-semibold transition-colors"
              >
                Läs hela sekretessavtalet →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-nordic-blue to-forest-green text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Boka din gratis snabbgenomlysning
            </h2>
            <p className="text-xl text-sky-blue mb-2 max-w-2xl mx-auto">
              Inga dolda kostnader. Inga förpliktelser. Bara värde.
            </p>
            <p className="text-sm text-white/60 mb-8">
              Allt sker under ömsesidigt sekretessavtal (NDA) för full konfidentialitet. Erbjudandet gäller för nya kunder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-amber-gold hover:bg-amber-gold/90">
                Kontakt
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

