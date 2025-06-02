import { useEffect, useState } from "react";
import { storage } from "../adapters/storageAdapter";

interface ScanResultData {
  safe: boolean;
  predicted_class: string;
  confidence: number;
  imageUrl: string;
}

const ScanResult: React.FC = () => {
  const [result, setResult] = useState<ScanResultData | null>(null);

 useEffect(() => {
  const saved = localStorage.getItem("ScanResult");
  if (saved) {
    setResult(JSON.parse(saved));
  }
}, []);
  if (!result) {
    return (
      <div className="bg-black text-red-500 min-h-screen flex items-center justify-center">
        <p className="text-xl">No scan result available.</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl text-red-500 font-bold mb-6">🔍 SmartShield Scan Result</h1>
      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-xl mx-auto">
        <p className="mb-2">
          <strong>Status:</strong>{" "}
          <span className={result.safe ? "text-green-400" : "text-yellow-400"}>
            {result.safe ? "✅ Safe" : "⚠️ Malware Detected"}
          </span>
        </p>
        <p className="mb-2">
          <strong>Predicted Class:</strong> {result.predicted_class}
        </p>
        <p className="mb-2">
          <strong>Confidence:</strong> {(result.confidence).toFixed(2)}%
        </p>
        <p className="mb-2">
          <strong>Image URL:</strong>{" "}
          <a
            href={result.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-red-400"
          >
            View Image
          </a>
        </p>
      </div>
    </div>
  );
};

export default ScanResult;
