import React from 'react';
import { FaExternalLinkAlt, FaBookmark, FaStar } from 'react-icons/fa';

function Resources() {
  const resources = [
    {
      category: "Documentation",
      items: [
        {
          title: "MDN CSS Reference",
          description: "Comprehensive CSS documentation by Mozilla",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          rating: 5
        },
        {
          title: "CSS-Tricks",
          description: "Articles, tutorials and snippets about CSS",
          url: "https://css-tricks.com",
          rating: 4.5
        }
      ]
    },
    {
      category: "Tools",
      items: [
        {
          title: "CSS Grid Generator",
          description: "Visual tool for creating CSS grid layouts",
          url: "#",
          rating: 4
        },
        {
          title: "Flexbox Playground",
          description: "Interactive flexbox learning environment",
          url: "#",
          rating: 4.5
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">CSS Resources</h1>
      
      <div className="space-y-12">
        {resources.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-semibold text-white mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceCard({ title, description, url, rating }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaBookmark />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-yellow-400' : 'text-gray-600'}
          />
        ))}
      </div>
    </div>
  );
}

export default Resources;