"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export function Header() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Basic mock auth check through localStorage
    const savedUser = localStorage.getItem("vq_auth_user");
    setIsAuth(!!savedUser);
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Button (Left side on mobile) */}
        <button 
          className="md:hidden p-2 -ml-2 text-gray-600 hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo - Pure CSS Typographic Logo */}
        <Link 
          href="/" 
          className="flex items-center h-full text-[22px] sm:text-[28px] md:text-4xl tracking-tight uppercase font-bold"
        >
          <span className="text-primary">VIET</span>
          <span className="text-gray-500 scale-110 mx-[2px]">Q</span>
          <span className="text-primary">UANG</span>
        </Link>

        {/* Navigation - referencing D-SCHOOL layout */}
        <nav className="hidden md:flex gap-8 text-base lg:text-[17px] font-semibold text-gray-700">
          <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <Link href="/courses/khoa-hoc-nho-rang" className="hover:text-primary transition-colors">Khóa học</Link>
          <Link href="/sops/quy-trinh-nhiem-khuan" className="hover:text-primary transition-colors">Quy trình (SOP)</Link>
          <Link href="/" className="hover:text-primary transition-colors">Tin tức nội bộ</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="text-gray-500 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <div className="hidden sm:flex items-center gap-4">
            {isAuth === null ? (
              <div className="w-24 h-10 bg-gray-100 rounded-full animate-pulse" />
            ) : isAuth ? (
              <Link 
                href="/account"
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary/20 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Cá nhân</span>
              </Link>
            ) : (
              <Link 
                href="/login"
                className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-sm"
              >
                <span>Bắt đầu</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-2xl border-b border-gray-100 md:hidden flex flex-col px-6 py-4 animate-in slide-in-from-top-2 duration-200">
          <Link 
            href="/" 
            className="py-3 text-lg font-bold text-gray-800 border-b border-gray-50 flex justify-between items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Trang chủ
          </Link>
          <Link 
            href="/courses/khoa-hoc-nho-rang" 
            className="py-3 text-lg font-bold text-gray-800 border-b border-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Khóa học Nội bộ
          </Link>
          <Link 
            href="/sops/quy-trinh-nhiem-khuan" 
            className="py-3 text-lg font-bold text-gray-800 border-b border-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Quy trình (SOP)
          </Link>
          
          <div className="mt-6 flex flex-col">
            {isAuth ? (
              <Link 
                href="/account"
                className="flex items-center justify-center gap-2 px-4 py-4 bg-primary/10 text-primary font-bold rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Tài khoản của tôi</span>
              </Link>
            ) : (
              <Link 
                href="/login"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-xl shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Đăng nhập</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
