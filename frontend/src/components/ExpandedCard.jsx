export default function ExpandedCard({ place, onClose }) {
  if (!place) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl">

        <img
          src={place.image}
          alt={place.name}
          className="h-64 w-full rounded-t-2xl object-cover"
        />

        <div className="p-6">

          <div className="mb-4 flex items-start justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                {place.name}
              </h2>

              <p className="text-yellow-500">
                ⭐ {place.rating}
              </p>

            </div>

            <button
              onClick={onClose}
              className="text-2xl font-bold text-slate-500 hover:text-red-500"
            >
              ✕
            </button>

          </div>

          <h3 className="mb-2 text-lg font-semibold text-blue-600">
            Excelente escolha!
          </h3>

          <p className="mb-6 text-slate-600">
            {place.description}
          </p>

          <h4 className="mb-2 font-semibold">
            Destaques
          </h4>

          <div className="mb-6 flex flex-wrap gap-2">

            {place.highlights.map((item) => (

              <span
                key={item}
                className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
              >
                ✔ {item}
              </span>

            ))}

          </div>

          <div className="rounded-lg bg-slate-100 p-4">

            <p>
              🚗 Tempo estimado de viagem:
            </p>

            <p className="font-semibold">
              {place.travelTime}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}