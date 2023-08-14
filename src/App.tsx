import { ConfigProvider, theme } from 'antd';
import { Artists } from 'pages/Artists';
import { Groups } from 'pages/Groups';
import { History } from 'pages/History';
import { Home } from 'pages/Home/Home';
import { Settings } from 'pages/Settings';
import { TheSearch } from 'pages/TheSearch';
import { Tools } from 'pages/Tools';
import { CreateDNA } from 'pages/Tools/CreateDNA';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'services/AuthProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#3636bc',
            colorLink: '#96abf6',
          },
        }}
      >
        <AuthProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/search" element={<TheSearch />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/dna" element={<CreateDNA />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </HashRouter>
        </AuthProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
