import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">КАУСТИКА</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn btn-secondary">Войти</button>
            <button className="btn btn-primary">Начать</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;