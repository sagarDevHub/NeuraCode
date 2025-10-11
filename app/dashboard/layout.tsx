import { SidebarProvider } from '@/components/ui/sidebar';
import { getAllPlaygroundData } from '@/modules/dashboard/actions';
import { DashboardSidebar } from '@/modules/dashboard/components/DashboardSidebar';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const playgroundData = await getAllPlaygroundData();

  const technologyIconMap: Record<string, string> = {
    REACT: 'Zap',
    NEXTJS: 'Lightbulb',
    EXPRESS: 'Database',
    VUE: 'Compass',
    HONO: 'FlameIcon',
    ANGULAR: 'Terminal',
  };

  const formattedPlaygroundData =
    playgroundData?.map(item => ({
      id: item.id,
      name: item.title,
      // todo: star
      starred: false,
      icon: technologyIconMap[item.template] || 'Code2',
    })) || [];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        {/* Sidebar */}
        <DashboardSidebar initialPlaygroundData={formattedPlaygroundData} />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
