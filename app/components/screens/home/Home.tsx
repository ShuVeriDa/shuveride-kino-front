import {FC} from 'react';
import {IHome} from "@/screens/home/home.interface";
import {Layout} from "@/components/layout/Layout";
import {Meta} from "@/utils/meta/Meta";
import {Heading} from "@/ui/heading/Heading";
import {toastr} from "react-redux-toastr";

interface HomePropsType {
}

export const Home: FC<IHome> = () => {
  return (
    <Meta title={'Watch movies online'}
          description={"Watch MovieApp movies and TV shows online or stream right to your browser"}
    >
      <Heading title="Watch movies online" className={'text-gray-300 mb-8 text-xl'}/>
    </Meta>
  );
};