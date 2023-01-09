import NextProgressBar from 'nextjs-progressbar'
import {FC, ReactNode} from 'react';
import {accentColor} from "@/config/constants";
import Head from "next/head";
import Favicons from "./Favicons";

interface IHeadProviderProps {
  children: ReactNode
}

export const HeadProvider: FC<IHeadProviderProps> = ({children}) => {
  return (
    <>
      <NextProgressBar color={accentColor}
                       startPosition={0.3}
                       stopDelayMs={200}
                       height={3}
      />
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content='width=device-width, initial-scale=1, maximum-scale=5'/>


        <Favicons />

        <meta name='theme-color' content={"#181b1e"}/>
        <meta name='msapplication-navbutton-color' content={"#181b1e"}/>
        <meta name="apple-mobile-web-app-status-bar-style" content={'#181b1e'}/>

        <link rel="manifest" href="/manifest.json"/>

      </Head>
      {children}
    </>
  );
};