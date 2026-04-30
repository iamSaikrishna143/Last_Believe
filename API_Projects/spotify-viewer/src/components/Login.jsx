const CLIENT_ID = "fed2a6c146d6470f8c4829d83f05a378";
const REDIRECT_URI = "http://192.168.1.34:5173";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export default function Login() {
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-read-private`;

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <a
        href={loginUrl}
        className="bg-green-500 text-white px-6 py-3 rounded-xl"
      >
        Login with Spotify
      </a>
    </div>
  );
}