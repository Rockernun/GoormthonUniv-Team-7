import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/app-routes';
import './index.css'; // Tailwind CSS를 사용하기 위해 추가
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="w-[375px] h-[812px]">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
