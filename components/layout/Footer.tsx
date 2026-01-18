import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-black p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.</p>
        <p className="text-sm mt-2">Airbnb clone project for ALX</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/about" className="text-blue-600 hover:text-blue-800">About</a>
          <a href="/contact" className="text-blue-600 hover:text-blue-800">Contact</a>
          <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
          <a href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
