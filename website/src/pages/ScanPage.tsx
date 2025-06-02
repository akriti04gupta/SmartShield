import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, AlertTriangle, CheckCircle, Shield } from 'lucide-react';

const ScanPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'safe' | 'unsafe'>('idle');
  const [scanResult, setScanResult] = useState<{
    score: number;
    threats: string[];
    details: string;
  } | null>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setScanStatus('scanning');
    
    // Simulate a scan with timeout
    setTimeout(() => {
      // For demo purposes, URLs containing "phish", "malware", or "scam" will be flagged as unsafe
      const isMalicious = /phish|malware|scam/i.test(url);
      
      if (isMalicious) {
        setScanStatus('unsafe');
        setScanResult({
          score: Math.floor(Math.random() * 40),
          threats: ['Phishing attempt', 'Data collection', 'Misleading content'],
          details: 'This website exhibits patterns consistent with known phishing sites.'
        });
      } else {
        setScanStatus('safe');
        setScanResult({
          score: 85 + Math.floor(Math.random() * 15),
          threats: [],
          details: 'No security threats detected. This website appears to be safe.'
        });
      }
    }, 2000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Manual Website Scanner</h1>
            <p className="text-lg mb-8 text-gray-100">
              Test any URL to check if it's safe or potentially harmful before visiting.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Scanner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleScan} className="mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow">
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <input
                      type="url"
                      id="url"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://example.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:self-end">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      disabled={scanStatus === 'scanning'}
                    >
                      {scanStatus === 'scanning' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Scanning...</span>
                        </>
                      ) : (
                        <>
                          <Search className="h-5 w-5" />
                          <span>Scan Website</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-sm text-gray-500">
                <h3 className="font-medium text-gray-700 mb-2">Examples to try:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>https://example.com (safe)</li>
                  <li>https://phishing-example.com (unsafe)</li>
                  <li>https://malware-example.com (unsafe)</li>
                </ul>
              </div>
            </motion.div>

            {/* Scan Results */}
            {scanStatus !== 'idle' && scanStatus !== 'scanning' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`p-6 rounded-xl ${
                  scanStatus === 'safe' 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    scanStatus === 'safe' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {scanStatus === 'safe' 
                      ? <CheckCircle className="h-7 w-7" /> 
                      : <AlertTriangle className="h-7 w-7" />
                    }
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${
                      scanStatus === 'safe' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {scanStatus === 'safe' ? 'Website is Safe' : 'Potential Threat Detected'}
                    </h3>
                    <p className={`mb-4 ${
                      scanStatus === 'safe' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {scanResult?.details}
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700">Safety Score</span>
                        <span className={`font-bold ${
                          (scanResult?.score || 0) > 70 
                            ? 'text-green-600' 
                            : (scanResult?.score || 0) > 40 
                              ? 'text-amber-600' 
                              : 'text-red-600'
                        }`}>
                          {scanResult?.score}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            (scanResult?.score || 0) > 70 
                              ? 'bg-green-600' 
                              : (scanResult?.score || 0) > 40 
                                ? 'bg-amber-500' 
                                : 'bg-red-600'
                          }`}
                          style={{ width: `${scanResult?.score || 0}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {scanStatus === 'unsafe' && scanResult?.threats && scanResult.threats.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-red-700 mb-2">Detected Threats:</h4>
                        <ul className="space-y-1">
                          {scanResult.threats.map((threat, index) => (
                            <li key={index} className="flex items-center gap-2 text-red-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              {threat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-600">
                      <p>
                        {scanStatus === 'safe' 
                          ? 'SmartShield has analyzed this website and found no security issues. It appears to be safe to browse.' 
                          : 'SmartShield recommends not visiting this website. It shows characteristics commonly associated with malicious sites.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* About the Scanner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Scanner</h2>
              <p className="text-lg text-gray-600">
                Our scanner uses the same technology that powers the SmartShield browser extension.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We Check For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-blue-600">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phishing Attempts</p>
                      <p className="text-gray-600 text-sm">Sites that mimic legitimate services to steal credentials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-blue-600">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Malware Distribution</p>
                      <p className="text-gray-600 text-sm">Sites that attempt to install harmful software</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-blue-600">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Scam Operations</p>
                      <p className="text-gray-600 text-sm">Fraudulent websites seeking to deceive visitors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-blue-600">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Suspicious Redirects</p>
                      <p className="text-gray-600 text-sm">Sites that forward users to harmful destinations</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">URL Analysis</p>
                      <p className="text-gray-600 text-sm">We check the URL against our database of known malicious sites</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Content Evaluation</p>
                      <p className="text-gray-600 text-sm">Our ML model analyzes the page content for suspicious patterns</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Behavioral Assessment</p>
                      <p className="text-gray-600 text-sm">We evaluate how the site behaves when visited</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Comprehensive Score</p>
                      <p className="text-gray-600 text-sm">Results are compiled into an overall safety rating</p>
                    </div>
                  </li>
                </ol>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scanner Privacy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-blue-50 border border-blue-200 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-blue-800 mb-4">Your Privacy Matters</h3>
              <p className="text-blue-700 mb-4">
                We don't store the URLs you submit for scanning unless they're confirmed to be malicious,
                in which case they may be added to our database to protect other users.
              </p>
              <p className="text-blue-700">
                The scanner operates with the same privacy-first approach as our browser extension,
                ensuring your browsing habits and personal data remain private.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScanPage;