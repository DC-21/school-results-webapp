import axios from "axios";
import { useState, useEffect } from "react";
import School from "../components/School";
import Profile from "./Profile";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Landing = () => {
  const [results, setResults] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("8");
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const fetchStudentResults = async () => {
    try {
      const regno = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/results/${regno}/${selectedSemester}`
      );

      const data = response.data;
      console.log(data);
      setResults(data);

      console.log("Fetched Results:", data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchStudentResults();
  }, [selectedSemester]);

  const generatePdf = () => {
    const pdf = new jsPDF();
    const table = document.getElementById("results-table");
    autoTable(pdf, { html: table });
    pdf.save("results.pdf");
  };

  return (
    <div className="w-full h-auto flex flex-col px-4 py-8 justify-center">
      <School />
      <Profile />
      <p className="w-full flex justify-center">Student Results</p>
      <div>
        <div className="w-full flex mt-2 px-4 justify-center">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="border border-blue-950 text-center rounded h-10 md:w-[250px] w-full mt-2"
          >
            <option value="">Select Semester</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>
        </div>
        <div className="w-full flex flex-col mt-4">
          <table
            id="results-table"
            className="w-full table-auto border border-green-700"
          >
            <thead>
              <tr className="bg-green-400">
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
                    {result.code}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {capitalizeWords(result.name)}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {capitalizeWords(result.mark)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-center">
            <button
              className="px-3 py-2 mt-4 bg-green-500 text-white rounded"
              onClick={generatePdf}
            >
              Download Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
