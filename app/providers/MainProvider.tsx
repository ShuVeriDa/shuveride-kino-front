import {FC, ReactNode} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import {Layout} from "@/components/layout/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

interface IMainProvider {
  children: ReactNode
}

export const MainProvider: FC<IMainProvider> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{children} </Layout>
    </QueryClientProvider>
  );
};