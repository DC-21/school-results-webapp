import { useState } from 'react';

const Landing = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

  const openAddStudentPopup = () => {
    setIsAddStudentOpen(true);
  };

  const closeAddStudentPopup = () => {
    setIsAddStudentOpen(false);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-4">
      <div className="w-full items-center justify-center flex gap-4">
        <div onClick={openAddStudentPopup} className="py-4 px-2 w-[150px] bg-green-600 rounded text-white text-lg text-center">Add Results</div>
        <div className="py-4 px-2 w-[150px] bg-orange-400 rounded text-white text-lg">Update Results</div>
      </div>
      <div className="w-full items-center justify-center flex gap-4">
        <div className="py-4 px-2 w-[150px]  bg-orange-400 rounded text-white text-lg text-center">Add Student</div>
        <div className="py-4 px-2 w-[150px] bg-green-600 rounded text-white text-lg">Update Details</div>
      </div>
      {/* Add Student Pop-up */}
      {isAddStudentOpen && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-[700px] items-center flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Add Student</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={closeAddStudentPopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
