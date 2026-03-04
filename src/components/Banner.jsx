const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
      <div className="bg-purple-500 max-w-[708px] h-[250px] flex justify-center items-center">
        <div className="text-center">
          <p>In-Progress</p>
          <p>0</p>
        </div>
      </div>
      <div className="bg-red-500 max-w-[708px] h-[250px] flex justify-center items-center">
        <div className="text-center">
          <p>Resolved</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
