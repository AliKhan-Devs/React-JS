import React from 'react';
import { FaTrophy, FaLock, FaUnlock } from 'react-icons/fa';

function Challenges() {
  const challenges = [
    {
      title: "Centering Elements",
      description: "Master different techniques for centering elements with CSS",
      difficulty: "Easy",
      xp: 100,
      unlocked: true
    },
    {
      title: "Responsive Grid Layout",
      description: "Create a responsive grid that adapts to different screen sizes",
      difficulty: "Medium",
      xp: 200,
      unlocked: true
    },
    {
      title: "Custom Animations",
      description: "Build complex animations using CSS keyframes",
      difficulty: "Hard",
      xp: 300,
      unlocked: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">CSS Challenges</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-800 px-4 py-2 rounded-lg">
            <span className="text-yellow-400 font-semibold">300 XP</span>
          </div>
          <div className="bg-gray-800 px-4 py-2 rounded-lg">
            <span className="text-white font-semibold">Level 5</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title} {...challenge} />
        ))}
      </div>
    </div>
  );
}

function ChallengeCard({ title, description, difficulty, xp, unlocked }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className={`bg-gray-800 rounded-xl p-6 ${unlocked ? 'hover:bg-gray-700' : 'opacity-75'} transition-colors`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {unlocked ? <FaUnlock className="text-green-400" /> : <FaLock className="text-gray-500" />}
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className={`${getDifficultyColor(difficulty)} font-medium`}>{difficulty}</span>
        <div className="flex items-center space-x-2">
          <FaTrophy className="text-yellow-400" />
          <span className="text-white font-medium">{xp} XP</span>
        </div>
      </div>
    </div>
  );
}

export default Challenges;