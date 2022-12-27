import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { TheSearch } from 'pages/TheSearch';
import { ConfigProvider, theme } from 'antd';
import { Settings } from 'pages/Settings';
import { Tools } from 'pages/Tools';
import { Artists } from 'pages/Artists';
import { Groups } from 'pages/Groups';
import { History } from 'pages/History';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#3636bc',
          colorLink: '#96abf6',
        },
      }}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/search" element={<TheSearch />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
