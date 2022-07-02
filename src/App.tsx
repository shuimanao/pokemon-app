import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from './Router';

const queryClient = new QueryClient();

type AppProps = {};

export const App: FC<AppProps> = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
