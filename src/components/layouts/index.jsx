import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="bg-gray-200 flex-grow">
        <div className="container mx-auto py-4">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
