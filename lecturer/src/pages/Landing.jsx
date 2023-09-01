
const Landing = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-4">
      <div className="w-full items-center justify-center flex gap-4">
        <div className="py-4 px-2 w-[150px] bg-green-600 rounded text-white text-lg text-center">Add Results</div>
        <div className="py-4 px-2 w-[150px] bg-orange-400 rounded text-white text-lg">Update Results</div>
      </div>
      <div className="w-full items-center justify-center flex gap-4">
        <div className="py-4 px-2 w-[150px]  bg-orange-400 rounded text-white text-lg text-center">Add Student</div>
        <div className="py-4 px-2 w-[150px] bg-green-600 rounded text-white text-lg">Update Details</div>
      </div>
    </div>
  );
};

export default Landing;
