const interests = [
  "História",
  "Gastronomia",
  "Natureza",
  "Vida Noturna",
  "Praias",
];

export default function InterestSelector({
  selectedInterest,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap gap-3 p-4">

      {interests.map((interest) => (

        <button
          key={interest}
          onClick={() => onSelect(interest)}
          className={`
            rounded-full
            border
            px-4
            py-2
            text-sm
            transition

            ${
              selectedInterest === interest
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-slate-100"
            }
          `}
        >
          {interest}
        </button>

      ))}

    </div>
  );
}