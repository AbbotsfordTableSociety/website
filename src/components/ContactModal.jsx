import React, { useState } from 'react';
import { X, Mail, CheckCircle2, Send } from 'lucide-react';

export default function ContactModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Submit to Netlify Forms if hosted on Netlify
    try {
      const payload = new URLSearchParams({
        'form-name': 'contact-inquiry',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString()
      });
    } catch (_) {
      // Continue to mailto fallback
    }

    // 2. Trigger mailto to info@abbotsfordtablesociety.ca with pre-populated inquiry details
    const subject = encodeURIComponent(`[ATS Website] Contact Inquiry from ${formData.name}`);
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      '',
      'Message:',
      formData.message
    ].filter(line => line !== null).join('\n');

    window.location.href = `mailto:info@abbotsfordtablesociety.ca?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="bg-[#2b3705] text-white p-6 flex items-center justify-between border-b-2 border-[#d8cba9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9f7f29] flex items-center justify-center text-white font-bold shadow">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white">Contact Abbotsford Table Society</h3>
              <p className="text-xs text-[#d8cba9]">General Inquiry • info@abbotsfordtablesociety.ca</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#1f2410] transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-[#FAF9F5]">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2b3705] flex items-center justify-center mx-auto border border-[#d8cba9]">
              <CheckCircle2 className="w-10 h-10 text-[#2b3705]" />
            </div>
            <h4 className="text-2xl font-heading font-bold text-[#2b3705]">Thank You for Reaching Out!</h4>
            <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed">
              Your inquiry has been prepared for <a href="mailto:info@abbotsfordtablesociety.ca" className="font-bold text-[#9f7f29] underline">info@abbotsfordtablesociety.ca</a>. A member of our team will get back to you soon.
            </p>
            <div className="pt-4">
              <button onClick={onClose} className="btn btn-primary px-6 py-2.5 text-sm">
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <form
            name="contact-inquiry"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="p-6 overflow-y-auto space-y-4 text-slate-800 bg-[#FAF9F5]"
          >
            <input type="hidden" name="form-name" value="contact-inquiry" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#2b3705] mb-1 block">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#d8cba9] bg-white text-sm focus:ring-2 focus:ring-[#2b3705] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#2b3705] mb-1 block">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#d8cba9] bg-white text-sm focus:ring-2 focus:ring-[#2b3705] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b3705] mb-1 block">Phone Number (Optional)</label>
              <input
                type="tel"
                name="phone"
                placeholder="(604) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#d8cba9] bg-white text-sm focus:ring-2 focus:ring-[#2b3705] outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b3705] mb-1 block">Message / Inquiry *</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="How can we help or connect with you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#d8cba9] bg-white text-sm focus:ring-2 focus:ring-[#2b3705] outline-none"
              ></textarea>
            </div>

            <div className="pt-3 flex items-center justify-between gap-3 border-t border-[#d8cba9]">
              <span className="text-[11px] text-slate-600">
                Sent directly to <strong>info@abbotsfordtablesociety.ca</strong>
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={onClose} className="btn btn-outline text-xs px-4 py-2">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary text-xs px-6 py-2.5 flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
