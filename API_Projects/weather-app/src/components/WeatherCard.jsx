export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">
        {data.name}, {data.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />

      <p className="text-4xl font-semibold">
        {Math.round(data.main.temp)}°C
      </p>

      <p className="capitalize text-gray-500">
        {data.weather[0].description}
      </p>

      <div className="flex justify-between mt-4 text-sm">
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>🌬️ Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}