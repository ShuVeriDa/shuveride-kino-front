import {FC} from 'react';
import {Button} from "@/ui/form-elements/Button";

interface IAdminCreateButtonProps {
  onClick: () => void
}

export const AdminCreateButton: FC<IAdminCreateButtonProps> = ({onClick}) => {
  return (
    <Button onClick={onClick}>Create new</Button>
  );
};