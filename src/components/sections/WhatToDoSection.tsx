import { whatToDo, company } from "@/data/content";

const WhatToDoSection = () => {
  const steps = [
    {
      title: "Don't Move Furniture or Belongings",
      description: "This spreads the infestation throughout your home."
    },
    {
      title: "Bag Linens in Sealed Plastic Bags",
      description: "Wash on high heat when possible."
    },
    {
      title: "Inspect Like a \"Bed Bug\"",
      description: "Check seams, crevices, behind headboards—anywhere dark."
    },
    {
      title: "Call a Licensed Exterminator",
      description: "Professional treatment is the only reliable path."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-amber-400" />
            <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">Take Action</span>
            <span className="w-12 h-0.5 bg-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            What To Do <span className="text-amber-400">Right Now</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            If you suspect bed bugs, take these steps immediately
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-emerald-600 to-amber-400" />
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Node */}
              <div className="absolute left-8 md:left-1/2 w-24 h-24 -translate-x-1/2 bg-emerald-700 rounded-full flex items-center justify-center border-4 border-amber-400 shadow-lg shadow-amber-400/20 z-10">
                <span className="text-4xl font-extrabold text-white">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className={`ml-32 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'}`}>
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-emerald-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-10 hover:border-amber-400/50 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:8044897886"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-amber-400 text-gray-900 font-bold text-lg rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-amber-400/30"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <svg className="relative w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="relative">Call Now: (804) 489-7886</span>
          </a>
        </div>

        {/* Pro Tip */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-emerald-600/20 rounded-2xl blur-xl opacity-50" />
          <div className="relative bg-emerald-800 rounded-2xl p-8 border border-amber-400/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <span className="text-amber-400 font-bold text-lg">Pro Tip</span>
                <p className="mt-2 text-white/90">
                  The faster you act, the easier professional treatment will be. Most infestations resolve within 2-4 weeks if caught early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatToDoSection;