import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      {/* Left section: Full-Bleed Image Design (1A) */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 overflow-hidden">
        {/* Full background image */}
        <Image
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop"
          alt="Nha khoa không gian"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Teal Overlay for maximum contrast and premium feel */}
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full mb-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Về trang chủ
          </Link>
        </div>

        <div className="relative z-10 space-y-6 max-w-lg mt-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Hệ thống đào tạo <br />
            <span className="text-teal-300">Nha Khoa Việt Quang</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed font-medium">
            Ứng dụng chuyên môn nội bộ, lưu trữ tài liệu SOPs và phân bổ khóa học chuẩn hóa kỹ năng dành riêng cho đội ngũ y bác sĩ và chuyên viên.
          </p>
        </div>

        <div className="relative z-10 w-full text-white/60 text-sm font-medium">
          <p>&quot;Chuẩn hóa chuyên môn, nâng tầm dịch vụ.&quot;</p>
        </div>
      </div>

      {/* Right section: Elevated Card Auth form (2B) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative overflow-y-auto">
        <div className="w-full max-w-[500px] bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative">
          
          {/* Logo only visible on mobile when left section is hidden */}
          <div className="flex lg:hidden justify-center mb-8">
            <div className="flex items-center h-full text-[28px] tracking-tight uppercase font-bold">
              <span className="text-primary">VIET</span>
              <span className="text-gray-500 scale-110 mx-[2px]">Q</span>
              <span className="text-primary">UANG</span>
            </div>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}
