import React, { useState, useEffect, useContext } from 'react';
import { RotateCcw, Settings2, ChevronDown, ChevronUp } from 'lucide-react';
import { cars } from '../../../data/cars';
import { Context } from '../../../context/ContextProvider';

const CarFilter = () => {
  const { setCar_listing, car_listing } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  
  const MIN_LIMIT = 0;
  const MAX_LIMIT = 10000000;
  const [minPrice, setMinPrice] = useState(MIN_LIMIT);
  const [maxPrice, setMaxPrice] = useState(MAX_LIMIT);

  const [filters, setFilters] = useState({
    make: '',
    model: '',
    year: '',
  });

  useEffect(() => {
    const applyFilters = () => {
      const filtered = cars.filter((car) => {
        const matchMake = filters.make === '' || car.make.toLowerCase() === filters.make.toLowerCase();
        const matchModel = filters.model === '' || car.model.toLowerCase().includes(filters.model.toLowerCase());
        const matchYear = filters.year === '' || car.year.toString() === filters.year;
        const matchPrice = car.price >= minPrice && car.price <= maxPrice;

        return matchMake && matchModel && matchYear && matchPrice;
      });
      setCar_listing(filtered);
    };
    applyFilters();
  }, [filters, minPrice, maxPrice, setCar_listing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({ make: '', model: '', year: '' });
    setMinPrice(MIN_LIMIT);
    setMaxPrice(MAX_LIMIT);
  };

  return (
    <aside className="w-full md:w-64 lg:w-72 shrink-0 px-4 py-4 md:py-6">
      <div 
        className="rounded-2xl shadow-sm border overflow-hidden transition-all duration-300"
        style={{ backgroundColor: '#ffffff', borderColor: 'rgba(var(--color-bg-rgb), 0.1)' }}
      >
        {/* Toggle Header */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 md:p-6"
        >
          <div className="flex items-center gap-2">
            <Settings2 size={20} style={{ color: 'var(--color-accent)' }} />
            <div className="flex flex-col items-start text-left">
              <h2 className="text-sm md:text-lg font-bold uppercase tracking-tight" style={{ color: 'var(--color-fg)' }}>
                Filters
              </h2>
              <span className="hidden md:block text-[10px] uppercase font-semibold" style={{ color: 'rgba(var(--color-bg-rgb), 0.6)' }}>
                {car_listing?.length} Results Found
              </span>
            </div>
          </div>
          <div className="md:hidden" style={{ color: 'var(--color-fg)' }}>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block p-6 pt-0 md:pt-0`}>
          <div className="flex flex-col gap-6">
            
            {/* Price Slider Section */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(var(--color-bg-rgb), 0.6)' }}>Price Range</label>
              
              <div className="relative h-6 flex items-center px-2">
                {/* Track Background - Using FG with low opacity */}
                <div className="absolute left-2 right-2 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-fg)', opacity: 0.1 }} />
                
                {/* Active Range Highlight - Accent Blue */}
                <div 
                  className="absolute h-1.5 rounded-full z-10"
                  style={{ 
                    backgroundColor: 'var(--color-accent)',
                    left: `calc(${(minPrice / MAX_LIMIT) * 100}% + 8px)`,
                    right: `calc(${100 - (maxPrice / MAX_LIMIT) * 100}% + 8px)`
                  }}
                />

                <input
                  type="range"
                  min={MIN_LIMIT}
                  max={MAX_LIMIT}
                  step={50000}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 50000))}
                  className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none z-30 cursor-pointer 
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-(--color-accent) [&::-webkit-slider-thumb]:shadow-sm"
                />
                <input
                  type="range"
                  min={MIN_LIMIT}
                  max={MAX_LIMIT}
                  step={50000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 50000))}
                  className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none z-30 cursor-pointer 
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-(--color-accent) [&::-webkit-slider-thumb]:shadow-sm"
                />
              </div>

              <div className="flex justify-between items-center text-[11px] font-bold">
                <span className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}>
                  ₹{minPrice.toLocaleString('en-IN')}
                </span>
                <span className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}>
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Select Filters Group */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(var(--color-bg-rgb), 0.6)' }}>Make</label>
                <select
                  name="make"
                  value={filters.make}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border outline-none transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)', borderColor: 'transparent' }}
                >
                  <option value="">All Makes</option>
                  <option value="Tesla">Tesla</option>
                  <option value="BMW">BMW</option>
                  <option value="Audi">Audi</option>
                  <option value="Mercedes">Mercedes</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(var(--color-bg-rgb), 0.6)' }}>Model</label>
                <input
                  type="text"
                  name="model"
                  placeholder="e.g. Model 3"
                  value={filters.model}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border outline-none transition-all"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)', borderColor: 'transparent' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(var(--color-bg-rgb), 0.6)' }}>Year</label>
                <select
                  name="year"
                  value={filters.year}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border outline-none transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)', borderColor: 'transparent' }}
                >
                  <option value="">Any Year</option>
                  {[2024, 2023, 2022, 2021, 2020].map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Button */}
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-lg font-bold transition-all border group mt-2"
              style={{ 
                backgroundColor: 'transparent', 
                color: 'var(--color-fg)', 
                borderColor: 'var(--color-fg)' 
              }}
            >
              <RotateCcw size={18} className="group-hover:-rotate-45 transition-transform" />
              Clear All
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CarFilter;