import { cn } from '@/lib/utils';
import Footer from '@/modules/home/components/footer';
import { Header } from '@/modules/home/components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'VibeCode - Editor',
    default: 'Code Editor for VibeCoders - VibeCode',
  },
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
        {/* Grid background */}
        <div
          className={cn(
            'absolute inset-0 z-0',
            'bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'bg-[size:40px_40px]',
            'dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />

        {/* Mask effect */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

        {/* Header + Content */}
        <div className="relative z-20">
          <Header />
          <main className="w-full pt-0">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
