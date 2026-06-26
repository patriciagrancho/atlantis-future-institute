'use client';

import { ArrowRight, Lightbulb, Target, TrendingUp, Users2, Briefcase, Shield, ChevronRight, MapPin, Zap } from 'lucide-react';

export default function PortugalFuture() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-stone-500 tracking-widest">PORTUGAL</p>
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

      {/* ─── Hero Section ─── */}
      <section className="pt-40 pb-32 px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-6">Strategic Foresight</p>
            <h1 className="text-6xl font-bold leading-tight text-stone-900 mb-8">
              Shaping the Future of Portugal
            </h1>
            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-2xl">
              Bridging government, academia, and industry to design, test, and scale future-ready policies and innovations that position Portugal as a leader in European development.
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

      {/* ─── Stats Section ─── */}
      <section className="py-24 px-8 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-12">
            <div>
              <p className="text-4xl font-bold mb-2">10-50</p>
              <p className="text-sm text-stone-300">Year Strategic Horizon</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-sm text-stone-300">Government Agencies</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm text-stone-300">Universities & Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">€2B+</p>
              <p className="text-sm text-stone-300">Future Initiatives Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">About Us</p>
              <h2 className="text-4xl font-bold text-stone-900 mb-8">
                Building Tomorrow's Portugal Today
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                The Portugal Future Foundation is a strategic institution dedicated to exploring emerging challenges and opportunities that will shape the nation's long-term development.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We combine foresight methodology, collaborative scenario planning, and advanced research to help policymakers and leaders make informed decisions about Portugal's future.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-stone-900 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Evidence-Driven Strategy</p>
                    <p className="text-stone-600 text-sm">Data, research, and global insights inform all initiatives</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-stone-900 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Cross-Sector Collaboration</p>
                    <p className="text-stone-600 text-sm">Government, academia, business, and civil society working together</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-stone-900 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Forward-Looking Perspective</p>
                    <p className="text-stone-600 text-sm">Anticipating trends 10-50 years ahead</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-2xl p-12 h-96 flex items-center justify-center border border-stone-200">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-stone-400 mx-auto mb-4" />
                <p className="text-stone-500 font-medium">Portugal's Strategic Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Focus Areas ─── */}
      <section id="initiatives" className="py-32 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">Strategic Focus</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Key Pillars of Future Development
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We concentrate on transformative areas that will define Portugal's competitiveness and wellbeing
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation & Technology",
                desc: "Digital transformation, AI integration, and emerging technologies shaping competitive advantage"
              },
              {
                icon: Zap,
                title: "Sustainable Energy",
                desc: "Net-zero pathways, renewable energy leadership, and climate-resilient infrastructure"
              },
              {
                icon: TrendingUp,
                title: "Economic Resilience",
                desc: "Diversified economy, emerging sectors, and equitable growth strategies"
              },
              {
                icon: Users2,
                title: "Demographic Futures",
                desc: "Population trends, education evolution, and quality of life enhancement"
              },
              {
                icon: Shield,
                title: "Governance & Society",
                desc: "Democratic participation, civic engagement, and institutional innovation"
              },
              {
                icon: Briefcase,
                title: "Urban & Regional Development",
                desc: "Sustainable cities, rural revitalization, and territorial cohesion"
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

      {/* ─── Methodology Section ─── */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-4">Our Approach</p>
            <h2 className="text-4xl font-bold text-stone-900">
              Foresight-Driven Methodology
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {[
              { num: "1", label: "Trend Analysis", desc: "Global & local pattern identification" },
              { num: "2", label: "Stakeholder Engagement", desc: "Multi-sector dialogue & co-creation" },
              { num: "3", label: "Scenario Planning", desc: "Multiple futures exploration" },
              { num: "4", label: "Strategic Roadmaps", desc: "Actionable policy frameworks" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.num}
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">{step.label}</h3>
                <p className="text-sm text-stone-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Impact Section ─── */}
      <section id="impact" className="py-32 px-8 bg-gradient-to-b from-stone-900 to-stone-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-stone-300 tracking-widest uppercase mb-4">Impact & Results</p>
            <h2 className="text-4xl font-bold mb-6">
              Driving Portugal's Strategic Agenda
            </h2>
            <p className="text-lg text-stone-200 max-w-2xl mx-auto">
              Our initiatives have influenced policy direction, attracted investment, and positioned Portugal at the forefront of European innovation
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { title: "Policy Influence", items: ["20+ strategic frameworks", "Parliamentary recommendations", "European coordination"] },
              { title: "Ecosystem Development", items: ["100+ partner organizations", "500+ active participants", "€5B+ investment mobilized"] },
              { title: "Visibility & Leadership", items: ["International recognition", "Global partnerships", "Thought leadership position"] }
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

      {/* ─── Publications & Research ─── */}
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
              { title: "Portugal 2050", subtitle: "Long-term vision framework", status: "2024" },
              { title: "Scenario Futures", subtitle: "Multiple futures exploration", status: "Ongoing" },
              { title: "Innovation Index", subtitle: "European competitiveness tracking", status: "Annual" }
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

      {/* ─── Call to Action ─── */}
      <section id="connect" className="py-32 px-8 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-stone-300 tracking-widest uppercase mb-6">Get Involved</p>
          <h2 className="text-5xl font-bold mb-8">
            Shape Portugal's Future
          </h2>
          <p className="text-xl text-stone-200 mb-12 leading-relaxed">
            Join government leaders, innovators, academics, and visionaries in building the future Portugal deserves. Whether through research, policy collaboration, or strategic partnership—your voice matters.
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

      {/* ─── Footer ─── */}
      <footer className="py-16 px-8 bg-stone-950 border-t border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-12 mb-12">
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Foundation</p>
              <p className="text-stone-300 text-sm leading-relaxed">
                Portugal Future Foundation: Strategic foresight for national development.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Focus Areas</p>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition">Innovation</a></li>
                <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
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
            <p>&copy; 2026 Portugal Future Foundation. All rights reserved.</p>
            <p>Building Tomorrow's Portugal Today</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
