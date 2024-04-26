import AppLayout from '@/components/domain/AppLayout';
import TabList from '@/components/domain/TabList';

export default function MyTab() {
  return (
    <AppLayout
      navBar={{
        title: '마이탭',
      }}
    >
      MyTab
      <TabList />
    </AppLayout>
  );
}
