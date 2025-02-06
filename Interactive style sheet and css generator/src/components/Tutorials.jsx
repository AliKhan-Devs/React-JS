import React from 'react';
import { FaPlay } from 'react-icons/fa';

function Tutorials() {
  const tutorials = [
    {
      category: "Basics",
      items: [
        { title: "CSS Selectors", duration: "15 min", level: "Beginner" },
        { title: "Box Model", duration: "20 min", level: "Beginner" },
        { title: "Typography", duration: "25 min", level: "Beginner" }
      ]
    },
    {
      category: "Layout",
      items: [
        { title: "Flexbox Complete Guide", duration: "45 min", level: "Intermediate" },
        { title: "CSS Grid Mastery", duration: "50 min", level: "Intermediate" },
        { title: "Responsive Design", duration: "40 min", level: "Intermediate" }
      ]
    },
    {
      category: "Advanced",
      items: [
        { title: "CSS Animations", duration: "35 min", level: "Advanced" },
        { title: "CSS Variables", duration: "30 min", level: "Advanced" },
        { title: "CSS Architecture", duration: "55 min", level: "Advanced" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">CSS Tutorials</h1>
      
      <div className="space-y-12">
        {tutorials.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-semibold text-white mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((tutorial) => (
                <TutorialCard key={tutorial.title} {...tutorial} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TutorialCard({ title, duration, level }) {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <button className="bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <FaPlay className="text-white" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-300">{duration}</span>
        <span className={`${getLevelColor(level)} font-medium`}>{level}</span>
      </div>
    </div>
  );
}

export default Tutorials;