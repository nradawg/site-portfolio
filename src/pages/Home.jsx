import { Link } from 'react-router-dom'
import config from '../../user_config.json'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-4">{config.role}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              {config.headline}
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10">
              {config.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/work" className="bg-[var(--accent)] hover:brightness-90 text-white px-8 py-3.5 rounded-full font-medium transition">
                View My Work
              </Link>
              <Link to="/contact" className="border border-gray-200 hover:border-gray-400 px-8 py-3.5 rounded-full font-medium transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats: only shows when user_config.json has real ones */}
      {config.stats.length > 0 && (
        <section className="px-6 py-16 border-y border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
            {config.stats.map(stat => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-[var(--accent)]">{stat.number}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {config.services.map(service => (
              <div key={service.name} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[var(--primary)] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            {config.contact_text}
          </p>
          <Link to="/contact" className="inline-block bg-[var(--accent)] hover:brightness-90 text-white px-8 py-3.5 rounded-full font-medium transition">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
