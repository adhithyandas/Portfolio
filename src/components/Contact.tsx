import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Send,
  Mail,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [state, handleFormspreeSubmit] = useForm("mqpzbkkj");

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50"
    >
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
            Have a project or opportunity in mind? Let's connect and discuss how
            we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8 shadow-xl flex flex-col"
          >
            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#38BDF8] animate-bounce" />
                <h3 className="text-2xl font-bold text-[#F8FAFC]">
                  Message Sent Successfully!
                </h3>

                <p className="text-[#94A3B8] text-sm sm:text-base max-w-md">
                  Thank you for reaching out, Adhithyan will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormspreeSubmit}
                className="space-y-5 flex-1 flex flex-col"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors text-sm"
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-xs text-red-500 mt-1 block"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider"
                    >
                      Your Email
                    </label>

                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex.morgan@example.com"
                      className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors text-sm"
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-xs text-red-500 mt-1 block"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors text-sm resize-none flex-1 min-h-37.5"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1 block"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  id="send-message-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-[#0B1120] bg-[#38BDF8] hover:bg-[#0EA5E9] disabled:opacity-50 transition-all duration-300 shadow-lg shadow-[#38BDF8]/20 cursor-pointer group"
                >
                  {state.submitting ? (
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
          </motion.div>

          {/* Right: Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8 space-y-6 shadow-xl"
          >
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
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    Email
                  </div>

                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-2 rounded-lg hover:bg-[#0B1120] transition-colors"
              >
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8] group-hover:border-[#38BDF8]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    WhatsApp
                  </div>

                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

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
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    LinkedIn
                  </div>

                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    linkedin.com/in/adhithyandask
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
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    GitHub
                  </div>

                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    github.com/adhithyandas
                  </div>
                </div>
              </a>

              {/* X */}
              <a
                href={PERSONAL_INFO.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-2 rounded-lg hover:bg-[#0B1120] transition-colors"
              >
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8] group-hover:border-[#38BDF8]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    X (Twitter)
                  </div>

                  <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    x.com/adhithyandask
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-2">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    Location
                  </div>

                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
