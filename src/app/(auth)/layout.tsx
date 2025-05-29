import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "../globals.css";

const k2D = K2D({
   subsets: ['thai'],
   weight: ['100','200', '300', '400', '500', '600', '700', '800'],
   display: 'swap',
});

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description: "ขายสินค้าของนักศึกษา ประจำปี 2568",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${k2D.className}`}
      >

        {children}
      </body>
    </html>
  );
}
