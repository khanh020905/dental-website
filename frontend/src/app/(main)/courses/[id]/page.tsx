"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, PlayCircle, Lock, BookOpen, AlertTriangle } from "lucide-react";
import { SecureVideoPlayer } from "@/components/video/SecureVideoPlayer";

export default function CourseDetailPage() {
  const [courseCompleted, setCourseCompleted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 mt-6">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium mb-8">
        <ArrowLeft className="w-4 h-4" />
        Trở về danh sách đào tạo
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Video Room (70%) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
            
            {/* The Anti-Cheat Video Player */}
            <div className="rounded-2xl overflow-hidden bg-black aspect-video relative">
              <SecureVideoPlayer 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                onComplete={() => setCourseCompleted(true)}
              />
            </div>
            
            <div className="mt-8 px-4 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-teal-50 text-teal-700 font-semibold px-3 py-1 rounded-full text-sm">Chuyên môn Lâm Sàng</span>
                    <span className="text-gray-500 text-sm font-medium">Cập nhật: T4/2026</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                    Tiểu phẫu Nhổ răng khôn (Răng 8) <br/> Quy trình chuẩn P1
                  </h1>
                  <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl text-lg">
                    Bài giảng nội bộ trình bày chi tiết về quy trình chuẩn bị, cách thức gây tê, 
                    và thao tác chia cắt thân răng an toàn theo giáo trình của Nha khoa Việt Quang. 
                  </p>
                </div>
              </div>

              {/* Notice for Anti-Cheat */}
              <div className="mt-8 flex items-start gap-3 p-4 bg-orange-50 border border-orange-100 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-sm text-orange-800 leading-relaxed font-medium">
                  <strong>Hệ thống giám sát (Anti-Cheat) đang chạy:</strong> 
                  <br /> Bạn không thể tua nhanh (Skip) qua những đoạn chưa xem. Bạn có thể chọn tốc độ 1.5x để học nhanh hơn. 
                  Yêu cầu xem tối thiểu 90% thời lượng bài giảng để được tính là Hoàn thành và mở khóa bài thi trắc nghiệm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Course Modules (30%) */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-28">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Lộ trình học thuật
            </h3>

            <div className="space-y-3">
              {/* Active Unit */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 transition-all cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">Đang học</span>
                  <span className="text-xs font-semibold text-gray-500">10:53 Phút</span>
                </div>
                <h4 className="font-semibold text-gray-900">1. Quy trình chuẩn bị & Gây tê</h4>
                <div className="flex items-center gap-2 mt-3 text-sm text-primary font-medium">
                  <PlayCircle className="w-4 h-4" /> Đang phát Video
                </div>
              </div>

              {/* Locked Unit */}
              <div className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all opacity-70 group cursor-not-allowed">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bài 2</span>
                  <span className="text-xs font-semibold text-gray-400">14:20 Phút</span>
                </div>
                <h4 className="font-semibold text-gray-700 group-hover:text-gray-900">2. Kỹ thuật chia cắt thân răng an toàn</h4>
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-400 font-medium">
                  <Lock className="w-4 h-4" /> Yêu cầu hoàn thành Bài 1
                </div>
              </div>

              {/* Locked Quiz */}
              <div className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all opacity-70 cursor-not-allowed">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bài Thi</span>
                  <span className="text-xs font-semibold text-gray-400">15 CÂU HỎI</span>
                </div>
                <h4 className="font-semibold text-gray-700">Kiểm tra năng lực (Quiz P1)</h4>
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-400 font-medium">
                  <Lock className="w-4 h-4" /> Mở khóa khi hoàn thành Video
                </div>
              </div>
            </div>

            {/* Assessment Unlock Action */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              {courseCompleted ? (
                <Link 
                  href="/courses/1/quiz"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm bg-green-500 hover:bg-green-600 text-white shadow-green-500/20 active:scale-[0.98]"
                >
                  Làm bài kiểm tra ngay <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              ) : (
                <button 
                  disabled
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-gray-100 text-gray-400 cursor-not-allowed shadow-sm"
                >
                  Xem Video để mở khóa
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
