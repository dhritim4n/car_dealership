import Listing_card from "../components/ui/Listing/Listing_card";
import { useContext } from 'react';
import { Context } from "../context/ContextProvider";


function Car_listing() {

    const { car_listing, setCar_listing } = useContext(Context)

    return (
        <div>
            <div
                className="grid gap-3 p-2 m-2 grid-cols-2 md:grid-cols-3"
            >
                {
                    car_listing.map(
                        car => <Listing_card key={car.id} car={car} />
                    )
                }

            </div>
        </div>
    )
}
export default Car_listing;