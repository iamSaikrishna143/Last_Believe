export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{recipe.label}</h3>

        <p className="text-sm text-gray-500">
          🔥 Calories: {Math.round(recipe.calories)}
        </p>

        <ul className="text-xs mt-2 line-clamp-3">
          {recipe.ingredientLines.slice(0, 3).map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <a
          href={recipe.url}
          target="_blank"
          className="inline-block mt-3 text-green-600 font-semibold"
        >
          View Recipe →
        </a>
      </div>
    </div>
  );
}