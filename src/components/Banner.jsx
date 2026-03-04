import vector1 from '../assets/vector1.png';

const Banner = ({ inProgessCount }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between items-center text-white w-full px-2 sm:px-0">
      {/* ============ card 01 ======================= */}
      <div
        style={{
          background: `linear-gradient(to right, rgba(59, 7, 100, 0.85), rgba(109, 40, 217, 0.85), rgba(216, 180, 254, 0.85))`,
          backgroundColor: '#3b0764',
        }}
        className="w-full lg:w-[600px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] flex justify-between items-center text-white rounded-xl px-4 overflow-hidden relative"
      >
        {/* Left Image */}
        <img src={vector1} className="h-full object-contain opacity-40" />

        {/* Center Text */}
        <div className="text-center absolute left-1/2 -translate-x-1/2">
          <p className="text-base sm:text-lg md:text-xl font-medium">
            In-Progress
          </p>
          <p className="text-2xl sm:text-3xl font-semibold">{inProgessCount}</p>
        </div>

        {/* Right Image (flipped) */}
        <img
          src={vector1}
          className="h-full object-contain opacity-40"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      {/* ============ card 02 ======================= */}
      <div
        style={{
          background: `linear-gradient(to right, rgba(134, 239, 172, 0.85), rgba(22, 163, 74, 0.85), rgba(20, 83, 45, 0.85))`,
          backgroundColor: '#14532d',
        }}
        className="w-full lg:w-[600px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] flex justify-between items-center text-white rounded-xl px-4 overflow-hidden relative"
      >
        {/* Left Image */}
        <img src={vector1} className="h-full object-contain opacity-40" />

        {/* Center Text */}
        <div className="text-center absolute left-1/2 -translate-x-1/2">
          <p className="text-base sm:text-lg md:text-xl font-medium">
            Resolved
          </p>
          <p className="text-2xl sm:text-3xl font-semibold">0</p>
        </div>

        {/* Right Image (flipped) */}
        <img
          src={vector1}
          className="h-full object-contain opacity-40"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
    </div>
  );
};

export default Banner;
