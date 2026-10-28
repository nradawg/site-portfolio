import config from '../../user_config.json'

export default function Work() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Selected Work</h1>
        <p className="text-gray-500 text-lg mb-16 max-w-xl">
          Projects I have led or worked on.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {config.projects.map(project => {
            const card = (
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden group h-full">
                {project.image && (
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-8">
                  <p className="text-[var(--accent)] text-xs font-medium tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            )
            return project.link
              ? <a key={project.title} href={project.link} target="_blank" rel="noopener">{card}</a>
              : <div key={project.title}>{card}</div>
          })}
        </div>
      </div>
    </section>
  )
}
