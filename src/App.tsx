import Paths from './routes/routes';
import { Provider } from 'react-redux';
import store from './store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Paths />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
