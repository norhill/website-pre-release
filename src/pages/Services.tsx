import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function Services() {
  const highlightedServices = [
    {
      id: 'gratis-snabbgenomlysning',
      name: 'Arkitekturell Snabbgenomlysning',
      badge: 'Kostnadsfritt',
      badgeColor: 'bg-red-700',
      description: 'En oberoende blick på din IT-arkitektur och tekniska utmaningar. 90 minuters genomgång med konkreta rekommendationer och skriftlig sammanfattning.',
      features: [
        '60 min digital genomgång av arkitektur och utmaningar',
        '30 min sammanfattning med nästa steg',
        'Skriftlig rapport (1–2 sidor)',
        'Allt under ömsesidigt sekretessavtal (NDA)',
      ],
      targetAudience: 'IT-chefer, CTO, organisationer som behöver en oberoende blick',
      link: '/services/gratis-snabbgenomlysning',
      bgGradient: 'from-red-700/70 to-amber-gold/80',
      textColor: 'text-red-700/100',
      icon: '✨',
      accentColor: 'bg-amber-gold',
      duration: '60+30 minuter - Kostnadsfritt',
    },
    {
      id: 'it-arkitekt-coach',
      name: 'IT Coach',
      badge: 'Månadsabonnemang',
      badgeColor: 'bg-forest-green',
      description: 'Din externa IT-arkitekt som sparringpartner. 4 timmar per månad med senior arkitekt för strategiska IT-beslut och arkitekturfrågor.',
      features: [
        'Fast månatligt strategiskt möte (2 timmar)',
        'Standby för akuta frågor (2 timmar/månad)',
        'Oberoende perspektiv på tekniska beslut',
        'Bygger intern kompetens genom sparring',
      ],
      targetAudience: 'Ledare, VD/IT-chefer',
      link: '/services/it-arkitekt-coach',
      bgGradient: 'from-forest-green to-sage-green',
      textColor: 'text-forest-green',
      icon: '💼',
      accentColor: 'bg-forest-green',
      duration: '4 timmar/månad',
    },
  ]

  const services = [
    {
      id: 'snabb-utvardering',
      name: 'Snabb utvärdering',
      description: 'Snabb utvärdering av nuvarande arkitekturmognad. Som oberoende holistisk pragmatisk arkitekt tar jag på tre dagar fram en ärlig bild av er arkitektur och ger konkreta förslag på vägar framåt.',
      features: [
        '1 dag workshop',
        '1 dag analys',
        '1 dag presentation',
        'Ger omedelbart värde utan långa projekt',
      ],
      targetAudience: 'IT-ledningsgrupp, CDO, arkitekturansvarig',
      bgGradient: 'from-nordic-blue to-sky-blue',
      textColor: 'text-nordic-blue',
      icon: '🔍',
      accentColor: 'bg-nordic-blue',
      duration: '3 dagar (16 timmar)',
    },
    {
      id: 'cost-optimization-scan',
      name: 'Kostnadsoptimering',
      description: 'Snabb jakt på onödiga IT-kostnader. Granskning av licenslistor, molnfakturor och dubblerad funktionalitet för att hitta pengar som läcker ut ur er IT-miljö.',
      features: [
        'Granskning av licenslistor och molnfakturor',
        'Identifiering av dubblerad funktionalitet',
        'Hitta minst 3× investeringen i besparingar',
        'Direkt ROI – tjänsten betalar ofta sig själv',
      ],
      targetAudience: 'CFO, IT-chef',
      bgGradient: 'from-forest-green to-sage-green',
      textColor: 'text-forest-green',
      icon: '💰',
      accentColor: 'bg-forest-green',
      duration: '1 vecka (25–30 timmar)',
    },
    {
      id: 'verklighetskontroll',
      name: 'Verklighetskontroll',
      description: 'Ge ledning och teknik en gemensam, ärlig bild av nuläget: vad som faktiskt bär verksamheten, vad som är skört och vilka förenklingar som är farliga.',
      features: [
        'Intervjuer med 5–8 nyckelpersoner',
        'Analys av arkitektur och beroenden',
        'Identifiering av kritiska personer och kunskap',
        'Kort, konkret rapport + muntlig genomgång',
      ],
      targetAudience: 'Ledning och teknik som behöver gemensam förståelse',
      bgGradient: 'from-amber-gold to-yellow-100/80',
      textColor: 'text-amber-gold',
      icon: '🏗️',
      accentColor: 'bg-amber-gold',
      duration: '5 dagar (40 timmar)',
    },
    {
      id: 'beslutsanalys',
      name: 'Beslutsanalys',
      description: 'För ledningsgrupper som ska fatta beslut. Jag säger inte vad ni ska göra – utan visar vad konsekvenserna av era beslut är.',
      features: [
        'Deltar i 2–3 beslutsmöten',
        'Identifierar förenklade narrativ och felaktiga antaganden',
        'Beslutsunderlag på max 5 sidor',
        'Tydliga konsekvenskedjor: "om ni gör X, händer Y"',
      ],
      targetAudience: 'Organisationer inför AI-införande, outsourcing eller plattformsbyte',
      bgGradient: 'from-deep-plum to-burgundy',
      textColor: 'text-deep-plum',
      icon: '⚖️',
      accentColor: 'bg-deep-plum',
      duration: '4–5 dagar över 4 veckor',
    },
    {
      id: 'tech-talks',
      name: 'Tech Talks',
      description: 'Engagerande presentationer om arkitektur på alla nivåer – från helhetsstrategi till teknisk implementation. Anpassat till er organisation.',
      features: [
        'Anpassade presentationer på valfritt nivå',
        'Praktiska exempel från verkliga organisationer',
        'Interaktiva Q&A och diskussioner',
        'Kan levereras som enstaka sessioner eller serie',
      ],
      targetAudience: 'Ledningsgrupper, arkitekter, tech leads, produktägare',
      bgGradient: 'from-slate-gray to-slate-gray/80',
      textColor: 'text-slate-gray',
      icon: '🎤',
      accentColor: 'bg-slate-gray',
      duration: '0,5–1,5 timme per session',
    },
    {
      id: 'strategisk-it-coach',
      name: 'Strategisk IT Coach',
      description: 'Ett bollplank när arkitekturfrågor blivit politiska. En senior arkitekt som inte vill ha din roll – bara ditt bästa resultat.',
      features: [
        '90 minuter varannan vecka',
        'Fokus på pågående beslut och verkliga trade-offs',
        'Inga leverabler, ingen dokumentation',
        'Bara ärliga samtal som gör beslut bättre',
      ],
      targetAudience: 'CIO/CTO i organisationer där arkitekturen är polariserad',
      bgGradient: 'from-nordic-blue to-forest-green',
      textColor: 'text-nordic-blue',
      icon: '🧭',
      accentColor: 'bg-nordic-blue',
      duration: '~12 sessioner över 6 månader',
    },
  ]

  const engagementTypes = [
    {
      type: 'Snabbgenomlysning',
      description: 'Gratis 90-minuters arkitekturell genomlysning med NDA',
      icon: '✨',
      color: 'from-red-700/70 to-amber-gold/80',
      link: '/services/gratis-snabbgenomlysning',
    },
    {
      type: 'Coaching',
      description: 'Löpande strategiskt stöd som IT Coach',
      icon: '🤝',
      color: 'from-nordic-blue to-sky-blue',
      link: '/services/it-arkitekt-coach',
    },
    {
      type: 'Bedömning & Analys',
      description: 'Snabba assessments med konkreta rekommendationer',
      icon: '🔍',
      color: 'from-forest-green to-sage-green',
      link: undefined,
    },
    {
      type: 'Beslutsstöd',
      description: 'Stöd vid kritiska beslut om transformation och arkitektur',
      icon: '⚖️',
      color: 'from-deep-plum to-burgundy',
      link: undefined,
    },
  ]

  return (
    <div>
      <Seo
        title="Tjänster"
        description="IT-arkitektur, strategisk rådgivning och coaching. Från kostnadsfri arkitekturell snabbgenomlysning till långsiktigt IT-coachingabonnemang. Alla engagemang under NDA."
      />
      {/* Hero Section */}
      <section className="bg-[#d8dbd9] section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-nordic-blue mb-6">
              Våra tjänster
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray leading-relaxed mb-4">
              IT-arkitektur, strategisk rådgivning och coaching för organisationer som vill förstå sin verklighet, fatta bättre beslut och bygga hållbara förmågor.
            </p>
            <p className="text-sm text-dark-gray/60">
              Alla engagemang omfattas av{' '}
              <Link to="/documents/mutual-nda" className="text-nordic-blue hover:text-forest-green underline">
                ömsesidigt sekretessavtal (NDA)
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlighted Services: Gratis + Coach */}
      <section className="section-padding bg-gradient-to-b from-white to-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Kom igång</h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Börja med en kostnadsfri snabbgenomlysning eller teckna ett coaching-abonnemang för löpande stöd
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {highlightedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <Link to={service.link} className="block h-full">
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col border-2 border-transparent hover:border-nordic-blue/20">
                    {/* Gradient accent bar */}
                    <div className={`h-2 bg-gradient-to-r ${service.bgGradient}`} />

                    {/* Badge */}
                    <div className="px-8 pt-6">
                      <span className={`inline-block ${service.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Icon and header */}
                    <div className="p-8 pb-4">
                      <div className="mb-4">
                        {/*<div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center text-3xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <img src={`/images/services/${service.id}.png`} alt={service.name} className="w-16 h-16 rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300" />
                        */}
                        <h3 className={`text-2xl font-heading font-bold ${service.textColor} mb-2`}>
                          {service.name}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          {/*<span className="text-sm text-dark-gray/70 bg-light-gray rounded-full px-3 py-1">{service.pricing}</span>*/}
                          <span className="text-sm text-dark-gray/70 bg-light-gray rounded-full px-3 py-1">{service.duration}</span>
                        </div>
                        <p className="text-dark-gray leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="px-8 pb-6 flex-grow">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-dark-gray text-sm">
                            <span className={`${service.accentColor} text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0`}>✓</span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="px-8 pb-8 mt-auto">
                      <div className="pt-4 border-t border-medium-gray flex items-center justify-between">
                        <div>
                          <p className="text-xs text-dark-gray/70 font-medium uppercase tracking-wide mb-1">Målgrupp</p>
                          <p className="text-sm text-dark-gray italic">{service.targetAudience}</p>
                        </div>
                        <span className={`${service.textColor} text-sm font-semibold group-hover:translate-x-1 transition-transform`}>
                          Läs mer →
                        </span>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">Andra tjänster</h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              Från bedömning och beslutsstöd till långsiktigt strategiskt stöd
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <a href="/contact" className="block h-full">
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Gradient accent bar */}
                  <div className={`h-2 bg-gradient-to-r ${service.bgGradient}`} />

                  {/* Icon and header */}
                  <div className="p-8 pb-4">
                    <div className="mb-4">
                      {/*<div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>*/}
                      <h3 className={`text-xl font-heading font-bold ${service.textColor} mb-2`}>
                        {service.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {/*<span className="text-xs text-dark-gray/70 bg-light-gray rounded-full px-2.5 py-0.5">{service.pricing}</span>*/}
                        <span className="text-xs text-dark-gray/70 bg-light-gray rounded-full px-2.5 py-0.5">{service.duration}</span>
                      </div>
                      <p className="text-dark-gray leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-8 pb-6 flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-dark-gray text-sm">
                          <span className={`${service.accentColor} text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] mr-2 mt-0.5 flex-shrink-0`}>✓</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target audience footer */}
                  <div className="px-8 pb-8 mt-auto">
                    <div className="pt-4 border-t border-medium-gray">
                      <p className="text-xs text-dark-gray/70 font-medium uppercase tracking-wide mb-1">Målgrupp</p>
                      <p className="text-sm text-dark-gray italic">{service.targetAudience}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-nordic-blue mb-4">
              Engagemangstyper
            </h2>
            <p className="text-lg md:text-xl text-dark-gray max-w-3xl mx-auto">
              Flexibla engagemangstyper anpassade efter er organisations behov
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative"
              >
                {type.link ? (
                  <Link to={type.link} className="block h-full">
                    <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full p-6 border-2 border-transparent hover:border-medium-gray">
                      <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          {type.icon}
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-nordic-blue mb-3">{type.type}</h3>
                        <p className="text-dark-gray text-sm leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full p-6 border-2 border-transparent hover:border-medium-gray">
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        {type.icon}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-nordic-blue mb-3">{type.type}</h3>
                      <p className="text-dark-gray text-sm leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NDA / Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-nordic-blue/5 to-forest-green/5 rounded-2xl p-8 md:p-12 border border-nordic-blue/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🔒</span>
                <div>
                  <h2 className="text-3xl font-heading font-bold text-nordic-blue">Konfidentialitet &amp; sekretess</h2>
                  <p className="text-dark-gray mt-1">Alla engagemang sker under ömsesidigt sekretessavtal</p>
                </div>
              </div>
              <p className="text-dark-gray mb-6 leading-relaxed">
                Vi tar konfidentialitet på allvar. Innan varje engagemang – inklusive den kostnadsfria snabbgenomlysningen – tecknar vi ett
                ömsesidigt sekretessavtal (NDA) som skyddar båda parter. All information behandlas strikt konfidentiellt och delas
                aldrig med tredje part utan ditt uttryckliga godkännande.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/documents/mutual-nda"
                  className="inline-flex items-center gap-2 bg-nordic-blue text-white px-5 py-2.5 rounded-lg hover:bg-nordic-blue/90 transition-colors font-medium text-sm"
                >
                  🔒 Läs vårt sekretessavtal
                </Link>
                <Link
                  to="/services/gratis-snabbgenomlysning"
                  className="inline-flex items-center gap-2 bg-white text-nordic-blue px-5 py-2.5 rounded-lg hover:bg-light-gray transition-colors font-medium text-sm border border-nordic-blue/20"
                >
                  ✨ Boka gratis snabbgenomlysning
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-nordic-blue to-forest-green text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Redo att komma igång?
            </h2>
            <p className="text-xl mb-8 text-sky-blue max-w-2xl mx-auto">
              Börja med en kostnadsfri snabbgenomlysning eller kontakta mig för att diskutera vilken tjänst som passar bäst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/gratis-snabbgenomlysning" className="btn-primary bg-amber-gold hover:bg-amber-gold/90">
                Boka gratis snabbgenomlysning
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10">
                Kontakta mig
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
