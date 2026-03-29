"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Download, Share2, Printer, MapPin, BadgeCheck, QrCode } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CertificateVerificationPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-12 px-4 sm:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black">
      
      {/* Absolute top-left logo (Optional navigation) */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          <span className="text-primary">VQ</span>Dental.
        </Link>
      </div>

      {/* Trust Badge Banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        className="bg-green-500/10 border border-green-500/20 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 mb-8 shadow-lg shadow-green-500/5"
      >
        <ShieldCheck className="w-6 h-6 text-green-400" />
        <span className="font-bold text-green-400 tracking-wide uppercase text-sm sm:text-base">Chứng nhận Hợp lệ & Đã được xác thực</span>
      </motion.div>

      {/* Certificate Container (Landscape Aspect Ratio) */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
        style={{ transformPerspective: 1000 }}
        className="relative w-full max-w-5xl rounded-lg shadow-2xl bg-white text-gray-900 overflow-hidden group"
      >
        {/* The aspect ratio block: 1.414 ratio (A4 landscape) */}
        <div className="w-full h-0 pb-[70.7%] relative">
          
          {/* Hologram Reflection Effect (Moves on hover using CSS in reality, but just static linear gradient here) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-50 pointer-events-none transform -translate-x-full group-hover:translate-x-full" style={{ transition: "all 1.5s ease" }} />

          {/* Inner Certificate Border Canvas */}
          <div className="absolute inset-4 sm:inset-8 border-[12px] border-double border-yellow-600/80 p-6 sm:p-12 flex flex-col justify-between bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            
            {/* Top Section */}
            <div className="text-center space-y-4">
              <h4 className="text-yellow-700/80 font-bold tracking-[0.3em] uppercase text-sm sm:text-base">Mạng lưới Y tế Tự nhân</h4>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight uppercase">Viet Quang Dental</h1>
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-yellow-600 flex-1 max-w-[100px]" />
                <BadgeCheck className="w-8 h-8 text-yellow-600" />
                <div className="h-px bg-yellow-600 flex-1 max-w-[100px]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-widest mt-2" style={{ fontFamily: "serif" }}>Certificate of Completion</h2>
              <p className="text-gray-500 font-medium tracking-widest uppercase text-sm mt-4">Chứng nhận đào tạo nội bộ</p>
            </div>

            {/* Middle Section (The Recipient) */}
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center">
              <p className="text-gray-500 italic text-lg mt-8">Được trân trọng trao tặng cho Y/Bác sĩ:</p>
              
              {/* Highlighted Name */}
              <div className="relative inline-block mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary" style={{ fontFamily: "serif", paddingBottom: "10px" }}>
                  BS. Nguyễn Văn A
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-600/50 rounded-full" />
              </div>

              <div className="max-w-2xl mx-auto space-y-3 mt-6">
                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Đã xuất sắc hoàn thành và vượt qua bài kiểm tra đánh giá năng lực của chuyên đề đào tạo lâm sàng:</p>
                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 uppercase">Quy trình & Kỹ thuật nhổ răng khôn (P1)</h3>
                 <p className="text-gray-500 font-medium">Lưu lượng chuẩn: 120 phút | Điểm thi: <span className="text-green-600 font-bold">100/100 (Xuất sắc)</span></p>
              </div>
            </div>

            {/* Bottom Section (Signatures & QR) */}
            <div className="flex justify-between items-end mt-12 px-4 sm:px-12">
              
              {/* QR Code & ID */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white border-4 border-gray-900 p-2 flex items-center justify-center">
                   {/* Fake QR code visualization */}
                   <QrCode className="w-full h-full text-gray-900" />
                </div>
                <p className="text-xs font-mono text-gray-500">ID: VQD-2026-X19</p>
              </div>

              {/* Red Wax Seal Mock */}
              <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 flex flex-col items-center opacity-90 hidden md:flex">
                <div className="w-24 h-24 rounded-full bg-red-700 border-4 border-red-800 shadow-inner flex items-center justify-center relative shadow-xl">
                  <div className="absolute inset-2 rounded-full border border-red-500/50" />
                  <div className="text-center">
                    <p className="text-xs text-red-200 uppercase font-bold tracking-tighter">Verified</p>
                    <p className="text-xl text-white font-black">2026</p>
                    <p className="text-[10px] text-red-300 font-bold">VQD</p>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="text-center flex flex-col items-center">
                <div className="w-40 sm:w-56 h-16 sm:h-24 relative mb-2 flex items-end justify-center">
                  {/* Handwritten mock signature */}
                  <span className="text-4xl sm:text-5xl text-blue-900 opacity-80" style={{ fontFamily: "cursive", transform: "rotate(-5deg)" }}>Tran Quan</span>
                </div>
                <div className="w-full h-px bg-gray-400 mb-2" />
                <p className="font-bold text-gray-900 uppercase tracking-wider text-sm">Ts. Bs. Trần Quân</p>
                <p className="text-gray-500 text-xs">Giám đốc Chuyên môn</p>
                <p className="text-gray-400 text-xs mt-1">Ngày cấp: 29/03/2026</p>
              </div>

            </div>

          </div>
        </div>
      </motion.div>

      {/* Public Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center"
      >
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-teal-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-teal-500/20 active:scale-95">
          <Download className="w-5 h-5" />
          Tải file PDF
        </button>
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700 hover:border-slate-500 shadow-lg active:scale-95">
          <Share2 className="w-5 h-5" />
          Chia sẻ Liên kết
        </button>
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700 hover:border-slate-500 shadow-lg active:scale-95">
          <Printer className="w-5 h-5" />
          In Bản cứng
        </button>
      </motion.div>

      {/* Footer Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center text-slate-500 text-sm max-w-lg"
      >
        <p>Đây là chứng chỉ điện tử vĩnh viễn được quản lý bởi Hệ thống Nha khoa Việt Quang. Tổ chức/Cá nhân có thể quét mã QR để xác minh danh tính và năng lực của nhân sự tại mọi thời điểm.</p>
        <p className="mt-4 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" /> Hội sở: 123 Đường Y Khoa, Quận 10, TP.HCM
        </p>
      </motion.div>

    </div>
  );
}
