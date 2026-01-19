export default function Carousel_card({
  model = "Model X",
  make = "Tesla",
  image = ["https://via.placeholder.com/600x400?text=Car"],
  year = 2024,
}) {
  return (
    <article className="max-w-xs rounded-lg overflow-hidden shadow-md bg-(--color-bg)">
      <img
        src={image[0]}
        alt={`${model} ${year}`}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-(--color-fg)">
            {model}
          </h3>

          <span className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-(--color-accent) text-(--color-bg)">
            {year}
          </span>
        </div>

        <p className="mt-2 text-sm text-(--color-fg)/80">{make}</p>
      </div>
    </article>
  );
}