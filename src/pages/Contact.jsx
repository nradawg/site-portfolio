import { useState } from 'react'
import config from '../../user_config.json'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // Honeypot check
    if (data.get('_gotcha')) return

    try {
      const res = await fetch(`https://formspree.io/f/${config.formspree_id}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(res.statusText)
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl">
          <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let's Talk</h1>
          <p className="text-gray-500 text-lg mb-12">
            {config.contact_text}
          </p>

          {!config.formspree_id ? (
            <a href={`mailto:${config.email}`} className="inline-block bg-[var(--accent)] hover:brightness-90 text-white px-8 py-3.5 rounded-full font-medium transition">
              Email {config.email}
            </a>
          ) : submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Message sent!</h3>
              <p className="text-emerald-600">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all bg-white"
                >
                  {config.contact_options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="bg-[var(--accent)] hover:brightness-90 text-white px-8 py-3.5 rounded-full font-medium transition w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="mt-16 pt-16 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href={`mailto:${config.email}`} className="text-gray-500 hover:text-[var(--accent)] transition-colors">
                {config.email}
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-500">{config.location}</p>
            </div>
            {Object.values(config.social).some(Boolean) && (
              <div>
                <h3 className="font-bold mb-2">Social</h3>
                <div className="flex gap-4">
                  {Object.entries(config.social)
                    .filter(([, url]) => url)
                    .map(([name, url]) => (
                      <a key={name} href={url} target="_blank" rel="noopener" className="text-gray-500 hover:text-[var(--accent)] transition-colors text-sm capitalize">{name}</a>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
