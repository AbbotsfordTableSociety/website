import React, { useState } from 'react';
import { X, Building2, ShieldCheck, CheckCircle2, AlertCircle, FilePlus, Send } from 'lucide-react';

export default function SubmitNeedModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    agencyName: '',
    caseworkerName: '',
    email: '',
    phone: '',
    neighborhood: 'Clearbrook',
    category: 'Furniture & Beds',
    urgency: 'Urgent',
    needTitle: '',
    needDetails: '',
    estimatedCost: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Agency Need Submission</h3>
              <p className="text-xs text-slate-300">CarePortal Abbotsford Partner Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-navy-900">Request Submitted for Approval</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Your need request has been received by the Abbotsford Table Society CarePortal administrator. Once verified, it will be published live to our participating church network.
            </p>
            <div className="pt-4">
              <button onClick={onClose} className="btn btn-primary px-6 py-2.5 text-sm">
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-slate-800">
            
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>For verified caseworkers, school liaisons, and social service representatives in Abbotsford.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Agency / Organization *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. MCFD Abbotsford / SD #34"
                  value={formData.agencyName}
                  onChange={(e) => setFormData({...formData, agencyName: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Caseworker / Liaison Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Jane Doe, MSW"
                  value={formData.caseworkerName}
                  onChange={(e) => setFormData({...formData, caseworkerName: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Work Email *</label>
                <input 
                  type="email" 
                  required
                  placeholder="caseworker@agency.gov.bc.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Work Phone *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="(604) 851-4000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Abbotsford Area</label>
                <select 
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="Clearbrook">Clearbrook</option>
                  <option value="East Abbotsford">East Abbotsford</option>
                  <option value="Mill Lake & Central">Mill Lake & Central</option>
                  <option value="Townline / West Abbotsford">Townline / West Abbotsford</option>
                  <option value="Matsqui / Rural">Matsqui / Rural</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="Furniture & Beds">Furniture & Beds</option>
                  <option value="Baby & Toddler">Baby & Toddler</option>
                  <option value="Household & Emergency Aid">Household & Emergency Aid</option>
                  <option value="Relational Support">Relational Support</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Urgency Level</label>
                <select 
                  value={formData.urgency}
                  onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="Urgent">Urgent (48 hours)</option>
                  <option value="High Priority">High Priority (1 week)</option>
                  <option value="Normal">Normal Support</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Need Title *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Twin Mattress & Bed Frame for 6-Year-Old Girl"
                value={formData.needTitle}
                onChange={(e) => setFormData({...formData, needTitle: e.target.value})}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Family Situation & Items Required *</label>
              <textarea 
                rows="3"
                required
                placeholder="Describe the family context (preserving anonymity) and specific items needed to resolve the crisis..."
                value={formData.needDetails}
                onChange={(e) => setFormData({...formData, needDetails: e.target.value})}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
              ></textarea>
            </div>

            <div className="pt-2 flex justify-end gap-3 border-t border-slate-100">
              <button type="button" onClick={onClose} className="btn btn-outline text-xs px-4 py-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-gold text-xs px-6 py-2">
                <Send className="w-3.5 h-3.5" />
                Submit Need to Network
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
