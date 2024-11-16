import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  PaintBrushIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

const ALL_ROUTES = [
  { path: '/jsx-basics', title: 'JSX Basics', id: '1.1.1' },
  { path: '/jsx-expressions', title: 'JSX Expressions', id: '1.1.2' },
  { path: '/conditional-rendering', title: 'Conditional Rendering', id: '1.1.3' },
  { path: '/lists-and-keys', title: 'Lists and Keys', id: '1.1.4' },
  { path: '/fragments', title: 'Fragments', id: '1.1.5' }
];

function Navigation({ currentPath }) {
  const navigate = useNavigate();
  const location = useLocation();
  const version = location.hash === '#tailwind' ? 'tailwind' : 'css';

  const currentIndex = ALL_ROUTES.findIndex(route => route.path === currentPath);
  const currentRoute = ALL_ROUTES[currentIndex];
  
  const previousRoute = currentIndex > 0 ? ALL_ROUTES[currentIndex - 1] : null;
  const nextRoute = currentIndex < ALL_ROUTES.length - 1 ? ALL_ROUTES[currentIndex + 1] : null;

  const isFirstRoute = !previousRoute;
  const isLastRoute = !nextRoute;

  return (
    <div className="w-[300px]">
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => navigate(previousRoute?.path)}
          className={`px-6 py-2 rounded transition-colors flex items-center ${
            isFirstRoute
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
          }`}
          disabled={isFirstRoute}
          title={isFirstRoute ? "This is the first topic" : "Go to previous topic"}
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Previous
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="px-8 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors font-medium flex items-center"
        >
          <HomeIcon className="h-5 w-5 mr-2" />
          Home
        </button>
        
        <button
          onClick={() => navigate(nextRoute?.path)}
          className={`px-6 py-2 rounded transition-colors flex items-center ${
            isLastRoute
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
          }`}
          disabled={isLastRoute}
          title={isLastRoute ? "This is the last topic" : "Go to next topic"}
        >
          Next
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>

      {currentRoute && (
        <div className="mt-4 text-center text-sm text-gray-500">
          Current Topic: {currentRoute.id}. {currentRoute.title}
        </div>
      )}

      <div className="mt-4 flex justify-center space-x-3">
        <button
          onClick={() => {
            navigate(currentPath);
            setTimeout(() => window.location.reload(), 100);
          }}
          className={`w-28 px-3 py-2 text-sm rounded-md flex items-center justify-center ${
            version === 'css'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <PaintBrushIcon className="w-4 h-4 mr-2" />
          CSS
        </button>
        <button
          onClick={() => {
            navigate(currentPath + '#tailwind');
            setTimeout(() => window.location.reload(), 100);
          }}
          className={`w-28 px-3 py-2 text-sm rounded-md flex items-center justify-center ${
            version === 'tailwind'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <CommandLineIcon className="w-4 h-4 mr-2" />
          Tailwind
        </button>
      </div>
    </div>
  );
}

export default Navigation;
