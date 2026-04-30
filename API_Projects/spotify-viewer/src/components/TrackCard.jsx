export default function TrackCard({ track }) {
  return (
    <div className="flex items-center gap-4 bg-gray-900 p-3 rounded-lg">
      <img
        src={track.album.images[0]?.url}
        alt=""
        className="w-12 h-12 rounded"
      />

      <div>
        <p className="text-white font-semibold">{track.name}</p>
        <p className="text-gray-400 text-sm">
          {track.artists.map(a => a.name).join(", ")}
        </p>
      </div>
    </div>
  );
}