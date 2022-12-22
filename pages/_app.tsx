import '../app/assets/styles/globals.scss'
import '../app/assets/styles/react-select.scss'
import type {AppProps} from 'next/app'
import {MainProvider} from "../app/providers/MainProvider";
import {TypeComponentAuthFields} from "@/shared/types/auth.types";

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({Component, pageProps}: TypeAppProps) {
  return (
    <MainProvider Component={Component}>
      <Component {...pageProps} />
    </MainProvider>
  )
}
