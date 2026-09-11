import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // Honeypot check
    if (data.get('_gotcha')) return

    try {
      await fetch('https://formspree.io/f/xpznqwkl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl">
          <p className="text-[#6366f1] font-medium text-sm tracking-widest uppercase mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let's Talk</h1>
          <p className="text-gray-500 text-lg mb-12">
            Have a project idea, a question, or just want to say hi? Fill out the form and I'll get back to you within 24 hours.
          </p>

          {submitted ? (
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none transition-all bg-white"
                >
                  <option value="ux-audit">UX Audit</option>
                  <option value="product-design">Product Design</option>
                  <option value="design-system">Design System</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3.5 rounded-full font-medium transition-colors w-full md:w-auto"
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
              <a href="mailto:hello@sarahchen.design" className="text-gray-500 hover:text-[#6366f1] transition-colors">
                hello@sarahchen.design
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-500">San Francisco, CA</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Social</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/sarahchenux" target="_blank" rel="noopener" className="text-gray-500 hover:text-[#6366f1] transition-colors text-sm">LinkedIn</a>
                <a href="https://twitter.com/sarahchenux" target="_blank" rel="noopener" className="text-gray-500 hover:text-[#6366f1] transition-colors text-sm">Twitter</a>
                <a href="https://instagram.com/sarahchenux" target="_blank" rel="noopener" className="text-gray-500 hover:text-[#6366f1] transition-colors text-sm">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
