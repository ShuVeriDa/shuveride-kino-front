import {FC} from 'react';
import {IHome} from "@/screens/home/home.interface";
import {Layout} from "@/components/layout/Layout";

interface HomePropsType {
}

export const Home: FC<IHome> = () => {
  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  );
};