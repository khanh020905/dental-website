import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VQ LMS - Hệ Thống Đào Tạo Nha Khoa Việt Quang",
  description: "Cổng thông tin đào tạo nội bộ Viet Quang Dental - Hệ thống quản lý học tập, kiểm định năng lực lâm sàng và cấp chứng chỉ điện tử chuyên nghiệp.",
  keywords: ["Nha khoa Việt Quang", "VQ Dental", "LMS", "Đào tạo nội bộ", "Y khoa", "Nha khoa", "E-learning", "Chứng chỉ điện tử"],
  authors: [{ name: "Viet Quang Dental" }],
  openGraph: {
    title: "VQ LMS - Hệ Thống Đào Tạo Nha Khoa Việt Quang",
    description: "Cổng thông tin đào tạo nội bộ Viet Quang Dental - Đào tạo, đánh giá và cấp chứng chỉ trực tuyến.",
    url: "https://dental-website-sigma-two.vercel.app",
    siteName: "VQ LMS",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VQ LMS - Hệ Thống Đào Tạo Nha Khoa Việt Quang",
    description: "Nền tảng đào tạo chuyên môn y khoa và kiểm định năng lực độc quyền.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-gray-50`}
    >
      <body className="flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
