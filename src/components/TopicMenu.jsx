import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

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
  const [expandedTopics, setExpandedTopics] = useState({});
  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem('completedTopics');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const toggleCompleted = (itemId, e) => {
    e.preventDefault(); // Ngăn chặn Link hoạt động khi click vào checkbox
    setCompletedTopics(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const renderTopicItems = (items) => {
    return items.map(item => (
      <Link
        key={item.id}
        to={item.path}
        className="flex items-center w-full px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors bg-white"
      >
        <div className="w-8 flex justify-center invisible">
          <ChevronRightIcon className="w-4 h-4" />
        </div>
        <div className="w-8 flex justify-center invisible">
          <CodeBracketIcon className="w-4 h-4" />
        </div>
        <div className="flex items-center flex-1">
          <span>{item.title}</span>
        </div>
        <button
          onClick={(e) => toggleCompleted(item.id, e)}
          className="flex items-center hover:text-green-500 transition-colors mr-2"
        >
          <CheckCircleIcon 
            className={`w-6 h-6 ${
              completedTopics[item.id] 
                ? 'text-green-500 fill-current stroke-[3]' 
                : 'text-slate-300 hover:text-slate-400'
            }`}
          />
        </button>
      </Link>
    ));
  };

  const renderSubtopics = (subtopics) => {
    return subtopics.map(subtopic => (
      <div key={subtopic.id}>
        <button
          onClick={() => toggleTopic(subtopic.id)}
          className={`flex items-center w-full px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
            expandedTopics[subtopic.id] ? 'bg-slate-50' : 'bg-white'
          }`}
        >
          <div className="w-8 flex justify-center">
            {expandedTopics[subtopic.id] ? (
              <ChevronDownIcon className="w-4 h-4 text-slate-600" />
            ) : (
              <ChevronRightIcon className="w-4 h-4 text-slate-600" />
            )}
          </div>
          <div className="w-8 flex justify-center">
            <subtopic.icon className="w-4 h-4 text-slate-600" />
          </div>
          <span className="text-slate-600">{subtopic.title}</span>
        </button>
        {expandedTopics[subtopic.id] && subtopic.items.length > 0 && (
          <div className="ml-8 bg-white">
            {renderTopicItems(subtopic.items)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200">
      {topics.map(topic => (
        <div key={topic.id} className="border-b border-slate-200 last:border-b-0">
          <button
            onClick={() => toggleTopic(topic.id)}
            className={`flex items-center w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
              expandedTopics[topic.id] ? 'bg-slate-50' : 'bg-white'
            }`}
          >
            <div className="w-8 flex justify-center">
              {expandedTopics[topic.id] ? (
                <ChevronDownIcon className="w-5 h-5 text-slate-600" />
              ) : (
                <ChevronRightIcon className="w-5 h-5 text-slate-600" />
              )}
            </div>
            <div className="w-8 flex justify-center">
              <topic.icon className="w-5 h-5 text-slate-600" />
            </div>
            <span className="font-medium text-slate-700">{topic.title}</span>
          </button>
          {expandedTopics[topic.id] && topic.subtopics.length > 0 && (
            <div className="ml-8 bg-white">
              {renderSubtopics(topic.subtopics)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TopicMenu;
