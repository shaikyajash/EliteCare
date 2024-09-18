import React, { useState } from 'react';
import { FileUp } from 'lucide-react';
import Navbar from '../navbar/navbar';
import Loading from '../loading/loading';
import { axiosInstance, endPoints } from '../../services/api';

const analysisOptions = [
  { value: 'pimple', label: 'Pimple' },
  { value: 'cancer', label: 'Cancer' },
  { value: 'tumor', label: 'Tumor' },
  // Add more analysis options as needed
];

const AnalysisPage = () => {
  const [selectedAnalysis, setSelectedAnalysis] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [reportData, setReportData] = useState(null);

  const handleAnalysisChange = (event) => {
    setSelectedAnalysis(event.target.value);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        setUploadedImage(e.target.result);
  
        try {
          const response = await axiosInstance.post(`${endPoints.ANALYSIS}${selectedAnalysis}`, {
            image: e.target.result,
          });
          const data = await response.data;
          setReportData(data);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow p-8 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-emerald-500">
            ELITECARE.IO
          </h1>
          <div className="mb-8">
            <select
              value={selectedAnalysis}
              onChange={handleAnalysisChange}
              className="px-4 py-2 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <option value="">Select Analysis Type</option>
              {analysisOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <label
            htmlFor="image-upload"
            className={`flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors ${
              !selectedAnalysis ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <FileUp className="mr-2 text-green-500" />
            <span className="text-gray-700">Upload Image for {selectedAnalysis}</span>
            <input
              id="image-upload"
              type="file"
              accept="image/*" // Adjust accept based on image formats
              onChange={handleImageUpload}
              className="hidden"
              disabled={!selectedAnalysis}
            />
          </label>

          {uploadedImage && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Generated report</h2>
              {reportData ? (
                <div>
                  {/* Display the report data from the backend response here */}
                  <p>{reportData.message}</p>
                </div>
              ) : (
                <Loading />
              )}
            </div>
          )}
        </div>
      </main>
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default AnalysisPage;