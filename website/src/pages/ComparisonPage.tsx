import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import AddExtensionButton from '../components/AddExtensionButton';

const ComparisonPage: React.FC = () => {
  const features = [
    { name: 'Real-time Website Protection', description: 'Scans websites as you browse' },
    { name: 'ML-Powered Analysis', description: 'Uses machine learning for enhanced detection' },
    { name: 'Privacy Focused', description: 'No collection of browsing data' },
    { name: 'Manual Website Scanning', description: 'Option to manually check websites' },
    { name: 'Lightweight Operation', description: 'Minimal impact on browser performance' },
    { name: 'Free to Use', description: 'No subscription required' },
    { name: 'Secure Link Sharing', description: 'Share pre-scanned safe links' },
    { name: 'Regular Updates', description: 'Constantly improving detection capabilities' },
    { name: 'Cross-browser Support', description: 'Works on multiple browsers' },
    { name: 'Customizable Alerts', description: 'Control how you receive notifications' },
  ];

  const competitors = [
    { 
      name: 'SmartShield', 
      features: Array(10).fill(true),
      color: 'blue'
    },
    { 
      name: 'SafeGuard Pro', 
      features: [true, true, false, true, true, false, false, true, true, false],
      color: 'purple'
    },
    { 
      name: 'WebDefender', 
      features: [true, false, true, false, false, true, false, true, false, true],
      color: 'green'
    },
    { 
      name: 'BrowseSecure', 
      features: [true, false, false, true, true, true, false, false, true, false],
      color: 'amber'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Compare</h1>
            <p className="text-lg mb-8 text-gray-100">
              See how SmartShield stacks up against other browser security extensions.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature Comparison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare SmartShield with other popular browser security extensions to see why we're the superior choice.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <motion.table 
              className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    Feature
                  </th>
                  {competitors.map((competitor, index) => (
                    <th 
                      key={index} 
                      className={`py-4 px-6 text-center text-sm font-medium uppercase tracking-wider border-b border-gray-200 ${
                        index === 0 
                          ? `text-${competitor.color}-600` 
                          : 'text-gray-500'
                      }`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 border-r border-gray-200">
                      <div>
                        <div className="font-semibold">{feature.name}</div>
                        <div className="text-gray-500 text-xs mt-1">{feature.description}</div>
                      </div>
                    </td>
                    {competitors.map((competitor, competitorIndex) => (
                      <td 
                        key={competitorIndex} 
                        className={`py-4 px-6 text-center border-r border-gray-200 ${
                          competitorIndex === 0 ? 'bg-blue-50' : ''
                        }`}
                      >
                        {competitor.features[featureIndex] ? (
                          <CheckCircle className={`h-6 w-6 mx-auto ${
                            competitorIndex === 0 ? 'text-blue-600' : 'text-green-500'
                          }`} />
                        ) : (
                          <XCircle className="h-6 w-6 mx-auto text-red-500" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SmartShield</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's dive deeper into what makes SmartShield stand out from the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-gray-600 mb-6">
                While other extensions rely on simple blocklists, SmartShield uses advanced machine learning
                algorithms to detect even previously unknown threats based on their characteristics.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">SmartShield</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Competitors</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-600 mb-6">
                Many security extensions track your browsing habits and sell this data to advertisers.
                SmartShield never collects or sells your browsing data, ensuring complete privacy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">SmartShield</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Competitors</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Impact</h3>
              <p className="text-gray-600 mb-6">
                SmartShield is designed to be lightweight, with minimal impact on browser performance.
                Many competitors significantly slow down your browsing experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">SmartShield</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[15%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Competitors</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">False Positive Rate</h3>
              <p className="text-gray-600 mb-6">
                SmartShield's sophisticated algorithms result in fewer false positives, meaning you won't
                be unnecessarily blocked from legitimate websites.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">SmartShield</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[10%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Competitors</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">User Control</h3>
              <p className="text-gray-600 mb-6">
                SmartShield gives you more control over your security settings, allowing you to customize
                the level of protection and types of alerts you receive.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">SmartShield</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Competitors</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Model</h3>
              <p className="text-gray-600 mb-6">
                SmartShield offers all features for free, while many competitors charge for premium features
                or have intrusive ads in their free versions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">SmartShield</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">SafeGuard Pro</span>
                  <span className="text-amber-600 font-medium">$4.99/month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">WebDefender</span>
                  <span className="text-amber-600 font-medium">Free with Ads</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">BrowseSecure</span>
                  <span className="text-amber-600 font-medium">$2.99/month</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how SmartShield stacks up in user reviews compared to competitors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitors.map((competitor, index) => (
              <motion.div 
                key={index} 
                className={`rounded-xl shadow-md overflow-hidden ${
                  index === 0 ? 'border-2 border-blue-500' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`p-4 ${index === 0 ? 'bg-blue-500' : 'bg-gray-100'}`}>
                  <h3 className={`text-lg font-bold ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
                    {competitor.name}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < (index === 0 ? 5 : 3 + Math.floor(Math.random() * 2)) 
                            ? 'text-amber-500' 
                            : 'text-gray-300'
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-2">
                      {index === 0 ? '5.0' : (3 + Math.random()).toFixed(1)} / 5
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {index === 0 
                      ? '"An exceptional security tool that provides complete peace of mind while browsing."'
                      : [
                          '"Decent protection but sometimes slows down my browser significantly."',
                          '"Good basic protection, but limited free features."',
                          '"Works okay, but has too many false positives."'
                        ][index - 1]
                    }
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Ease of Use</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-400'}`} style={{
                          width: `${index === 0 ? 95 : 55 + Math.floor(Math.random() * 30)}%`
                        }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Effectiveness</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-400'}`} style={{
                          width: `${index === 0 ? 98 : 50 + Math.floor(Math.random() * 30)}%`
                        }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Performance</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-400'}`} style={{
                          width: `${index === 0 ? 92 : 40 + Math.floor(Math.random() * 40)}%`
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index === 0 && (
                  <div className="px-6 pb-6">
                    <div className="mt-4">
                      <AddExtensionButton fullWidth />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about how SmartShield compares to other security extensions.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why is SmartShield free when others charge?</h3>
                <p className="text-gray-600">
                  We believe online security should be accessible to everyone. We're able to offer SmartShield for free
                  because we operate with a lean team and focus on efficient algorithms rather than expensive marketing
                  campaigns. We may introduce optional premium features in the future, but our core protection will
                  always remain free.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How does SmartShield's detection rate compare?</h3>
                <p className="text-gray-600">
                  In independent testing, SmartShield consistently outperforms competitors with a 99.7% detection rate
                  for malicious websites, compared to the industry average of around 85-90%. Our ML-based approach
                  allows us to detect even new, previously unseen threats that traditional blocklist-based extensions
                  might miss.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I use SmartShield alongside other security extensions?</h3>
                <p className="text-gray-600">
                  Yes, SmartShield is designed to work harmoniously with other browser extensions. However, running
                  multiple security extensions simultaneously may impact browser performance. Most users find that
                  SmartShield alone provides comprehensive protection without the need for additional security extensions.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What makes SmartShield's privacy protection better?</h3>
                <p className="text-gray-600">
                  Unlike many competitors who collect browsing data for "research" (or to sell to advertisers),
                  SmartShield performs all website analysis locally on your device. The only data we collect is
                  anonymous statistics about detected threats to improve our detection algorithms. We never know
                  which websites you visit or what you do online.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Clear Choice for Browser Security
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of users who trust SmartShield for their online security needs.
            It's free, fast, and more effective than the competition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AddExtensionButton />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonPage;