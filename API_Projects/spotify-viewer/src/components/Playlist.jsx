import { useEffect, useState } from "react";
import TrackCard from "./TrackCard";

export default function Playlist({ token }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        const playlistId = data.items[0]?.id;

        if (playlistId) {
          fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(res => res.json())
            .then(data => setTracks(data.items));
        }
      });
  }, [token]);

  return (
    <div className="p-6 bg-black min-h-screen">
      <h2 className="text-white text-2xl mb-4">🎧 Playlist</h2>

      <div className="space-y-3">
        {tracks.map((item, i) => (
          <TrackCard key={i} track={item.track} />
        ))}
      </div>
    </div>
  );
}