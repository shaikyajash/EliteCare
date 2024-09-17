import React from 'react';
import { FileUp } from 'lucide-react';
import Navbar from '../navbar/navbar';

const AnalysisPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
    
      {/* Main content */}
      <main className="flex-grow p-8">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-center mb-8 text-emerald-500">
            ELITECARE.IO
          </h1>
          {/* PDF Upload button */}
          <div className="mb-8">
            <label
              htmlFor="pdf-upload"
              className="flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <FileUp className="mr-2 text-green-500" />
              <span className="text-gray-700">Attach PDF File</span>
              <input id="pdf-upload" type="file" accept=".pdf" className="hidden" />
            </label>
          </div>
          {/* Generated report section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Generated report</h2>
            <div className="h-40 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </main>

      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default AnalysisPage;