export default function Card({ title, description, image, tags, link }) {
  return (
    <div className="bg-gradient-to-tl from-[#1a1a1d] via-[#1a1a1d] to-purple-900/20 border border-gray-700 rounded-2xl p-6 shadow-lg transition hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[#1a1a1d] hover:via-[#1a1a1d] hover:to-purple-900/40">
      <div className="relative w-full bg-white/2 px-8 pt-8 overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt="Project"
          className="w-full h-75 object-cover rounded-lg rotate-2 mt-5 shadow-xl shadow-black"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-white mt-6">{title}</h2>
        <p className="text-gray-400 mt-2 text-center">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2 flex-wrap-reverse ">
            {tags.map((tag, index) => (
              <img
                key={index}
                src={tag}
                alt="Tech Icon"
                className="w-[50px] h-[50px] border border-indigo-900 rounded-full bg-white/2 p-[12px]"
              />
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center justify-center border-purple-400 rounded-lg py-2 mt-4"
          >
            Veja →
          </a>
        </div>
      </div>
    </div>
  );
}
