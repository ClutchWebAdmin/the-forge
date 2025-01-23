"use client";
import { useState, useEffect } from 'react';
import clink from "../../../public/logos/Clink-Logo.jpg"

export default function WelcomePopup() 
{
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically show the modal when the page loads
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
<>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          data-aos="fadeIn"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div
            className="rounded-2xl shadow-lg p-6 max-w-lg w-full flex flex-col  h-[80vh]"
            style={{
              backgroundImage: `url(${clink.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='flex-grow'>
              <h2 className="text-2xl font-bold text-outline text-white text-center">A Warm Welcome to Clink!</h2>
            
            <p className="mb-4 text-outline text-start text-sm">
               
            </p>
            </div>
            
            
            <p className="text-lg font-bold mt-4 text-outline text-white ">
            We’re so excited to have Clink! join The Collective!
            </p>
            <a 
              className="text-lg font-bold mt-4 text-outline text-blue-500" 
              href="https://clinksalem.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://clinksalem.com/
            </a>
                        <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-collectivePink-dark text-white rounded hover:bg-collectivePink-light hover:text-collectivePink-dark transition shadow-md shadow-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );;
}