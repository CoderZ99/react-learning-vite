import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../../components/Navigation';
import './ListsAndKeys.css';

function ListsAndKeys() {
  const location = useLocation();
  const version = location.hash === '#tailwind' ? 'tailwind' : 'css';

  const CSSVersion = () => (
    <div className="lists-and-keys">
      <h2 className="title">1.1.4. Lists and Keys (CSS Version)</h2>

      <section className="example-section">
        <h3>1. Render danh sách</h3>
        <p>Sử dụng map() để render danh sách các phần tử:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => 
  <li key={number}>
    Number {number}
  </li>
);

const element = (
  <ul>
    {listItems}
  </ul>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <ul>
              <li>Number 1</li>
              <li>Number 2</li>
              <li>Number 3</li>
              <li>Number 4</li>
              <li>Number 5</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>2. Keys trong danh sách</h3>
        <p>Sử dụng keys để định danh các phần tử trong danh sách:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const posts = [
  { id: 1, title: 'Hello React' },
  { id: 2, title: 'Learning JSX' },
  { id: 3, title: 'Build UI' }
];

const listItems = posts.map(post =>
  <li key={post.id}>
    {post.title}
  </li>
);

const element = (
  <ul>
    {listItems}
  </ul>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <ul>
              <li>Hello React</li>
              <li>Learning JSX</li>
              <li>Build UI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>3. Render trong JSX</h3>
        <p>Render danh sách trực tiếp trong JSX:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const fruits = ['Apple', 'Banana', 'Orange'];

const element = (
  <div>
    <h4>Fruit List:</h4>
    <ul>
      {fruits.map((fruit, index) =>
        <li key={index}>
          {fruit}
        </li>
      )}
    </ul>
  </div>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <h4>Fruit List:</h4>
            <ul>
              <li>Apple</li>
              <li>Banana</li>
              <li>Orange</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

  const TailwindVersion = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
        1.1.4. Lists and Keys (Tailwind Version)
      </h2>

      <div className="max-w-3xl">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            1. Render danh sách
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            Sử dụng map() để render danh sách các phần tử:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => 
  <li key={number}>
    Number {number}
  </li>
);

const element = (
  <ul>
    {listItems}
  </ul>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center w-full">
              <ul className="list-disc text-blue-700 w-full max-w-[200px]">
                <li>Number 1</li>
                <li>Number 2</li>
                <li>Number 3</li>
                <li>Number 4</li>
                <li>Number 5</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            2. Keys trong danh sách
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            Sử dụng keys để định danh các phần tử trong danh sách:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const posts = [
  { id: 1, title: 'Hello React' },
  { id: 2, title: 'Learning JSX' },
  { id: 3, title: 'Build UI' }
];

const listItems = posts.map(post =>
  <li key={post.id}>
    {post.title}
  </li>
);

const element = (
  <ul>
    {listItems}
  </ul>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center w-full">
              <ul className="list-disc text-blue-700 w-full max-w-[200px]">
                <li>Hello React</li>
                <li>Learning JSX</li>
                <li>Build UI</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            3. Render trong JSX
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            Render danh sách trực tiếp trong JSX:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const fruits = ['Apple', 'Banana', 'Orange'];

const element = (
  <div>
    <h4>Fruit List:</h4>
    <ul>
      {fruits.map((fruit, index) =>
        <li key={index}>
          {fruit}
        </li>
      )}
    </ul>
  </div>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center w-full">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Fruit List:</h4>
              <ul className="list-disc text-blue-700 w-full max-w-[200px]">
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div>
      <Navigation currentPath="/lists-and-keys" />
      {version === 'css' ? <CSSVersion /> : <TailwindVersion />}
    </div>
  );
}

export default ListsAndKeys;
