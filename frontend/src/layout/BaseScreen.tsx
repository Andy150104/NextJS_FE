import Footer from 'Nova/components/Footer/Footer';
import Navbar from 'Nova/components/Navbar/Navbar';
import React from 'react';


const BaseScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer/>
    </div>
  );
};

export default BaseScreen;
