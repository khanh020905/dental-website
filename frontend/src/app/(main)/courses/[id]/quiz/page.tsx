"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle2, XCircle, Award, RefreshCw, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mockQuizData, Question } from "@/lib/mockQuizData";

export default function QuizRoom() {
  const router = useRouter();

  // State Management
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Timer: 15 minutes = 900 seconds
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  // Timer Effect
  useEffect(() => {
    if (isSubmitted) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIdx]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIdx < mockQuizData.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Grading Logic
  const totalQuestions = mockQuizData.length;
  const correctMatches = mockQuizData.filter(
    (q, idx) => selectedAnswers[idx] === q.correctAnswerIndex
  ).length;
  const scorePercent = Math.round((correctMatches / totalQuestions) * 100);
  
  // Passing criteria hardcoded at 80% (needs 4/5 correct)
  const isPassed = scorePercent >= 80;

  // Render Result Screen
  if (isSubmitted) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white max-w-lg w-full rounded-[2rem] p-8 shadow-xl border border-gray-100/50 relative overflow-hidden text-center"
        >
          {/* Decorative Background Blob */}
          <div className={`absolute top-0 left-0 right-0 h-40 ${isPassed ? 'bg-gradient-to-br from-green-400 to-teal-500' : 'bg-gradient-to-br from-red-400 to-rose-500'} opacity-10`} />

          <div className="relative z-10 flex flex-col items-center">
            {isPassed ? (
              <motion.div
                initial={{ rotate: -10, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-green-100 shadow-xl"
              >
                <Award className="w-12 h-12" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: -10, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 shadow-red-100 shadow-xl"
              >
                <XCircle className="w-12 h-12" />
              </motion.div>
            )}

            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              {isPassed ? "Chúc mừng bạn!" : "Chưa đạt yêu cầu!"}
            </h1>
            <p className="text-gray-500 mb-8 max-w-sm">
              {isPassed 
                ? "Thành tích xuất sắc! Bạn đã vượt qua bài thi năng lực chuyên môn và được ghi nhận vượt khóa học." 
                : "Rất tiếc, bạn chưa đạt tiêu chuẩn 80% của Viện. Vui lòng ôn tập lại và thi lại."}
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center">
                <span className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">Điểm số</span>
                <span className={`text-3xl font-black ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                  {scorePercent}%
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center">
                <span className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">Kết quả</span>
                <span className={`text-xl mt-1 font-bold ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                  {correctMatches} / {totalQuestions}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {isPassed ? (
                <>
                  <button onClick={() => router.push('/')} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Về trang Tổng quan
                  </button>
                  <Link href="/verify/vqd-2026-x19" target="_blank" className="w-full bg-white border-2 border-teal-100 hover:bg-teal-50 text-teal-700 font-bold py-4 rounded-xl transition-colors flex items-center justify-center">
                    Hiển thị Chứng chỉ điện tử
                  </Link>
                </>
              ) : (
                <>
                  <button onClick={() => window.location.reload()} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5" /> Làm lại bài thi ngay
                  </button>
                  <Link href="/courses/1" className="w-full flex items-center justify-center text-gray-500 hover:text-gray-900 font-medium py-2 transition-colors">
                    Xem lại Video bài giảng
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Render Quiz Interface (Step-by-Step)
  const currentQuestion = mockQuizData[currentQuestionIdx];
  const hasSelectedCurrent = selectedAnswers[currentQuestionIdx] !== undefined;
  const isLastQuestion = currentQuestionIdx === mockQuizData.length - 1;

  // Pulse animation if time is low (< 60s)
  const isTimeLow = timeLeft <= 60;

  return (
    <div className="min-h-screen pb-20">
      {/* Top Bar - Sticky */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/courses/1" className="hidden sm:inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Thoát bài thi
          </Link>

          {/* Progress Indication */}
          <div className="flex-1 max-w-md mx-auto px-4">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
              <span>Đang thi (P1)</span>
              <span className="text-primary">Câu {currentQuestionIdx + 1}/{totalQuestions}</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300 ease-in-out" 
                style={{ width: `${((currentQuestionIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <div className={`flex items-center gap-2 font-mono font-bold px-3 py-1.5 rounded-lg ${
            isTimeLow ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-700'
          }`}>
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Main Examination Area */}
      <div className="container mx-auto px-4 lg:px-8 mt-12 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-relaxed max-w-3xl mx-auto">
                {currentQuestion.text}
              </h2>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestionIdx] === index;

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectOption(index)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 group flex items-center gap-4 ${
                      isSelected 
                        ? 'border-primary bg-teal-50 shadow-md shadow-teal-100/50' 
                        : 'border-gray-100 bg-white hover:border-teal-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-teal-100 group-hover:text-primary'
                    }`}>
                      {String.fromCharCode(65 + index)} {/* A, B, C, D */}
                    </div>
                    <span className={`text-lg font-medium leading-relaxed ${isSelected ? 'text-teal-900' : 'text-gray-700'}`}>
                      {option}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Next / Submit Button Area */}
            <div className="max-w-2xl mx-auto mt-12 flex justify-end">
              <button
                disabled={!hasSelectedCurrent}
                onClick={handleNext}
                className={`py-4 px-8 rounded-xl font-bold flex items-center gap-2 transition-all ${
                  hasSelectedCurrent
                    ? 'bg-primary hover:bg-teal-700 text-white shadow-lg shadow-teal-500/20 active:scale-[0.98] tracking-wide'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed hidden' // Auto-hide if not selected to force focus
                }`}
              >
                {isLastQuestion ? 'Nộp bài thi' : 'Câu tiếp theo'}
                {!isLastQuestion && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
