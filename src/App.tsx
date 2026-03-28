import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, ExternalLink, Layers, Bot, Globe, ShoppingBag, LayoutDashboard, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';

// Components
const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-background-light/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
      <div className="flex items-center gap-3">
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-50 transition-all duration-300 group-hover:bg-neutral-800 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.15)]">
            <Terminal size={16} strokeWidth={2.5} />
          </div>
          <span className="text-base font-medium tracking-wide text-neutral-900">Porus</span>
        </a>
      </div>
      <nav className="hidden items-center gap-10 md:flex">
        <a className="nav-link" href="#work">Work</a>
        <a className="nav-link" href="#services">Services</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>
      <a href="https://porus-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
        View Portfolio
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-20 md:px-12">
    <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
      <img 
        src="https://images.unsplash.com/photo-1507646871303-331b8f66c135?q=80&w=3000&auto=format&fit=crop" 
        alt="Botanical overlay" 
        className="w-full h-full object-cover blur-[2px]"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light pointer-events-none" />
    <div className="absolute inset-0 z-0 opacity-40">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft blur-[160px]"></div>
    </div>
    <div className="relative z-10 mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="mb-8 inline-block text-xs font-semibold tracking-[0.2em] text-text-secondary uppercase">
          Purushottam Kumar
        </span>
      </motion.div>
      
      <motion.h1 
        className="mb-8 font-serif text-6xl font-light tracking-tight md:text-8xl lg:text-9xl text-text-primary leading-[1.1]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        Crafting <span className="italic text-text-secondary">digital</span><br className="hidden md:block" /> experiences.
      </motion.h1>
      
      <motion.p 
        className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-text-secondary md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        I build premium, high-performance websites that elevate brands and drive results through minimal, intentional design.
      </motion.p>
      
      <motion.div 
        className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <a href="#contact" className="btn-primary">
          Get a website
        </a>
        <a href="#work" className="btn-secondary">
          View Work
        </a>
      </motion.div>
    </div>
  </section>
);

const PortfolioItem = ({ title, category, description, imageUrl, demoUrl, reverse = false }: { title: string, category: string, description: string, imageUrl: string, demoUrl: string, reverse?: boolean }) => (
  <div className={`group flex flex-col gap-16 lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} lg:items-center`}>
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white/50 p-4 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:bg-white/80 lg:w-3/5 aspect-[4/3] sm:aspect-[16/10]">
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-black/5">
        <img 
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
      </div>
    </div>
    <div className="w-full lg:w-2/5">
      <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">{category}</span>
      <h3 className="mt-3 font-serif text-4xl font-light tracking-tight text-text-primary">{title}</h3>
      <p className="mt-6 text-lg font-light leading-relaxed text-text-secondary">
        {description}
      </p>
      <div className="mt-10 flex items-center gap-8">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold tracking-widest text-text-primary transition-all hover:text-primary">
          LIVE DEMO <ExternalLink size={16} />
        </a>
        <button className="text-xs font-bold tracking-widest text-text-secondary transition-all hover:text-text-primary">PROJECT</button>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 md:px-12" id="work">
    <div className="mb-20">
      <p className="section-label">Portfolio</p>
      <h2 className="text-4xl font-serif font-light tracking-tight md:text-5xl text-text-primary">Selected Work</h2>
    </div>
    <div className="space-y-40">
      <PortfolioItem 
        category="Fintech SaaS"
        title="ChainSignal"
        description="A sophisticated platform for real-time financial signals and data visualization, focusing on precision and high-performance trading insights. Built for high-stakes decisions."
        imageUrl="/chainsignal.webp"
        demoUrl="https://chainsignal.vercel.app/"
      />
      <PortfolioItem 
        category="Luxury E-commerce"
        title="Velum"
        description="High-end digital storefront focusing on sensory experience and minimalist aesthetics for premium retail. Optimized for conversion and brand storytelling."
        imageUrl="/velum.webp"
        demoUrl="https://velum-luxury-ecom.vercel.app/"
        reverse
      />
      <PortfolioItem 
        category="Premium E-commerce"
        title="Sole Syndicate"
        description="A performance-driven sneaker marketplace. Integrated real-time stock tracking, secure payment gateways, and a seamless mobile-first checkout experience."
        imageUrl="/sole_syndicate.webp"
        demoUrl="https://sole-syndicate-lac.vercel.app/"
      />
      <PortfolioItem 
        category="Full-Scale SaaS"
        title="Automate Leads"
        description="From raw data to booked meetings — one automated system with verified leads and AI receptionists. Stop chasing leads. Let the system work for you."
        imageUrl="/automate_leads.webp"
        demoUrl="https://all-in-one-saas-webapp.vercel.app/"
        reverse
      />
      <PortfolioItem 
        category="Hospitality & Lifestyle"
        title="The Atelier Cafe"
        description="A refined digital experience for a boutique cafe, blending artisanal aesthetics with seamless reservation and menu exploration. Designed for premium brand positioning."
        imageUrl="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
        demoUrl="https://the-atelier-cafe.vercel.app/"
      />
      <PortfolioItem 
        category="Food & Beverage"
        title="UrbanBite"
        description="A vibrant digital storefront for a modern fast-food cafe in Patna, featuring a mouth-watering menu display and instant WhatsApp ordering integration for a seamless customer experience."
        imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop"
        demoUrl="https://urbanbite-bice.vercel.app/"
        reverse
      />
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="glass-card group flex flex-col p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/80">
    <Icon className="mb-8 text-primary transition-transform duration-500 group-hover:scale-110" size={36} strokeWidth={1} />
    <h3 className="font-serif text-2xl font-light tracking-tight text-text-primary">{title}</h3>
    <p className="mt-4 font-light text-text-secondary leading-relaxed">{description}</p>
  </div>
);

const Services = () => (
  <section className="bg-white/40 backdrop-blur-sm py-24 md:py-32" id="services">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="mb-20 text-center">
        <p className="section-label">Specialization</p>
        <h2 className="mt-2 text-4xl font-serif font-light tracking-tight text-text-primary">What I Can Help You With</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard 
          icon={Layers}
          title="SaaS Development"
          description="End-to-end multi-tenant architectures designed for high traffic and subscription-based business models."
        />
        <ServiceCard 
          icon={Bot}
          title="AI Automation"
          description="Integrating LLMs and custom machine learning models into existing workflows to boost operational efficiency."
        />
        <ServiceCard 
          icon={Globe}
          title="Web Applications"
          description="Responsive, lightning-fast web apps built with modern stacks like React, Node.js, and advanced CSS frameworks."
        />
        <ServiceCard 
          icon={ShoppingBag}
          title="E-commerce Platforms"
          description="Custom retail experiences focused on conversion rate optimization and high-end brand identity."
        />
        <ServiceCard 
          icon={LayoutDashboard}
          title="Custom Dashboards"
          description="Data-driven admin panels and user dashboards that turn complex information into actionable insights."
        />
        <div className="group flex flex-col items-center justify-center border border-dashed border-black/10 rounded p-10 text-center transition-all hover:bg-white">
          <Plus className="mb-4 text-text-secondary" size={32} strokeWidth={1.5} />
          <p className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Have a custom request?</p>
          <a className="mt-3 text-sm font-bold text-primary underline underline-offset-4" href="#contact">Let's discuss</a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 md:px-12" id="about">
    <div className="flex flex-col items-center gap-20 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl grayscale transition-all duration-500 hover:grayscale-0 shadow-sm border border-black/5 bg-black/5 p-4">
          <div className="absolute inset-0 z-10 bg-primary/10 mix-blend-multiply transition-opacity duration-500 hover:opacity-0"></div>
          <img 
            src="/original_dev_image.png"
            alt="Purushottam Kumar"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="relative z-0 h-full w-full rounded-xl object-cover bg-slate-200 transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <p className="section-label">The Developer</p>
        <h2 className="mt-4 text-4xl font-serif font-light tracking-tight text-text-primary">Crafting Value through Code</h2>
        <p className="mt-8 text-lg font-light leading-relaxed text-text-secondary">
          I am Purushottam Kumar, an engineer at the intersection of Artificial Intelligence and high-performance web architecture. I don't just write code; I design systems that solve real business problems and create lasting value. 
        </p>
        <p className="mt-6 text-lg font-light leading-relaxed text-text-secondary">
          My approach is rooted in "Quiet Luxury"—I believe software should be powerful yet unobtrusive, sophisticated yet simple to use. Whether it's a fintech platform handling millions of data points or a luxury e-commerce site, my focus remains on scalability, security, and exceptional user experience.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-12">
          <div>
            <div className="text-4xl font-serif font-light text-text-primary tracking-tight">2+</div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-[0.2em] mt-2">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-serif font-light text-text-primary tracking-tight">20+</div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-[0.2em] mt-2">Projects Delivered</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setShowPopup(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowPopup(true); // Show popup anyway for UX fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section className="relative z-10 bg-text-primary py-24 md:py-32 text-white" id="contact">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-12">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-5xl font-light tracking-tight md:text-6xl lg:text-7xl text-white leading-[1.1]">
              Let’s build something <br className="hidden md:block" /> valuable and scalable.
            </h2>
            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-white/70">
              Tell me about your project. I’ll help you turn it into a clean, modern, and production-ready product.
            </p>
            <p className="mt-12 text-sm font-light tracking-wide text-white/50">
              Focused on SaaS, AI systems, and modern web experiences.
            </p>
          </motion.div>

          <motion.div 
            className="mt-20 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <a href="mailto:porus21029@gmail.com" className="text-lg font-light tracking-wide text-white transition-colors hover:text-white/80">
              
            </a>
            <div className="flex flex-wrap items-center gap-8">
              <a href="https://www.linkedin.com/in/purushottam-kumar-773a59219" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest text-white/50 uppercase transition-colors hover:text-white">
                LinkedIn
              </a>
              <a href="https://www.github.com/lordporus" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest text-white/50 uppercase transition-colors hover:text-white">
                GitHub
              </a>
              <a href="mailto:porus21029@gmail.com" className="text-xs font-bold tracking-widest text-white/50 uppercase transition-colors hover:text-white">
                Mail
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="flex items-center lg:justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Name" 
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-light text-white placeholder:text-white/40 shadow-sm transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Email" 
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-light text-white placeholder:text-white/40 shadow-sm transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5"
              />
            </div>
            <div className="relative">
              <label htmlFor="projectType" className="sr-only">Project Type</label>
              <select 
                id="projectType" 
                name="projectType"
                required
                className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-light text-white/80 shadow-sm transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5 [&>option]:bg-text-primary [&>option]:text-white"
                defaultValue=""
              >
                <option value="" disabled>Project Type</option>
                <option value="saas">SaaS Product</option>
                <option value="website">Business Website</option>
                <option value="ecommerce">E-commerce</option>
                <option value="ai">AI Automation</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-white/40">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message" 
                name="message"
                placeholder="Message" 
                required
                rows={4}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-light text-white placeholder:text-white/40 shadow-sm transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-medium tracking-wide text-text-primary transition-all hover:bg-white/90 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Initiating...' : 'Start Project'}</span>
              {!isSubmitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
            </button>

            <p className="mt-6 text-center text-[10px] font-bold tracking-widest text-white/30 uppercase">
              Currently available for select projects.
            </p>
          </form>
        </motion.div>

      </div>
    </div>

    {/* SUCCESS POPUP */}
    <AnimatePresence>
      {showPopup && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-neutral-900/95 px-12 py-12 text-center shadow-2xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-2xl font-light tracking-tight text-white">Project Initiated</h3>
            <div className="my-6 h-2 w-2 rounded-full bg-white/20"></div>
            <p className="text-sm font-light tracking-wide text-white/50">We'll contact you shortly.</p>
            
            <button 
              onClick={() => setShowPopup(false)} 
              className="mt-8 rounded-full bg-white/10 px-8 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/20"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
  );
};

const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 bg-text-primary py-16 px-6 md:px-12">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
      <div className="flex items-center gap-3 opacity-80">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-text-primary">
          <Terminal size={14} />
        </div>
        <span className="text-sm font-bold tracking-tighter text-white">Purushottam Kumar</span>
      </div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
        © 2026 Purushottam Kumar. Designed with intention.
      </p>
      <div className="flex gap-10">
        <a className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white" href="#privacy">Privacy</a>
        <a className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white" href="#terms">Terms</a>
      </div>
    </div>
  </footer>
);

const PrivacyPolicy = () => (
  <section className="mx-auto max-w-4xl px-6 py-24 md:px-12">
    <div className="mb-12">
      <p className="section-label">Legal</p>
      <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl text-text-primary">Privacy Policy</h1>
    </div>
    <div className="prose prose-lg text-text-secondary">
      <p className="mb-6">Last updated: March 18, 2026</p>
      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">1. Information Collection</h2>
      <p className="mb-6">We collect information from you when you visit our site, fill out a form, or communicate with us. The types of personal information collected may include your name, email address, and any other details you provide.</p>
      
      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">2. Use of Information</h2>
      <p className="mb-6">Any of the information we collect from you may be used in one of the following ways:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>To personalize your experience</li>
        <li>To improve our website</li>
        <li>To improve customer service</li>
        <li>To send periodic emails regarding your inquiry or other products and services</li>
      </ul>

      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">3. Data Protection</h2>
      <p className="mb-6">We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>

      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">4. Third-Party Disclosure</h2>
      <p className="mb-6">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">5. Contacting Us</h2>
      <p className="mb-6">If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
    
    </div>
  </section>
);

const TermsOfService = () => (
  <section className="mx-auto max-w-4xl px-6 py-24 md:px-12">
    <div className="mb-12">
      <p className="section-label">Legal</p>
      <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl text-text-primary">Terms of Service</h1>
    </div>
    <div className="prose prose-lg text-text-secondary">
      <p className="mb-6">Last updated: March 18, 2026</p>
      
      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-6">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">2. Intellectual Property</h2>
      <p className="mb-6">The site and its original content, features, and functionality are owned by Purushottam Kumar and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">3. Use License</h2>
      <p className="mb-6">Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">4. Disclaimer</h2>
      <p className="mb-6">The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

      <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">5. Limitations</h2>
      <p className="mb-6">In no event shall Purushottam Kumar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
    </div>
  </section>
);

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      if (window.location.hash && window.location.hash !== '#privacy' && window.location.hash !== '#terms') {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (!window.location.hash || window.location.hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (hash === '#privacy') return <PrivacyPolicy />;
    if (hash === '#terms') return <TermsOfService />;
    return (
      <>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </>
    );
  };

  return (
    <div className="relative flex min-h-screen flex-col before:pointer-events-none before:fixed before:inset-0 before:z-0 before:opacity-[0.6] before:bg-[url('/background.webp')] before:bg-repeat before:bg-[length:350px]">
      <CustomCursor />
      <Header />
      <main className="relative z-10 flex-grow pt-24">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
