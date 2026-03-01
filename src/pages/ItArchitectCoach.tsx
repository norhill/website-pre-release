import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function ItArchitectCoach() {
  const included = [
    '8 timmar per månad med senior arkitekt',
    'Fast månatligt strategiskt möte (2 timmar)',
    'Standby för akuta frågor (6 timmar/månad)',
    'Snabb respons på arkitekturfrågor',
    'Oberoende perspektiv på tekniska beslut',
    'Ingen operativt ansvar – bara strategiskt stöd',
  ]

  const notIncluded = [
    'Operativt arbete eller implementation',
    'Detaljerad systemdesign eller kodning',
    'Projektledning eller teamledning',
    'Dokumentation eller rapportering (utöver mötesanteckningar)',
  ]

  const useCases = [
    {
      title: 'Strategiska beslut',
      icon: '🧭',
      examples: [
        'Ska vi satsa på AI lösningar?',
        'Vad innebär det beslut vi behöver ta egentligen?',
        'Har vi de förmågor som behövs för att genomföra en satsning?',
        'Hur hanterar vi vår tekniska skuld?',
        'Ska vi outsourca denna del?',
      ],
    },
    {
      title: 'Arkitekturfrågor',
      icon: '🏗️',
      examples: [
        'Hur kan vi få struktur på vår arkitektur?',
        'Vilka är våra största risker?',
        'Hur bygger vi en stabil dataarkitektur?',
        'Vad betyder denna teknologitrend för oss?',
      ],
    },
    {
      title: 'Transformationer',
      icon: '🔄',
      examples: [
        'Hur planerar vi vår modernisering?',
        'Vad är våra kritiska beroenden?',
        'Hur gör vi arkitekturval i agila team?',
        'Hur stärker vi vår interna förmåga?',
      ],
    },
  ]
  
  const audiences = [
    { icon: '✅', text: 'VD/IT-chef på bolag med 50–200 anställda som behöver senior arkitekturkompetens utan heltid-ansvar' },
    { icon: '✅', text: 'Organisationer som är för små för en heltid-arkitekt men behöver expertstöd vid strategiska IT-beslut' },
    { icon: '✅', text: 'Ledare som behöver någon att bolla stora investeringar med – utan interna politiska intressen' },
    { icon: '✅', text: 'IT-organisationer som vill stärka sin arkitekturkompetens men inte är redo för heltidsanställning' },
    { icon: '✅', text: 'Team som behöver en trygg sparringpartner för komplexa tekniska frågor' },
  ]

  const benefits = [
    { icon: '🎯', title: 'Låg tröskel', desc: 'Tillgång till senior kompetens utan heltidsanställning' },
    { icon: '💰', title: 'Kostnadseffektivt', desc: 'Mycket billigare än heltid-ansvar' },
    { icon: '🚀', title: 'Flexibelt', desc: 'Använd tiden när du behöver den' },
    { icon: '🎓', title: 'Utvecklande', desc: 'Bygger intern kompetens genom sparring' },
  ]

  const steps = [
    { num: '1', title: 'Start', desc: 'Vi träffas på plats för att förstå dina behov och utmaningar' },
    { num: '2', title: 'Månadsmöte', desc: 'Fast månatligt möte (2 timmar) för strategiska diskussioner' },
    { num: '3', title: 'Standby', desc: 'Du kan höra av dig vid akuta frågor (6 timmar/månad)' },
    { num: '4', title: 'Uppföljning', desc: 'Vi utvärderar regelbundet om tjänsten ger värde' },
    { num: '5', title: 'Anpassning', desc: 'Vi justerar fokus baserat på dina behov' },
  ]

  return (
    <div>
      <Seo
        title="IT Coach – Din externa IT-arkitekt"
        description="Få tillgång till en senior IT-arkitekt som sparringpartner. 8 timmar per månad med strategiskt stöd, oberoende perspektiv och arkitekturrådgivning."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'IT Coach',
          provider: { '@type': 'Organization', name: 'Norhill AB' },
          description: 'Din externa IT-arkitekt och sparringpartner. 8 timmar per månad med senior arkitekt för strategiska IT-beslut.',
          areaServed: { '@type': 'Country', name: 'Sweden' },
        }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-nordic-blue via-slate-gray to-nordic-blue text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <span className="text-amber-gold font-bold text-sm uppercase tracking-wider">Månadsabonnemang</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80 text-sm">4 timmar/månad</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80 text-sm">Kontakta oss för pris</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              IT Coach
            </h1>
            <p className="text-xl md:text-2xl text-sky-blue leading-relaxed mb-4">
              Din externa IT-arkitekt och sparringpartner
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Få tillgång till en erfaren chefsarkitekt när du behöver det, utan att behöva anställa en.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-amber-gold hover:bg-amber-gold/90">
                Kom igång
              </Link>
              <Link to="/services/gratis-snabbgenomlysning" className="btn-outline border-white text-white hover:bg-white/10">
                Prova gratis genomlysning först
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vem är det för */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Vem är det för?</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {audiences.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-light-gray rounded-xl p-5"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-dark-gray">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vad du får / Vad ingår INTE */}
      <section className="section-padding bg-gradient-to-b from-light-gray to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Vad du får</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vad ingår */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-xl font-heading font-bold text-forest-green mb-6 flex items-center gap-2">
                <span className="text-2xl">✅</span> Vad ingår
              </h3>
              <ul className="space-y-4">
                {included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-dark-gray">
                    <span className="bg-forest-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vad ingår INTE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-xl font-heading font-bold text-slate-gray mb-6 flex items-center gap-2">
                <span className="text-2xl">❌</span> Vad ingår inte
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-dark-gray">
                    <span className="bg-slate-gray text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Användningsexempel */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Exempel på när du använder tjänsten</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-light-gray rounded-2xl p-8"
              >
                {/*<div className="text-4xl mb-4">{useCase.icon}</div>*/}
                <h3 className="text-xl font-heading font-bold text-nordic-blue mb-4">{useCase.title}</h3>
                <ul className="space-y-3">
                  {useCase.examples.map((ex, idx) => (
                    <li key={idx} className="text-dark-gray text-sm italic">&ldquo;{ex}&rdquo;</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Varför det fungerar */}
      <section className="section-padding bg-gradient-to-br from-light-gray to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Varför det fungerar</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all"
              >
                {/*<div className="text-3xl mb-3">{b.icon}</div>*/}
                <h3 className="text-lg font-heading font-bold text-nordic-blue mb-2">{b.title}</h3>
                <p className="text-dark-gray text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hur det fungerar */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Hur det fungerar</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-nordic-blue/20 hidden md:block" />
              <div className="space-y-6">
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
                    <div className="bg-light-gray rounded-xl p-5 flex-grow">
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

      {/* Pris och villkor */}
      <section className="section-padding bg-gradient-to-br from-nordic-blue/5 to-forest-green/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">Pris och villkor</h2>
              <div className="text-5xl font-heading font-bold text-forest-green mb-2">Kontakta oss för pris</div>
              <p className="text-dark-gray mb-8">per månad (exkl. moms)</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
                <div className="bg-light-gray rounded-xl p-4">
                  <p className="text-xs text-dark-gray/60 uppercase tracking-wide mb-1">Engagemang</p>
                  <p className="text-dark-gray font-semibold">Minst 3 månader</p>
                </div>
                <div className="bg-light-gray rounded-xl p-4">
                  <p className="text-xs text-dark-gray/60 uppercase tracking-wide mb-1">Uppsägningstid</p>
                  <p className="text-dark-gray font-semibold">1 månad</p>
                </div>
                <div className="bg-light-gray rounded-xl p-4">
                  <p className="text-xs text-dark-gray/60 uppercase tracking-wide mb-1">Övertid</p>
                  <p className="text-dark-gray font-semibold text-sm">Diskuteras vid behov</p>
                </div>
              </div>

              <p className="text-sm text-dark-gray/60 mb-8">
                Alla engagemang omfattas av ömsesidigt sekretessavtal.{' '}
                <Link to="/documents/mutual-nda" className="text-nordic-blue hover:text-forest-green underline">
                  Läs vårt NDA
                </Link>
              </p>

              <Link to="/contact" className="btn-primary bg-nordic-blue hover:bg-nordic-blue/90 inline-block text-white">
                Kontakta för att komma igång
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
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Vill du veta mer?
            </h2>
            <p className="text-xl text-sky-blue mb-8 max-w-2xl mx-auto">
              Boka en kort digital kaffe (30 min) för att diskutera dina behov – jag svarar ärligt om det är rätt lösning för dig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-amber-gold hover:bg-amber-gold/90">
                Boka ett samtal
              </Link>
              <Link to="/services/gratis-snabbgenomlysning" className="btn-outline border-white text-white hover:bg-white/10">
                Testa med gratis genomlysning först
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

