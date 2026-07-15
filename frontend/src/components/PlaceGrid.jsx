import PlaceCard from "./PlaceCard";
import { places } from "../data/places";

export default function PlaceGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">

      {places.map((place) => (
        <PlaceCard
          key={place.id}
          place={place}
        />
      ))}

    </div>
  );
}