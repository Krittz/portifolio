export default function Social({ link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      className="p-2 rounded-md w-12 h-12 border border-purple-950 flex justify-center items-center text-2xl text-gray-500 transition-transform hover:scale-[1.2] hover:text-white"
    >
      <i className={`ph ${icon}`}></i>
    </a>
  );
}
