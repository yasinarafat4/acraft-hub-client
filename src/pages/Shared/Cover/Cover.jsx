const Cover = ({ bgImg, title, text }) => {
  return (
    <div
      className="hero h-[400px] lg:h-[600px]"
      style={{
        backgroundImage: `url("${bgImg}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content px-10 py-8 md:px-20 md:py-10 lg:px-40 lg:py-20 bg-black bg-opacity-40 mt-0 md:mt-20 lg:mt-4 rounded">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
            {title}
          </h1>
          <p className="mb-5 text-xs md:text-sm lg:text-base uppercase">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
