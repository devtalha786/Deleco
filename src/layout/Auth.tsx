import React, { ReactNode, FC } from 'react';

interface AuthProps {
  children: ReactNode;
}

const Auth: FC<AuthProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Auth;
