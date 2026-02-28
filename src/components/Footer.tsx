import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-nordic-blue text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4"><img src="/images/norhill_logo_white_120x42.png" alt="Norhill" /></h3>
            <p className="text-sky-blue mb-4 max-w-md">
              Stödjer företag i utveckling av förmågor
            </p>
            <p className="text-sky-blue text-sm">
              © {new Date().getFullYear()} Norhill AB
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/gratis-snabbgenomlysning" className="text-sky-blue hover:text-white transition-colors">
                  ✨ Gratis snabbgenomlysning
                </Link>
              </li>
              <li>
                <Link to="/services/it-arkitekt-coach" className="text-sky-blue hover:text-white transition-colors">
                  IT Coach
                </Link>
              </li>
              <li>
                <Link to="/documents/mutual-nda" className="text-sky-blue hover:text-white transition-colors">
                  Sekretessavtal (NDA)
                </Link>
              </li>
              <li>
                <Link to="/integritetspolicy" className="text-sky-blue hover:text-white transition-colors">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link to="/policy/kunddata-och-ai" className="text-sky-blue hover:text-white transition-colors">
                  Kunddata &amp; AI-policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sky-blue hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sky-blue">
              <li>
                <a href="https://www.linkedin.com/company/norhill/" target="_blank" className="hover:text-white transition-colors">
                  <img src="/images/linkedin_icon_white_24x24.png" alt="LinkedIn" className="inline-block w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sky-blue hover:text-white transition-colors">Kontakt</Link>
              </li>
              {/*<li>
                <a
                  href="mailto:info@norhill.se"
                  className="hover:text-white transition-colors"
                >
                  info@norhill.se
                </a>
              </li>
              <li className="text-sm">
                Vi svarar inom 24 timmar
              </li>*/}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

