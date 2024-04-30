import { cookies, headers } from 'next/headers';
import React from 'react';

const Page = ({ params, searchParams }) => {
  const cookieStore = cookies();
  const headersList = headers();
  return (
    <div>
      <h3>
        params
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </h3>
      <h3>
        searchParams
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </h3>
      <h3>
        cookies
        <pre>{JSON.stringify(cookieStore, null, 2)}</pre>
      </h3>
      <h3>
        headers
        <pre>{JSON.stringify(headersList, null, 2)}</pre>
      </h3>
    </div>
  );
};

export default Page;
