import { Button } from 'antd';
import React from 'react';
import { cookies, headers } from 'next/headers';

const DashboardPage = () => {
  const cookieStore = cookies();
  const headerStore = headers();
  // console.log('==cookieStore====>', cookieStore.getAll());
  // console.log('==headerStore-Agent====>', headerStore.get('User-Agent'));
  // console.log('==headerStore-Referer====>', headerStore.get('Referer'));
  return (
    <div>
      DashboardPage
      <Button>ANTD</Button>
    </div>
  );
};

export default DashboardPage;
