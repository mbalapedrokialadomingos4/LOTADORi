import { useState } from "react";

import PlaceCard from "./PlaceCard";
import InterestSelector from "./InterestSelector";
import ExpandedCard from "./ExpandedCard";

import { places } from "../data/places";

export default function PlaceGrid() {
  // Interesse selecionado
  const [selectedInterest, setSelectedInterest] = useState("");

  // Local selecionado para abrir o modal
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Filtra os locais pelo interesse escolhido
  const filteredPlaces =
    selectedInterest === ""
      ? places
      : places.filter(
          (place) => place.category === selectedInterest
        );

  return (
    <div>
      {/* Botões de interesses */}
      <InterestSelector
        selectedInterest={selectedInterest}
        onSelect={setSelectedInterest}
      />

      {/* Lista de cards */}
      <div className="flex flex-col gap-4 p-4">
        {filteredPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onExplore={() => setSelectedPlace(place)}
          />
        ))}
      </div>

      {/* Modal com informações detalhadas */}
      <ExpandedCard
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
}