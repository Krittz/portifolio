const Watermark = () => {
  return (
    <div
      className="watermark
      bg-gradient-to-b text-transparent bg-clip-text from-purple-900 via-purple-800/50 to-black-900
      opacity-50
      absolute hidden md:block"
      style={{
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1000,
        pointerEvents: "none",
        userSelect: "none",
        opacity: 0.3,
      }}
    >
      <h1 className="text-[22em] tracking-widest uppercase font-extrabold ">
        cran
      </h1>
    </div>
  );
};
export default Watermark;
