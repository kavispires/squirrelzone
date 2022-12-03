import './App.css';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { TheSearch } from 'pages/TheSearch';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<TheSearch />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
