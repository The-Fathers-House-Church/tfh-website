import React from 'react';

export default function YoutubePagination({
  setPage,
  page,
  setPageToken,
  nextPageToken,
  prevPageToken,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  nextPageToken: string;
  prevPageToken: string;
  setPageToken: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className='inline-flex xs:mt-0 w-full justify-center mt-10'>
      <button
        className='inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-5'
        onClick={() => {
          setPage(page - 1);
          setPageToken(prevPageToken ? prevPageToken : '');
        }}
        disabled={page <= 1}
      >
        <svg
          aria-hidden='true'
          className='mr-2 w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
        Prev
      </button>
      <button
        className='inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-5'
        disabled={!nextPageToken}
        onClick={() => {
          setPage(page + 1);
          setPageToken(nextPageToken ? nextPageToken : '');
        }}
      >
        Next
        <svg
          aria-hidden='true'
          className='ml-2 w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  );
}
