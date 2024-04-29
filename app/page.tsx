import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container flex  items-center gap-5 bg-blue-500">
        <Link href="/dashboard" scroll={false}>
          <b>Dashboard</b>
        </Link>
        <Link href="/dashboard/settings">
          <b>Dashboard/Settings</b>
        </Link>
        <Link href="/blog/aaa">
          <b>Blog</b>
        </Link>
        <Button>ANTD</Button>
      </div>
      <div className=" bg-amber-500 h-20 w-[200px] ">测试</div>
    </main>
  );
}
