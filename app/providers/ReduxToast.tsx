import {FC} from 'react';
import ReduxToastrLib from "react-redux-toastr";

interface IReduxToastProps {
}

export const ReduxToast: FC<IReduxToastProps> = () => {
  return (
      <ReduxToastrLib newestOnTop={false}
                      preventDuplicates
                      progressBar
                      closeOnToastrClick
                      timeOut={4000}
                      transitionIn={"fadeIn"}
                      transitionOut={"fadeOut"}
      />
  );
};