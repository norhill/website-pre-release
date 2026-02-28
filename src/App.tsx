import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Article from './pages/Article'
import CvIngemar from './pages/CvIngemar'
import FreeAssessment from './pages/FreeAssessment'
import ItArchitectCoach from './pages/ItArchitectCoach'
import MutualNda from './pages/MutualNda'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AiCustomerDataPolicy from './pages/AiCustomerDataPolicy'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/gratis-snabbgenomlysning" element={<FreeAssessment />} />
          <Route path="/services/it-arkitekt-coach" element={<ItArchitectCoach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="/cv/ingemar-norberg" element={<CvIngemar />} />
          <Route path="/documents/mutual-nda" element={<MutualNda />} />
          <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
          <Route path="/policy/kunddata-och-ai" element={<AiCustomerDataPolicy />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

