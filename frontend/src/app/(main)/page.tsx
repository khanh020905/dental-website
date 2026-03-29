"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, FileText, ArrowRight, Bell, Clock, CheckCircle2, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const FADE_UP: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const STAGGER: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="w-full flex-col flex gap-8 pb-20">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-[480px] w-full rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 md:p-12 shadow-2xl"
        >
          {/* Background Image - Using a clean, professional medical/dental abstraction from Unsplash */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop"
              alt="Medical background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Brand Teal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 shadow-xl via-primary/70 to-transparent z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10 z-10" />

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between w-full">
            <motion.div 
              className="max-w-2xl text-white"
              variants={STAGGER}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={FADE_UP} className="flex gap-2 items-center mb-4">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-white/30 truncate">
                  Đang tiến hành: Quy trình xuất kho
                </span>
              </motion.div>
              
              <motion.h1 
                variants={FADE_UP} 
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md"
              >
                Chào buổi sáng,
                <br /> Học viên của VQ!
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg text-white/90 mb-8 max-w-xl font-medium">
                Bạn có 2 bài kiểm tra sắp tới hạn và 1 tài liệu đào tạo (SOP) cần phải duyệt trong tuần này. 
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex gap-4">
                <Link 
                  href="/courses/khoa-hoc-nho-rang"
                  className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Tiếp tục bài học
                  <PlayCircle className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Simulated Live QR Code for Demo Scanning */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="flex flex-row md:flex-col items-center gap-4 md:gap-0 bg-white/20 backdrop-blur-md border border-white/30 p-2 md:p-3 rounded-2xl shadow-2xl mt-8 md:mt-0 hover:scale-105 transition-transform cursor-crosshair group tooltip-container w-max self-start md:self-auto"
              title="Khắc phục: Nếu quét QR bằng điện thoại trùng WiFi nhà, hãy thay 'localhost' bằng địa chỉ IP IPv4 của máy tính (vd: 192.168.1.15)"
            >
              <div className="bg-white p-1 md:p-2 rounded-xl mb-0 md:mb-2 shrink-0">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=http://localhost:3000/verify/vqd-2026-x19" 
                  alt="Scan Demo Certificate" 
                  className="w-12 h-12 md:w-24 md:h-24 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <div className="text-white text-left md:text-center shrink-0 pr-2 md:pr-0">
                <p className="text-sm md:text-xs font-bold tracking-widest uppercase opacity-90">Quét Demo</p>
                <p className="text-xs md:text-[10px] font-medium opacity-80">Chứng chỉ Hợp lệ</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Dashboard Grid */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Wider) - Courses & SOPs */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Courses Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Khóa học đang diễn ra</h2>
                <Link href="/courses" className="text-primary font-medium flex items-center gap-1 hover:underline">
                  Xem tất cả <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Course Card 1 */}
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Kiến thức Implant Cơ bản</h3>
                  <p className="text-gray-500 text-sm mb-4">Bs. Nguyễn Văn A</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-primary h-2.5 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs font-medium text-gray-500">
                    <span>65% hoàn thành</span>
                    <span className="text-primary">Tiếp tục</span>
                  </div>
                </motion.div>

                {/* Course Card 2 */}
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Kỹ năng Chăm sóc Khách hàng</h3>
                  <p className="text-gray-500 text-sm mb-4">BP. Nhân sự</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "12%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-orange-500 h-2.5 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs font-medium text-gray-500">
                    <span>12% hoàn thành</span>
                    <span className="text-orange-600">Tiếp tục</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* SOPs Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Quy trình (SOP) cần duyệt</h2>
              </div>
              
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
                {[1, 2].map((i, index) => (
                  <Link 
                    href="/sops/quy-trinh-nhiem-khuan" 
                    key={i} 
                    className={`p-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer block ${index !== 0 ? 'border-t border-gray-100' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 tracking-tight leading-tight">Quy trình kiểm soát nhiễm khuẩn lâm sàng 2026</h4>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" /> Hạn chót: 15/04/2026
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                       <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200 uppercase tracking-widest whitespace-nowrap">
                         Bắt buộc
                       </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Narrower) - News & Notifications */}
          <div className="flex flex-col gap-8">
            <div className="bg-primary text-white rounded-[2rem] p-8 shadow-lg relative overflow-hidden">
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
               <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
               
               <h3 className="text-xl font-bold mb-2 relative z-10">Compliance Status</h3>
               <div className="flex items-end gap-2 mb-6 relative z-10">
                 <span className="text-4xl font-extrabold tracking-tighter">85%</span>
                 <span className="text-white/80 mb-1 font-medium">Hoàn thành</span>
               </div>
               
               <div className="space-y-3 relative z-10">
                 <div className="flex items-center gap-2 text-sm bg-white/10 py-2 px-3 rounded-xl border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-green-300" />
                    <span>3 khóa học đã đăng ký</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm bg-white/10 py-2 px-3 rounded-xl border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-green-300" />
                    <span>4 SOP đã xác nhận</span>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="w-5 h-5 text-gray-900" />
                <h3 className="text-lg font-bold text-gray-900">Bảng tin nội bộ</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">Cập nhật chính sách nhân sự Q2/2026</h4>
                    <p className="text-xs text-gray-500 mt-1">Hôm qua, 14:30 • BP. Nhân sự</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">Chào mừng nhân sự mới Khối Kinh Doanh</h4>
                    <p className="text-xs text-gray-500 mt-1">12/04/2026 • BP. Hành chính</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition">
                Xem tất cả
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
