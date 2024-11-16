import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../../components/Navigation';
import './JSXBasics.css';

function JSXBasics() {
  const location = useLocation();
  const version = location.hash === '#tailwind' ? 'tailwind' : 'css';

  const CSSVersion = () => (
    <div className="jsx-basics">
      <h2 className="title">1.1.1. JSX Basics (CSS Version)</h2>

      <section className="example-section">
        <h3>1. HTML trong JavaScript</h3>
        <p>JSX cho phép viết HTML trực tiếp trong JavaScript:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const element = <h1>Hello, JSX!</h1>;`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content flex flex-col items-center justify-center">
            <h1>Hello, JSX!</h1>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>2. Thuộc tính trong JSX</h3>
        <p>Sử dụng thuộc tính trong JSX với camelCase:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const element = (
  <button 
    className="btn" 
    disabled={true}
  >
    Click me
  </button>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content flex flex-col items-center justify-center">
            <button className="btn" disabled>
              Click me
            </button>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>3. Children trong JSX</h3>
        <p>JSX có thể chứa các phần tử con:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const element = (
  <div>
    <h3>
      Title
    </h3>
    <p>
      Paragraph
    </p>
  </div>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content flex flex-col items-center justify-center">
            <h3>Title</h3>
            <p>Paragraph</p>
          </div>
        </div>
      </section>
    </div>
  );

  const TailwindVersion = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
        1.1.1. JSX Basics (Tailwind Version)
      </h2>

      <div className="max-w-3xl">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            1. HTML trong JavaScript
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            JSX cho phép viết HTML trực tiếp trong JavaScript:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const element = <h1>Hello, JSX!</h1>;`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center">
              <h1 className="text-xl text-blue-700">Hello, JSX!</h1>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            2. Thuộc tính trong JSX
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            Sử dụng thuộc tính trong JSX với camelCase:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const element = (
  <button 
    className="btn" 
    disabled={true}
  >
    Click me
  </button>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center">
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md opacity-50 cursor-not-allowed" disabled>
                Click me
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            3. Children trong JSX
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            JSX có thể chứa các phần tử con:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const element = (
  <div>
    <h3>Title</h3>
    <p>Paragraph</p>
  </div>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center">
              <h3 className="font-semibold text-blue-700 mb-2">Title</h3>
              <p className="text-blue-600">Paragraph</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex justify-center">
        <Navigation currentPath="/jsx-basics" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {version === 'css' ? <CSSVersion /> : <TailwindVersion />}
      </div>
    </div>
  );
}

export default JSXBasics;
