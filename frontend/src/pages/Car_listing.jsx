import Listing_card from "../components/ui/Listing/Listing_card";
import { useContext } from 'react';
import { Context } from "../context/ContextProvider";
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import CarFilter from "../components/ui/Filter/CarFilter";
import { Link } from "react-router-dom";

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.background.level1,
    }),
}));

function Car_listing() {

    const { car_listing, setCar_listing } = useContext(Context)

    return (
        <div
            className="flex flex-col md:flex-row"
        >
            <CarFilter/>
            
            <Grid
                container
                spacing={{ xs: 5, md: 5 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ flexGrow: 1 }}
                className="p-6 m-2"
            >
                {
                    car_listing.map(car => (
                        <Grid key={car.id} xs={6} sm={4} md={4}>
                            <Link
                                to = {`/car/${car.id}`}
                            >
                            <Listing_card car={car} />
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
            
        </div>

    )
}
export default Car_listing;