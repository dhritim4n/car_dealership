// ...existing code...
import React from 'react';
import { CarFront } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-600px w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('https://realtimeuk.com/wp-content/uploads/2019/05/BMW-dealership-photography-auto-dealership-360-tour-company-virtual-tours-for-automotive-dealerships-e1573736938239.jpg')`
        }}
      >
        
        <div className="absolute inset-0 bg-[rgba(var(--color-bg-rgb),0.6)]" />
      </div>

      {/* Content (30% foreground) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Icon */}
        <div className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
          <CarFront size={64} className="text-(--color-bg)" strokeWidth={1.5} />
        </div>

        {/* Title — primary text color */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-(--color-bg) uppercase tracking-tighter mb-4 drop-shadow-2xl">
          Apex <span className="text-(--color-accent)">Motors</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl font-light text-(--color-bg)/90 max-w-2xl tracking-wide italic">
          "Drive Your Dreams Today."
        </p>

        {/* Buttons — accent used sparingly (10%) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to='/cars'
            className="px-10 py-4 rounded-brand font-bold transition-transform transform hover:-translate-y-1 shadow-accent"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)"
            }}
          >
            View Inventory
          </Link>

          <button
            className="px-10 py-4 rounded-brand font-bold transition-all border border-white/20 bg-white/10 text-(--color-bg) backdrop-blur-md hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
//