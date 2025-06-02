import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import AddExtensionButton from './AddExtensionButton';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              SmartShield
            </span>
          </NavLink>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/features" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive 
                    ? 'text-blue-600' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`
              }
            >
              Features
            </NavLink>
            <NavLink 
              to="/scan" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive 
                    ? 'text-blue-600' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`
              }
            >
              Scan
            </NavLink>
            <NavLink 
              to="/comparison" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive 
                    ? 'text-blue-600' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`
              }
            >
              Comparison
            </NavLink>
            <NavLink 
              to="/sharing" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive 
                    ? 'text-blue-600' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`
              }
            >
              Secure Sharing
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive 
                    ? 'text-blue-600' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`
              }
            >
              About
            </NavLink>
            <AddExtensionButton />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
          >
            <nav className="flex flex-col py-4 px-4">
              <NavLink 
                to="/features" 
                className={({ isActive }) => 
                  `py-3 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </NavLink>
              <NavLink 
                to="/scan" 
                className={({ isActive }) => 
                  `py-3 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Scan
              </NavLink>
              <NavLink 
                to="/comparison" 
                className={({ isActive }) => 
                  `py-3 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Comparison
              </NavLink>
              <NavLink 
                to="/sharing" 
                className={({ isActive }) => 
                  `py-3 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Secure Sharing
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `py-3 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <div className="py-3">
                <AddExtensionButton fullWidth />
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;