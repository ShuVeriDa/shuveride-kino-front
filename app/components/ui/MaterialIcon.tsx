import {FC} from 'react';
import * as MaterialIcons from 'react-icons/md'

import {TypeMaterialIconName} from "@/shared/types/icon.types";
import {MdHome} from "react-icons/md";


export const MaterialIcon: FC<{name: TypeMaterialIconName}> = ({name}) => {

  const IconComponent = MaterialIcons[name]

  return <IconComponent /> || <MaterialIcons.MdDragIndicator />
};