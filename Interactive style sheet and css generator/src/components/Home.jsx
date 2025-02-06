import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaTrophy, FaBook, FaGraduationCap, FaRocket, FaChartLine } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="text-center relative z-10">
            <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Master CSS Like Never Before
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Interactive lessons, real-time practice, and hands-on challenges. 
              Your journey to CSS mastery starts here.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/interactive-lab"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
              >
                Start Learning
              </Link>
              <Link
                to="/tutorials"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors border border-purple-500/20"
              >
                View Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Why Choose CSSMaster?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaLaptopCode />}
            title="Interactive Learning"
            description="Practice CSS in real-time with our interactive lab. See changes instantly as you code."
            link="/interactive-lab"
          />
          <FeatureCard
            icon={<FaGraduationCap />}
            title="Structured Path"
            description="Follow our carefully crafted learning path from basics to advanced concepts."
            link="/tutorials"
          />
          <FeatureCard
            icon={<FaTrophy />}
            title="Skill Challenges"
            description="Test your knowledge with real-world challenges and earn certificates."
            link="/challenges"
          />
          <FeatureCard
            icon={<FaRocket />}
            title="Project-Based"
            description="Build real projects and add them to your portfolio as you learn."
            link="/challenges"
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="Track Progress"
            description="Monitor your learning journey with detailed progress tracking."
            link="/profile"
          />
          <FeatureCard
            icon={<FaBook />}
            title="Rich Resources"
            description="Access a curated collection of tutorials, articles, and tools."
            link="/resources"
          />
        </div>
      </div>

      {/* Latest Updates */}
      <div className="bg-gray-800/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UpdateCard
              title="New Flexbox Course"
              date="March 2024"
              description="Master CSS Flexbox with our comprehensive new course. Includes practical exercises and real-world examples."
              tag="New Course"
            />
            <UpdateCard
              title="Grid Layout Challenges"
              date="March 2024"
              description="Test your CSS Grid skills with 10 new interactive challenges. Build responsive layouts like a pro."
              tag="Challenges"
            />
            <UpdateCard
              title="CSS Animation Workshop"
              date="March 2024"
              description="Join our new workshop on creating stunning animations with CSS. Learn keyframes, transitions, and more."
              tag="Workshop"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">CSSMaster</h3>
              <p className="text-gray-400">Your ultimate platform for mastering CSS through interactive learning and practice.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Learn</h4>
              <ul className="space-y-2">
                <li><Link to="/tutorials" className="text-gray-400 hover:text-purple-400">Tutorials</Link></li>
                <li><Link to="/challenges" className="text-gray-400 hover:text-purple-400">Challenges</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-purple-400">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Forum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CSSMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }) {
  return (
    <Link to={link} className="block group">
      <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800 transition-colors border border-purple-500/20 hover:border-purple-500/40">
        <div className="text-purple-400 text-3xl mb-4 group-hover:scale-110 transform transition-transform">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
}

function UpdateCard({ title, date, description, tag }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
          {tag}
        </span>
      </div>
      <p className="text-sm text-purple-400 mb-2">{date}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default Home;