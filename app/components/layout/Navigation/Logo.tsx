import {FC} from 'react';
import Link from "next/link";
import Image from "next/image";

import logoImage from '@/assets/images/logo.svg'

interface LogoPropsType {
}

export const Logo: FC<LogoPropsType> = () => {
  return (
    <Link href='/' className='px-layout mb-10 block'>
      <Image src={logoImage} alt={'online-cinema'} width={247} height={34} draggable={false}/>
    </Link>
  );
};