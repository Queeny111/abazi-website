import type { Metadata, Viewport } from 'next'
import { Geist, Noto_Serif_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-sc",
});

export const metadata: Metadata = {
  title: '五行命理 - 八字五行分析与城市推荐',
  description: '根据您的出生年月日时，精准计算天干地支八字、五行属性及缺失，并智能推荐最适合您发展的城市',
}

export const viewport: Viewport = {
  themeColor: '#4a3728',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${_geist.variable} ${_notoSerifSC.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
