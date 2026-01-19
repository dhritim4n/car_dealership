
import Featured_carousel from "../components/ui/Carousel/Featured_carousel";
import Hero from "../components/ui/Hero";
import { cars } from "../data/cars";

export default function Home(){

    return(
        <div
            className="flex flex-col w-full justify-center items-center "
            >
            <Hero/>
            <Featured_carousel/>
        </div>
    )
}