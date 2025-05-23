import { useState } from "react";
import "./App.css";
import qrCodeImage from "./assets/googlereview_qr.png";

function App() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8 no-print">Steam Action Pros Business Card</h1>

      <div className="relative w-[3.5in] h-[2in] cursor-pointer business-card" onClick={handleFlip}>
        <div
          className={`absolute w-full h-full transition-all duration-700 backface-hidden ${
            flipped ? "rotate-y-180 invisible" : ""
          }`}
        >
          {/* Front of the card */}
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg shadow-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Steam Action</h2>
              <h3 className="text-2xl font-bold text-white">Carpet Cleaning</h3>
              <p className="text-sm text-blue-100 mt-1">Professional Carpet Cleaning Services</p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-white">
                <span className="font-semibold">Phone:</span> (618) 971-1658
              </p>
              <p className="text-sm text-white">
                <span className="font-semibold">Email:</span> steamactioncleaning@gmail.com
              </p>
              <p className="text-sm text-white">
                <span className="font-semibold">Web:</span> www.steamactionpros.com
              </p>
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full h-full transition-all duration-700 backface-hidden ${
            flipped ? "" : "rotate-y-180 invisible"
          }`}
        >
          {/* Back of the card */}
          <div className="w-full h-full bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <img src={qrCodeImage} alt="QR Code" className="w-24 h-24 mb-4" />
              <p className="text-center text-gray-700 font-medium">
                Leave us a review on Google!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 no-print">
        <p className="text-sm text-gray-500 mb-4">
          Click on the card to flip it. Print at 3.5" × 2" for standard business card size.
        </p>

        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={handleFlip}
          >
            {flipped ? "Show Front" : "Show Back"}
          </button>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            onClick={() => window.print()}
          >
            Print Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
