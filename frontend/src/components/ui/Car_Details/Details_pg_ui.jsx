import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, MapPin, Phone, Mail, 
  Calendar, Gauge, Fuel, ShieldCheck, Zap 
} from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
      <img 
        src={images[current]} 
        alt="Car view" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors">
        <ChevronLeft className="text-white" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors">
        <ChevronRight className="text-white" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div key={i} className={`h-1.5 w-6 rounded-full transition-all ${i === current ? 'bg-[#0EA5E9] w-10' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
};

const SpecBadge = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: 'var(--color-bg)' }}>
    <Icon size={20} style={{ color: 'var(--color-accent)' }} />
    <div>
      <p className="text-[10px] uppercase font-bold" style={{ color: 'rgba(var(--color-bg-rgb), 0.6)' }}>{label}</p>
      <p className="text-sm font-bold" style={{ color: 'var(--color-fg)' }}>{value}</p>
    </div>
  </div>
);

const DealerContactCard = ({ dealer }) => (
  <div className="sticky top-6 rounded-2xl border p-6 shadow-sm" style={{ borderColor: 'rgba(var(--color-bg-rgb), 0.1)', backgroundColor: '#ffffff' }}>
    <div className="flex items-center gap-4 mb-6">
      <img src={dealer.logo} alt="Logo" className="w-12 h-12 rounded-lg object-cover" />
      <div>
        <h3 className="font-bold text-lg" style={{ color: 'var(--color-fg)' }}>{dealer.name}</h3>
        <p className="flex items-center text-sm gap-1" style={{ color: 'rgba(var(--color-bg-rgb), 0.6)' }}>
          <MapPin size={14} /> {dealer.location}
        </p>
      </div>
    </div>
    
    <div className="space-y-3">
      <button className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]" 
        style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}>
        <Phone size={18} /> {dealer.phone}
      </button>
      <button className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 border transition-all hover:bg-(--color-bg)" 
        style={{ borderColor: 'var(--color-fg)', color: 'var(--color-fg)' }}>
        <Mail size={18} /> {dealer.email}
      </button>
    </div>
    <p className="text-[10px] text-center mt-4 uppercase font-bold tracking-widest" style={{ color: 'rgba(var(--color-bg-rgb), 0.4)' }}>
      Ref ID: {dealer.id}5502
    </p>
  </div>
);

export {
    ImageCarousel, SpecBadge, DealerContactCard
}