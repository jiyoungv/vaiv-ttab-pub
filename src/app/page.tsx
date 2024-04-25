import Link from 'next/link';

import AppLayout from '@/components/domain/AppLayout';
import TabList from '@/components/domain/TabList';

export default function Home() {
  return (
    <AppLayout header>
      home
      <TabList />
      <Link href={`${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`}>GO to Tab Detail Page</Link>
    </AppLayout>
  );
}
