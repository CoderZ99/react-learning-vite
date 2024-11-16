import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const topics = [
  {
    id: '1',
    title: '1. Basics',
    icon: BookOpenIcon,
    subtopics: [
      {
        id: '1.1',
        title: '1.1. JSX và Cú pháp',
        icon: CodeBracketIcon,
        items: [
          { id: '1.1.1', title: '1.1.1. JSX Basics', path: '/jsx-basics' },
          { id: '1.1.2', title: '1.1.2. JSX Expressions', path: '/jsx-expressions' },
          { id: '1.1.3', title: '1.1.3. Conditional Rendering', path: '/conditional-rendering' },
          { id: '1.1.4', title: '1.1.4. Lists and Keys', path: '/lists-and-keys' },
          { id: '1.1.5', title: '1.1.5. Fragments', path: '/fragments' }
        ]
      },
      {
        id: '1.2',
        title: '1.2. Components',
        icon: CubeIcon,
        items: []
      },
      {
        id: '1.3',
        title: '1.3. State',
        icon: CubeIcon,
        items: []
      }
    ]
  },
  {
    id: '2',
    title: '2. Hooks',
    icon: BookOpenIcon,
    subtopics: []
  },
  {
    id: '3',
    title: '3. Forms',
    icon: BookOpenIcon,
    subtopics: []
  }
];

function TopicMenu() {
  const [expandedTopics, setExpandedTopics] = useState(['1', '1.1']);

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => 
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const renderItems = (items) => {
    return items.map(item => (
      <Link
        key={item.id}
        to={item.path}
        className="block py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-2 border-transparent hover:border-blue-400"
      >
        <div className="flex items-center" style={{ paddingLeft: '5.5rem' }}>
          {item.title}
        </div>
      </Link>
    ));
  };

  const renderSubtopics = (subtopics) => {
    return subtopics.map(subtopic => {
      const Icon = subtopic.icon;
      const hasItems = subtopic.items && subtopic.items.length > 0;
      
      return (
        <div key={subtopic.id} className="border-l border-gray-100">
          <button
            onClick={() => toggleTopic(subtopic.id)}
            className="w-full text-left py-2 flex items-center justify-between text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
          >
            <div className="flex items-center" style={{ paddingLeft: '3.5rem' }}>
              {Icon && <Icon className="h-5 w-5 mr-3" />}
              {subtopic.title}
            </div>
            {hasItems && (
              <span className="text-gray-400 pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {expandedTopics.includes(subtopic.id) 
                  ? <ChevronDownIcon className="h-5 w-5" />
                  : <ChevronRightIcon className="h-5 w-5" />
                }
              </span>
            )}
          </button>
          {expandedTopics.includes(subtopic.id) && hasItems && (
            <div className="bg-gray-50">
              {renderItems(subtopic.items)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <nav className="bg-white rounded-lg shadow-sm overflow-hidden max-w-3xl mx-auto">
      {topics.map(topic => {
        const Icon = topic.icon;
        const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;
        
        return (
          <div key={topic.id} className="border-b last:border-b-0 border-gray-100">
            <button
              onClick={() => toggleTopic(topic.id)}
              className="w-full text-left py-3 flex items-center justify-between font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
            >
              <div className="flex items-center" style={{ paddingLeft: '1.5rem' }}>
                {Icon && <Icon className="h-6 w-6 mr-3" />}
                {topic.title}
              </div>
              {hasSubtopics && (
                <span className="text-gray-400 pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {expandedTopics.includes(topic.id)
                    ? <ChevronDownIcon className="h-5 w-5" />
                    : <ChevronRightIcon className="h-5 w-5" />
                  }
                </span>
              )}
            </button>
            {expandedTopics.includes(topic.id) && hasSubtopics && (
              <div className="bg-gray-50">
                {renderSubtopics(topic.subtopics)}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default TopicMenu;
