import React, { useState, useContext, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Context } from '../../../context/ContextProvider';
import { cars } from '../../../data/cars';

const SearchBox = () => {
  const { setCar_listing } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle Search Logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const results = cars.filter((car) =>
        `${car.make} ${car.model} ${car.year}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
     
        setCar_listing(results);
  
      
    }, 1000); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, setCar_listing]);

  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <div 
        className="flex items-center px-4 py-3 rounded-2xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-(--color-accent) shadow-sm"
        style={{ backgroundColor: '#ffffff', borderColor: 'rgba(var(--color-bg-rgb), 0.1)' }}
      >
        <Search size={20} className="mr-3" style={{ color: 'var(--color-accent)' }} />
        <input
          type="text"
          placeholder="Search by make, model, or year..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent outline-none text-sm font-medium"
          style={{ color: 'var(--color-fg)' }}
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm('')}>
            <X size={18} className="ml-2 hover:text-red-500 transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;