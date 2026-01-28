import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4" style={{ color: 'var(--color-fg)' }}>
            GET IN TOUCH
          </h1>
          <p className="max-w-2xl mx-auto font-medium opacity-70" style={{ color: 'var(--color-fg)' }}>
            Have questions about a specific vehicle or want to list your dealership? Our team is here to help you navigate the marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight" style={{ color: 'var(--color-fg)' }}>
                Contact Information
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bg)' }}>
                  <Phone size={24} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-50">Call Us</p>
                  <p className="font-bold" style={{ color: 'var(--color-fg)' }}>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bg)' }}>
                  <Mail size={24} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-50">Email Us</p>
                  <p className="font-bold" style={{ color: 'var(--color-fg)' }}>support@automarket.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bg)' }}>
                  <MapPin size={24} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-50">Headquarters</p>
                  <p className="font-bold" style={{ color: 'var(--color-fg)' }}>Cyber Hub, DLF Phase 3<br/>Gurugram, HR 122002</p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-6 rounded-2xl border-2 border-dashed" style={{ borderColor: 'var(--color-bg)' }}>
              <h4 className="flex items-center gap-2 font-bold mb-4" style={{ color: 'var(--color-fg)' }}>
                <Clock size={18} style={{ color: 'var(--color-accent)' }} /> Business Hours
              </h4>
              <ul className="text-sm space-y-2 font-semibold" style={{ color: 'rgba(var(--color-bg-rgb), 0.7)' }}>
                <li className="flex justify-between"><span>Mon - Sat:</span> <span>10:00 AM - 08:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span style={{ color: 'var(--color-accent)' }}>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Right Side: Contact Form (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 rounded-3xl shadow-2xl shadow-blue-100 border bg-white" 
                 style={{ borderColor: 'rgba(var(--color-bg-rgb), 0.05)' }}>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-4 rounded-xl outline-none border-2 border-transparent focus:border-(--color-accent) transition-all"
                    style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl outline-none border-2 border-transparent focus:border-(--color-accent) transition-all"
                    style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Subject</label>
                  <select 
                    name="subject"
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl outline-none border-2 border-transparent focus:border-(--color-accent) cursor-pointer"
                    style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}
                  >
                    <option>General Inquiry</option>
                    <option>Sell My Car</option>
                    <option>Dealership Partnership</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full p-4 rounded-xl outline-none border-2 border-transparent focus:border-(--color-accent) transition-all resize-none"
                    style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-2">
                  <button 
                    type="submit"
                    className="w-full md:w-max px-12 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-blue-200"
                    style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
                  >
                    SEND MESSAGE <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;