import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
// import { useSelectedLayoutSegment } from 'next/navigation';
export const metadata: Metadata = {
  title: '面板',
  description: 'Generated by create next app',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const ret = useSelectedLayoutSegment();
  // console.log('==ret====>', ret);

  return (
    <>
      <h1>面板-Layout</h1>
      <hr />
      {/* {children} */}
      <AntdRegistry>{children}</AntdRegistry>
    </>
  );
}
