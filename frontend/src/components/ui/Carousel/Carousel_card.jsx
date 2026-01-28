export default function Carousel_card({
  model = "Model X",
  make = "Tesla",
  image = ["https://via.placeholder.com/600x400?text=Car"],
  year = 2024,
}) {
  return (
    /* ADDED 'mx-auto' to center the card.
       CHANGED 'max-w-xs' to 'max-w-[320px]' or similar to ensure 
       it doesn't look too stretched on larger mobile screens.
    */
    <article className="mx-auto w-full max-w-[320px] rounded-lg overflow-hidden shadow-md bg-[#E6EEF8]">
      <img
        src={Array.isArray(image) ? image[0] : image}
        alt={`${model} ${year}`}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#0B1220]">
            {model}
          </h3>

          <span className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-[#0EA5E9] text-white">
            {year}
          </span>
        </div>

        <p className="mt-2 text-sm text-[#0B1220]/80 font-medium">{make}</p>
      </div>
    </article>
  );
}