import React, { useState } from "react";
import { Camera, Upload, Search, AlertTriangle, Check, Droplets, Sun, CloudRain, Leaf, Calendar, Map, AlertCircle, ChevronRight, BarChart, Settings } from "lucide-react";

export default function AgriFocus() {
  const [activeTab, setActiveTab] = useState("diagnose");
  const [diagnosisResult, setDiagnosisResult] = useState(null);

  const handleDiagnosis = () => {
    setDiagnosisResult({
      problem: "Tomato Late Blight",
      severity: "Moderate",
      description: "Fungal infection causing dark brown spots on leaves and stems",
      recommendations: [
        {
          type: "organic",
          solution: "Copper-based fungicide spray",
          suppliers: [
            { name: "OrganiFarm Suppliers", distance: "5km", price: "₦1,200" },
            { name: "EcoGrow Solutions", distance: "12km", price: "₦950" }
          ]
        },
        {
          type: "conventional",
          solution: "Mancozeb fungicide",
          suppliers: [
            { name: "AgriTech Store", distance: "3km", price: "₦1,500" },
            { name: "FarmNeed Center", distance: "8km", price: "₦1,350" }
          ]
        }
      ],
      preventionTips: [
        "Improve air circulation between plants",
        "Water at the base of plants, avoiding foliage",
        "Remove and destroy infected plant material"
      ]
    });
  };

  const resetDiagnosis = () => {
    setDiagnosisResult(null);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* App Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">AgriFocus</h1>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-700 px-2 py-1 rounded-full">Premium</span>
            <Settings size={20} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === "diagnose" && !diagnosisResult && (
          <div className="p-4">
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <h2 className="text-lg font-semibold mb-4">Crop Diagnosis</h2>
              <p className="text-gray-600 mb-6">Take a photo of your crop to identify diseases, pests, or nutrient deficiencies</p>

              <div className="flex gap-4 mb-6">
                <button 
                  className="flex-1 flex flex-col items-center justify-center bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100" 
                  onClick={handleDiagnosis}
                >
                  <Camera size={32} className="text-green-600 mb-2" />
                  <span className="text-sm font-medium">Take Photo</span>
                </button>

                <button className="flex-1 flex flex-col items-center justify-center bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100">
                  <Upload size={32} className="text-green-600 mb-2" />
                  <span className="text-sm font-medium">Upload Image</span>
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-1">Recent Alerts in Your Region</h3>
                <div className="flex items-center text-sm text-blue-800 mb-2">
                  <AlertTriangle size={16} className="mr-1" />
                  <span>Fall Armyworm outbreak detected 15km away</span>
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <AlertTriangle size={16} className="mr-1" />
                  <span>Increased risk of powdery mildew due to recent humidity</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-2">Previous Diagnoses</h2>

              <div className="border-b border-gray-100 py-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Maize Leaf Rust</h3>
                    <p className="text-sm text-gray-500">3 days ago</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>

              <div className="border-b border-gray-100 py-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Tomato Nitrogen Deficiency</h3>
                    <p className="text-sm text-gray-500">1 week ago</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>

              <div className="py-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Cassava Mealybug Infestation</h3>
                    <p className="text-sm text-gray-500">2 weeks ago</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "diagnose" && diagnosisResult && (
          <div className="p-4">
            <div className="bg-white rounded-lg shadow mb-4">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">{diagnosisResult.problem}</h2>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    {diagnosisResult.severity}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{diagnosisResult.description}</p>
              </div>

              <div className="p-4">
                <h3 className="font-medium mb-3">Recommended Treatments</h3>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Leaf size={16} className="text-green-600 mr-2" />
                    <span className="font-medium">Organic Solution</span>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-1">
                    <p className="font-medium text-sm">{diagnosisResult.recommendations[0].solution}</p>
                  </div>

                  <div className="text-sm text-gray-600 mt-2 mb-3">Available from:</div>

                  {diagnosisResult.recommendations[0].suppliers.map((supplier, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-100 py-2">
                      <div>
                        <p className="font-medium">{supplier.name}</p>
                        <p className="text-sm text-gray-500">{supplier.distance} away</p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-green-700 mr-3">{supplier.price}</span>
                        <button className="bg-green-600 text-white text-xs px-3 py-1 rounded">Contact</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <AlertCircle size={16} className="text-blue-600 mr-2" />
                    <span className="font-medium">Conventional Solution</span>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-1">
                    <p className="font-medium text-sm">{diagnosisResult.recommendations[1].solution}</p>
                  </div>

                  <div className="text-sm text-gray-600 mt-2 mb-3">Available from:</div>

                  {diagnosisResult.recommendations[1].suppliers.map((supplier, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-100 py-2">
                      <div>
                        <p className="font-medium">{supplier.name}</p>
                        <p className="text-sm text-gray-500">{supplier.distance} away</p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-green-700 mr-3">{supplier.price}</span>
                        <button className="bg-green-600 text-white text-xs px-3 py-1 rounded">Contact</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-100">
                <h3 className="font-medium mb-3">Prevention Tips</h3>
                <ul className="space-y-2">
                  {diagnosisResult.preventionTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 border-t border-gray-100 bg-green-50">
                <h3 className="font-medium mb-2">Expert Consultation</h3>
                <p className="text-sm text-gray-600 mb-3">Need more specific advice? Connect with an agronomist.</p>
                <button className="bg-green-600 text-white w-full py-2 rounded font-medium">Request Expert Call</button>
              </div>
            </div>

            <button 
              onClick={resetDiagnosis}
              className="bg-white border border-gray-200 text-gray-700 w-full py-3 rounded font-medium shadow-sm mb-4"
            >
              New Diagnosis
            </button>
          </div>
        )}

        {/* Add other tabs and their content here */}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-2 py-3">
        <div className="flex justify-around">
          <button 
            className={`flex flex-col items-center ${activeTab === "diagnose" ? "text-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("diagnose")}
          >
            <Camera size={24} />
            <span className="text-xs mt-1">Diagnose</span>
          </button>

          <button 
            className={`flex flex-col items-center ${activeTab === "forecast" ? "text-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("forecast")}
          >
            <BarChart size={24} />
            <span className="text-xs mt-1">Forecast</span>
          </button>

          <button 
            className={`flex flex-col items-center ${activeTab === "community" ? "text-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("community")}
          >
            <Search size={24} />
            <span className="text-xs mt-1">Marketplace</span>
          </button>
        </div>
      </div>
    </div>
  );
}