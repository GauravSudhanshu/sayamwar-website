import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Contact Us | Sayamwar Hall & Homestay Danapur, Patna',
  description: 'Contact Sayamwar Hall & Homestay in Danapur, Patna. Call 7646028228 or WhatsApp for bookings, inquiries and site visits. We respond within minutes.',
  alternates: { canonical: 'https://sayamwar.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-[#C9A227]">Us</span>
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          We&apos;re here to help. Reach us via call, WhatsApp, or fill the form below.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B1818] mb-8">Get In Touch</h2>
            <div className="space-y-5">
              <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold text-[#7B1818] mb-1">Call Us</p>
                  <a href="tel:7646028228" className="text-lg font-bold text-gray-800 hover:text-[#7B1818] transition-colors">
                    7646028228
                  </a>
                  <a href="tel:7070486987" className="block text-base font-semibold text-gray-600 hover:text-[#7B1818] transition-colors mt-1">
                    7070486987
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Available 9 AM – 9 PM daily</p>
                </div>
              </div>

              <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-bold text-[#7B1818] mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/917646028228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-gray-800 hover:text-green-600 transition-colors"
                  >
                    +91 7646028228
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Quick responses, usually within minutes</p>
                </div>
              </div>

              <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-bold text-[#7B1818] mb-1">Location</p>
                  <p className="text-gray-700 font-semibold">Sayamwar Hall &amp; Homestay</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Gola Road, Adarsh Vihar Colony</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Lane Number 5, near T Point,</p>
                  <p className="text-gray-600 text-sm leading-relaxed">beside Hotel King Regency,</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Patna, Bihar 801503</p>
                  <a
                    href="https://www.google.com/maps/place/Sayamwar+Hall+%26+Homestay/@25.6292816,85.0523556,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed570055ae3209:0xecb1a935000a9895!8m2!3d25.6292768!4d85.0549305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7B1818] text-sm font-medium hover:underline mt-1 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="font-bold text-[#7B1818] mb-1">Office Hours</p>
                  <p className="text-gray-600 text-sm">Monday – Sunday</p>
                  <p className="text-gray-600 text-sm">9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20inquire%20about%20Sayamwar%20Hall"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold text-center transition-colors"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href="tel:7646028228"
                className="flex-1 py-3 bg-[#7B1818] hover:bg-[#5A0F0F] text-white rounded-lg font-bold text-center transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B1818] mb-8">Send an Inquiry</h2>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.85!2d85.0523556!3d25.6292816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed570055ae3209:0xecb1a935000a9895!2sSayamwar%20Hall%20%26%20Homestay!5e0!3m2!1sen!2sin!4v1749000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sayamwar Hall Location Map"
            />
          </div>
        </div>
      </section>
    </>
  )
}
