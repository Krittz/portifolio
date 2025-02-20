export default function Info({ icon, title, description }) {
  return (
    <div
      className="flex flex-col md:flex-row md:gap-5 border body-border p-6 rounded-lg border-indigo-500/50 py-10 md:px-5
      bg-gradient-to-bl from-indigo-900/25 to-black-700/25 md:justify-center md:items-center"
    >
      <div className="md:flex md:justify-center md:align-center w-50 p-2">
        <img src={icon} alt="Icon" className="w-16 h-16 object-contain" />
      </div>
      <div className="text-left flex flex-col">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <p className="text-white/60 text-sm text-justify">{description}</p>
      </div>
    </div>
  );
}
