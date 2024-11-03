import React, { useEffect, useRef } from 'react';
import { Topic } from '../types';

interface InteractiveCanvasProps {
  topics: Topic[];
}

const InteractiveCanvas: React.FC<InteractiveCanvasProps> = ({ topics }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw based on selected topics
    topics.forEach(topic => {
      switch (topic.interactive) {
        case 'graph':
          drawGraph(ctx);
          break;
        case 'probability':
          drawProbability(ctx);
          break;
        case 'geometry':
          drawGeometry(ctx);
          break;
        case 'parameter':
          drawParameter(ctx);
          break;
        // Add more cases as needed
      }
    });
  }, [topics]);

  const drawGraph = (ctx: CanvasRenderingContext2D) => {
    // Example: Draw coordinate system
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(250, 150);
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 250);
    ctx.strokeStyle = '#333';
    ctx.stroke();
  };

  const drawProbability = (ctx: CanvasRenderingContext2D) => {
    // Example: Draw probability diagram
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#666';
    ctx.stroke();
  };

  const drawGeometry = (ctx: CanvasRenderingContext2D) => {
    // Example: Draw geometric shape
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(150, 186.6);
    ctx.closePath();
    ctx.strokeStyle = '#999';
    ctx.stroke();
  };

  const drawParameter = (ctx: CanvasRenderingContext2D) => {
    // Example: Draw parameter visualization
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.quadraticCurveTo(150, 50, 250, 250);
    ctx.strokeStyle = '#333';
    ctx.stroke();
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Интерактивная визуализация</h3>
      <canvas
        ref={canvasRef}
        className="w-full h-[400px] border border-gray-200 rounded-lg"
        style={{ backgroundColor: '#fff' }}
      />
      <div className="mt-4 text-sm text-gray-500">
        Взаимодействуйте с визуализацией для лучшего понимания выбранных тем
      </div>
    </div>
  );
};

export default InteractiveCanvas;