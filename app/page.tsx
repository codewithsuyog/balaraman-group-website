'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'People', href: '#people' },
    { label: 'Contact', href: '#contact' },
  ];

  const researchAreas = [
    { title: 'Catalysis', description: 'Development of catalytic systems for efficient and sustainable chemical transformations.', icon: '⚗️' },
    { title: 'Organometallic Chemistry', description: 'Exploring transition metal complexes and mechanistic pathways in synthesis.', icon: '🔗' },
    { title: 'Sustainable Chemistry', description: 'Designing greener methodologies and environmentally conscious reactions.', icon: '🌱' },
  ];

  const teamMembers = [
    { name: 'Prof. E. Balaraman', role: 'Principal Investigator', bio: 'Research interests include catalysis, organometallic chemistry, and sustainable synthesis.' },
    { name: 'Research Scholars', role: 'PhD Students', bio: 'PhD students working on catalysis, synthesis, and mechanistic chemistry.' },
    { name: 'Group Alumni', role: 'Former Members', bio: 'Former group members now contributing across academia and industry worldwide.' },
  ];

  return (
    <main className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-[#FAFAF7] text-black'} transition-colors duration-300`}>
      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-gray-900/95 border-gray-700' : 'bg-[#FAFAF7]/95 border-gray-200') + ' backdrop-blur-md shadow-sm border-b' : 'bg-transparent border-b ' + (isDark ? 'border-gray-700/30' : 'border-gray-200/30')}`}>      
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className={`text-lg md:text-xl font-semibold tracking-tight transition hover:opacity-70`}>
            Balaraman Group
          </Link>

          <div className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={`relative group transition-colors ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>              
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} group-hover:w-full transition-all duration-300`} />
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg transition ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'hover:bg-gray-100'}`}>            
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className={`text-xs md:text-sm tracking-[0.2em] uppercase animate-slide-up ${isDark ? 'text-gray-400' : 'text-gray-500'}`} style={{ animationDelay: '0.1s' }}>
              IISER Tirupati — Department of Chemistry
            </p>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Catalysis, Sustainable Chemistry & Molecular Design
            </h1>

            <p className={`text-lg md:text-xl max-w-3xl leading-relaxed animate-slide-up ${isDark ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.3s' }}>
              The Balaraman Research Group develops innovative catalytic systems and sustainable chemical methodologies with focus on organometallic chemistry and molecular design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button className={`px-6 md:px-8 py-3 md:py-4 rounded-full active:scale-95 transition-all duration-200 font-medium text-sm md:text-base ${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}>              
                Explore Research
              </button>
              <button className={`px-6 md:px-8 py-3 md:py-4 border-2 rounded-full active:scale-95 transition-all duration-200 font-medium text-sm md:text-base ${isDark ? 'border-white hover:bg-white hover:text-gray-900' : 'border-black hover:bg-black hover:text-white'}`}>                
                View Publications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className={`px-6 md:px-10 py-20 md:py-28 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>      
        <div className="max-w-6xl mx-auto">
          <p className={`text-xs md:text-sm uppercase tracking-[0.2em] mb-12 md:mb-16 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Research Areas</p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {researchAreas.map((item, index) => (
              <div key={index} className={`group p-8 border rounded-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${isDark ? 'border-gray-700 hover:border-white hover:shadow-lg hover:shadow-gray-700/30' : 'border-gray-200 hover:border-black hover:shadow-lg'}`}>                
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold transition">{item.title}</h3>
                <p className={`mt-4 text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section id="publications" className={`px-6 md:px-10 py-20 md:py-28 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>      
        <div className="max-w-6xl mx-auto">
          <p className={`text-xs md:text-sm uppercase tracking-[0.2em] mb-12 md:mb-16 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Latest Publication</p>

          <div className="group max-w-4xl cursor-pointer">
            <div className={`relative overflow-hidden rounded-2xl p-8 md:p-12 border transition-all duration-300 ${isDark ? 'bg-gray-800 border-gray-700 group-hover:border-white group-hover:shadow-lg group-hover:shadow-gray-700/50' : 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200 group-hover:border-black group-hover:shadow-xl'}`}>              
              <h2 className="relative text-3xl md:text-4xl font-light leading-tight transition">
                Advances in Sustainable Catalytic Systems for Modern Organic Synthesis
              </h2>
              <p className={`relative mt-6 text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>                
                Our group focuses on developing environmentally conscious catalytic methodologies using organometallic systems for efficient chemical transformations and sustainable synthesis.
              </p>
              <button className={`relative mt-8 px-6 md:px-8 py-3 border-2 rounded-full transition-all duration-200 font-medium text-sm md:text-base group-hover:scale-105 ${isDark ? 'border-white hover:bg-white hover:text-gray-900' : 'border-black hover:bg-black hover:text-white'}`}>                
                Read Publication →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className={`px-6 md:px-10 py-20 md:py-28 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>      
        <div className="max-w-6xl mx-auto">
          <p className={`text-xs md:text-sm uppercase tracking-[0.2em] mb-12 md:mb-16 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Meet the Team</p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`group relative overflow-hidden border rounded-2xl p-8 transition-all duration-300 ${isDark ? 'border-gray-700 hover:border-white hover:shadow-lg hover:shadow-gray-700/30' : 'border-gray-200 hover:border-black hover:shadow-lg'}`}>                
                <div className="relative z-10">
                  <div className={`w-28 h-28 rounded-2xl flex items-center justify-center text-4xl transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-gray-300 to-gray-200'} group-hover:shadow-lg`}>                    
                    👤
                  </div>
                  <h3 className="mt-6 text-xl md:text-2xl font-semibold transition">{member.name}</h3>
                  <p className={`mt-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
                  <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{member.bio}</p>
                  <button className={`mt-6 text-sm font-semibold transition group-hover:opacity-100 opacity-0 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>                    
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`px-6 md:px-10 py-20 md:py-28 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>              
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Stay Updated</h2>
          <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Subscribe to our newsletter for the latest research updates and publications.</p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" className={`flex-1 px-6 py-3 border rounded-full focus:outline-none transition text-sm md:text-base ${isDark ? 'bg-gray-800 border-gray-700 focus:border-white text-white placeholder-gray-500' : 'bg-white border-gray-300 focus:border-black text-black placeholder-gray-400'}`} />
            <button className={`px-8 py-3 rounded-full transition-all duration-200 font-medium text-sm md:text-base ${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}>                
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={`px-6 md:px-10 py-12 md:py-16 border-t ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>              
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Balaraman Group</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>                
                Department of Chemistry <br /> IISER Tirupati
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>                
                <li><a href="#research" className={`transition ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Research</a></li>
                <li><a href="#publications" className={`transition ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Publications</a></li>
                <li><a href="#people" className={`transition ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Contact</h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>                
                balaraman@iisertirupati.ac.in
              </p>
              <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>                
                +91 (877) 250-3111
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'ResearchGate'].map((social) => (
                  <a key={social} href="#" className={`text-sm transition ${isDark ? 'text-gray-400 hover:text-white hover:underline' : 'text-gray-600 hover:text-black hover:underline'}`}>                    
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-8 flex flex-col md:flex-row justify-between items-center`}>            
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>© 2026 Balaraman Research Group. All rights reserved.</p>
            <p className={`text-xs mt-4 md:mt-0 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>              
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Global Animations */}
      <style jsx global>{`        
        @keyframes slide-up {          
          from {            
            opacity: 0;            
            transform: translateY(20px);          
          }          
          to {            
            opacity: 1;            
            transform: translateY(0);          
          }        
        .animate-slide-up {          
          animation: slide-up 0.6s ease-out forwards;          
          opacity: 0;        
        }        
        * {          
          scroll-behavior: smooth;        
        }      
      `}</style>
    </main>;
}