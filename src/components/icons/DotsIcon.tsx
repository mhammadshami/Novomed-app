const Dot = () => (
  <span className="w-[3.69px] h-[3.69px] sm:w-[4.62px] sm:h-[4.62px] bg-gray-300 rounded" />
);

const DotsIcon = () => (
  <div className="flex flex-col gap-[2.46px] sm:gap-[3.08px]">
    {Array.from({ length: 3 }).map((_, i) => (
      <Dot key={i} />
    ))}
  </div>
);

export default DotsIcon