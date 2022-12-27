import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { TheSearch } from 'pages/TheSearch';
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<TheSearch />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
