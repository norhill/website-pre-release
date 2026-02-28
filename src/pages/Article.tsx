import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'

const articles = {
  'democratize-architecture': {
    title: 'Democratize Architecture',
    content: `
      <h2>Democratizing Architecture for Modern Organizations</h2>
      <p>Democratize Architecture represents a paradigm shift in how organizations approach architectural decision-making. By making architectural knowledge and decision-making accessible to all stakeholders, we enable faster innovation and better alignment with business goals.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Accessibility: Architectural knowledge should be accessible to all team members</li>
        <li>Collaboration: Decisions should involve diverse perspectives</li>
        <li>Transparency: Architectural decisions should be clear and well-documented</li>
        <li>Empowerment: Teams should have the tools and knowledge to make informed decisions</li>
      </ul>
      
      <h3>Benefits</h3>
      <p>Organizations that democratize their architecture see improved agility, better alignment between technical and business teams, and faster time-to-market for new capabilities.</p>
    `,
  },
  'enterprise-architecture': {
    title: 'Enterprise Architecture',
    content: `
      <h2>Enterprise Architecture: Aligning Strategy with Execution</h2>
      <p>Enterprise Architecture provides a comprehensive framework for aligning business strategy with IT capabilities. It ensures that technology investments support business objectives and enable organizational transformation.</p>
      
      <h3>Core Components</h3>
      <ul>
        <li>Business Architecture: Aligning business processes with strategic goals</li>
        <li>Application Architecture: Optimizing application portfolio and integration</li>
        <li>Data Architecture: Ensuring data quality and accessibility</li>
        <li>Technology Architecture: Establishing technical standards and infrastructure</li>
      </ul>
      
      <h3>Value Proposition</h3>
      <p>Effective Enterprise Architecture enables organizations to reduce complexity, improve agility, and make more informed technology investment decisions.</p>
    `,
  },
  'pragmatic-architecture': {
    title: 'Pragmatic Architecture',
    content: `
      <h2>Pragmatic Architecture: Balancing Ideals with Reality</h2>
      <p>Pragmatic Architecture focuses on making practical architectural decisions that balance long-term vision with immediate business needs. It emphasizes incremental improvement over perfect solutions.</p>
      
      <h3>Core Principles</h3>
      <ul>
        <li>Practicality: Solutions must work in real-world constraints</li>
        <li>Incremental Improvement: Better to improve gradually than wait for perfection</li>
        <li>Context-Aware: Decisions must consider organizational context</li>
        <li>Value-Driven: Architecture should deliver measurable business value</li>
      </ul>
      
      <h3>Approach</h3>
      <p>Pragmatic Architecture starts with understanding current state, identifies quick wins, and builds toward a vision incrementally while delivering value at each step.</p>
    `,
  },
  'ai-architecture': {
    title: 'AI Architecture',
    content: `
      <h2>AI Architecture: Designing for Intelligent Systems</h2>
      <p>AI Architecture encompasses the design patterns, infrastructure, and governance needed to successfully deploy and scale artificial intelligence capabilities within an organization.</p>
      
      <h3>Key Considerations</h3>
      <ul>
        <li>Data Infrastructure: High-quality, accessible data is foundational</li>
        <li>Model Management: Versioning, monitoring, and lifecycle management</li>
        <li>Integration: Seamless integration with existing systems</li>
        <li>Ethics & Governance: Ensuring responsible AI deployment</li>
      </ul>
      
      <h3>Architecture Patterns</h3>
      <p>Effective AI Architecture includes patterns for data pipelines, model serving, monitoring, and feedback loops that enable continuous improvement of AI capabilities.</p>
    `,
  },
  'capability-architecture': {
    title: 'Capability Architecture',
    content: `
      <h2>Capability Architecture: Building Business Capabilities</h2>
      <p>Capability Architecture focuses on designing and organizing business capabilities as the foundation for strategic planning and execution. It provides a business-centric view of what an organization can do.</p>
      
      <h3>Core Concepts</h3>
      <ul>
        <li>Business Capabilities: What the organization can do</li>
        <li>Capability Maturity: Assessing and improving capability levels</li>
        <li>Capability Mapping: Understanding capability relationships and dependencies</li>
        <li>Strategic Alignment: Ensuring capabilities support business strategy</li>
      </ul>
      
      <h3>Benefits</h3>
      <p>Capability Architecture enables organizations to make better investment decisions, identify gaps, prioritize improvements, and align technology with business needs.</p>
    `,
  },
}

export default function Article() {
  const { articleId } = useParams<{ articleId: string }>()
  const article = articleId ? articles[articleId as keyof typeof articles] : null

  if (!article) {
    return (
      <div className="container-custom py-16">
        <Seo title="Artikel saknas" description="Den begärda artikeln kunde inte hittas." noIndex />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-heading font-bold text-nordic-blue mb-4">
            Article Not Found
          </h1>
          <p className="text-dark-gray mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container-custom py-16">
      <Seo
        title={article.title}
        description={`Artikel om ${article.title} – insikter och principer för modern IT-arkitektur.`}
        ogType="article"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center text-nordic-blue hover:text-forest-green mb-8 transition-colors"
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
          Back to Home
        </Link>

        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-nordic-blue mb-8">
            {article.title}
          </h1>
          <div
            className="max-w-none text-dark-gray text-lg leading-relaxed [&_h2]:text-3xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-nordic-blue [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-2xl [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-nordic-blue [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </motion.div>
    </div>
  )
}

