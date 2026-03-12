import { motion } from 'framer-motion'
import Seo from '../components/Seo'

export default function Contact() {

  return (
    <div>
      <Seo
        title="Kontakt"
        description="Kontakta Norhill via LinkedIn för en kostnadsfri konsultation eller frågor om IT-arkitektur, rådgivning och coaching. Vi återkommer inom 24 timmar."
      />
      <section className="bg-[#dbdad8] section-padding shadow-xl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-nordic-blue mb-6">
              Kontakta
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray leading-relaxed">
              Boka en kostnadsfri konsultation eller skicka ett meddelande – vi återkommer inom 24 timmar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto space-y-20">
          {/* Primärt kontaktsätt – LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/company/norhill/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2 }}
            className="block rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-amber-gold/60 bg-gradient-to-br from-amber-gold/20 via-amber-gold/10 to-white"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h1 className="text-xl md:text-2xl font-heading font-bold text-near-black">
                    Kontakta via mail
                  </h1>
                </div>
              </div>
              <p className="text-dark-gray leading-relaxed mb-6">
               Skicka gärna ett mail till <a href="mailto:info@norhill.se">info@norhill.se</a>
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h1 className="text-xl md:text-2xl font-heading font-bold text-near-black">
                    Kontakta via LinkedIn
                  </h1>
                </div>
              </div>
              <p className="text-dark-gray leading-relaxed mb-6">
               Gå in på Norhills företagssida och använd alternativet "Skicka meddelande" för att kontakta eller skicka förfrågan.<br/><br/>
               ✓ Passa även på att följa!
              </p>
              <span className="inline-flex items-center gap-2 btn-primary">
                Till Norhills företagssida
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </motion.a>
          {/* Bokningskalender – sex närmaste tider */}
          {/*<motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card border-2 border-amber-gold/60 bg-gradient-to-br from-amber-gold/20 via-amber-gold/10 to-white shadow-xl"
          >
            <div className="inline-flex items-center gap-2 bg-amber-gold backdrop-blur-sm rounded-full px-5 py-2 mb-4">
              <span className="text-red-800/80 font-bold text-sm uppercase tracking-wider">Snabbokning</span>
              <span className="text-white/80">•</span>
              <span className="text-white text-sm">~1 minut</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-near-black mb-2">
              Boka en tid
            </h2>
            <p className="text-dark-gray mb-6">
              Välj en av de lediga tiderna nedan och fyll i dina uppgifter.
            </p>

            {slotsLoading && (
              <p className="text-dark-gray py-4">Hämtar lediga tider...</p>
            )}
            {slotsError && (
              <div className="mb-6 p-4 bg-amber-100 text-near-black rounded-lg">
                <p className="font-medium mb-1">Kunde inte hämta tider</p>
                <p className="text-sm">{slotsError}</p>
              </div>
            )}
            {!slotsLoading && slots.length === 0 && !slotsError && (
              <p className="text-dark-gray py-4">Inga lediga tider just nu. Kontakta gärna via meddelandeformuläret nedan.</p>
            )}

            {!slotsLoading && slots.length > 0 && (
              <>
                <p className="font-heading font-medium text-nordic-blue mb-3">Närmast lediga tiderna:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {slots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedSlotId(selectedSlotId === slot.id ? null : slot.id)}
                      className={`text-left px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                        selectedSlotId === slot.id
                          ? 'border-amber-gold bg-amber-gold text-near-black shadow-md'
                          : 'border-amber-gold/50 bg-amber-gold/10 hover:border-amber-gold hover:bg-amber-gold/20 text-near-black'
                      }`}
                    >
                      {formatSlotDisplay(slot.start, slot.end)}
                    </button>
                  ))}
                </div>

                {selectedSlotId && (
                  <form onSubmit={handleBookingSubmit} className="space-y-4 pt-4 border-t border-medium-gray">
                    <p className="text-sm text-dark-gray">
                      Vald tid: {formatSlotDisplay(slots.find((s) => s.id === selectedSlotId)!.start, slots.find((s) => s.id === selectedSlotId)!.end)}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="booking-name" className="block font-heading font-medium text-nordic-blue mb-1">Namn *</label>
                        <input
                          id="booking-name"
                          name="name"
                          type="text"
                          required
                          value={bookingData.name}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-2 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-email" className="block font-heading font-medium text-nordic-blue mb-1">E-post *</label>
                        <input
                          id="booking-email"
                          name="email"
                          type="email"
                          required
                          value={bookingData.email}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-2 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-company" className="block font-heading font-medium text-nordic-blue mb-1">Företag</label>
                        <input
                          id="booking-company"
                          name="company"
                          type="text"
                          value={bookingData.company}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-2 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-phone" className="block font-heading font-medium text-nordic-blue mb-1">Telefon</label>
                        <input
                          id="booking-phone"
                          name="phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-2 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none"
                        />
                      </div>
                    </div>
                    {bookingStatus === 'error' && bookingError && (
                      <div className="p-3 bg-red-100 text-red-800 rounded-lg text-sm">{bookingError}</div>
                    )}
                    {bookingStatus === 'success' && (
                      <div className="p-3 bg-forest-green text-white rounded-lg">Bokningen är genomförd. Vi återkommer med bekräftelse.</div>
                    )}
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={bookingStatus === 'submitting'}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {bookingStatus === 'submitting' ? 'Bokar...' : 'Bekräfta bokning'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedSlotId(null)}
                        className="btn-outline px-4 py-2"
                      >
                        Avbryt
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </motion.div>*/}

          {/* Meddelandeformulär med reCAPTCHA */}
          {/*<motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card border-2 border-medium-gray bg-light-gray shadow-xl"
          >
            <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-2">
              Skicka ett meddelande
            </h2>
            <p className="text-dark-gray mb-6">
              Ser fram emot att höra från dig! Fyll i information så kontaktar vi dig.
            </p>

            {messageStatus === 'success' && (
              <div className="mb-6 p-4 bg-forest-green text-white rounded-lg">
                Tack för ditt meddelande! Vi återkommer inom 24 timmar.
              </div>
            )}
            {messageStatus === 'error' && messageError && (
              <div className="mb-6 p-4 bg-red-500 text-white rounded-lg">{messageError}</div>
            )}

            <form onSubmit={handleMessageSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="msg-name" className="block font-heading font-medium text-nordic-blue mb-2">Namn *</label>
                  <input
                    type="text"
                    id="msg-name"
                    name="name"
                    required
                    value={messageData.name}
                    onChange={handleMessageChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="msg-email" className="block font-heading font-medium text-nordic-blue mb-2">E-post *</label>
                  <input
                    type="email"
                    id="msg-email"
                    name="email"
                    required
                    value={messageData.email}
                    onChange={handleMessageChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="msg-company" className="block font-heading font-medium text-nordic-blue mb-2">Företag</label>
                <input
                  type="text"
                  id="msg-company"
                  name="company"
                  value={messageData.company}
                  onChange={handleMessageChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="msg-message" className="block font-heading font-medium text-nordic-blue mb-2">Meddelande *</label>
                <textarea
                  id="msg-message"
                  name="message"
                  required
                  rows={6}
                  value={messageData.message}
                  onChange={handleMessageChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-medium-gray focus:border-nordic-blue focus:outline-none transition-colors resize-none"
                />
              </div>
              {recaptchaSiteKey && (
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    theme="light"
                    size="normal"
                  />
                </div>
              )}
              <button
                type="submit"
                disabled={messageStatus === 'submitting'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {messageStatus === 'submitting' ? 'Skickar...' : 'Skicka meddelande'}
              </button>
            </form>
            <p className="text-sm text-dark-gray mt-6 text-center">
              Vi strävar efter att svara inom 24 timmar.
            </p>
          </motion.div>
          */}
        </div>
      </section>
    </div>
  )
}
