import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";

export default function NGOPage() {
  const [NGO, setNGO] = useState([]);

  const getNGO = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/ngo");
      setNGO(response.data);
      console.log("NGO data:", response.data);
    } catch (error) {
      console.error("Error fetching NGO data:", error);
    }
  };

  useEffect(() => {
    getNGO();
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-2xl font-bold mb-4">NGO Information</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-700 text-white">Name</th>
                <th className="py-2 px-4 bg-green-500 text-white">Age</th>
                <th className="py-2 px-4 bg-gray-700 text-white">Gender</th>
                <th className="py-2 px-4 bg-green-500 text-white">Skills</th>
                <th className="py-2 px-4 bg-gray-700 text-white">
                  Organization
                </th>
              </tr>
            </thead>
            <tbody>
              {NGO.map((ngo, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-2 px-4 border-b">{ngo.Name}</td>
                  <td className="py-2 px-4 border-b">{ngo.Age}</td>
                  <td className="py-2 px-4 border-b">{ngo.Gender}</td>
                  <td className="py-2 px-4 border-b">{ngo.Skills}</td>
                  <td className="py-2 px-4 border-b">{ngo.Organization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
