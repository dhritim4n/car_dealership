import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel_card from "./Carousel_card";
import { cars } from "../../../data/cars";


const featured_cars = [cars[0], cars[1], cars[3], cars[4]]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Featured_carousel() {
  return (
    <div
        className="h-[80vh] w-[80vw] mt-5 p-6"
    >
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="px-2"
      >

        {
          featured_cars.map(
            (car) => <Carousel_card 
                        model={car.model}
                        make={car.make}
                        year={car.year}
                        image={car.images}
                        key={car.id}
                      />
          )
        }

      </Carousel>
    </div>
  );
}