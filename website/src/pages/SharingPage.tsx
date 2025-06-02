import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, ExternalLink, Check, AlertTriangle } from 'lucide-react';

const SharingPage: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [isSecureUrl, setIsSecureUrl] = useState(false);
  const [secureUrl, setSecureUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSecureLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl) return;

    setIsGenerating(true);
    
    // Simulate processing time
    setTimeout(() => {
      // For demo purposes, URLs containing "phish", "malware", or "scam" will be flagged as unsafe
      const isMalicious = /phish|malware|scam/i.test(originalUrl);
      
      if (isMalicious) {
        setIsSecureUrl(false);
        setSecureUrl('');
      } else {
        const secureId = Math.random().toString(36).substring(2, 10);
        setIsSecureUrl(true);
        setSecureUrl(`https://smartshield.safe/s/${secureId}`);
      }
      
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(secureUrl);
    setIsCopied(true);
    
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure Link Sharing</h1>
            <p className="text-lg mb-8 text-gray-100">
              Share links with confidence by pre-scanning them for security threats.
              Recipients will know the link is safe before they click.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Secure Sharing Tool */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Share2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Generate Secure Link</h2>
              </div>
              
              <form onSubmit={handleGenerateSecureLink}>
                <div className="mb-6">
                  <label htmlFor="original-url" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter the URL you want to share
                  </label>
                  <input
                    type="url"
                    id="original-url"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    This URL will be scanned for security threats before generating a secure shareable link.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Scanning & Generating...</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-5 w-5" />
                      <span>Generate Secure Link</span>
                    </>
                  )}
                </button>
              </form>

              {/* Example URLs */}
              <div className="mt-4 text-sm text-gray-500">
                <h3 className="font-medium text-gray-700 mb-2">Examples to try:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>https://example.com (will generate secure link)</li>
                  <li>https://phishing-example.com (will be blocked)</li>
                </ul>
              </div>
            </motion.div>

            {/* Result - Secure Link */}
            {secureUrl && isSecureUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-xl bg-green-50 border border-green-200 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-green-700 mb-2">Secure Link Generated</h3>
                    <p className="text-green-600 mb-4">
                      This URL has been scanned and confirmed to be safe. Share it with confidence.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4 flex items-center justify-between">
                      <div className="font-medium text-gray-700 truncate">
                        {secureUrl}
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={handleCopyLink}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Copy to clipboard"
                        >
                          {isCopied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5 text-gray-600" />}
                        </button>
                        <a 
                          href={secureUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Open link"
                        >
                          <ExternalLink className="h-5 w-5 text-gray-600" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p>
                        Your recipients will see that this link has been pre-scanned and verified by SmartShield.
                        <br />
                        The secure link will redirect to the original URL when clicked.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Result - Insecure Link */}
            {!secureUrl && !isSecureUrl && originalUrl && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-xl bg-red-50 border border-red-200 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-700 mb-2">Security Threat Detected</h3>
                    <p className="text-red-600 mb-4">
                      We cannot generate a secure link for this URL because it contains potential security threats.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                      <div className="font-medium text-red-600 line-through">
                        {originalUrl}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p>
                        We recommend not sharing this URL. If you believe this is a mistake, you can try scanning
                        the URL directly using our <a href="/scan" className="text-blue-600 hover:underline">Manual Scanner</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Secure Sharing Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our secure sharing technology creates a safe bridge between you and your recipients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">URL Verification</h3>
              <p className="text-gray-600">
                When you submit a URL, SmartShield thoroughly scans it using our advanced ML algorithms
                to detect any potential security threats.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Link Creation</h3>
              <p className="text-gray-600">
                If the URL passes our security checks, we generate a special SmartShield secure link
                that wraps the original URL in our protection layer.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Recipient Experience</h3>
              <p className="text-gray-600">
                When a recipient clicks your secure link, they'll see a verification page confirming
                the link has been scanned before being redirected to the original URL.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Secure Sharing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why use SmartShield's secure sharing instead of regular links?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Built-in Security Verification</h3>
                <p className="text-gray-600">
                  Every secure link is pre-scanned for malware, phishing attempts, and other threats
                  before it's even shared, ensuring recipient safety.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency for Recipients</h3>
                <p className="text-gray-600">
                  Recipients see a verification page showing the link has been scanned and confirmed
                  safe, building trust and confidence.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Protection Against Link Spoofing</h3>
                <p className="text-gray-600">
                  The secure link verification process helps recipients avoid disguised malicious URLs 
                  that might otherwise look legitimate.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Protection</h3>
                <p className="text-gray-600">
                  Even after sharing, secure links are continuously monitored. If a previously safe site
                  becomes compromised, access will be blocked automatically.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For...</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Secure sharing is ideal for many everyday situations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Sharing</h3>
              <p className="text-gray-600">
                Share links with less tech-savvy family members without worrying about them
                accidentally visiting malicious sites.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Communication</h3>
              <p className="text-gray-600">
                Ensure links shared with clients and team members are verified safe,
                protecting your company's reputation and data.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media</h3>
              <p className="text-gray-600">
                Build trust with your followers by sharing only verified secure links
                that have been pre-scanned for threats.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Settings</h3>
              <p className="text-gray-600">
                Teachers can share secure links with students, ensuring they only
                access appropriate and safe online resources.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Communication</h3>
              <p className="text-gray-600">
                Reduce the risk of phishing by using secure links in your emails,
                especially when sharing resources with large groups.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Communities</h3>
              <p className="text-gray-600">
                Moderators can share verified links, reducing the risk of malicious
                content being spread within community forums.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SharingPage;