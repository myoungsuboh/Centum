import Nevi from '@/components/common/nevi';
import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ko">
      <body>
        <div className="relative">
          <Nevi />
          {children}
        </div>
      </body>
    </html>
  );
}
