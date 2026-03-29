import { Header } from "@/components/layout/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 w-full relative min-h-screen bg-[#F8FAFC]">
        {/* Fixed Background Layer for Orbs and Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Background Dot Grid (Option 1) */}
          <div 
            className="absolute inset-0 opacity-[0.04]" 
            style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #000 1.5px, transparent 0)', backgroundSize: '32px 32px' }} 
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </>
  );
}
