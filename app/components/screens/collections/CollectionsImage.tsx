import {FC} from 'react';
import {ICollection} from "@/screens/collections/collections.interface";
import Image from "next/legacy/image";

interface ICollectionsImageProps {
}

 const CollectionsImage: FC<{collection: ICollection}> = ({collection: {image, title}}) => {
  return <Image src={image} alt={title} layout="fill" draggable={false} />
};

export default CollectionsImage