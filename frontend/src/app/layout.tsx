// app/layout.tsx

import './globals.css'; // Tailwind CSS dosyanızı burada dahil edin
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactNode } from 'react'; // ReactNode'u import edin

export const metadata = {
  title: 'Ana Sayfa',
  description: 'Giriş yapabileceğiniz ana sayfa',
};

// children prop'u için tür tanımlaması ekleniyor
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}