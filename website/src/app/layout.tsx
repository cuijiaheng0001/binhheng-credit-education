import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://binghengcredit.com'),
  title: {
    default: "炳恒信用教育 - 专业国际债务催收服务 | BinhHeng Credit Education",
    template: "%s | 炳恒信用教育"
  },
  description: "炳恒信用教育提供专业的国际债务催收服务，包括中国债务追讨、跨境B2B欠款回收、留学公寓租金催收等。",
  keywords: "中国债务催收, 国际债务追讨, B2B欠款回收, 跨境债务, 留学公寓租金, 法律催收, 债务咨询",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}