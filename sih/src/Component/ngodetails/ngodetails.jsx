import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    description: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const res = axios.post("http://localhost:5000/api/ngo/mail", formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-green-100 min-h-screen w-full flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Medical Information Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-green-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className=" border mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-green-700"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="border mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-green-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter your medical information"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="border mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-green-700"
              >
                Attach PDF
              </label>
              <div className="mt-1 flex items-center">
                <label className="w-full flex items-center justify-center px-4 py-2 border border-green-300 rounded-md shadow-sm text-sm font-medium text-green-700 bg-white hover:bg-green-50 cursor-pointer">
                  <span>
                    {formData.file ? formData.file.name : "Upload PDF"}
                  </span>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MedicalForm;
