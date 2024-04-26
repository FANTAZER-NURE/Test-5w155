'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { passwordSelector } from '../redux/slices/passwordSlice';
import Link from 'next/link';
import { useEffect } from 'react';

const Page2 = () => {
  const router = useRouter();
  const password = useSelector(passwordSelector);

  useEffect(() => {
    if (!password) {
      router.push('/page1');
    }
  }, [password, router]);

  if (!password) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 w-full p-4 bg-white shadow-md">
        <nav className="flex justify-between max-w-4xl mx-auto">
          <Link href="/page1" className="text-blue-500 hover:text-blue-700">
            Page 1
          </Link>
          <Link href="/page2" className="text-blue-500 hover:text-blue-700">
            Page 2
          </Link>
        </nav>
      </header>
      <div className="p-4 bg-white w-full h-screen flex justify-center items-center">
        <p className="text-2xl">{password}</p>
      </div>
    </div>
  );
};

export default Page2;
