// src/app/layout.tsx

import './globals.css'; // Tailwind CSS dosyanızı burada dahil edin
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import { ReactNode } from 'react';
import { ThemeProvider } from './context/ThemeContext'; // ThemeProvider'ı import edin

export const metadata = {
    title: 'Ana Sayfa',
    description: 'Giriş yapabileceğiniz ana sayfa',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <html lang="tr">
                <body className="bg-white text-black transition duration-300">
                    <Navbar2 />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </ThemeProvider>
    );
}