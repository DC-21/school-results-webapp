import axios from "axios";
import { useState, useEffect } from "react";

const Landing = () => {
  const [results, setResults] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("");

  const fetchStudentResults = async () => {
    try {
      const regno = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/results/${regno}/${selectedSemester}`
      );

    const data = response.data;
    console.log(data);
    setResults(data);

    console.log("Fetched Results:", data.results);
  } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchStudentResults();
  }, [selectedSemester]);

  return (
    <div className="w-full h-screen flex flex-col px-4 py-4 justify-center items-center">
      <p>Student Results</p>
      <div>
        <div className="w-full flex flex-col items-center mt-2 px-4">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="border border-blue-950 rounded h-10 md:w-[250px] w-full mt-2"
          >
            <option value="">Select Semester</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>
        </div>
        <div className="w-full flex mt-4">
          <table className="w-full table-auto border border-green-700">
            <thead>
              <tr className="bg-green-400">
                <th className="border border-green-700 px-2 py-2 text-white">
                  Semester
                </th>
                <th className="border border-green-700 px-2 py-2 text-white">
                  Course
                </th>
                <th className="border border-green-700 px-2 py-2 text-white">
                  Module Code
                </th>
                <th className="border border-green-700 px-2 py-2 text-white">
                  Module Name
                </th>
                <th className="border border-green-700 px-2 py-2 text-white">
                  Mark
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-2">
                    {result.semester}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {result.course}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {result.code}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {result.name}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {result.mark}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Landing;
