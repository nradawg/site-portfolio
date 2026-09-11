const projects = [
  {
    title: 'Horizon Health',
    category: 'Health Tech',
    desc: 'Redesigned the patient onboarding flow, reducing drop-off by 40% and increasing completed registrations.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    color: 'bg-blue-50',
  },
  {
    title: 'Noma Finance',
    category: 'Fintech',
    desc: 'Created a design system and dashboard UI for a personal finance app serving 200K+ users.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    color: 'bg-emerald-50',
  },
  {
    title: 'Trailblaze',
    category: 'Travel',
    desc: 'Led UX strategy for a trip planning platform, from user research through to launch.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
    color: 'bg-amber-50',
  },
  {
    title: 'Pulse Fitness',
    category: 'Wellness',
    desc: 'Designed a workout tracking app with social features. 4.8 star rating on the App Store.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    color: 'bg-rose-50',
  },
  {
    title: 'CloudDesk',
    category: 'SaaS',
    desc: 'Simplified a complex project management tool for remote teams. Reduced onboarding time by 60%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    color: 'bg-violet-50',
  },
  {
    title: 'GreenCart',
    category: 'E-Commerce',
    desc: 'Redesigned checkout flow for a sustainable goods marketplace, increasing conversion by 25%.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    color: 'bg-lime-50',
  },
]

export default function Work() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6366f1] font-medium text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Selected Work</h1>
        <p className="text-gray-500 text-lg mb-16 max-w-xl">
          A selection of projects I've led or contributed to. Each one focused on solving real problems for real people.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.title} className={`${project.color} rounded-2xl overflow-hidden group`}>
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <p className="text-[#6366f1] text-xs font-medium tracking-widest uppercase mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
