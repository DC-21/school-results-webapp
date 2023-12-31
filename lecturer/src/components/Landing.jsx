import { useEffect, useState } from "react";
import axios from "axios";

const Landing = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isAddResults, setIsAddResults] = useState(false);
  const [isUpdateResults, setIsUpdateResults] = useState(false);
  const [isUpdateStudent, setIsUpdateStudent] = useState(false);
  const [studentData, setStudentData] = useState([]);

  const openAddStudentPopup = () => {
    setIsAddStudentOpen(true);
  };

  const closeAddStudentPopup = () => {
    setIsAddStudentOpen(false);
  };

  const openAddResults = () => {
    setIsAddResults(true);
  };
  const closeAddResults = () => {
    setIsAddResults(false);
  };

  const openUpdateResults = () => {
    setIsUpdateResults(true);
  };

  const closeUpdateResults = () => {
    setIsUpdateResults(false);
  };

  const openUpdateStudent = () => {
    setIsUpdateStudent(true);
  };

  const closeUpdateStudent = () => {
    setIsUpdateStudent(false);
  };

  const initialFormData = {
    registerNumber: "",
    fullName: "",
    department: "",
    password: "",
    course: "",
    semester: 0,
  };

     const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postStudentData = async (studentData) => {
    try {
      const response = await axios.post("http://localhost:3000/student", studentData);
      console.log("Student data posted successfully:", response.data);
      // You can also update the studentData state or take any other action here
    } catch (error) {
      console.error("Error posting student data:", error);
    }
  };

  const fetchStudentData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/student");
      // Assuming the response contains an array of student data
      setStudentData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  // Call the fetchStudentData function when the component mounts
  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center gap-4">
      <div className="w-full items-center justify-center flex gap-4">
        <div
          onClick={openAddResults}
          className="cursor-pointer py-4 px-2 w-[150px] bg-green-600 rounded text-white text-lg text-center"
        >
          Add Results
        </div>
        <div
          onClick={openUpdateResults}
          className="cursor-pointer py-4 px-2 w-[150px] bg-orange-400 rounded text-white text-lg"
        >
          Update Results
        </div>
      </div>
      <div className="w-full items-center justify-center flex gap-4">
        <div
          onClick={openAddStudentPopup}
          className="cursor-pointer py-4 px-2 w-[150px]  bg-red-600 rounded text-white text-lg text-center"
        >
          Add Student
        </div>
        <div
          onClick={openUpdateStudent}
          className="cursor-pointer py-4 px-2 w-[150px] bg-blue-600 rounded text-white text-lg"
        >
          Update Details
        </div>
      </div>

      {isAddResults && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-[600px] items-center flex flex-col">
            <div className="w-full flex flex-col gap-4 justify-center ">
              <p className="w-full flex text-center">Search Student:</p>
              <input
                style={{ textAlign: "center" }}
                placeholder="Register number"
                type="number"
                className="h-10 border border-black rounded"
              />
              <ul>
                {studentData.map((student) => (
                  <li key={student.id}>
                    <div className="w-full flex justify-between px-4 py-1 cursor-pointer rounded hover:bg-blue-300">
                      <p>{student.name}</p>
                      <p>{student.regno}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex md:flex-row flex-col mt-4 gap-4 justify-center items-center">
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md flex"
                onClick={closeAddResults}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isUpdateResults && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          Update<button onClick={closeUpdateResults}>close</button>
        </div>
      )}

      {isUpdateStudent && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          Update<button onClick={closeUpdateStudent}>close</button>
        </div>
      )}

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
                    type="number"
                    className="h-8 border border-black rounded"
                    value={formData.registerNumber}
                      onChange={handleInputChange}
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
                    className="h-8 border border-black rounded"
                    value={formData.fullName}
                      onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-start gap-4">
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start">
                  <label className="w-full md:text-start text-center">
                    Department:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="department"
                    type="text"
                    required
                    className="h-8 border border-black rounded"
                    value={formData.department}
                      onChange={handleInputChange}
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
                    required
                    className="h-8 border border-black rounded"
                    value={formData.password}
                      onChange={handleInputChange}
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
                    required
                    type="text"
                    className="h-8 border border-black rounded"
                    value={formData.course}
                      onChange={handleInputChange}
                  />
                </div>
                <div className="w-full flex md:flex-row flex-col gap-4 justify-start md:mt-0 mt-1 mb-3">
                  <label className="w-full md:text-start text-center">
                    Semester:
                  </label>
                  <input
                    style={{ textAlign: "center" }}
                    placeholder="semester"
                    type="number"
                    required
                    className="h-8 border border-black rounded"
                    value={formData.semester}
                      onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4 justify-center items-center">
              <button className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded-md flex">
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
