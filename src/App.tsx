import React, { useState } from 'react';
import { Brain, Calculator, Sigma, Shapes, Variable, PenTool, BookText } from 'lucide-react';
import TopicCard from './components/TopicCard';
import Navbar from './components/Navbar';
import InteractiveCanvas from './components/InteractiveCanvas';
import { Topic } from './types';
import { useTopics } from './hooks/useTopics';

function App() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const topics = useTopics();

  const handleTopicSelect = (topicId: number) => {
    const topic = topics.find(t => t.id === topicId);
    if (topic) {
      setSelectedTopics(prev => 
        prev.includes(topic.title) 
          ? prev.filter(t => t !== topic.title)
          : [...prev, topic.title]
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            КАУСТИКА
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Интерактивная платформа для подготовки к экзаменам по математике
          </p>
        </div>

        {selectedTopics.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Выбранные темы:</h2>
            <div className="flex flex-wrap gap-2">
              {selectedTopics.map(topic => (
                <span key={topic} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard 
              key={topic.id} 
              {...topic} 
              onSelect={() => handleTopicSelect(topic.id)}
              isSelected={selectedTopics.includes(topic.title)}
            />
          ))}
        </div>

        {selectedTopics.length > 0 && (
          <div className="mt-8">
            <InteractiveCanvas 
              topics={topics.filter(t => selectedTopics.includes(t.title))}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;