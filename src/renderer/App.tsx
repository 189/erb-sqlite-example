import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const [txt, setMessage] = useState('');
  const [value, setValue] = useState('');
  useEffect(() => {
    window.electron.ipcRenderer.onIPCMessage((e: string, v: string) => {
      console.log('get ipcrender message', e, v);
      setMessage(v);
    });
    window.electron.ipcRenderer.onIPCValue((e: string, v: string) => {
      console.log('get ipcrender value', e, v);
      setValue(v);
    });
  }, []);
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <p>ipc: {txt}</p>
      <p>ipc value: {value}</p>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
