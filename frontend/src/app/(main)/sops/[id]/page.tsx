"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Square, Download, FileSignature, ShieldCheck, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SOPViewerPage() {
  const [hasReadComplete, setHasReadComplete] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [signatureInput, setSignatureInput] = useState("");
  const [isSuccessfullySigned, setIsSuccessfullySigned] = useState(false);

  // Hardcoded for mock authentication context
  const targetSignature = "BS Nguyễn Văn A";

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (signatureInput === targetSignature) {
      setIsSuccessfullySigned(true);
      setShowSignatureModal(false);
    }
  };

  return (
    <div className="min-h-screen pb-40">
      
      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Trở về Danh mục tài liệu
          </Link>
          <div className="flex items-center gap-2 text-sm font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
            <ShieldCheck className="w-4 h-4" /> Tài liệu lưu hành nội bộ
          </div>
        </div>
      </div>

      {/* Main A4 Document Area */}
      <div className="container mx-auto px-4 lg:px-8 mt-10">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-md shadow-2xl relative overflow-hidden"
          style={{ 
            minHeight: "1122px", // A4 paper rough proportion
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05)"
          }} 
        >
          {/* Document Header (Letterhead style) */}
          <div className="border-b-4 border-double border-gray-200 px-12 py-10 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black text-primary tracking-tighter uppercase">VIET QUANG DENTAL</h2>
              <p className="text-gray-500 text-sm font-medium mt-1">Hệ thống Y khoa & Nha khoa Thẩm mỹ</p>
            </div>
            <div className="text-right">
              <p className="text-gray-900 font-bold uppercase text-sm tracking-widest mb-1">Quy định / SOP</p>
              <p className="text-gray-500 text-xs font-mono">ID: VQD-SOP-IC-2026-04</p>
              <p className="text-gray-500 text-xs font-mono mt-1">Ban hành: 15/04/2026</p>
            </div>
          </div>

          {/* Document Body */}
          <div className="px-12 py-12 prose max-w-none text-gray-800 leading-relaxed font-sans">
            <h1 className="text-center text-3xl font-bold uppercase tracking-wide mb-12 font-sans text-gray-900">
              Quy Trình Kiểm Soát Nhiễm Khuẩn <br/> Phòng Khám Lâm Sàng
            </h1>

            <h3 className="text-xl font-bold mt-8 mb-4">1. Mục đích và Phạm vi áp dụng</h3>
            <p>
              Quy trình này quy định các bước chuẩn hóa bắt buộc nhằm kiểm soát và ngăn chặn lây nhiễm chéo 
              trong quá trình thăm khám và điều trị tại toàn bộ chi nhánh thuộc Hệ thống Nha khoa Việt Quang. 
              Quy định áp dụng cho tất cả Y bác sĩ, Phụ tá, và Nhân viên vệ sinh lâm sàng.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">2. Nguyên tắc vô khuẩn dụng cụ</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-justify">
              <li><strong>Phân loại:</strong> Tất cả dụng cụ tiếp xúc trực tiếp với máu, mô mềm, hoặc xương của bệnh nhân (như kìm nhổ răng, mũi khoan, dao mổ) phải được vô trùng tuyệt đối bằng lò hấp Autoclave trước mỗi lần sử dụng.</li>
              <li><strong>Rửa và ngâm:</strong> Ngay sau khi sử dụng, dụng cụ phải được ngâm ngay vào dung dịch khử khuẩn Hexanios theo đúng tỷ lệ 0.5% trong thời gian 15 phút.</li>
              <li><strong>Đóng gói:</strong> Dụng cụ sau khi sấy khô phải được đóng gói bằng bao ép vô trùng chuyên dụng, có vạch báo hiệu nhiệt độ, ghi rõ ngày tháng hấp đóng gói.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">3. Tiêu chuẩn vệ sinh ghế nha và phòng máy</h3>
            <p className="mb-4">
              Giữa các ca điều trị, đội ngũ phụ tá bắt buộc phải thực hiện sát khuẩn bề mặt ghế nha khoa, mâm nha, 
              tay xịt hơi nước, và tay khoan bằng cồn y tế 70 độ hoặc khăn tẩm CaviWipes. 
            </p>
            <p>
              Đối với các ca nhổ răng tiểu phẫu có chảy máu diện rộng, bắt buộc phải sử dụng màng nilon dán bảo vệ 
              một lần (Barrier film) tại các nút bấm điều khiển cần thiết.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">4. Xử lý rác thải y tế</h3>
            <p>
              Rác thải y tế lây nhiễm (bông băng dính máu, kim tiêm, lưỡi dao mổ) bắt buộc phải được thải bỏ vào hộp vàng y tế cứng 
              hoặc túi vàng chuyên dụng có dán nhãn CẢNH BÁO LÂY NHIỄM. Nghiêm cấm vứt lẫn lộn với rác thải sinh hoạt thông thường.
            </p>

            {/* Simulated remaining huge text space */}
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-gray-200 mt-12 bg-gray-50 rounded-lg">
               <FileText className="w-8 h-8 text-gray-300 mb-2" />
               <p className="text-gray-400 text-sm italic">... [Nội dung chi tiết trang 2 đến trang 5] ...</p>
            </div>
          </div>

          {/* Acknowledgement Checkbox (Crucial Action inside Document) */}
          <div className="bg-orange-50/50 mt-8 border-t border-orange-100 p-8 sm:p-12">
            {!isSuccessfullySigned ? (
              <div 
                onClick={() => setHasReadComplete(!hasReadComplete)}
                className={`flex gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  hasReadComplete ? 'bg-orange-50 border-orange-400 shadow-md shadow-orange-100' : 'bg-white border-gray-200 hover:border-orange-300 hover:bg-orange-50/30'
                }`}
              >
                <div className="shrink-0 mt-1">
                  {hasReadComplete ? (
                    <CheckSquare className="w-6 h-6 text-orange-600" />
                  ) : (
                    <Square className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Tôi xác nhận đã đọc và thẩm thấu toàn bộ nội dung</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Bằng việc tick vào ô này, tôi (<strong>{targetSignature}</strong>) cam đoan đã đọc kỹ Quy chuẩn an toàn nhiễm khuẩn này và chịu trách nhiệm kỷ luật nếu vi phạm nội quy phòng khám.
                  </p>
                </div>
              </div>
            ) : (
              // Document Officially Signed State
              <div className="flex items-start gap-4 p-6 rounded-xl bg-green-50 auto-green-500 border border-green-200">
                <div className="shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 text-lg uppercase tracking-wide">Tài liệu đã được ký xác nhận pháp lý</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-3 text-sm text-green-800 font-medium">
                    <p>Người xác nhận: <span className="font-bold text-green-900">{targetSignature}</span></p>
                    <p>Thời gian ký: <span className="font-mono">29/03/2026 14:05:22</span></p>
                    <p>Địa chỉ IP: <span className="font-mono">192.168.1.45</span></p>
                    <p>Chữ ký số SHA: <span className="font-mono text-xs">A8F9...2E41</span></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.article>
      </div>

      {/* Floating Sticky Action Bar */}
      <AnimatePresence>
        {!isSuccessfullySigned && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
          >
            <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gray-400" /> 
                Yêu cầu hoàn tất đọc tài liệu để Ký tên
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Download className="w-5 h-5" /> PDF
                </button>
                <button 
                  disabled={!hasReadComplete}
                  onClick={() => setShowSignatureModal(true)}
                  className={`flex-1 sm:flex-none px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md ${
                    hasReadComplete 
                      ? "bg-primary text-white hover:bg-teal-700 active:scale-95 shadow-teal-500/20" 
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <FileSignature className="w-5 h-5" /> 
                  Ký xác nhận ngay
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signature Modal (Double Authentication) */}
      <AnimatePresence>
        {showSignatureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSignatureModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 z-10"
            >
              <button 
                onClick={() => setShowSignatureModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <FileSignature className="w-7 h-7" />
              </div>

              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Chữ ký điện tử nội bộ</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Thao tác này tương đương với chữ ký xác nhận bằng bút mực. Bạn sẽ chịu hoàn toàn trách nhiệm về việc thực thi lưu trình này trong công việc thực tế.
              </p>

              <form onSubmit={handleSign} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Để xác nhận, hãy gõ chính xác: <strong className="text-primary bg-teal-50 px-1 py-0.5 rounded px-2">{targetSignature}</strong>
                  </label>
                  <input 
                    type="text" 
                    value={signatureInput}
                    onChange={(e) => setSignatureInput(e.target.value)}
                    autoComplete="off"
                    autoFocus
                    placeholder="Nhập họ tên đầy đủ..." 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-medium text-gray-900"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setShowSignatureModal(false)}
                    className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
                  >
                    Hủy bỏ
                  </button>
                  <button 
                    type="submit"
                    disabled={signatureInput !== targetSignature}
                    className={`flex-1 py-3 px-4 font-bold rounded-xl transition-all shadow-sm ${
                      signatureInput === targetSignature
                        ? "bg-primary hover:bg-teal-700 text-white shadow-teal-500/20 active:scale-95"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Ký Tên
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
