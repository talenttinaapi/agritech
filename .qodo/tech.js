import { useState } from "react";
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
        
        {activeTab === "forecast" && (
          <div className="p-4">
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Seasonal Forecast</h2>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Premium Feature</span>
              </div>
              
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <div className="flex-shrink-0 flex flex-col items-center bg-blue-50 rounded-lg p-3 border border-blue-100 w-20">
                  <span className="text-sm font-medium">Today</span>
                  <CloudRain size={24} className="text-blue-600 my-2" />
                  <span className="text-xs">25°C</span>
                </div>
                
                <div className="flex-shrink-0 flex flex-col items-center bg-gray-50 rounded-lg p-3 border border-gray-100 w-20">
                  <span className="text-sm">Thu</span>
                  <Sun size={24} className="text-yellow-500 my-2" />
                  <span className="text-xs">28°C</span>
                </div>
                
                <div className="flex-shrink-0 flex flex-col items-center bg-gray-50 rounded-lg p-3 border border-gray-100 w-20">
                  <span className="text-sm">Fri</span>
                  <Sun size={24} className="text-yellow-500 my-2" />
                  <span className="text-xs">30°C</span>
                </div>
                
                <div className="flex-shrink-0 flex flex-col items-center bg-gray-50 rounded-lg p-3 border border-gray-100 w-20">
                  <span className="text-sm">Sat</span>
                  <CloudRain size={24} className="text-blue-600 my-2" />
                  <span className="text-xs">24°C</span>
                </div>
                
                <div className="flex-shrink-0 flex flex-col items-center bg-gray-50 rounded-lg p-3 border border-gray-100 w-20">
                  <span className="text-sm">Sun</span>
                  <CloudRain size={24} className="text-blue-600 my-2" />
                  <span className="text-xs">22°C</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Seasonal Rainfall Prediction</h3>
                  <span className="text-sm text-gray-500">May - Jul 2025</span>
                </div>
                <div className="h-40 flex items-end justify-between px-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8 h-16 rounded-t-lg"></div>
                    <span className="text-xs mt-1">May</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8 h-28 rounded-t-lg"></div>
                    <span className="text-xs mt-1">Jun</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-8 h-24 rounded-t-lg"></div>
                    <span className="text-xs mt-1">Jul</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <h3 className="font-medium text-green-800 mb-2">Planting Recommendations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={16} className="text-green-600 mr-2 mt-1" />
                    <span className="text-sm">Optimal maize planting window: May 20-30</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-600 mr-2 mt-1" />
                    <span className="text-sm">Consider drought-resistant cassava varieties</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-600 mr-2 mt-1" />
                    <span className="text-sm">Prepare irrigation for tomato crops in July</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Crop Calendar</h2>
              <div className="border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between bg-gray-50 p-3 border-b">
                  <span className="font-medium">May 2025</span>
                  <div className="flex gap-1">
                    <button className="p-1 rounded hover:bg-gray-200">
                      <ChevronRight size={16} className="transform rotate-180" />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-200">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 p-2">
                  {[...Array(31)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square flex flex-col items-center justify-center text-sm rounded-lg
                        ${i === 13 ? 'bg-green-100 text-green-800' : 'hover:bg-gray-50'}`}
                    >
                      <span>{i + 1}</span>
                      {i === 13 && <div className="w-1 h-1 bg-green-500 rounded-full mt-1"></div>}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Upcoming Activities</h3>
                  <button className="text-sm text-green-600 font-medium">Add New</button>
                </div>
                
                <div className="border-b border-gray-100 py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-green-600 mr-2" />
                      <div>
                        <h4 className="font-medium">Maize Planting</h4>
                        <p className="text-xs text-gray-500">May 14, 2025</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Today</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Droplets size={16} className="text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium">Apply Fertilizer - Tomatoes</h4>
                        <p className="text-xs text-gray-500">May 20, 2025</p>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">In 6 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "community" && (
          <div className="p-4">
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <h2 className="text-lg font-semibold mb-4">Local Marketplace</h2>
              
              <div className="relative mb-4">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for supplies, equipment..." 
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg"
                />
              </div>
              
              <div className="border-b border-gray-100 py-3">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">Organic Tomato Seeds</h3>
                    <p className="text-sm text-gray-500">Roma variety, disease-resistant</p>
                    <div className="flex items-center mt-1">
                      <Map size={14} className="text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">2.5km away</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-green-700">₦850</span>
                    <p className="text-xs text-gray-500">per packet</p>
                    <button className="mt-1 bg-green-600 text-white text-xs px-3 py-1 rounded">Contact</button>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-100 py-3">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">Organic Fertilizer</h3>
                    <p className="text-sm text-gray-500">Poultry manure, well-composted</p>
                    <div className="flex items-center mt-1">
                      <Map size={14} className="text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">4km away</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-green-700">₦1,200</span>
                    <p className="text-xs text-gray-500">per 50kg bag</p>
                    <button className="mt-1 bg-green-600 text-white text-xs px-3 py-1 rounded">Contact</button>
                  </div>
                </div>
              </div>
              
              <div className="py-3">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">Drip Irrigation System</h3>
                    <p className="text-sm text-gray-500">Complete setup for 1/4 hectare</p>
                    <div className="flex items-center mt-1">
                      <Map size={14} className="text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">8km away</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-green-700">₦45,000</span>
                    <p className="text-xs text-gray-500">negotiable</p>
                    <button className="mt-1 bg-green-600 text-white text-xs px-3 py-1 rounded">Contact</button>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 text-green-600 border border-green-600 py-2 rounded font-medium">View All Listings</button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Community Knowledge</h2>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">15 New Posts</span>
              </div>
              
              <div className="border-b border-gray-100 py-3">
                <h3 className="font-medium">How are you dealing with the recent dry spell?</h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span>Ibrahim M. • 2 hours ago</span>
                  <span className="mx-2">•</span>
                  <span>24 replies</span>
                </div>
              </div>
              
              <div className="border-b border-gray-100 py-3">
                <h3 className="font-medium">Results from different maize varieties this season</h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span>Aminata K. • Yesterday</span>
                  <span className="mx-2">•</span>
                  <span>18 replies</span>
                </div>
              </div>
              
              <div className="py-3">
                <h3 className="font-medium">Looking for advice on tomato greenhouse setup</h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span>David O. • 3 days ago</span>
                  <span className="mx-2">•</span>
                  <span>32 replies</span>
                </div>
              </div>
              
              <button className="w-full mt-4 text-green-600 border border-green-600 py-2 rounded font-medium">Post Question</button>
            </div>
          </div>
        )}
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