import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container flex gap-5 bg-blue-500">
        <Link href="/dashboard" scroll={false}>
          <b>Dashboard</b>
        </Link>
        <Link href="/dashboard/settings">
          <b>Dashboard/Settings</b>
        </Link>
        <Link href="/blog/aaa">
          <b>Blog</b>
        </Link>
      </div>
    </main>
  );
}
