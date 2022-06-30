import * as React from 'react';
import './style.css';
import Headerbar from './components/headerbar/headerbar';
import Home from './pages/home/home';

export default function App() {
  return (
    <div className="App">
      <Headerbar />
      <Home />
    </div>
  );
}
