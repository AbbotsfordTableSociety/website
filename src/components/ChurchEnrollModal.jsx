import React, { useState } from 'react';
import { X, Church, ShieldCheck, CheckCircle2, Users, Send } from 'lucide-react';

export default function ChurchEnrollModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    churchName: '',
    pastorName: '',
    email: '',
    phone: '',
    neighborhood: 'Clearbrook',
    teamSize: '5-10 volunteers',
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
              <Church className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Enroll Your Church Care Team</h3>
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
            <h4 className="text-2xl font-bold text-navy-900">Welcome to the Table Network!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for enrolling {formData.churchName || 'your church'}. Our Abbotsford CarePortal Coordinator will reach out to set up your team's custom alert settings and orientation session.
            </p>
            <div className="pt-4">
              <button onClick={onClose} className="btn btn-primary px-6 py-2.5 text-sm">
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-slate-800">
            
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-xs text-teal-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>It is 100% free for Abbotsford churches of any size to join CarePortal.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Church Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Clearbrook Community Church"
                  value={formData.churchName}
                  onChange={(e) => setFormData({...formData, churchName: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Pastor / Point of Contact *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Pastor David Smith"
                  value={formData.pastorName}
                  onChange={(e) => setFormData({...formData, pastorName: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Contact Email *</label>
                <input 
                  type="email" 
                  required
                  placeholder="pastor@churchname.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="(604) 850-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Primary Neighborhood Served</label>
                <select 
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="Clearbrook">Clearbrook</option>
                  <option value="East Abbotsford">East Abbotsford</option>
                  <option value="Mill Lake & Central">Mill Lake & Central</option>
                  <option value="Townline / West Abbotsford">Townline / West Abbotsford</option>
                  <option value="Matsqui / Rural">Matsqui / Rural</option>
                  <option value="All Abbotsford">All Abbotsford</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">Estimated Initial Team Size</label>
                <select 
                  value={formData.teamSize}
                  onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="1-4 volunteers">1 - 4 responders</option>
                  <option value="5-10 volunteers">5 - 10 responders</option>
                  <option value="10-25 volunteers">10 - 25 responders</option>
                  <option value="Entire Congregation">Entire Congregation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Questions / Preferred Start Time</label>
              <textarea 
                rows="3"
                placeholder="Let us know any questions or when you would like to schedule a 15-minute briefing..."
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
                Enroll Church Team
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
