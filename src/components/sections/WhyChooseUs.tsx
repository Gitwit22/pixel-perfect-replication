const WhyChooseUs = () => {
  const benefits = [
    { icon: "shield", title: "Licensed & Insured", description: "Fully licensed by Virginia. Your safety comes first." },
    { icon: "map", title: "Local Richmond Experts", description: "We're your neighbors—often available same day." },
    { icon: "eye", title: "Discreet Service", description: "Unmarked vehicles ensure your privacy." },
    { icon: "message", title: "Clear Communication", description: "No jargon or surprise charges." },
    { icon: "award", title: "15+ Years Experience", description: "Hundreds of Richmond homes treated." },
    { icon: "refresh", title: "Follow-Up Guarantee", description: "We're not done until they're gone." }
  ];

  const IconComponent = ({ type }) => {
    const icons = {
      shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
      map: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
      eye: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />,
      message: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
      award: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
      refresh: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    };
    return <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[type]}</svg>;
  };

  return (
    <section className="relative py-32 overflow-hidden bg-stone-50">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-700/5 rounded-bl-[300px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-emerald-700 rounded-full mb-10 shadow-2xl">
            <svg className="w-16 h-16 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
            Why Richmond Chooses
            <span className="block text-emerald-700 mt-3">A2 Pest Pros</span>
          </h2>
          <div className="w-32 h-2 bg-amber-400 mx-auto mt-8 rounded-full" />
        </div>

        {/* Benefits Grid - Staggered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative ${index % 3 === 1 ? 'lg:mt-16' : ''}`}
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />
              
              <div className="relative pl-12 py-10 border-b-2 border-gray-200 group-hover:border-amber-400/40 transition-colors bg-white/60 rounded-2xl shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-emerald-700 group-hover:shadow-amber-400/30 group-hover:scale-110 transition-all border-2 border-gray-100">
                      <IconComponent type={benefit.icon} />
                    </div>
                    <span className="absolute -top-3 -right-3 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-xl font-extrabold text-gray-900 shadow-lg">
                      {index + 1}
                    </span>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-extrabold text-gray-900 text-2xl mb-4 group-hover:text-emerald-700 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-32 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[260px] font-serif text-emerald-700/10 leading-none select-none pointer-events-none">"</div>
          
          <div className="relative bg-emerald-700 rounded-3xl p-16 md:p-24 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <blockquote className="text-3xl md:text-4xl text-white font-light leading-relaxed max-w-4xl mx-auto font-serif">
                "We treat your home like it's our own. Bed bugs are stressful enough—working with us shouldn't be."
              </blockquote>
              <div className="mt-12 flex items-center justify-center gap-6">
                <span className="w-16 h-1 bg-amber-400" />
                <cite className="text-amber-400 font-bold not-italic text-xl">The A2 Pest Control Team</cite>
                <span className="w-16 h-1 bg-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <WhyChooseUs />
    </div>
  );
}