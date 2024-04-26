import { setPassword } from '@/redux/slices/passwordSlice';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

// I would also add here some toaster which will say if the password was fetched
// successfully or not and inform about the erorrs. But as we claimed that this
// task should be done in 1 hour, I will skip this part for now

const Page1 = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/getPassword');
      const data = await response.json();
      dispatch(setPassword(data.password));
    } catch (error) {
      console.error('Failed to fetch password:', error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
      <div className="p-4 bg-white rounded shadow w-full h-screen flex justify-center items-center">
        <button
          onClick={handleClick}
          className="relative w-48 h-16 px-10 py-4 text-2xl text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          <span
            className={`p-4 absolute inset-0 flex items-center justify-center ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Get value from API
          </span>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 border-t-2 border-white rounded-full animate-spin"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Page1;
