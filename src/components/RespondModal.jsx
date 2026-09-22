import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, User, Mail, Phone, Church, Send } from 'lucide-react';

export default function RespondModal({ need, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    churchName: '',
    responseType: 'provide-item', // provide-item, delivery, financial, pray
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        {/* Header */}
        <div className="bg-navy-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Respond to CarePortal Need</h3>
              <p className="text-xs text-slate-300">Abbotsford Table Society Network</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-navy-900">Thank You for Responding!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Your response has been sent to the Abbotsford Table Society CarePortal Coordinator and the requesting caseworker. You will receive a follow-up email and phone call with delivery details shortly.
            </p>
            <div className="pt-4">
              <button onClick={onClose} className="btn btn-primary px-6 py-2.5 text-sm">
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-slate-800">
            
            {/* Need Summary Card */}
            {need && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                <div className="flex justify-between text-xs font-semibold text-teal-600">
                  <span>{need.neighborhood} • {need.category}</span>
                  <span>Ref: {need.id}</span>
                </div>
                <h4 className="text-sm font-bold text-navy-900">{need.title}</h4>
                <p className="text-xs text-slate-500">Vetted by: {need.vettedBy}</p>
              </div>
            )}

            {/* Response Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                How would you like to assist?
              </label>
              <select 
                value={formData.responseType}
                onChange={(e) => setFormData({...formData, responseType: e.target.value})}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-teal-500 outline-none"
              >
                <option value="provide-item">I can provide the physical item(s) requested</option>
                <option value="delivery">I can assist with delivery / transportation in Abbotsford</option>
                <option value="financial">I can contribute funds to purchase these items</option>
                <option value="pray">I want to join a Care Team & pray for this family</option>
              </select>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@domain.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="(604) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Church / Group (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Clearbrook Community Church"
                  value={formData.churchName}
                  onChange={(e) => setFormData({...formData, churchName: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Additional Notes / Item Description</label>
              <textarea 
                rows="3"
                placeholder="Let us know what condition the items are in or when you are available to deliver..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              ></textarea>
            </div>

            <div className="pt-2 flex justify-end gap-3 border-t border-slate-100">
              <button type="button" onClick={onClose} className="btn btn-outline text-xs px-4 py-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary text-xs px-6 py-2">
                <Send className="w-3.5 h-3.5" />
                Submit Response
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
