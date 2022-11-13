import {FC, ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'
import {Layout} from "@/components/layout/Layout";
import {ReduxToast} from "./ReduxToast";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {HeadProvider} from "./HeadProvider/HeadProvider";

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
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast/>
          <Layout>{children} </Layout>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
};