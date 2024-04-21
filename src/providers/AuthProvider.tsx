import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const AuthProvider = (props: Props) => {
  return <>{props.children}</>;
};

export default AuthProvider;
