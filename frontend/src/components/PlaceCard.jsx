export default function PlaceCard({ place, onExplore }) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

      <img
        src={place.image}
        alt={place.name}
        className="h-46 w-36 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col">

        <h3 className="font-semibold text-slate-800">
          {place.name}
        </h3>

        <p className="text-sm text-yellow-500">
          ⭐ {place.rating}
        </p>

        <p className="text-sm text-slate-600">
          {place.category}
        </p>

        <p className="text-sm">
          Duração (⏱️): {place.duration}
        </p>

        <p className="text-sm">
          Custo (💰): {place.price}
        </p>

        <p className="text-sm">
          Distância (📍): {place.distance}
        </p>

        <p className="text-sm">
          Melhor Horário (🕒): {place.schedule}
        </p>

        <button
        onClick={onExplore}
        className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
        Explorar
        </button>

      </div>

    </div>
  );
}