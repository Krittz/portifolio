import Social from "../social";

export default function Footer() {
  const links = [
    { url: "https://github.com/Krittz", icon: "ph-github-logo" },
    {
      url: "https://linkedin.com/in/cristian-alves-961491179/",
      icon: "ph-linkedin-logo",
    },
  ];
  return (
    <div className="w-screen flex justify-between align-center p-5 text-white bg-white/2">
      <div className="copyright grid place-items-center text-gray-400">
        &copy; {new Date().getFullYear()} CrAn. Todos direitors reservados.
      </div>
      <div className="px-6 social-links flex align-center gap-4">
        {links.map((item, index) => (
          <Social key={index} link={item.url} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
