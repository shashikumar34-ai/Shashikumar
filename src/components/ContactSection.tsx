import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Bus, 
  Navigation, 
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';
import { COLLEGE_INFO, BUS_ROUTES } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'transit' | 'departments'>('contact');
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const departmentContacts = [
    { dept: "Principal's Office", contact: "+91 83922 37100", email: "principal@bitm.edu.in" },
    { dept: "Admission & Student Affairs", contact: "+91 94480 84877", email: "admissions@bitm.edu.in" },
    { dept: "Training & Placement Cell (T&P)", contact: "+91 83922 37167", email: "placements@bitm.edu.in" },
    { dept: "Controller of Examinations (COE)", contact: "+91 83922 37102", email: "coe@bitm.edu.in" },
    { dept: "Central Library & Digital Hub", contact: "+91 83922 37125", email: "library@bitm.edu.in" },
    { dept: "Hostel Administration & Warden", contact: "+91 99024 99388", email: "hostel@bitm.edu.in" }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-[#003366] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Jnana Gangotri Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with <span className="text-[#003366]">BITM Ballari</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out for admissions, campus tours, placement partnerships, or administrative inquiries. We look forward to welcoming you.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#003366] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Campus Location & Message
          </button>
          <button
            onClick={() => setActiveTab('transit')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'transit'
                ? 'bg-[#003366] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Bus Routes & Transit
          </button>
          <button
            onClick={() => setActiveTab('departments')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'departments'
                ? 'bg-[#003366] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Department Directory
          </button>
        </div>

        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{COLLEGE_INFO.name}</h3>
                <p className="text-xs text-amber-600 font-semibold">{COLLEGE_INFO.tagline}</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-blue-100 text-[#003366] rounded-xl flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Campus Address:</span>
                    <p className="text-slate-600 leading-relaxed mt-0.5">{COLLEGE_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Contact Numbers:</span>
                    <p className="text-slate-600 mt-0.5">Main: {COLLEGE_INFO.phone}</p>
                    <p className="text-emerald-700 font-semibold">Admission Helpline: {COLLEGE_INFO.admissionHelpline}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-indigo-100 text-indigo-900 rounded-xl flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Official Email:</span>
                    <p className="text-slate-600 mt-0.5">{COLLEGE_INFO.email}</p>
                    <p className="text-slate-600">{COLLEGE_INFO.admissionsEmail}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-xl flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours:</span>
                    <p className="text-slate-600 mt-0.5">Monday – Saturday: 9:00 AM – 5:00 PM</p>
                    <p className="text-slate-500 text-[11px]">Closed on 2nd Saturdays & Public Holidays</p>
                  </div>
                </div>
              </div>

              {/* Transit Distances */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">
                  Approximate Transit Proximity
                </span>
                <div className="grid grid-cols-2 gap-2 text-slate-600 text-[11px]">
                  <div>• Ballari Railway Station: <strong>6.5 km</strong></div>
                  <div>• Ballari Central Bus Stand: <strong>5.2 km</strong></div>
                  <div>• Jindal Airport (VDY): <strong>32 km</strong></div>
                  <div>• Hosapete Junction: <strong>58 km</strong></div>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Message to Administration</h3>
              <p className="text-xs text-slate-500 mb-6">Fill out your query and our team will get back within 24 business hours.</p>

              {formSent ? (
                <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-lg">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Thank you for contacting BITM Ballari. We have received your query and will reply via email or phone shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Suresh Gowda"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 90000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject / Query Topic *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Admission / Verification / Placement"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message Description *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please write the details of your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#003366] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to BITM</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

        {activeTab === 'transit' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Institutional Bus Routes & Transit Network</h3>
                <p className="text-xs text-slate-500">Daily scheduled transport covering Ballari, Toranagallu, Siruguppa, and Cantonment</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BUS_ROUTES.map((route, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-xs text-[#003366] bg-blue-100 px-2 py-0.5 rounded">
                        {route.routeNo}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{route.timing}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{route.name}</h4>
                    <p className="text-xs text-slate-600"><strong>Key Stops:</strong> {route.stops}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] text-emerald-700 font-bold flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> GPS Tracked & Speed Governed
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'departments' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Key Administrative & Departmental Direct Contacts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentContacts.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-sm text-slate-900">{item.dept}</h4>
                  <div className="mt-2 space-y-1 text-xs text-slate-600">
                    <div className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>{item.contact}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-800" />
                      <span className="font-medium text-slate-700">{item.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
