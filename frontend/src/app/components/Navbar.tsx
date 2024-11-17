"use client"; // İstemci tarafı bileşen olduğunu belirtiyor

import Link from 'next/link';
import Image from 'next/image'; // Next.js Image bileşenini import edin
import { useState } from 'react';
import LoginRegisterForm from './LoginRegisterForm'; // LoginRegisterForm bileşenini import edin
import Modal from './Modal'; // Modal bileşenini import edin

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcı giriş durumu
    const [userPhoto, setUserPhoto] = useState<string | null>(null); // Kullanıcı fotoğrafı
    const [searchTerm, setSearchTerm] = useState(''); // Arama çubuğu
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal görünürlüğünü kontrol etmek için durum

    const handleLoginLogout = () => {
        setIsLoggedIn((prev) => !prev); // Giriş durumunu değiştir
        if (isLoggedIn) {
            setUserPhoto(null); // Çıkış yapıldığında fotoğrafı sıfırla
        } else {
            setUserPhoto('/path/to/user/photo.jpg'); // Giriş yapıldığında fotoğrafı ayarla
        }
    };

    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/32xlogo.png"
                            alt="Logo"
                            width={32} // Görüntünün genişliği
                            height={32} // Görüntünün yüksekliği
                        />
                    </Link>
                </div>

                {/* Arama Çubuğu */}
                <div className="flex flex-1 mx-4">
                    <input
                        type="text"
                        placeholder="Ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded-l-md p-2 w-full"
                    />
                    <button className="bg-blue-500 text-white rounded-r-md p-2">
                        Ara
                    </button>
                </div>

                {/* Dashboard Butonu (Admin kullanıcısına özel) */}
                {isLoggedIn && (
                    <Link href="/dashboard" className="text-white mx-2">
                        Dashboard
                    </Link>
                )}

                {/* Profil Butonu */}
                {isLoggedIn && (
                    <Link href="/profile" className="text-white mx-2">
                        Profil
                    </Link>
                )}

                {/* Giriş Yap/Kayıt Ol Butonu */}
                <button onClick={() => setIsModalOpen(true)} className="text-white mx-2">
                    {isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap / Kayıt Ol'}
                </button>

                {/* Kullanıcı Fotoğrafı */}
                {isLoggedIn && userPhoto && (
                    <Image
                        src={userPhoto}
                        alt="User  Photo"
                        width={32} // Görüntünün genişliği
                        height={32} // Görüntünün yüksekliği
                        className="rounded-full border-2 border-white ml-2"
                    />
                )}
            </div>

            {/* Modal Bileşeni */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <LoginRegisterForm onClose={() => setIsModalOpen(false)} setIsLoggedIn={setIsLoggedIn} />
                </Modal>
            )}
        </nav>
    );
};

export default Navbar;