import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../../components/Navigation';
import './Fragments.css';

function Fragments() {
  const location = useLocation();
  const version = location.hash === '#tailwind' ? 'tailwind' : 'css';

  // Ví dụ component con
  const ListItems = () => (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );

  // Ví dụ với nhiều elements
  const MultipleElements = () => (
    <React.Fragment>
      <h4>Title</h4>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </React.Fragment>
  );

  // Ví dụ với key
  const items = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' }
  ];

  // CSS Version
  const CSSVersion = () => (
    <div className="fragments">
      <h2 className="title">1.1.5. Fragments (CSS Version)</h2>

      <section className="example-section">
        <h3>1. Fragment cơ bản <code>&lt;&gt;</code></h3>
        <p>Fragment cho phép nhóm các elements mà không cần div wrapper:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const element = (
  <>
    <h1>Hello, World!</h1>
    <p>This is a fragment.</p>
  </>
);`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <div className="text-blue-700">
              <h1 className="text-xl mb-2">Hello, World!</h1>
              <p>This is a fragment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>2. React.Fragment</h3>
        <div className="fragment-example">
          <p className="description">
            Sử dụng React.Fragment khi cần syntax đầy đủ:
          </p>
          <div className="code-block">
            <div className="code-header">Code</div>
            <div className="code-content">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const MultipleElements = () => (
  <React.Fragment>
    <h4>Title</h4>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </React.Fragment>
);`}</code>
            </div>
          </div>
          <div className="result-block">
            <div className="result-header">Kết quả</div>
            <div className="result-content">
              <div className="text-blue-700">
                <h4 className="text-lg font-semibold mb-2">Title</h4>
                <p className="mb-2">Paragraph 1</p>
                <p>Paragraph 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>3. Fragments với Keys</h3>
        <div className="keyed-fragments">
          <p className="description">
            Sử dụng React.Fragment khi cần key cho fragments:
          </p>
          <div className="code-block">
            <div className="code-header">Code</div>
            <div className="code-content">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const items = [
  { id: 1, title: 'First' },
  { id: 2, title: 'Second' },
  { id: 3, title: 'Third' }
];

{items.map(item => (
  <React.Fragment key={item.id}>
    <div className="item-number">{item.id}</div>
    <div className="item-title">{item.title}</div>
  </React.Fragment>
))}`}</code>
            </div>
          </div>
          <div className="demo-grid">
            {items.map(item => (
              <React.Fragment key={item.id}>
                <div>{item.id}</div>
                <div>{item.title}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3>4. Fragment với key</h3>
        <p>Sử dụng key cho các fragment khi render danh sách:</p>
        <div className="code-block">
          <div className="code-header">Code</div>
          <div className="code-content">
            <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const list = items.map(item => (
  <React.Fragment key={item.id}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
  </React.Fragment>
));`}</code>
          </div>
        </div>
        <div className="result-block">
          <div className="result-header">Kết quả</div>
          <div className="result-content">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[300px]">
              <div className="bg-blue-100 p-2 rounded text-center font-medium text-blue-700">1</div>
              <div className="bg-blue-50 p-2 rounded text-blue-700">First</div>
              <div className="bg-blue-100 p-2 rounded text-center font-medium text-blue-700">2</div>
              <div className="bg-blue-50 p-2 rounded text-blue-700">Second</div>
              <div className="bg-blue-100 p-2 rounded text-center font-medium text-blue-700">3</div>
              <div className="bg-blue-50 p-2 rounded text-blue-700">Third</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Tailwind Version
  const TailwindVersion = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
        1.1.5. Fragments (Tailwind Version)
      </h2>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          1. Fragment cơ bản <code>&lt;&gt;</code>
        </h3>
        <p className="text-gray-600 mb-4 text-left">
          Fragment cho phép nhóm các elements mà không cần div wrapper:
        </p>
        <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Code
          </div>
          <div className="p-4 text-left bg-white">
            <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const element = (
  <>
    <h1>Hello, World!</h1>
    <p>This is a fragment.</p>
  </>
);`}</code>
          </div>
        </div>
        <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Kết quả
          </div>
          <div className="p-4 bg-white flex flex-col items-center justify-center w-full">
            <div className="text-blue-700">
              <h1 className="text-xl mb-2">Hello, World!</h1>
              <p>This is a fragment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          2. React.Fragment
        </h3>
        <div>
          <p className="text-gray-600 mb-4 text-left">
            Sử dụng React.Fragment khi cần syntax đầy đủ:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const MultipleElements = () => (
  <React.Fragment>
    <h4>Title</h4>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </React.Fragment>
);`}</code>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Kết quả
            </div>
            <div className="p-4 bg-white flex flex-col items-center justify-center w-full">
              <div className="text-blue-700">
                <h4 className="text-lg font-semibold mb-2">Title</h4>
                <p className="mb-2">Paragraph 1</p>
                <p>Paragraph 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          3. Fragments với Keys
        </h3>
        <div>
          <p className="text-gray-600 mb-4 text-left">
            Sử dụng React.Fragment khi cần key cho fragments:
          </p>
          <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
              Code
            </div>
            <div className="p-4 text-left bg-white">
              <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const items = [
  { id: 1, title: 'First' },
  { id: 2, title: 'Second' },
  { id: 3, title: 'Third' }
];

{items.map(item => (
  <React.Fragment key={item.id}>
    <div className="item-number">{item.id}</div>
    <div className="item-title">{item.title}</div>
  </React.Fragment>
))}`}</code>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {items.map(item => (
              <React.Fragment key={item.id}>
                <div className="bg-blue-100 p-2 rounded text-center font-medium text-blue-700">
                  {item.id}
                </div>
                <div className="bg-blue-50 p-2 rounded text-blue-700">
                  {item.title}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          4. Fragment với key
        </h3>
        <p className="text-gray-600 mb-4 text-left">
          Sử dụng key cho các fragment khi render danh sách:
        </p>
        <div className="bg-slate-50 rounded-md mb-4 overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Code
          </div>
          <div className="p-4 text-left bg-white">
            <code className="font-mono text-[14px] text-teal-700 whitespace-pre block w-full">{`const list = items.map(item => (
  <React.Fragment key={item.id}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
  </React.Fragment>
));`}</code>
          </div>
        </div>
        <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-200">
          <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 border-b border-slate-200 text-left">
            Kết quả
          </div>
          <div className="p-4 bg-white flex flex-col items-center justify-center w-full">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[300px]">
              <div className="bg-blue-100 p-2 rounded text-center font-medium text-blue-700">1</div>
              <div className="bg-blue-50 p-2 rounded text-blue-700">First</div>
              <div className="bg-blue-100 p-2 rounded text-center font-medium text-blue-700">2</div>
              <div className="bg-blue-50 p-2 rounded text-blue-700">Second</div>
              <div className="bg-blue-100 p-2 rounded text-center font-medium text-blue-700">3</div>
              <div className="bg-blue-50 p-2 rounded text-blue-700">Third</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex justify-center">
        <Navigation currentPath="/fragments" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {version === 'css' ? <CSSVersion /> : <TailwindVersion />}
      </div>
    </div>
  );
}

export default Fragments;
