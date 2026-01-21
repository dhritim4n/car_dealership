import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cars } from "../data/cars";
import { dealers } from "../data/dealers"; // Ensure this is imported
import { Calendar, Gauge, Fuel, Zap, ShieldCheck } from "lucide-react"; // Ensure icons are imported

import { ImageCarousel, SpecBadge, DealerContactCard } from "../components/ui/Car_Details/Details_pg_ui";

export default function Car_details() {
    // 1. Destructure the ID from params
    const { car_id } = useParams(); 
    const [carData, setCarData] = useState(null); // Initialize as null
    const [dealerData, setDealerData] = useState(null);

    useEffect(() => {
        // 2. Find car first (Convert id to Number to match data type)
        const foundCar = cars.find(car => car.id === Number(car_id));
        
        if (foundCar) {
            setCarData(foundCar);
            // 3. Find dealer using the foundCar object directly, not the state
            const foundDealer = dealers.find(d => d.id === foundCar.dealerId);
            setDealerData(foundDealer);
        }
    }, [car_id]); // Re-run if ID changes

    // 4. LOADING GUARD: Prevents 'toLocaleString' crash
    if (!carData || !dealerData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#0EA5E9]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Section: Info & Specs */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex gap-2 mb-2">
                                <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full"
                                    style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}>
                                    {carData.trim}
                                </span>
                                <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-green-100 text-green-700">
                                    In Stock
                                </span>
                            </div>
                            <h1 className="text-4xl font-black italic tracking-tighter" style={{ color: 'var(--color-fg)' }}>
                                {carData.year} {carData.make} {carData.model}
                            </h1>
                        </div>
                        <div className="text-left md:text-right">
                            <p className="text-sm font-bold opacity-60 uppercase">Asking Price</p>
                            <h2 className="text-4xl font-black" style={{ color: 'var(--color-accent)' }}>
                                ₹{carData.price?.toLocaleString('en-IN')}
                            </h2>
                        </div>
                    </div>

                    <ImageCarousel images={carData.images || []} />

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <SpecBadge icon={Calendar} label="Year" value={carData.year} />
                        <SpecBadge icon={Gauge} label="Mileage" value={`${carData.mileage?.toLocaleString()} km`} />
                        <SpecBadge icon={Fuel} label="Fuel" value={carData.fuel} />
                        <SpecBadge icon={Zap} label="Drive" value={carData.drivetrain} />
                    </div>

                    {/* Features Section */}
                    <div className="p-8 rounded-2xl bg-white border" style={{ borderColor: 'rgba(var(--color-bg-rgb), 0.1)' }}>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-fg)' }}>
                            <ShieldCheck style={{ color: 'var(--color-accent)' }} /> Key Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {carData.features?.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-fg)' }}>
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section: Dealer Info */}
                <div className="lg:col-span-1">
                    <DealerContactCard dealer={dealerData} />
                </div>

            </div>
        </div>
    );
}