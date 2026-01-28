import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel_card from "./Carousel_card";
import { cars } from "../../../data/cars";
import { Link, NavLink } from "react-router-dom";

const featured_cars = [cars[0], cars[1], cars[3], cars[4]];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Featured_carousel() {
  return (
    <section className="w-full max-w-350 mx-auto py-12 px-6">
      {/* Label Section */}
      <div className="flex flex-col mb-8 ml-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-0.5 w-8" style={{ backgroundColor: 'var(--color-accent)' }} />
          <span className="text-[10px] uppercase font-bold tracking-[0.3em]" style={{ color: 'var(--color-accent)' }}>
            Handpicked
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter" style={{ color: 'var(--color-fg)' }}>
          FEATURED CARS
        </h2>
      </div>

      {/* Carousel Container */}
      
      <div className="relative">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} 
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container pb-12" 
          itemClass="px-3 py-4" 
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {featured_cars.map((car) => (
            <Link
              to={`/car/${car.id}`}
            >
            <Carousel_card 
              key={car.id}
              model={car.model}
              make={car.make}
              year={car.year}
              image={car.images[0]} 
            />
            </Link>
          ))}
        </Carousel>
        
      </div>
      
    </section>
  );
}