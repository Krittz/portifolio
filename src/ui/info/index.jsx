export default function Info({ icon, title, description }) {
  return (
    <div
      className="info flex flex-col md:flex-row gap-8 border body-border p-4 rounded-lg border-indigo-500/50 py-12 px-5
    bg-gradient-to-bl from-indigo-900/25 to-black-700/25"
    >
      <div className="grid place-items-center ">
        <img src={icon} alt="Icon" className="w=[90px]" />
      </div>
      <div className="text-left flex flex-col">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <p className="text-white/60 text-sm text-justify">{description}</p>
      </div>
    </div>
  );
}
