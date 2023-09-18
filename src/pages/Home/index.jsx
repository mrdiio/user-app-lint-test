import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="container bg-white rounded-md p-5">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Why do we need Test?</span>
          <p>
            To guarentee our code quality. And to show people that we also care
            about it and wish to give something that already proven, at least by
            ourself.
          </p>

          <div className="py-5">
            <Link
              to={'/users'}
              className="border bg-blue-600 text-white rounded-md px-3 py-2"
            >
              Go to Users Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
