import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/img/logo.png';

const SigninLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <main>
        <div className="flex h-full w-full flex-col justify-center">
          <div className="mx-150 my-150">
            <Link href="/" className="relative">
              <Image src={logo} className="h-50 w-100 pc:w-150" alt="logo" />
            </Link>
            <hr className="mb-50 mt-30 border border-gray-300" />
            {children}
            <hr className="my-50 border border-gray-300" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SigninLayout;
