import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

type Lang = 'en' | 'sv'

const translations = {
  hero: {
    title: { en: 'Curriculum Vitae', sv: 'Curriculum Vitae' },
    name: { en: 'Ingemar Norberg', sv: 'Ingemar Norberg' },
    description: {
      en: 'Senior IT-Architect & Consultant specializing in architecture, cloud-native infrastructure, service-oriented transformation, and organizational capability development.',
      sv: 'Senior IT-arkitekt & konsult med specialisering inom arkitektur, molnbaserad infrastruktur, tjänsteorienterad transformation och organisatorisk förmågeutveckling.',
    },
    tags: {
      en: ['Enterprise Architecture', 'Cloud & Infrastructure', 'Business Transformation', 'Integration Architecture'],
      sv: ['Enterprise-arkitektur', 'Moln & Infrastruktur', 'Verksamhetsutveckling', 'Integrationsarkitektur'],
    },
  },
  profile: {
    heading: { en: 'Professional Profile', sv: 'Professionell profil' },
    p1: {
      en: 'Principal enterprise architect and consultant with over 20 years of experience spanning infrastructure and operations to cloud-native architecture. A proven track record of building enterprise architecture functions from the ground up, driving service-oriented transformations, and architecting cloud-native platforms for enterprise customers across healthcare, construction, ERP, and IT services sectors.',
      sv: 'Erfaren it-arkitekt och konsult med över 20 års erfarenhet som spänner från infrastruktur, drift till molnbaserad arkitektur. Dokumenterad erfarenhet av att bygga enterprise-arkitekturfunktioner från grunden. Driva tjänsteorienterade transformationer, arkitekturera molnbaserade plattformar för företagskunder inom hälso- och sjukvård, byggindustri, ERP och IT-tjänster.',
    },
    p2: {
      en: 'Known for bringing deep technical expertise paired with a genuine passion for clarity, collaboration, and real-world impact. Excels at bridging people and systems, creating shared language across organizational boundaries, and helping teams navigate complex challenges with simplicity and pragmatism.',
      sv: 'Känd för djup teknisk expertis kombinerat med en genuin passion för tydlighet, samarbete och verklig påverkan. Utmärker sig genom att brygga människor och system, skapa gemensamt språk över organisatoriska gränser. Hjälpa team att navigera komplexa utmaningar med enkelhet och pragmatism.',
    },
    quote: {
      en: '"We\'re often looking at the same reality, just from different angles. My job is to help people find a shared language."',
      sv: '"Vi tittar ofta på samma verklighet, bara från olika vinklar. Mitt jobb är att hjälpa människor hitta ett gemensamt språk."',
    },
    p3: {
      en: 'Founder of Norhill AB, a consultancy focused on helping organizations understand and develop their business capabilities through strategic analysis, consulting services, and development programs. Seeking engagements where deep technical expertise meets strategic thinking to deliver measurable organizational impact.',
      sv: 'Grundare av Norhill AB, en konsultverksamhet med fokus på att hjälpa organisationer förstå och utveckla sina affärsmässiga förmågor genom strategisk analys, konsulttjänster och utvecklingsprogram. Söker uppdrag där djup teknisk expertis möter strategiskt tänkande för att leverera mätbar organisatorisk påverkan.',
    },
  },
  characteristics: {
    heading: { en: 'Personal Characteristics', sv: 'Personliga egenskaper' },
    traits: {
      en: [
        'Honest and well-liked person with positive attitude',
        'Driven by learning new technical skills',
        'Takes great pride in sharing knowledge',
        'Implements solutions with simplicity and repeatability in mind',
        'Able to learn new systems quickly and effectively',
        'Finds pleasure in planning automated/scripted environments',
        'Prefers highly-available systems',
        'Strives to integrate requirements/security/best practice into everything',
        'Known for creating order where others see chaos',
        'Leads with humility and clarity',
        'Bridging people and systems – helping people find a shared language',
      ],
      sv: [
        'Ärlig, omtyckt person med positiv attityd',
        'Driven av att lära sig ny teknik',
        'Känd för att skapa ordning där andra ser kaos',
        'Implementerar lösningar med enkelhet och repeterbarhet i åtanke',
        'Tar stor stolthet i att dela kunskap',
        'Förmåga att snabbt och effektivt lära sig nya system',
        'Finner glädje i att planera automatiserade/skriptade miljöer',
        'Föredrar högtillgängliga system',
        'Strävar efter att integrera krav/säkerhet/best practice i allt',
        'Leder med ödmjukhet och tydlighet',
        'Bryggar människor och system – hjälper människor hitta ett gemensamt språk',
      ],
    },
  },
  competencies: {
    heading: { en: 'Core Competencies', sv: 'Kärnkompetenser' },
    cards: [
      {
        title: { en: 'Enterprise & IT-Architecture', sv: 'Enterprise & IT-arkitektur' },
        content: {
          en: 'Enterprise & IT-Architecture Function Development\n– Architectural Methods & Principles\n– TOGAF\n– Solution Architecture\n– Capability Development\n– Architectural Governance\n– Coaching & Mentoring\n– Architecture Roadmaps',
          sv: 'Utveckling av arkitekturfunktioner\n– Arkitekturmetoder & principer\n– TOGAF\n– Lösningsarkitektur\n– Förmågeutveckling\n– Arkitekturstyrning\n– Coaching & mentorskap\n– Arkitektur-roadmaps',
        },
      },
      {
        title: { en: 'Infrastructure & Cloud Architecture', sv: 'Infrastruktur & molnarkitektur' },
        content: {
          en: 'Cloud-Native Architecture\n– Kubernetes & Container Platforms\n– Infrastructure as Code\n– Azure & VMware\n– Service Mesh & mTLS\n– Network Security\n– High Availability\n– SaaS Delivery\n– Defense-Grade Environments',
          sv: 'Molnbaserad arkitektur\n– Kubernetes & containerplattformar\n– Infrastructure as Code\n– Azure & VMware\n– Service Mesh & mTLS\n– Nätverkssäkerhet\n– Hög tillgänglighet\n– SaaS-leverans\n– Försvarsgodkända miljöer',
        },
      },
      {
        title: { en: 'Service Development & Operations', sv: 'Tjänsteutveckling & drift' },
        content: {
          en: 'Service Portfolio Management\n– Service Catalog Development\n– ITIL v3/v4\n– IT Service Management\n– Asset & Configuration Management\n– CMDB\n– Service-Oriented Transformation\n– Quality Management Systems',
          sv: 'Tjänsteportföljhantering\n– Tjänstekatalogsutveckling\n– ITIL v3/v4\n– IT Service Management\n– Tillgångs- & konfigurationshantering\n– CMDB\n– Tjänsteorienterad transformation\n– Kvalitetsledningssystem',
        },
      },
      {
        title: { en: 'Integration & Presales Architecture', sv: 'Integration & presales-arkitektur' },
        content: {
          en: 'Enterprise Integration\n– Integration Methodologies\n– Presales Architecture\n– Solution Design\n– Client Engagement\n– Technical Presentations\n– Proposal Development',
          sv: 'Enterpriseintegration\n– Integrationsmetodik\n– Presales-arkitektur\n– Lösningsdesign\n– Kundengagemang\n– Tekniska presentationer\n– Offertarbete',
        },
      },
      {
        title: { en: 'Business Analysis & Compliance', sv: 'Verksamhetsanalys & regelefterlevnad' },
        content: {
          en: 'Portfolio-Level Business Analysis\n– Requirements Analysis\n– Regulatory Compliance\n– ISO Standards\n– Laws & Regulations\n– Compliance Frameworks\n– Process Development',
          sv: 'Portföljnivå verksamhetsanalys\n– Kravanalys\n– Regelefterlevnad\n– ISO-standarder\n– Lagar & förordningar\n– Ramverk för efterlevnad\n– Processutveckling',
        },
      },
      {
        title: { en: 'Leadership & Organizational Development', sv: 'Ledarskap & organisationsutveckling' },
        content: {
          en: 'Organizational Transformation\n– Cultural Change\n– Team Alignment\n– Cross-functional Collaboration\n– Stakeholder Management\n– Technical Project Leadership\n– Creating Shared Language\n– Humility in Leadership',
          sv: 'Organisatorisk transformation\n– Kulturförändring\n– Teamkoordinering\n– Tvärfunktionellt samarbete\n– Intressenthantering\n– Teknisk projektledning\n– Gemensamt språk\n– Ödmjukt ledarskap',
        },
      },
    ],
  },
  achievements: {
    heading: { en: 'Key Achievements', sv: 'Nyckelmeriter' },
    items: [
      {
        title: {
          en: 'Service-oriented transformation at Cambio Healthcare Systems',
          sv: 'Tjänsteorienterad transformation på Cambio Healthcare Systems',
        },
        desc: {
          en: ' – Been part of transforming Cambio from a product-centric to service-oriented provider, delivering healthcare services to 80 000+ users through the Sussa collaboration, impacting millions of citizens.',
          sv: ' – Varit del av att transformera Cambio från en produktcentrerad till tjänsteorienterad leverantör, levererade hälso- och sjukvårdstjänster till 80 000+ slutanvändare genom Sussa-samarbetet, med påverkan på miljontals medborgare.',
        },
      },
      {
        title: {
          en: 'Established Enterprise Architecture functions from scratch',
          sv: 'Etablerat Enterprise Architecture-funktioner från grunden',
        },
        desc: {
          en: ' – Built and established EA functions at Next One Technology / HVD Group and educated the Cambio Enterprise Architecture team on Service Delivery, aligning multiple teams and cultures into coherent visions.',
          sv: ' – Byggt och etablerat EA-funktioner på Next One Technology / HVD Group och utbildat Cambios Enterprise Architecture-team inom Service Delivery, samordnat flera team och kulturer till en sammanhängande vision.',
        },
      },
      {
        title: {
          en: 'Architected cloud-native containerized middleware for IFS Applications',
          sv: 'Arkitekturerat molnbaserad containeriserad middleware för IFS Applications',
        },
        desc: {
          en: ' – Designed and implemented a new containerized Middle tier with Kubernetes, mTLS, service mesh, and Infrastructure as Code, including advanced deployments targeting Defense customers with highly secure environments.',
          sv: ' – Designat och implementerat ett nytt containeriserat mellanlager med Kubernetes, mTLS, service mesh och Infrastructure as Code, inklusive avancerade driftsättningar riktade mot försvarskunder med högsäkerhetsmiljöer.',
        },
      },
      {
        title: {
          en: 'Designed SaaS platform for enterprise ERP delivery',
          sv: 'Designat SaaS-plattform för leverans av företags-ERP',
        },
        desc: {
          en: ' – Main designer of the Netscaler load balancer based Software-as-a-Service platform delivering IFS Applications to multiple enterprise customers at EVRY, before cloud was mainstream.',
          sv: ' – Huvuddesigner av den Netscaler-lastbalanseringsbaserade Software-as-a-Service-plattformen som levererade IFS Applications till flera företagskunder hos EVRY, innan moln var mainstream.',
        },
      },
      {
        title: {
          en: 'Led multiple successful transition projects with high customer satisfaction',
          sv: 'Lett flera framgångsrika övergångsprojekt med hög kundnöjdhet',
        },
        desc: {
          en: ' – Technical Project Leader for transition projects at major organizations including Anticimex and Systembolaget, consistently receiving exceptional feedback from stakeholders.',
          sv: ' – Teknisk projektledare för övergångsprojekt hos stora organisationer inklusive Anticimex och Systembolaget, med genomgående exceptionell feedback från intressenter.',
        },
      },
      {
        title: {
          en: 'Founded Norhill AB',
          sv: 'Grundat Norhill AB',
        },
        desc: {
          en: ' – Founded and operates a consultancy focused on helping organizations understand and develop their business capabilities through strategic analysis, consulting services, and development programs.',
          sv: ' – Grundat och driver en konsultverksamhet med fokus på att hjälpa organisationer förstå och utveckla sina affärsmässiga förmågor genom strategisk analys, konsulttjänster och utvecklingsprogram.',
        },
      },
    ],
  },
  experience: {
    heading: { en: 'Professional Experience', sv: 'Yrkeserfarenhet' },
    tldr: {
      en: '20+ years in IT, progressing from hands-on infrastructure and operations to senior strategic roles in Enterprise Architecture, cloud-native platform engineering, and service-oriented transformation. Proven track record of building EA functions from scratch, driving organizational transformations across healthcare and construction sectors, and architecting cloud-native platforms for enterprise ERP delivery including defense-grade environments. A rare blend of deep technical expertise, strategic vision, and leadership – equally comfortable designing Kubernetes platforms as establishing enterprise architecture governance.',
      sv: '20+ år inom IT, från praktisk infrastruktur och drift till seniora strategiska roller inom Enterprise Architecture, molnbaserad plattformsutveckling och tjänsteorienterad transformation. Dokumenterad erfarenhet av att bygga EA-funktioner från grunden, driva organisatoriska transformationer inom hälso- och sjukvård och byggindustri, samt arkitekturera molnbaserade plattformar för ERP-leverans inklusive försvarsgodkända miljöer. En ovanlig blandning av djup teknisk expertis, strategisk vision och ledarskap – lika bekväm med att designa Kubernetes-plattformar som att etablera enterprise-arkitekturstyrning.',
    },
    achievementsLabel: { en: 'Achievements:', sv: 'Meriter:' },
    skillsLabel: { en: 'Skills:', sv: 'Kompetenser:' },
    companies: [
      {
        name: 'Norhill AB',
        location: { en: 'Linköping, Sweden', sv: 'Linköping, Sverige' },
        role: { en: 'Founder & Principal Consultant', sv: 'Grundare & Senior konsult' },
        period: { en: '2026 – Present', sv: '2026 – Pågående' },
        description: {
          en: 'Founded Norhill AB with the vision to help organizations understand and develop their business capabilities. Providing enterprise architecture consulting, cloud architecture advisory, and organizational transformation services to clients across multiple industries. Building a capability-driven consultancy that emphasizes ethical principles, holistic perspectives, and long-term value creation.',
          sv: 'Grundade Norhill AB med visionen att hjälpa organisationer förstå och utveckla sina affärsmässiga förmågor. Tillhandahåller konsulttjänster inom enterprise-arkitektur, molnarkitektur och organisatorisk transformation till kunder i flera branscher. Bygger en förmågedriven konsultverksamhet som betonar etiska principer, helhetsperspektiv och långsiktigt värdeskapande.',
        },
        achievements: {
          en: [
            'Developed capability-driven methodology for organizational assessment and development',
            'Built tools and frameworks for business capability analysis and strategic planning',
          ],
          sv: [
            'Utvecklat förmågedriven metodik för organisatorisk bedömning och utveckling',
            'Byggt verktyg och ramverk för affärsförmågeanalys och strategisk planering',
          ],
        },
        skills: {
          en: 'Organizational Transformation – Ethical Leadership – Holistic Perspectives – Long-Term Value Creation',
          sv: 'Strategisk analys – Organisationsutveckling – Etiskt ledarskap',
        },
      },
      {
        name: 'Entiros AB',
        location: { en: 'Linköping, Sweden', sv: 'Linköping, Sverige' },
        role: { en: 'Enterprise / Presales Architect', sv: 'Enterprise / Presales-arkitekt' },
        period: { en: '2025 – 2026 · 1 år', sv: '2025 – 2026 · 1 år' },
        description: {
          en: 'Served as Enterprise/Presales Architect at Entiros, specializing in integration challenges. Supported both clients and internal teams with integration solutions and methodologies, bridging the gap between technical capabilities and customer business needs. Developed architectural approaches for complex integration scenarios and provided technical guidance for presales engagements.',
          sv: 'Verksam som Enterprise/Presales-arkitekt på Entiros, specialiserad på integrationsutmaningar. Stöttade både kunder och interna team med integrationslösningar och metodik, bryggade gapet mellan tekniska förmågor och kunders affärsbehov. Utvecklade arkitekturmetoder för komplexa integrationsscenarier och gav teknisk vägledning vid presales-uppdrag.',
        },
        achievements: {
          en: [
            'Successfully supported customer integration requirements across multiple verticals',
            'Developed business-specific AI solutions for citizen service',
            'Developed integration solutions and methodologies for the organization',
            'Bridged technical capabilities with customer business needs through presales architecture',
          ],
          sv: [
            'Framgångsrikt stöttat kunders integrationskrav inom flera vertikaler',
            'Byggt verksamhetsspecifika AI lösningar och även AI lösningar för medborgarservice',
            'Utvecklat integrationslösningar och metodik för organisationen',
            'Bryggat tekniska förmågor med kunders affärsbehov genom presales-arkitektur',
          ],
        },
        skills: {
          en: 'Business AI Solutions - Citizen Service AI Solutions - Integration Architecture – Presales Architecture – Solution Design – Client Engagement – Technical Presentations – Enterprise Integration – Certified Integrator Methodology',
          sv: 'Verksamhetsspecifika AI lösningar - Medborgarservice AI lösningar - Integrationsarkitektur – Presales-arkitektur – Lösningsdesign – Kundengagemang – Tekniska presentationer – Enterprise-integration – Certifierad Integratörsmetodik',
        },
      },
      {
        name: 'Next One Technology / HVD Group',
        location: { en: 'Linköping, Sweden', sv: 'Linköping, Sverige' },
        role: { en: 'Enterprise Architect', sv: 'Enterprise-arkitekt' },
        period: { en: '2024 – 2025 · 1 year', sv: '2024 – 2025 · 1 år' },
        description: {
          en: 'Engaged as Enterprise Architect at Next One Technology / HVD Group, a construction technology company expanding into Europe. Tasked with building and establishing the Enterprise Architecture function from the ground up, aligning multiple teams and cultures across the organization into a single coherent vision. Developed, coordinated, and communicated architectural methods, principles, and capabilities to support the company\'s European expansion strategy.',
          sv: 'Engagerad som Enterprise-arkitekt på Next One Technology / HVD Group, ett byggteknikföretag som expanderade i Europa. Uppdraget var att bygga och etablera Enterprise Architecture-funktionen från grunden, samordna flera team och kulturer inom organisationen till en sammanhängande vision. Utvecklade, koordinerade och kommunicerade arkitekturmetoder, principer och förmågor för att stödja företagets europeiska expansionsstrategi.',
        },
        achievements: {
          en: [
            'Built and established Enterprise Architecture function at Next and HVD Group from scratch',
            'Developed, coordinated, and communicated architectural methods, principles, and capabilities',
            'Advocated, coached, and supported teams related to larger complex development areas',
            'Established architectural foundation for aligning multiple teams and cultures into a single coherent vision',
          ],
          sv: [
            'Byggt och etablerat Enterprise Architecture-funktionen på Next och HVD Group från grunden',
            'Utvecklat, koordinerat och kommunicerat arkitekturmetoder, principer och förmågor',
            'Förespråkat, coachat och stöttat team i större komplexa utvecklingsområden',
            'Etablerat arkitektonisk grund för att samordna flera team och kulturer till en sammanhängande vision',
          ],
        },
        skills: {
          en: 'Enterprise Architecture – EA Function Establishment – Architectural Methods – Coaching – Organizational Alignment – Construction Technology – Cross-cultural Collaboration',
          sv: 'Enterprise-arkitektur – EA-funktionsetablering – Arkitekturmetoder – Coaching – Organisatorisk samordning – Byggteknik – Tvärkulturell samverkan',
        },
      },
      {
        name: 'Cambio Healthcare Systems',
        location: { en: 'Linköping, Sweden', sv: 'Linköping, Sverige' },
        role: { en: 'Enterprise Architect / Service Architect', sv: 'Enterprise-arkitekt / Tjänstearkitekt' },
        period: { en: '2020 – 2024 · 3+ years', sv: '2020 – 2024 · 3+ år' },
        description: {
          en: 'Joined Cambio Healthcare Systems during a pivotal transformation from a product-centric company to a service-oriented provider delivering Electronic Health Records (EHR) and E-health as a Service to 17 of 21 Swedish regions. Held main IT and Service architecture responsibilities for the Sussa delivery collaboration covering 9 Swedish regions. Managed a team of Business Analysts performing analysis on portfolio level, trained the Enterprise Architecture team on Service Delivery capabilities, and played a central role in defining the organization\'s service portfolio and customer service catalogs.',
          sv: 'Anslöt till Cambio Healthcare Systems under en avgörande transformation från ett produktcentrerat företag till en tjänsteorienterad leverantör av elektroniska patientjournaler (EHR) och E-hälsa som tjänst till 17 av 21 svenska regioner. Hade huvudansvar för IT- och tjänstearkitektur för Sussa-leveranssamarbetet som täckte 9 svenska regioner. Ledde ett team av verksamhetsanalytiker med analys på portföljnivå, utbildade Enterprise Architecture-teamet i Service Delivery-förmågor och spelade en central roll i att definiera organisationens tjänsteportfölj och kundtjänstekataloger.',
        },
        description2: {
          en: 'The role encompassed a wide range of responsibilities from establishing asset and configuration management (CMDB) to developing processes within the Cambio Quality Management System. This was a complex organizational transformation involving multiple teams, cultures, and technical platforms, requiring both deep technical insight and strong leadership skills.',
          sv: 'Rollen omfattade ett brett ansvar från att etablera tillgångs- och konfigurationshantering (CMDB) till att utveckla processer inom Cambios kvalitetsledningssystem. Det var en komplex organisatorisk transformation som involverade flera team, kulturer och tekniska plattformar, vilket krävde både djup teknisk insikt och starka ledarskapsegenskaper.',
        },
        achievements: {
          en: [
            'Part of pushing the transformation from product-centric to service-oriented provider',
            'Main IT and Service architecture responsibilities for Sussa delivery (9 Swedish regions)',
            'Trained Enterprise Architecture team on Service Delivery capabilities',
            'Managed team of Business Analysts performing analysis on portfolio level',
            'Defined service portfolio and customer service catalogs',
            'Established asset and configuration management and CMDB',
            'Developed processes in Cambio Quality Management System',
            'Established architectural foundation for aligning multiple teams and cultures',
          ],
          sv: [
            'Delaktig i att driva transformationen från produktcentrerad till tjänsteorienterad leverantör',
            'Huvudansvar för IT- och tjänstearkitektur för Sussa-leveransen (9 svenska regioner)',
            'Utbildat Enterprise Architecture-teamet i Service Delivery-förmågor',
            'Lett team av verksamhetsanalytiker med analys på portföljnivå',
            'Definierat tjänsteportfölj och kundtjänstekataloger',
            'Etablerat tillgångs- och konfigurationshantering samt CMDB',
            'Utvecklat processer i Cambios kvalitetsledningssystem',
            'Etablerat arkitektonisk grund för att samordna flera team och kulturer',
          ],
        },
        skills: {
          en: 'Enterprise Architecture – Service Architecture – Service-Oriented Transformation – ITIL – Service Portfolio Management – CMDB – Business Analysis – Healthcare Technology – EHR – Team Leadership – Quality Management Systems',
          sv: 'Enterprise-arkitektur – Tjänstearkitektur – Tjänsteorienterad transformation – ITIL – Tjänsteportföljhantering – CMDB – Verksamhetsanalys – Hälso- och sjukvårdsteknik – EHR – Teamledning – Kvalitetsledningssystem',
        },
      },
      {
        name: 'IFS R&D',
        location: { en: 'Linköping, Sweden', sv: 'Linköping, Sverige' },
        role: { en: 'Cloud Architect / Infrastructure Architect', sv: 'Molnarkitekt / Infrastrukturarkitekt' },
        period: { en: '2015 – 2020 · 5 years', sv: '2015 – 2020 · 5 år' },
        description: {
          en: 'Worked within IFS R&D during a period when cloud deliveries became a critical part of IFS\'s business strategy, driving rapid sales growth. Architected the new containerized Middle tier for the next version of IFS Applications, implementing Infrastructure as Code to deploy Kubernetes environments with mTLS, service mesh, network security, stability, scalability, and monitoring. Developed advanced deployments targeting Defense customers with highly secure environments requiring stringent security controls.',
          sv: 'Arbetade inom IFS R&D under en period då molnleveranser blev en kritisk del av IFS affärsstrategi och drev snabb försäljningstillväxt. Arkitekterade det nya containeriserade mellanlagret för nästa version av IFS Applications, implementerade Infrastructure as Code för att driftsätta Kubernetes-miljöer med mTLS, service mesh, nätverkssäkerhet, stabilitet, skalbarhet och övervakning. Utvecklade avancerade driftsättningar riktade mot försvarskunder med högsäkerhetsmiljöer.',
        },
        description2: {
          en: 'Created CI/CD pipelines with hard quality gates in GIT via test automation (tests written in Golang), and improved the monitoring solution with metrics, logs, and tracing that was subsequently adopted by IFS Managed Cloud. Managed lifecycle planning and handling of approximately 20 new open-source software dependencies, ensuring security and compliance across the stack.',
          sv: 'Skapade CI/CD-pipelines med hårda kvalitetsgrindar i GIT via testautomation (tester skrivna i Golang) och förbättrade övervakningslösningen med mätvärden, loggar och spårning som sedan antogs av IFS Managed Cloud. Hanterade livscykelplanering av cirka 20 nya mjukvaruberoenden med öppen källkod, med säkerhet och regelefterlevnad genom hela stacken.',
        },
        achievements: {
          en: [
            'Architected new containerized Middle tier for next version of IFS Applications',
            'Implemented Infrastructure as Code to deploy Kubernetes environments with mTLS, service mesh, and network security',
            'Developed advanced deployments of Kubernetes targeting Defense customers including highly secure environments',
            'Created CI/CD pipelines with hard quality gates via test automation (Golang)',
            'Improved monitoring solution with metrics, logs, and tracing adopted by IFS Managed Cloud',
            'Managed lifecycle planning of approximately 20 new open-source software dependencies',
          ],
          sv: [
            'Arkitekterat nytt containeriserat mellanlager för nästa version av IFS Applications',
            'Implementerat Infrastructure as Code för Kubernetes-miljöer med mTLS, service mesh och nätverkssäkerhet',
            'Utvecklat avancerade Kubernetes-driftsättningar riktade mot försvarskunder med högsäkerhetsmiljöer',
            'Skapat CI/CD-pipelines med hårda kvalitetsgrindar via testautomation (Golang)',
            'Förbättrat övervakningslösning med mätvärden, loggar och spårning – antagen av IFS Managed Cloud',
            'Hanterat livscykelplanering av cirka 20 nya mjukvaruberoenden med öppen källkod',
          ],
        },
        skills: {
          en: 'Cloud-Native Architecture – Kubernetes – Infrastructure as Code – mTLS – Service Mesh – Network Security – CI/CD – Test Automation – Golang – Monitoring & Observability – OpenMetrics – Elastic Stack – Defense-Grade Security – Open-Source Lifecycle Management',
          sv: 'Molnbaserad arkitektur – Kubernetes – Infrastructure as Code – mTLS – Service Mesh – Nätverkssäkerhet – CI/CD – Testautomation – Golang – Övervakning & observerbarhet – OpenMetrics – Elastic Stack – Försvarsgodkänd säkerhet – Livscykelhantering av öppen källkod',
        },
      },
      {
        name: 'EVRY One Outsourcing Services',
        location: { en: 'Linköping, Sweden – 10 years', sv: 'Linköping, Sverige – 10 år' },
        role: {
          en: 'SaaS Platform Designer / Technical Project Leader / Operations Engineer',
          sv: 'SaaS-plattformsdesigner / Teknisk projektledare / Driftingenjör',
        },
        period: { en: '2005 – 2015 · 10 years', sv: '2005 – 2015 · 10 år' },
        description: {
          en: 'Spent a decade at EVRY One Outsourcing Services, a service provider with primary focus on delivery of IFS Applications as Software-as-a-Service – before cloud was mainstream. Progressed through roles from operations engineering to SaaS platform design and technical project leadership. Main designer of the Netscaler load balancer based SaaS platform delivering IFS Applications to multiple enterprise customers.',
          sv: 'Tillbringade ett decennium på EVRY One Outsourcing Services, en tjänsteleverantör med primärt fokus på leverans av IFS Applications som Software-as-a-Service – innan moln var mainstream. Utvecklades genom roller från driftingenjör till SaaS-plattformsdesign och teknisk projektledning. Huvuddesigner av den Netscaler-lastbalanseringsbaserade SaaS-plattformen som levererade IFS Applications till flera företagskunder.',
        },
        description2: {
          en: 'Served as Technical Project Leader for major transition projects at Anticimex and Systembolaget, consistently receiving exceptional client feedback. Responsible for delivery, operation, and management of critical business systems. Prospected and implemented the first virtualized NetApp Storage system in the organization. Provided technical counseling to the management team and supported the Sales Team with technical details based on customer needs.',
          sv: 'Verksam som teknisk projektledare för större övergångsprojekt hos Anticimex och Systembolaget, med genomgående exceptionell kundfeedback. Ansvarig för leverans, drift och förvaltning av affärskritiska system. Prospekterade och implementerade det första virtualiserade NetApp Storage-systemet i organisationen. Gav teknisk rådgivning till ledningsgruppen och stöttade säljteamet med tekniska detaljer baserat på kundbehov.',
        },
        achievements: {
          en: [
            'Main designer of Netscaler load balancer based SaaS platform delivering IFS Applications',
            'Technical Project Leader for transition projects (Anticimex, Systembolaget)',
            'Responsible for delivery, operation, and management of critical business systems',
            'Prospected and implemented first virtualized NetApp Storage system',
            'Technical counseling to management team',
            'Supported Sales Team with technical details based on customer needs',
            'Designed and implemented new virtual environments',
            'Managed backup of large virtual environments',
            'Applied Lean Production principles to operational processes',
          ],
          sv: [
            'Huvuddesigner av Netscaler-lastbalanseringsbaserad SaaS-plattform för IFS Applications',
            'Teknisk projektledare för övergångsprojekt (Anticimex, Systembolaget)',
            'Ansvarig för leverans, drift och förvaltning av affärskritiska system',
            'Prospekterat och implementerat första virtualiserade NetApp Storage-systemet',
            'Teknisk rådgivning till ledningsgrupp',
            'Stöttat säljteamet med tekniska detaljer baserat på kundbehov',
            'Designat och implementerat nya virtuella miljöer',
            'Hanterat backup av stora virtuella miljöer',
            'Tillämpat Lean Production-principer på driftprocesser',
          ],
        },
        skills: {
          en: 'SaaS Platform Design – Load Balancing (Citrix/NetScaler) – Technical Project Leadership – Transition Projects – Active Directory – Windows Server – Virtualization – NetApp Storage – Backup Solutions – Network Architecture – Lean Production – Client Relationship Management',
          sv: 'SaaS-plattformsdesign – Lastbalansering (Citrix/NetScaler) – Teknisk projektledning – Övergångsprojekt – Active Directory – Windows Server – Virtualisering – NetApp Storage – Backuplösningar – Nätverksarkitektur – Lean Production – Kundrelationshantering',
        },
      },
    ],
  },
  testimonials: {
    heading: { en: 'Testimonials', sv: 'Referenser' },
    // Quotes stay in original language, but attribution can be translated
  },
  methodologies: {
    heading: { en: 'Methodologies & Frameworks', sv: 'Metoder & ramverk' },
    categoryLabel: { en: 'Category', sv: 'Kategori' },
    frameworksLabel: { en: 'Frameworks & Methodologies', sv: 'Ramverk & metoder' },
    rows: [
      { category: { en: 'Architecture', sv: 'Arkitektur' }, value: { en: 'TOGAF, Enterprise Architecture frameworks', sv: 'TOGAF, Enterprise Architecture-ramverk' } },
      { category: { en: 'Service Management', sv: 'Tjänstehantering' }, value: { en: 'ITIL v3, ITIL v4', sv: 'ITIL v3, ITIL v4' } },
      { category: { en: 'Agile', sv: 'Agilt' }, value: { en: 'SAFe (Scaled Agile Framework), Agile Software Development', sv: 'SAFe (Scaled Agile Framework), Agil systemutveckling' } },
      { category: { en: 'Operations', sv: 'Drift' }, value: { en: 'Lean Production, Site Reliability Engineering (SRE)', sv: 'Lean Production, Site Reliability Engineering (SRE)' } },
      { category: { en: 'Integration', sv: 'Integration' }, value: { en: 'Certified Integrator methodology', sv: 'Certifierad Integratörsmetodik' } },
      { category: { en: 'DevOps', sv: 'DevOps' }, value: { en: 'DevSecOps, CI/CD, Infrastructure as Code', sv: 'DevSecOps, CI/CD, Infrastructure as Code' } },
    ],
  },
  techSkills: {
    heading: { en: 'Technical Skills', sv: 'Tekniska färdigheter' },
    categories: [
      { title: { en: 'Platforms & Infrastructure', sv: 'Plattformar & infrastruktur' }, skills: ['Kubernetes', 'Docker', 'Azure', 'VMware', 'Active Directory', 'Windows Server', 'Citrix / NetScaler', 'NetApp Storage'] },
      { title: { en: 'DevOps & Automation', sv: 'DevOps & automation' }, skills: ['Infrastructure as Code', 'CI/CD Pipelines', 'Service Mesh', 'mTLS', 'Test Automation', 'Git', 'Monitoring & Observability'] },
      { title: { en: 'Observability & Monitoring', sv: 'Observerbarhet & övervakning' }, skills: ['OpenMetrics', 'Elastic Stack', 'Log Aggregation', 'Distributed Tracing', 'APM'] },
      { title: { en: 'Programming & Tools', sv: 'Programmering & verktyg' }, skills: ['Golang', 'Scripting & Automation', 'CMDB', 'ITSM Tools', 'Quality Management Systems'] },
    ],
  },
  industry: {
    heading: { en: 'Industry Experience', sv: 'Branscherfarenhet' },
    industryLabel: { en: 'Industry', sv: 'Bransch' },
    yearsLabel: { en: '', sv: '' },
    descriptionLabel: { en: 'Description', sv: 'Beskrivning' },
    companySizeNote: {
      en: 'Company size experience: Startup (10–50), Growth (50–200), Scale (200–1,000), Enterprise (1,000+)',
      sv: 'Erfarenhet av företagsstorlek: Startup (10–50), Tillväxt (50–200), Skalning (200–1 000), Enterprise (1 000+)',
    },
    rows: [
      { industry: { en: 'IT Services & Outsourcing', sv: 'IT-tjänster & outsourcing' }, years: '', desc: { en: 'SaaS delivery, complete outsourcing solutions, application delivery, managed services. EVRY One Outsourcing Services.', sv: 'SaaS-leverans, kompletta outsourcinglösningar, applikationsleverans, hanterade tjänster. EVRY One Outsourcing Services.' } },
      { industry: { en: 'Enterprise Software / ERP', sv: 'Företagsprogramvara / ERP' }, years: '', desc: { en: 'Cloud-native ERP applications, SaaS delivery, containerized middleware. IFS Applications.', sv: 'Molnbaserade ERP-applikationer, SaaS-leverans, containeriserad middleware. IFS Applications.' } },
      { industry: { en: 'Healthcare Technology', sv: 'Hälso- och sjukvårdsteknik' }, years: '', desc: { en: 'Electronic Health Record (EHR) and E-health as a Service. Service-oriented transformation for 17 of 21 Swedish regions. Cambio Healthcare Systems.', sv: 'Elektroniska patientjournaler (EHR) och E-hälsa som tjänst. Tjänsteorienterad transformation för 17 av 21 svenska regioner. Cambio Healthcare Systems.' } },
      { industry: { en: 'Construction Technology', sv: 'Byggteknik' }, years: '', desc: { en: 'Software solutions for Construction industry, expanding into Europe. Next One Technology / HVD Group.', sv: 'Programvarulösningar för byggindustrin, expansion i Europa. Next One Technology / HVD Group.' } },
      { industry: { en: 'Integration Services', sv: 'Integrationstjänster' }, years: '', desc: { en: 'Enterprise/Presales Architect for integration solutions. Entiros.', sv: 'Enterprise/Presales-arkitekt för integrationslösningar. Entiros.' } },
    ],
  },
  education: {
    heading: { en: 'Studies', sv: 'Studier' },
    entries: [
      {
        degree: { en: 'Computer Science', sv: 'Civilingenjör Datateknik' },
        school: { en: 'Linköping University · 2001-2005', sv: 'Linköpings universitet · 2001-2005' },
      },
      {
        degree: { en: 'Teacher Mathematics & Physics', sv: 'Lärare Matematik & Fysik' },
        school: { en: 'Linköping University · 2000-2001', sv: 'Linköpings universitet · 2000-2001' },
      },
    ],
    certHeading: { en: 'Certifications', sv: 'Certifieringar' },
    certLabel: { en: 'Certification', sv: 'Certifiering' },
    issuerLabel: { en: 'Issuer', sv: 'Utfärdare' },
    yearLabel: { en: 'Year', sv: 'År' },
  },
  languages: {
    heading: { en: 'Languages', sv: 'Språk' },
    languageLabel: { en: 'Language', sv: 'Språk' },
    proficiencyLabel: { en: 'Proficiency', sv: 'Nivå' },
    rows: [
      { lang: { en: 'Swedish', sv: 'Svenska' }, prof: { en: 'Native', sv: 'Modersmål' } },
      { lang: { en: 'English', sv: 'Engelska' }, prof: { en: 'Fluent', sv: 'Flytande' } },
    ],
  },
  cta: {
    heading: { en: 'Interested in working together?', sv: 'Intresserad av att samarbeta?' },
    description: {
      en: 'Available for consulting engagements in Enterprise Architecture, Cloud Architecture, Service-Oriented Transformation, and Business Capability Development.',
      sv: 'Tillgänglig för konsultuppdrag inom Enterprise-arkitektur, molnarkitektur, tjänsteorienterad transformation och affärsförmågeutveckling.',
    },
    contactBtn: { en: 'Contact us', sv: 'Kontakt' },
  },
}

function LanguageToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="fixed top-24 right-4 z-50 flex rounded-full overflow-hidden shadow-lg border border-gray-200 bg-white">
      <button
        onClick={() => setLang('sv')}
        className={`px-3 py-1.5 text-sm font-heading font-semibold transition-colors ${
          lang === 'sv'
            ? 'bg-nordic-blue text-white'
            : 'bg-white text-dark-gray hover:bg-light-gray'
        }`}
      >
        SV
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 text-sm font-heading font-semibold transition-colors ${
          lang === 'en'
            ? 'bg-nordic-blue text-white'
            : 'bg-white text-dark-gray hover:bg-light-gray'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default function CvIngemar() {
  const [lang, setLang] = useState<Lang>('sv')
  const t = (obj: Record<Lang, string>) => obj[lang]
  const tArr = (obj: Record<Lang, string[]>) => obj[lang]

  return (
    <div className="relative" style={{ backgroundColor: '#e8e8e8' }}>
      <Seo
        title="Ingemar Norberg – CV"
        description="Senior IT-arkitekt och konsult med 20+ års erfarenhet inom enterprise-arkitektur, molnbaserad infrastruktur, tjänsteorienterad transformation och organisatorisk förmågeutveckling."
        ogType="profile"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ingemar Norberg',
          jobTitle: 'CIO – Principal Business & IT Consultant',
          worksFor: { '@type': 'Organization', name: 'Norhill AB' },
          url: 'https://norhill.se/cv/ingemar-norberg',
          knowsAbout: ['Enterprise Architecture', 'Cloud Architecture', 'Kubernetes', 'Organizational Transformation', 'TOGAF'],
        }}
      />
      <LanguageToggle lang={lang} setLang={setLang} />

      {/* Dimmed side overlays with borders and shadow */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-0" style={{ right: 'calc(50% + 33rem)', background: 'rgba(0, 0, 0, 0.05)' }} />
        <div className="absolute top-0 bottom-0 right-0" style={{ left: 'calc(50% + 33rem)', background: 'rgba(0, 0, 0, 0.05)' }} />
        <div className="absolute top-0 bottom-0" style={{ left: 'calc(50% - 33rem)', width: '1px', background: 'rgba(0, 0, 0, 0.1)', boxShadow: '-10px 0 24px 2px rgba(0, 0, 0, 0.12)' }} />
        <div className="absolute top-0 bottom-0" style={{ right: 'calc(50% - 33rem)', width: '1px', background: 'rgba(0, 0, 0, 0.1)', boxShadow: '10px 0 24px 2px rgba(0, 0, 0, 0.12)' }} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nordic-blue to-forest-green section-padding text-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">{t(translations.hero.title)}</h1>
            <img src="/images/ingemar_norberg.jpg" alt="Ingemar Norberg" className="w-60 h-60 rounded-full mb-4 inline-block" />
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-amber-gold">{t(translations.hero.name)}</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-sky-blue mb-6">{t(translations.hero.description)}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {tArr(translations.hero.tags).map((tag) => (
                <span key={tag} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-heading font-medium">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Characteristics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.characteristics.heading)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tArr(translations.characteristics.traits).map((trait, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-forest-green mt-1.5 text-lg">✓</span>
                    <span className="text-dark-gray">{trait}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.profile.heading)}</h2>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">{t(translations.profile.p1)}</p>
              <p className="text-lg text-dark-gray mb-6 leading-relaxed">{t(translations.profile.p2)}</p>
              <blockquote className="border-l-4 border-amber-gold pl-6 italic text-dark-gray text-lg my-8">{t(translations.profile.quote)}</blockquote>
              <p className="text-lg text-dark-gray leading-relaxed">{t(translations.profile.p3)}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-8">{t(translations.competencies.heading)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {translations.competencies.cards.map((card, i) => (
                  <div key={i} className="card bg-white">
                    <h3 className="text-lg font-heading font-bold text-nordic-blue mb-2">{t(card.title)}</h3>
                    <p className="text-dark-gray text-sm">
                      {t(card.content).split('\n').map((line, j) => (
                        <span key={j}>{line}{j < t(card.content).split('\n').length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.achievements.heading)}</h2>
              <ul className="space-y-4">
                {translations.achievements.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-amber-gold font-bold text-xl mt-0.5">•</span>
                    <div>
                      <strong className="text-nordic-blue">{t(item.title)}</strong>
                      <span className="text-dark-gray">{t(item.desc)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-4">{t(translations.experience.heading)}</h2>
              <p className="text-lg text-dark-gray mb-8 leading-relaxed">
                <strong>TL;DR</strong> – {t(translations.experience.tldr)}
              </p>

              {translations.experience.companies.map((company, i) => (
                <div key={i}>
                  {i > 0 && <hr className="border-gray-200 mb-12" />}
                  <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className="text-2xl font-heading font-bold text-nordic-blue">{company.name}</h3>
                      <span className="text-slate-gray font-heading text-sm">{t(company.location)}</span>
                    </div>
                    <div className="border-l-4 border-amber-gold pl-6 mb-6">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                        <h4 className="text-xl font-heading font-semibold text-dark-gray">{t(company.role)}</h4>
                        <span className="text-slate-gray text-sm font-heading">{t(company.period)}</span>
                      </div>
                      <p className="text-dark-gray mb-4 leading-relaxed">{t(company.description)}</p>
                      {company.description2 && <p className="text-dark-gray mb-4 leading-relaxed">{t(company.description2)}</p>}
                      <p className="text-dark-gray mb-4 leading-relaxed font-semibold">{t(translations.experience.achievementsLabel)}</p>
                      <ul className="list-disc ml-5 text-dark-gray space-y-1 mb-4">
                        {tArr(company.achievements).map((a, j) => <li key={j}>{a}</li>)}
                      </ul>
                      <p className="text-sm text-slate-gray">
                        <strong>{t(translations.experience.skillsLabel)}</strong> {t(company.skills)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-8">{t(translations.testimonials.heading)}</h2>
              <div className="space-y-6">
                {[
                  { quote: '"I interfaced with Ingemar and appreciated how Ingemar was a first-mover on providing structure and clarity and was a very good sparring partner on architecture."', cite: '– Lars Dybdahl, Cambio/CIS, Founder' },
                  { quote: '"Ingemar is great in business contacts and quickly connecting things together. Suits us well where you need to be a Swiss army knife to succeed."', cite: '– Ola Fjällman, Linköpings Kommun, System & Communications Manager' },
                  { quote: '"Maybe the best transition project I\'ve been involved in."', cite: '– Mats Rehnqvist, Head of IT at Anticimex' },
                  { quote: '"I just want to say how glad I am that you came into our delivery of web services."', cite: '– Gustav Pilsmo, Delivery Manager at Systembolaget' },
                  { quote: '"I just want to say that it was really well done today, given that it was a complicated procedure. Ingemar worked late into the evening yesterday to solve our problems and thereby enabled our launch of our new website today."', cite: '– Adham Shawwaf, Byggmax' },
                ].map((item, i) => (
                  <blockquote key={i} className="border-l-4 border-amber-gold pl-6 py-2">
                    <p className="text-dark-gray text-lg italic mb-2">{item.quote}</p>
                    <cite className="text-slate-gray not-italic font-heading text-sm">{item.cite}</cite>
                  </blockquote>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodologies & Frameworks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.methodologies.heading)}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-nordic-blue">
                      <th className="py-3 pr-4 font-heading font-semibold text-nordic-blue">{t(translations.methodologies.categoryLabel)}</th>
                      <th className="py-3 font-heading font-semibold text-nordic-blue">{t(translations.methodologies.frameworksLabel)}</th>
                    </tr>
                  </thead>
                  <tbody className="text-dark-gray">
                    {translations.methodologies.rows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-semibold">{t(row.category)}</td>
                        <td className="py-3">{t(row.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.techSkills.heading)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {translations.techSkills.categories.map((cat, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-heading font-bold text-nordic-blue mb-3">{t(cat.title)}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="bg-white text-dark-gray px-3 py-1.5 rounded-full text-sm font-heading">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.industry.heading)}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-nordic-blue">
                      <th className="py-3 pr-4 font-heading font-semibold text-nordic-blue">{t(translations.industry.industryLabel)}</th>
                      <th className="py-3 pr-4 font-heading font-semibold text-nordic-blue">{t(translations.industry.yearsLabel)}</th>
                      <th className="py-3 font-heading font-semibold text-nordic-blue">{t(translations.industry.descriptionLabel)}</th>
                    </tr>
                  </thead>
                  <tbody className="text-dark-gray">
                    {translations.industry.rows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-semibold">{t(row.industry)}</td>
                        <td className="py-3 pr-4">{row.years}</td>
                        <td className="py-3">{t(row.desc)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-gray mt-4">{t(translations.industry.companySizeNote)}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.education.certHeading)}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-nordic-blue">
                      <th className="py-3 pr-4 font-heading font-semibold text-nordic-blue">{t(translations.education.certLabel)}</th>
                      <th className="py-3 pr-4 font-heading font-semibold text-nordic-blue">{t(translations.education.issuerLabel)}</th>
                      <th className="py-3 font-heading font-semibold text-nordic-blue">{t(translations.education.yearLabel)}</th>
                    </tr>
                  </thead>
                  <tbody className="text-dark-gray">
                    <tr className="border-b border-gray-200"><td className="py-3 pr-4">Certified Integrator</td><td className="py-3 pr-4">Entiros</td><td className="py-3">2025</td></tr>
                    <tr className="border-b border-gray-200"><td className="py-3 pr-4">ITIL v4 Foundation</td><td className="py-3 pr-4">AXELOS</td><td className="py-3">2021</td></tr>
                    <tr className="border-b border-gray-200"><td className="py-3 pr-4">ITIL v3 Foundation</td><td className="py-3 pr-4">AXELOS</td><td className="py-3">2014</td></tr>
                    <tr className="border-b border-gray-200"><td className="py-3 pr-4">Citrix Certified Professional – Networking</td><td className="py-3 pr-4">Citrix</td><td className="py-3">2014</td></tr>
                  </tbody>
                </table>
              </div>
              <br/>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.education.heading)}</h2>
              <div className="mb-8 space-y-4">
                {translations.education.entries.map((entry, index) => (
                  <div key={index} className="border-l-4 border-forest-green pl-6 py-2">
                    <h3 className="text-xl font-heading font-semibold text-dark-gray">{t(entry.degree)}</h3>
                    <p className="text-slate-gray font-heading">{t(entry.school)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-heading font-bold text-nordic-blue mb-6">{t(translations.languages.heading)}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse max-w-md">
                  <thead>
                    <tr className="border-b-2 border-nordic-blue">
                      <th className="py-3 pr-4 font-heading font-semibold text-nordic-blue">{t(translations.languages.languageLabel)}</th>
                      <th className="py-3 font-heading font-semibold text-nordic-blue">{t(translations.languages.proficiencyLabel)}</th>
                    </tr>
                  </thead>
                  <tbody className="text-dark-gray">
                    {translations.languages.rows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 pr-4">{t(row.lang)}</td>
                        <td className="py-3">{t(row.prof)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-nordic-blue to-forest-green text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">{t(translations.cta.heading)}</h2>
            <p className="text-xl mb-8 text-sky-blue max-w-2xl mx-auto">{t(translations.cta.description)}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-amber-gold hover:bg-amber-gold/90">{t(translations.cta.contactBtn)}</Link>
              <a href="https://www.linkedin.com/in/inorberg/" target="_blank" rel="noopener noreferrer" className="btn-outline border-white text-white hover:bg-white hover:text-nordic-blue">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
