import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopicMenu from './components/TopicMenu';
import './App.css';

// Import các components ví dụ
import JSXBasics from './examples/1_Basics/1.1_JSX/1.1.1_JSXBasics';
import JSXExpressions from './examples/1_Basics/1.1_JSX/1.1.2_JSXExpressions';
import ConditionalRendering from './examples/1_Basics/1.1_JSX/1.1.3_ConditionalRendering';
import ListsAndKeys from './examples/1_Basics/1.1_JSX/1.1.4_ListsAndKeys';
import Fragments from './examples/1_Basics/1.1_JSX/1.1.5_Fragments';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-slate-50">
      {isHomePage && (
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-slate-700">React Learning Project</h1>
            <p className="mt-2 text-slate-500">Learn React step by step</p>
          </div>
        </header>
      )}

      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<TopicMenu />} />
          <Route path="/jsx-basics" element={<JSXBasics />} />
          <Route path="/jsx-expressions" element={<JSXExpressions />} />
          <Route path="/conditional-rendering" element={<ConditionalRendering />} />
          <Route path="/lists-and-keys" element={<ListsAndKeys />} />
          <Route path="/fragments" element={<Fragments />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
