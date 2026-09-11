import { Link } from 'react-router-dom'

const skills = [
  { name: 'User Research', desc: 'Interviews, surveys, and usability testing to uncover real user needs.' },
  { name: 'UX Strategy', desc: 'Aligning business goals with user experience through data-driven design.' },
  { name: 'UI Design', desc: 'Clean, accessible interfaces that look beautiful and work seamlessly.' },
  { name: 'Design Systems', desc: 'Scalable component libraries that keep teams consistent and fast.' },
]

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '8', label: 'Years Experience' },
  { number: '12', label: 'Happy Clients' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[#6366f1] font-medium text-sm tracking-widest uppercase mb-4">UX Consultant</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Designing experiences people love.
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10">
              I help startups and growing companies turn complex problems into simple,
              delightful products. Based in San Francisco.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/work" className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3.5 rounded-full font-medium transition-colors">
                View My Work
              </Link>
              <Link to="/contact" className="border border-gray-200 hover:border-gray-400 px-8 py-3.5 rounded-full font-medium transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          {stats.map(stat => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#6366f1]">{stat.number}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#6366f1] font-medium text-sm tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map(skill => (
              <div key={skill.name} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <p className="text-gray-500 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[#0f172a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            I'm always open to discussing new projects and creative ideas. Let's build something great together.
          </p>
          <Link to="/contact" className="inline-block bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3.5 rounded-full font-medium transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
