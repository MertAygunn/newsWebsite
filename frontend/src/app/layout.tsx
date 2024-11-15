// app/layout.tsx

import './globals.css'; // Tailwind CSS dosyanızı burada dahil edin

export const metadata = {
  title: 'Ana Sayfa',
  description: 'Giriş yapabileceğiniz ana sayfa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}