import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function Home() {
  const benefits = [
    {
      title: 'Strategisk vägledning',
      description: 'Oberoende expertrådgivning kring IT-arkitektur, förmågeutveckling och prioritering',
      icon: '',//🎯
    },
    {
      title: 'Helhetsperspektiv',
      description: 'Strategi + implementering + balanserade prioriteringar',
      icon: '',//🌐
    },
    {
      title: 'Långsiktigt värde',
      description: 'Hållbar tillväxt bortom kortsiktiga vinster',
      icon: '',//📈
    },
    {
      title: 'Etisk grund',
      description: 'Arbetar med etiska principer och transparent kommunikation',
      icon: '',//🤝
    },
  ]

  return (
    <div>
      <Seo
        title="IT-arkitektur, strategi och förmågeutveckling"
        description="Norhill hjälper företag att förstå och utveckla sina affärsmässiga förmågor genom strategisk IT-arkitektur, rådgivning och coaching för hållbar tillväxt."
      />
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center shadow-xl" style={{ backgroundImage: 'url(/images/splash.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container-custom relative w-full">
          <div className="max-w-5xl mx-auto text-center">
            <div style={{ mixBlendMode: 'difference' }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 leading-relaxed"
                style={{ 
                  textShadow: 'none',
                  color: 'lightgray'
                }}
              >
                Norhill hjälper företag att förstå och utveckla sina affärsmässiga förmågor genom strategisk analys, konsulttjänster och utvecklingsprogram.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ isolation: 'isolate' }}
            >
              <Link to="/contact" className="btn-primary">
                Kontakta oss, vi älskar att samtala!
              </Link>
              <Link to="/services" className="btn-outline">
                Boka <span className="font-bold text-red-700">kostnadsfri</span> genomgång med senior IT-arkitekt
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
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
              Varför Norhill?
            </h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Vi stödjer små och nystartade företag med prioriteringshjälp, och hjälper etablerade företag att anpassa sina förmågor till strategiska behov.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-heading font-semibold text-nordic-blue mb-3">
                  {item.point}
                </h3>
                <p className="text-dark-gray">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*}

      {/* Key Benefits */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-nordic-blue mb-4">
              Våra nyckelfördelar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-nordic-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-gray">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Component Loader Section */}
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
              Framtida möjligheter
            </h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Utforska interaktiva komponenter som visar våra framtida kapaciteter och tjänster.
            </p>
          </motion.div>

          <ExternalComponentLoader />
        </div>
      </section>*/}

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
              Redo att utveckla era företagsförmågor?
            </h2>
            <p className="text-xl mb-8 text-sky-blue max-w-2xl mx-auto">
              Kontakta idag för ett första samtal
            </p>
            <Link to="/contact" className="btn-primary bg-amber-gold hover:bg-amber-gold/90">
              Boka ett samtal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

