import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../../components/Navigation';
import './JSXExpressions.css';

function JSXExpressions() {
  const location = useLocation();
  const version = location.hash === '#tailwind' ? 'tailwind' : 'css';

  const CSSVersion = () => (
    <div className="jsx-expressions">
      <h2 className="title">1.1.2. JSX Expressions (CSS Version)</h2>

      <section className="example-section">
        <h3>1. Biểu thức trong JSX</h3>
        <p>JSX cho phép nhúng biểu thức JavaScript vào trong dấu ngoặc nhọn:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const name = 'John';
const element = (
  <div>
    <h1>
      Hello, {name}!
    </h1>
    <p>
      2 + 2 = {2 + 2}
    </p>
  </div>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <h1>Hello, John!</h1>
            <p>2 + 2 = 4</p>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>2. Gọi hàm trong JSX</h3>
        <p>Bạn có thể gọi hàm trong biểu thức JSX:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <h1>Hello, John Doe!</h1>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>3. Biểu thức điều kiện</h3>
        <p>Sử dụng toán tử điều kiện trong JSX:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code>{`const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? (
      <h1>
        Welcome back!
      </h1>
    ) : (
      <h1>
        Please log in
      </h1>
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
    </div>
  );

  const TailwindVersion = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
        1.1.2. JSX Expressions (Tailwind Version)
      </h2>

      <div className="max-w-3xl">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            1. Biểu thức trong JSX
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            JSX cho phép nhúng biểu thức JavaScript vào trong dấu ngoặc nhọn:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const name = 'John';
const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>2 + 2 = {2 + 2}</p>
  </div>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center">
              <h1 className="text-xl text-blue-700">Hello, John!</h1>
              <p className="text-blue-600">2 + 2 = 4</p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            2. Gọi hàm trong JSX
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            Bạn có thể gọi hàm trong biểu thức JSX:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = (
  <h1>Hello, {formatName(user)}!</h1>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center">
              <h1 className="text-xl text-blue-700">Hello, John Doe!</h1>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
            3. Biểu thức điều kiện
          </h3>
          <p className="text-gray-600 mb-4 text-left">
            Sử dụng toán tử điều kiện trong JSX:
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
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex justify-center">
        <Navigation currentPath="/jsx-expressions" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {version === 'css' ? <CSSVersion /> : <TailwindVersion />}
      </div>
    </div>
  );
}

export default JSXExpressions;
