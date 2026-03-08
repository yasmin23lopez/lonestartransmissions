"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", vehicle: "", message: "" });
  };

  return (
    <div className="bg-[#FAFAFA] rounded-2xl p-8 lg:p-10">
      <h2 className="text-3xl lg:text-4xl font-saira font-black text-[#16215B] uppercase mb-2">
        SEND US A MESSAGE
      </h2>
      <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#16215B] mb-2">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors placeholder:text-gray-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#16215B] mb-2">Phone *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors placeholder:text-gray-400"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#16215B] mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors placeholder:text-gray-400"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#16215B] mb-2">Vehicle (Year, Make, Model)</label>
          <input
            type="text"
            value={formData.vehicle}
            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors placeholder:text-gray-400"
            placeholder="e.g. 2018 Ford F-150"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#16215B] mb-2">Message *</label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1314CC] transition-colors resize-none placeholder:text-gray-400"
            placeholder="Tell us about your transmission issue..."
          />
        </div>
        
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1314CC] text-white font-saira font-semibold tracking-wider hover:bg-[#0e0ea0] transition-all duration-500 ease-out w-full rounded-lg"
        >
          SEND MESSAGE
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
