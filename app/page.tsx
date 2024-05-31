import Link from 'next/link';
import { Button as CNButton } from '@/components/ui/button';

const list = [
  { title: 'Shadcn-Ui', href: '/shadcnui' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Blog:id', href: '/blog/999' },
  { title: 'About', href: '/about' },
  { title: 'Template', href: '/template' },
  { title: 'Sevcer Action', href: '/action' },
  { title: 'Cache', href: '/cache' },
];

export default function Home() {
  return (
    <main>
      <div className='container flex  items-center gap-5 '>
        {list.map((item, i) => (
          <CNButton key={i} asChild size='sm'>
            <Link href={item.href}>
              <b>{item.title}</b>
            </Link>
          </CNButton>
        ))}
      </div>
      <div className=' bg-amber-500 h-20 w-[200px] rounded-[8px]'>测试 Tailwindcss</div>
    </main>
  );
}
