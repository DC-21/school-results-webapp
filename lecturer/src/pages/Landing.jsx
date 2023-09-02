import { useState } from "react";
import axios from "axios";

const Landing = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

  const openAddStudentPopup = () => {
    setIsAddStudentOpen(true);
  };

  const closeAddStudentPopup = () => {
    setIsAddStudentOpen(false);
  };
  const [formData, setFormData] = useState({
    registerNumber: "",
    fullName: "",
    course: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Make an HTTP POST request to '/student' with the form data
    axios
      .post("/student", formData)
      .then((response) => {
        // Handle success if needed
        console.log("Student data posted successfully:", response.data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error posting student data:", error);
      });

    // Close the popup after submitting
    closeAddStudentPopup();
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center gap-4">
      <div className="w-full items-center justify-center flex gap-4">
        <div
          onClick={openAddStudentPopup}
          className="py-4 px-2 w-[150px] bg-green-600 rounded text-white text-lg text-center"
        >
          Add Results
        </div>
        <div className="py-4 px-2 w-[150px] bg-orange-400 rounded text-white text-lg">
          Update Results
        </div>
      </div>
      <div className="w-full items-center justify-center flex gap-4">
        <div className="py-4 px-2 w-[150px]  bg-orange-400 rounded text-white text-lg text-center">
          Add Student
        </div>
        <div className="py-4 px-2 w-[150px] bg-green-600 rounded text-white text-lg">
          Update Details
        </div>
      </div>
      {/* Add Student Pop-up */}
      {isAddStudentOpen && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-[900px] items-center flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Add Student</h2>
            <div className="w-full justify-center items-center flex flex-col">
              <div className="w-full flex md:flex-row flex-col justify-start gap-4">
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start">
                  <label className="w-full md:text-start text-center">
                    Register Number:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="Register number"
                    value={formData.registerNumber}
                    onChange={handleInputChange}
                    type="text
                      "
                    className="h-8 border border-black rounded"
                  />
                </div>
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start md:mt-0 mt-1 mb-3">
                  <label className="w-full md:text-start text-center">
                    Full Name:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="Full name"
                    type="name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-8 border border-black rounded"
                  />
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-start gap-4">
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start">
                  <label className="w-full md:text-start text-center">
                    Semester:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="semester"
                    type="text"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="h-8 border border-black rounded"
                  />
                </div>
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start md:mt-0 mt-1 mb-3">
                  <label className="w-full md:text-start text-center">
                    Password:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-8 border border-black rounded"
                  />
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-start gap-4">
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start">
                  <label className="w-full md:text-start text-center">
                    Course:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="course"
                    type="text"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="h-8 border border-black rounded"
                  />
                </div>
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start md:mt-0 mt-1 mb-3">
                  <label className="w-full md:text-start text-center">
                    Semester:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="text"
                    type="semester"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-8 border border-black rounded"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4 justify-center items-center">
              <button
                onClick={handleSubmit}
                className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded-md flex"
              >
                Submit
              </button>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md flex"
                onClick={closeAddStudentPopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
