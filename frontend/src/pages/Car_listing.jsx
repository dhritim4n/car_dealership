import Listing_card from "../components/ui/Listing/Listing_card";
import { useContext } from 'react';
import { Context } from "../context/ContextProvider";
import Grid from '@mui/joy/Grid';
import CarFilter from "../components/ui/Filter/CarFilter";
import SearchBox from "../components/ui/Search/SearchBox"; // Import here
import { Link } from "react-router-dom";

function Car_listing() {
    const { car_listing } = useContext(Context);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white">
            {/* Sidebar Filter */}
            <CarFilter />

            {/* Main Content Area */}
            <main className="grow p-6">

                {/* Inventory Header Section */}
                <div className="mb-10 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b pb-8" style={{ borderColor: 'var(--color-bg)' }}>
                        <div>
                            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2" style={{ color: 'var(--color-accent)' }}>
                                Premium Selection
                            </h4>
                            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter" style={{ color: 'var(--color-fg)' }}>
                                OUR INVENTORY
                            </h1>
                        </div>

                        {/* Search Box inside the header area */}
                        <div className="w-full md:w-96">
                            <SearchBox />
                        </div>
                    </div>

                    {/* Results Count Badge */}
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                        style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}>
                        Displaying {car_listing.length} Vehicles
                    </div>
                </div>

                {/* Grid Listing */}
                {car_listing.length > 0 ? (
                    <Grid
                        container
                        spacing={4}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{ flexGrow: 1 }}
                    >
                        {   
                            car_listing?.map(car => (
                                <Grid key={car.id} xs={4} sm={4} md={4}>
                                    <Link to={`/car/${car.id}`} className="block hover:no-underline">
                                        <Listing_card car={car} />
                                    </Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="p-6 rounded-full mb-4" style={{ backgroundColor: 'var(--color-bg)' }}>
                            <SearchBox size={48} style={{ color: 'var(--color-accent)' }} />
                        </div>
                        <h2 className="text-xl font-bold" style={{ color: 'var(--color-fg)' }}>No Vehicles Found</h2>
                        <p className="opacity-60 text-sm">Try adjusting your search or filters.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Car_listing;