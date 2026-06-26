'use client';

import { useState } from 'react';
import { ArrowRight, Lightbulb, Target, TrendingUp, Users2, Briefcase, Shield, ChevronRight, MapPin, Zap, X, BookOpen } from 'lucide-react';

export default function AtlantisFuture() {
  const [showResearchHub, setShowResearchHub] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-stone-500 tracking-widest">ATLANTIS</p>
            <h1 className="text-lg font-bold text-stone-900">Future Foundation</h1>
          </div>
          <div className="flex gap-12 items-center text-sm font-medium">
            <a href="#about" className="text-stone-600 hover:text-stone-900 transition">About</a>
            <a href="#initiatives" className="text-stone-600 hover:text-stone-900 transition">Initiatives</a>
            <a href="#impact" className="text-stone-600 hover:text-stone-900 transition">Impact</a>
            <a href="#connect" className="text-stone-600 hover:text-stone-900 transition">Connect</a>
            <button className="px-6 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition">
              Join Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-6">Strategic Foresight</p>
            <h1 className="text-6xl font-bold leading-tight text-stone-900 mb-8">
              Restoring Atlantis: Humanity & Planet in Alignment
            </h1>
            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-2xl">
              Bridging government, academia, and industry to design, test, and scale regenerative solutions that restore human and ecological health while positioning us as leaders in planetary health innovation.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-stone-900 text-white rounded-lg font-semibold hover:bg-stone-800 transition flex items-center gap-2">
                Explore Our Vision <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-stone-900 text-stone-900 rounded-lg font-semibold hover:bg-stone-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-12">
            <div>
              <p className="text-4xl font-bold mb-2">10-50</p>
              <p className="text-sm text-stone-300">Year Strategic Horizon</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">6</p>
              <p className="text-sm text-stone-300">Dimensions of Wellness</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">190+</p>
              <p className="text-sm text-stone-300">Countries Engaged</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">€2B+</p>
              <p className="text-sm text-stone-300">Innovation Pipeline Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">About Us</p>
              <h2 className="text-4xl font-bold text-stone-900 mb-8">
                Restoring Advanced Civilization
              </h2>
              <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">Our Mission</p>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                The Atlantis Future Foundation, inspired by Plato's advanced civilizations and the Portuguese vision of the Fifth Empire as articulated by Fernando Pessoa, cultivates global unity through knowledge, culture, and regenerative development. We honor this legacy by positioning advanced research and innovation as the foundation for humanity's next chapter.
              </p>
              <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4 mt-8">Our Vision</p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                To position global civilization 10-50 years ahead through evidence-based research in planetary health, urban regeneration, and integrated systems thinking. We work across sectors to recover and apply principles of coherent, sustainable development that honor both human advancement and ecological restoration.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-stone-900 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Evidence-Driven Strategy</p>
                    <p className="text-stone-600 text-sm">Research, data, and global insights inform all initiatives</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-stone-900 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Cross-Sector Collaboration</p>
                    <p className="text-stone-600 text-sm">Government, academia, business, and civil society aligned</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-stone-900 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Strategic Positioning</p>
                    <p className="text-stone-600 text-sm">Position civilization 10-50 years ahead through integrated research</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-2xl p-12 h-96 flex items-center justify-center border border-stone-200">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-stone-400 mx-auto mb-4" />
                <p className="text-stone-500 font-medium">Global Planetary Health Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="initiatives" className="py-32 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">Strategic Focus</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Key Pillars of Regeneration
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We concentrate on transformative areas that will restore planetary and human health
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Urban Regeneration",
                desc: "Cities designed around health prevention, longevity, and ecological restoration"
              },
              {
                icon: Zap,
                title: "Sustainable Energy",
                desc: "Net-zero pathways, renewable energy leadership, and climate-resilient infrastructure"
              },
              {
                icon: TrendingUp,
                title: "Economic Resilience",
                desc: "Circular systems, wellness economy, and equitable growth strategies"
              },
              {
                icon: Users2,
                title: "Demographic Futures",
                desc: "Population trends, education evolution, and quality of life enhancement"
              },
              {
                icon: Shield,
                title: "Governance Innovation",
                desc: "Democratic participation, civic engagement, and institutional transformation"
              },
              {
                icon: Briefcase,
                title: "Health Systems",
                desc: "Preventive care models, wellness infrastructure, and longevity economics"
              }
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-8 border border-stone-200 hover:shadow-lg transition-all group cursor-pointer">
                  <Icon className="w-12 h-12 text-stone-900 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">{pillar.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{pillar.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-stone-900 text-sm font-medium">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Impact Section */}
      <section id="impact" className="py-32 px-8 bg-gradient-to-b from-stone-900 to-stone-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-stone-300 tracking-widest uppercase mb-4">Impact & Results</p>
            <h2 className="text-4xl font-bold mb-6">
              Driving Global Regeneration
            </h2>
            <p className="text-lg text-stone-200 max-w-2xl mx-auto">
              Our initiatives have influenced policy direction, attracted investment, and positioned us at the forefront of planetary health innovation
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { title: "Policy Influence", items: ["20+ strategic frameworks", "Parliamentary recommendations", "International coordination"] },
              { title: "Ecosystem Development", items: ["100+ partner organizations", "500+ active participants", "€5B+ investment mobilized"] },
              { title: "Visibility & Leadership", items: ["Global recognition", "Multi-sector partnerships", "Thought leadership position"] }
            ].map((category, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-stone-100">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-8 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">2026-2080</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Portugal's Transformation Roadmap
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Strategic milestones shaping a regenerative, globally influential Portugal
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: "2026", title: "Foundation Launch", desc: "Atlantis Future Foundation establishes global research partnerships", highlight: false },
              { year: "2028", title: "National Strategy", desc: "Global Atlantis Future Forum convenes. Portugal debuts national transformation vision", highlight: true },
              { year: "2030", title: "World Cup & Vision Milestone", desc: "FIFA World Cup brings 2M+ visitors. Innovation zones launched. Startups in planetary health, longevity, wellness economy established", highlight: true },
              { year: "2035", title: "Urban Regeneration", desc: "New masterplans implemented. 5 urban regeneration districts under development. 50+ innovation hubs operational", highlight: false },
              { year: "2040", title: "Regional Leadership", desc: "Portugal positions as European hub for planetary health innovation. 200+ startups scaling globally", highlight: false },
              { year: "2050", title: "National Transformation", desc: "Net-zero cities implemented. Health-optimized infrastructure standard. Wellness economy drives GDP growth", highlight: false },
              { year: "2076", title: "50-Year Vision", desc: "Portugal: regenerative systems model. Global leader in human flourishing & planetary restoration", highlight: true }
            ].map((milestone, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white mb-4 ${milestone.highlight ? 'bg-stone-900' : 'bg-stone-400'}`}>
                    {i + 1}
                  </div>
                  {i < 6 && <div className="w-1 h-20 bg-stone-200"></div>}
                </div>
                <div className={`pb-8 flex-1 ${milestone.highlight ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200'} rounded-lg p-6`}>
                  <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${milestone.highlight ? 'text-stone-300' : 'text-stone-500'}`}>
                    {milestone.year}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className={`text-sm ${milestone.highlight ? 'text-stone-200' : 'text-stone-600'}`}>
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Initiatives */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            {[
              { title: "Innovation Zones", items: ["Planetary health startups", "Longevity research", "Wellness economy hubs"] },
              { title: "Urban Development", items: ["5 regenerative districts", "Health-optimized infrastructure", "Net-zero by 2050"] },
              { title: "Global Impact", items: ["Research leadership", "200+ scaling startups", "Models for world replication"] }
            ].map((section, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="font-bold text-stone-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-sm text-stone-600 flex gap-2">
                      <span className="text-stone-900 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">Knowledge</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Research & Insights
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Planetary Health 2050", subtitle: "Long-term regeneration framework", status: "2024" },
              { title: "Regenerative Scenarios", subtitle: "Multiple futures exploration", status: "Ongoing" },
              { title: "Global Wellness Index", subtitle: "Planetary health tracking", status: "Annual" }
            ].map((pub, i) => (
              <div key={i} className="bg-stone-50 rounded-xl p-8 border border-stone-200 hover:border-stone-900 transition group cursor-pointer">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">{pub.status}</p>
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-stone-700">{pub.title}</h3>
                <p className="text-stone-600 mb-6">{pub.subtitle}</p>
                <div className="flex items-center gap-2 text-stone-900 text-sm font-medium">
                  Access <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="connect" className="py-32 px-8 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-stone-300 tracking-widest uppercase mb-6">Get Involved</p>
          <h2 className="text-5xl font-bold mb-8">
            Shape Our Regenerative Future
          </h2>
          <p className="text-xl text-stone-200 mb-12 leading-relaxed">
            Join government leaders, innovators, academics, and visionaries in building regenerative systems and restoring planetary health. Whether through research, policy collaboration, or strategic partnership—your voice and expertise matter.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-stone-900 rounded-lg font-semibold hover:bg-stone-100 transition flex items-center gap-2">
              Schedule a Meeting <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      {/* Research Hub Button */}
      <button
        onClick={() => setShowResearchHub(true)}
        className="fixed right-8 bottom-8 w-14 h-14 bg-stone-900 text-white rounded-full shadow-lg hover:bg-stone-800 transition flex items-center justify-center z-40"
        title="Research Hub"
      >
        <BookOpen className="w-6 h-6" />
      </button>

      {/* Research Hub Drawer */}
      {showResearchHub && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setShowResearchHub(false)}>
          <div
            className="fixed right-0 top-0 w-full max-w-xl h-screen bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="sticky top-0 bg-white border-b border-stone-200 p-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-stone-900">Research Hub</h2>
              <button
                onClick={() => setShowResearchHub(false)}
                className="p-2 hover:bg-stone-100 rounded-lg transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-8 space-y-8">
              {/* Historical Foundation */}
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">Historical Foundation</h3>
                <p className="text-stone-600 mb-3 text-sm leading-relaxed">
                  Our research draws from Plato's accounts of advanced civilizations, particularly in the context of the Azores and Atlantic regions. These historical records provide insight into how integrated, coherent systems supported both technological advancement and ecological balance.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The philosophical concept of the Fifth Empire—articulated by Portuguese thinker Fernando Pessoa—emphasizes nations unified through culture, knowledge, and spiritual coherence, not conquest.
                </p>
              </div>

              {/* Core Principles */}
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">Core Research Principles</h3>
                <ul className="space-y-3">
                  {[
                    "Advanced civilizations understood integration: consciousness, technology, and ecology aligned",
                    "Collapse occurred when alignment broke—when power was used for control rather than coherence",
                    "Regeneration requires recovering principles of balanced, coherent systems",
                    "Technology serves human flourishing when grounded in ethical alignment"
                  ].map((principle, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-600">
                      <span className="text-stone-900 font-bold flex-shrink-0">•</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research Framework */}
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">Our Research Framework</h3>
                <div className="space-y-4">
                  {[
                    { label: "Integrated Systems", desc: "How advanced societies balanced human needs, innovation, and ecological health" },
                    { label: "Knowledge Recovery", desc: "Reconstructing principles from historical records and across disciplines" },
                    { label: "Modern Application", desc: "Applying coherent design to urban regeneration, health systems, and governance" },
                    { label: "Alignment Testing", desc: "Ensuring technology and policy serve collective wellbeing, not domination" }
                  ].map((item, i) => (
                    <div key={i} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                      <p className="font-semibold text-stone-900 text-sm mb-1">{item.label}</p>
                      <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Concepts */}
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">Key Concepts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-stone-900">Coherence</p>
                    <p className="text-stone-600">Alignment between intention, action, and outcome across all systems</p>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Regeneration</p>
                    <p className="text-stone-600">Systems that restore health rather than extract value</p>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Resonance</p>
                    <p className="text-stone-600">Alignment between natural rhythms and human innovation</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-stone-900 text-white rounded-lg p-6 text-center">
                <p className="text-sm mb-4 leading-relaxed">
                  Explore how these principles apply to contemporary challenges in health, governance, and sustainability.
                </p>
                <button className="w-full px-6 py-2.5 bg-white text-stone-900 rounded-lg font-semibold hover:bg-stone-100 transition text-sm">
                  Access Full Research
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-16 px-8 bg-stone-950 border-t border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-12 mb-12">
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Foundation</p>
              <p className="text-stone-300 text-sm leading-relaxed">
                Atlantis Future Foundation: Strategic foresight for planetary regeneration and human flourishing.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Focus Areas</p>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition">Urban Regeneration</a></li>
                <li><a href="#" className="hover:text-white transition">Planetary Health</a></li>
                <li><a href="#" className="hover:text-white transition">Governance</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Resources</p>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition">Publications</a></li>
                <li><a href="#" className="hover:text-white transition">Events</a></li>
                <li><a href="#" className="hover:text-white transition">Research</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Connect</p>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Partners</p>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition">Government</a></li>
                <li><a href="#" className="hover:text-white transition">Universities</a></li>
                <li><a href="#" className="hover:text-white transition">Industry</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-12 flex justify-between items-center text-sm text-stone-400">
            <p>&copy; 2026 Atlantis Future Foundation. All rights reserved.</p>
            <p>Restoring Atlantis: Humanity & Planet in Alignment</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
