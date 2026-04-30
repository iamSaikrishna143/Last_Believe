
export default function WordCard({ data }) {
  if (!data) return null;

  const wordData = data[0];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl w-full">
      <h2 className="text-2xl font-bold mb-2">{wordData.word}</h2>

      {/* Phonetics */}
      <p className="text-gray-500 mb-2">
        {wordData.phonetic || ""}
      </p>

      {/* Audio */}
      {wordData.phonetics[0]?.audio && (
        <audio controls src={wordData.phonetics[0].audio} className="mb-4" />
      )}

      {/* Meanings */}
      {wordData.meanings.map((meaning, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-lg capitalize">
            {meaning.partOfSpeech}
          </h3>

          <ul className="list-disc ml-5 text-sm">
            {meaning.definitions.slice(0, 3).map((def, i) => (
              <li key={i}>
                {def.definition}
                {def.example && (
                  <p className="text-gray-500">
                    👉 {def.example}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}