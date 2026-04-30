export default function MovieCard({ movie }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={
          movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/500x750"
        }
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{movie.Title}</h3>
        <p className="text-sm text-gray-500">
          📅 {movie.Year || "N/A"}
        </p>
        <p className="text-yellow-500 font-semibold">
          ⭐ {movie.imdbID || "N/A"}
        </p>
      </div>
    </div>
  );
}