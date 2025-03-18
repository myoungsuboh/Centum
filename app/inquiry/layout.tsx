import React from 'react';

const SigninLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default SigninLayout;
