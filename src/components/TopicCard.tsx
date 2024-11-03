import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

interface TopicCardProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  subtopics: string[];
  description: string;
  interactive: string;
  isSelected: boolean;
  onSelect: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ 
  title, 
  icon, 
  subtopics, 
  description,
  isSelected,
  onSelect 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getGradientColor = () => {
    switch (title) {
      case 'Текстовые задачи': return 'from-blue-500 to-cyan-400';
      case 'Вероятности': return 'from-purple-500 to-pink-400';
      case 'Вычисления': return 'from-orange-500 to-yellow-400';
      case 'Геометрия': return 'from-green-500 to-emerald-400';
      case 'Уравнения': return 'from-red-500 to-rose-400';
      case 'Параметры': return 'from-indigo-500 to-violet-400';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  return (
    <div 
      className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300
        ${isSelected ? 'ring-2 ring-blue-500 transform scale-[1.02]' : ''}
        ${isExpanded ? 'shadow-lg' : ''}`}
    >
      <div 
        className={`absolute inset-x-0 h-1 bg-gradient-to-r ${getGradientColor()}`}
      />
      
      <div className="p-6 pt-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${getGradientColor()} text-white
              transform transition-transform duration-300 hover:scale-110`}>
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {description}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onSelect}
              className={`p-2 rounded-full transition-colors
                ${isSelected ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-500'}`}
            >
              {isSelected ? (
                <X className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className={`mt-4 space-y-2 ${isExpanded ? 'block' : 'hidden'}`}>
          {subtopics.map((subtopic, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors
                flex items-center justify-between group"
            >
              <span>{subtopic}</span>
              <span className="text-gray-400 group-hover:text-gray-600">→</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 flex items-center"
        >
          {isExpanded ? 'Свернуть' : 'Показать подтемы'}
          <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-200
            ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default TopicCard;