import React, { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Github, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-4">
            Let's Work Together
          </h2>
          <p className="text-[#94A3B8] text-base mt-2">
            Have a project in mind or want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="p-6 bg-[#0B1120] border border-[#38BDF8]/50 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#38BDF8] mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-[#F8FAFC]">Message Sent Successfully!</h3>
                <p className="text-sm text-[#94A3B8]">
                  Thank you for reaching out, Adhithyan will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  id="send-message-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-[#0B1120] bg-[#38BDF8] hover:bg-[#0EA5E9] disabled:opacity-50 transition-all duration-300 shadow-lg shadow-[#38BDF8]/20 cursor-pointer group"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Contact Cards */}
          <div className="lg:col-span-5 bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-[#F8FAFC] border-b border-[#1E293B] pb-4">
              Contact Information
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 group p-2 rounded-lg hover:bg-[#0B1120] transition-colors"
              >
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8] group-hover:border-[#38BDF8]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Email</div>
                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 p-2">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Phone</div>
                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-2 rounded-lg hover:bg-[#0B1120] transition-colors"
              >
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8] group-hover:border-[#38BDF8]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">LinkedIn</div>
                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    linkedin.com/in/adhithyan-das
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-2 rounded-lg hover:bg-[#0B1120] transition-colors"
              >
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8] group-hover:border-[#38BDF8]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">GitHub</div>
                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    github.com/adhithyandas
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-2">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
