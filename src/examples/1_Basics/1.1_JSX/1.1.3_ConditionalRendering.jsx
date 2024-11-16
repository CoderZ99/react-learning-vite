import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../../components/Navigation';
import './ConditionalRendering.css';

function ConditionalRendering() {
  const location = useLocation();
  const version = location.hash === '#tailwind' ? 'tailwind' : 'css';

  const CSSVersion = () => (
    <div className="conditional-rendering">
      <h2 className="title">1.1.3. Conditional Rendering (CSS Version)</h2>

      <section className="example-section">
        <h3>1. Toán tử ba ngôi</h3>
        <p>Sử dụng toán tử ba ngôi để render có điều kiện:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? (
      <h1>Welcome back!</h1>
    ) : (
      <h1>Please log in</h1>
    )}
  </div>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <h1>Welcome back!</h1>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>2. Toán tử logic &&</h3>
        <p>Sử dụng toán tử && để render có điều kiện:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const messages = ['React', 'Re: React', 'Re:Re: React'];
const element = (
  <div>
    <h1>Hello!</h1>
    {messages.length > 0 && (
      <h2>
        You have {messages.length} unread messages
      </h2>
    )}
  </div>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <h1>Hello!</h1>
            <h2>You have 3 unread messages</h2>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>3. If với biến</h3>
        <p>Sử dụng biến để lưu trữ elements:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`let element;
const isLoggedIn = true;

if (isLoggedIn) {
  element = <h1>Welcome back!</h1>;
} else {
  element = <h1>Please log in</h1>;
}

const container = (
  <div>
    {element}
  </div>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <h1>Welcome back!</h1>
          </div>
        </div>
      </section>
    </div>
  );

  const TailwindVersion = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
        1.1.3. Conditional Rendering (Tailwind Version)
      </h2>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          1. Toán tử ba ngôi
        </h3>
        <p className="text-gray-600 mb-4 text-left">
          Sử dụng toán tử ba ngôi để render có điều kiện:
        </p>
        <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Code
          </div>
          <div className="p-4 text-left bg-white">
            <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? (
      <h1>Welcome back!</h1>
    ) : (
      <h1>Please log in</h1>
    )}
  </div>
);`}</code>
          </div>
        </div>
        <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Kết quả
          </div>
          <div className="p-4 bg-white flex flex-col items-center justify-center">
            <h1 className="text-xl text-blue-700">Welcome back!</h1>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          2. Toán tử logic &&
        </h3>
        <p className="text-gray-600 mb-4 text-left">
          Sử dụng toán tử && để render có điều kiện:
        </p>
        <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Code
          </div>
          <div className="p-4 text-left bg-white">
            <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const messages = ['React', 'Re: React', 'Re:Re: React'];
const element = (
  <div>
    <h1>Hello!</h1>
    {messages.length > 0 && (
      <h2>
        You have {messages.length} unread messages
      </h2>
    )}
  </div>
);`}</code>
          </div>
        </div>
        <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Kết quả
          </div>
          <div className="p-4 bg-white flex flex-col items-center justify-center">
            <h1 className="text-xl text-blue-700">Hello!</h1>
            <h2 className="text-lg text-blue-600">You have 3 unread messages</h2>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          3. If với biến
        </h3>
        <p className="text-gray-600 mb-4 text-left">
          Sử dụng biến để lưu trữ elements:
        </p>
        <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Code
          </div>
          <div className="p-4 text-left bg-white">
            <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`let element;
const isLoggedIn = true;

if (isLoggedIn) {
  element = <h1>Welcome back!</h1>;
} else {
  element = <h1>Please log in</h1>;
}

const container = (
  <div>
    {element}
  </div>
);`}</code>
          </div>
        </div>
        <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Kết quả
          </div>
          <div className="p-4 bg-white flex flex-col items-center justify-center">
            <h1 className="text-xl text-blue-700">Welcome back!</h1>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div>
      <Navigation currentPath="/conditional-rendering" />
      {version === 'css' ? <CSSVersion /> : <TailwindVersion />}
    </div>
  );
}

export default ConditionalRendering;
