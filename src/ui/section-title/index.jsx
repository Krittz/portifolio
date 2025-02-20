export default function SectionTitle({ title, span }) {
  return (
    <h1 className="text-3xl font-bold text-white">
      {title}{" "}
      <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 inline-block text-transparent bg-clip-text">
        {span}
      </span>
    </h1>
  );
}
