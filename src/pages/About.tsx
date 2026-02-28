import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function About() {
  const brandPersonality = [
    { trait: 'Pålitlig', description: 'Etisk, transparent och pålitlig - bygger förtroende genom integritet. Tar ansvar och driver förändring' },
    { trait: 'Strategisk', description: 'Tänkande, analytisk och framåtblickande - fokuserad på långsiktigt värde' },
    { trait: 'Oberoende', description: 'Helt oberoende part som tar kundens perspektiv utan att vara bunden till specifika produkter, tjänster eller leverantörer' },
    { trait: 'Stödjande', description: 'Hjälpsam, förstående och samarbetsvillig - partnerar med kunder' },
    { trait: 'Professionell', description: 'Expert, trovärdig och resultatorienterad - levererar kvalitetsvägledning' },
    { trait: 'Närvarande', description: 'Vi strävar efter att vara närvarande för våra kunder, att tillsammans ta ansvar för utmaningar och utveckla företagets förmågor' },
  ]

  return (
    <div>
      <Seo
        title="Om Norhill"
        description="Norhill grundades med visionen att hjälpa företag bygga hållbara organisationer genom förståelse och utveckling av affärsmässiga förmågor. Lär känna vår varumärkespersonlighet och konsult Ingemar Norberg."
      />
      {/* Hero Section */}
      <section className="bg-[#dbdad8] section-padding shadow-xl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-nordic-blue mb-6">
              Om Norhill
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray leading-relaxed">
              Vi grundades med visionen att hjälpa företag bygga hållbara organisationer genom förståelse och utveckling av affärsmässiga förmågor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Personality */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">
              Vår varumärkespersonlighet
            </h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Detta är vad som definierar Norhill och hur vi arbetar med våra kunder.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {brandPersonality.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card bg-white"
              >
                <h3 className="text-xl font-heading font-semibold text-nordic-blue mb-3">
                  {item.trait}
                </h3>
                <p className="text-dark-gray">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Consultants */}
      <section className="bg-gradient-to-r from-nordic-blue to-forest-green section-padding text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
               Lära känna
            </h2>
            {/*}<p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Erfarna konsulter med djup teknisk expertis och strategiskt tänkande.
            </p>*/}
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card bg-white text-center"
            >
              <h3 className="text-2xl font-heading font-bold text-nordic-blue mb-2">
                Ingemar Norberg
              </h3>
              <p className="text-slate-gray font-heading mb-4">
                CIO – Principal Business & IT Consultant
              </p>
              <Link
                to="/cv/ingemar-norberg"
              >
                <img src="/images/ingemar_norberg.jpg" alt="Ingemar Norberg" className="w-60 h-60 rounded-full mx-auto mb-4" />
              </Link>
              <p className="text-dark-gray mb-6 leading-relaxed">
                20+ års erfarenhet inom infrastruktur, molnarkitektur, enterprise architecture och organisatorisk transformation. Expert på att bygga förmågor och driva tjänsteorienterade transformationer.
              </p>
              <Link
                to="/cv/ingemar-norberg"
                className="btn-primary inline-block"
              >
                Curriculum Vitae
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      {/*<section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-6">
                Vår historia
              </h2>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                Norhill grundades med visionen att hjälpa företag bygga förmågor – de processer, rutiner och kunskaper som gör att en organisation kan leverera värde i dag och vara redo för morgondagen.
              </p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                Från Sverige, i norra Europa, vill vi gå före och visa vägen. Att bestiga ett berg kan kännas som en stor utmaning – men det är också en resa värd mödan. Vi hjälper företag att ta sig uppför berg, anta utmaningar, se alternativ och möjliggöra resan framåt.
              </p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                Arkitektur handlar om att läsa kartan och terrängen, se möjligheter längre fram och anpassa rutten när det krävs – till exempel för att ta sig över vatten och samla kraft för nästa etapp. Genom tydlig arkitektur möjliggör vi förändring som håller.
              </p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                Förmågor växer fram under resan. Vissa passager kräver nya förmågor – för att ta sig över en skreva eller en tjärn. Att veta vilka förmågor som behövs idag gör er bättre förberedda för det som väntar.
              </p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                Företag utvecklas ständigt, och det är naturligt. När medarbetare följer med och beslut bygger på en genomtänkt arkitektur blir resan tillsammans meningsfull och hållbar.
              </p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">
                Resan gör vi tillsammans. Välkommen!
              </p>
            </motion.div>
          </div>
        </div>
      </section>*/}

      {/* Mission & Vision */}
      {/*<section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-white"
            >
              <h3 className="text-3xl font-heading font-bold text-nordic-blue mb-4">
                Vårt uppdrag
              </h3>
              <p className="text-dark-gray text-lg leading-relaxed">
                Stödjer företag i utveckling av affärsmässiga förmågor
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-white"
            >
              <h3 className="text-3xl font-heading font-bold text-forest-green mb-4">
                Vår vision
              </h3>
              <p className="text-dark-gray text-lg leading-relaxed">
                Att vara den ledande partnern för företag som söker hållbar utveckling av affärsmässiga förmågor i Sverige, och hjälpa organisationer bygga långsiktigt värde bortom kortsiktiga finansiella vinster.
              </p>
            </motion.div>
          </div>
        </div>
      </section>*/}

      {/* Values */}
      {/*<section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">
              Våra värderingar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card border-l-4 ${value.borderColor}`}
              >
                <h3 className={`text-xl font-heading font-semibold ${value.textColor} mb-3`}>
                  {value.title}
                </h3>
                <p className="text-dark-gray">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  )
}

