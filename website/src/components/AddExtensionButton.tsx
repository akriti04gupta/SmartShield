import React from 'react';
import { Download } from 'lucide-react';

interface AddExtensionButtonProps {
  fullWidth?: boolean;
}

const AddExtensionButton: React.FC<AddExtensionButtonProps> = ({ fullWidth = false }) => {
  return (
    <button 
      className={`${
        fullWidth ? 'w-full' : ''
      } bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
    >
      <Download className="h-4 w-4" />
      <span className="font-medium">Add Extension</span>
    </button>
  );
};

export default AddExtensionButton;