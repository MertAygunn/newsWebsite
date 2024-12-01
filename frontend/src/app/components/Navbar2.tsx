"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineHome, HiOutlineSearch, HiOutlineBell } from "react-icons/hi";
import LoginRegisterForm from "./LoginRegisterForm"; // LoginRegisterForm bileşenini import edin
import Modal from "./Modal"; // Modal bileşenini import edin
import Link from "next/link"; // Link bileşenini import edin

const Navbar2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcı giriş durumu
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal görünürlüğünü kontrol etmek için durum
  const [message, setMessage] = useState(""); // Mesaj durumu
  const [isVisible, setIsVisible] = useState(false); // Mesajın görünürlüğü
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menüsünün açılma durumu

  const handleBetaClick = () => {
    setMessage("BETA'dayız, butonlar şu anda aktif değil."); // Mesajı ayarla
    setIsVisible(true); // Mesajı görünür yap

    // 2 saniye sonra mesajı gizle
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  // Seçeneklerin adları
  const dropdownOptions = [
    "Teknoloji",
    "Eğitim",
    "Genel Kültür",
    "Ürün İncelemeleri",
    "KPSS",
    "Sanat",
    "Donanım & Yazılım",
    "ALES",
    "Tarih"
  ];

  return (
    <div className="bg-white">
      <div className="px-1 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ml-64">
        <div className="relative flex items-center justify-between">
          <Link
            href="/" // Ana sayfaya yönlendirme
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <Image src="/images/logo.jpg" alt="Logo" width={72} height={72} />
            <span className="ml-2 text-2xl font-serif tracking-wide text-gray-800 uppercase">
              Yalova Konusuyor
            </span>
          </Link>

          {/* Geniş 3 logolu kısım */}
          <ul className="flex items-center justify-between space-x-4 lg:flex lg:w-1/3">
            <li>
              <Link
                href="/"
                aria-label="Ana Sayfa"
                title="Ana Sayfa"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-600"
              >
                <HiOutlineHome className="inline-block w-6 h-6" />
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)} // Dropdown açma
              onMouseLeave={() => setDropdownOpen(false)} // Dropdown kapama
            >
              <button
                aria-label="Ara"
                title="Ara"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-600 py-4 px-6" // Padding artırıldı
              >
                <HiOutlineSearch className="inline-block w-6 h-6" />
              </button>
              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full border border-gray-500 rounded-lg bg-white w-[500px] mt-0 z-50 transition-all duration-300 ease-in-out">
                  <div className="grid grid-cols-3 gap-4 p-4"> {/* 3 sütun düzeni */}
                    {dropdownOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => alert(`${option} seçildi`)}
                        className={`w-full px-6 py-2 text-lg text-black hover:text-sky-500 rounded-lg transition-colors duration-200 ${index < 3 ? 'font-bold' : ''}`}

                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => {
                  handleBetaClick(); // BETA mesajını göster
                }}
                aria-label="Bildirimler"
                title="Bildirimler"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-600"
              >
                <HiOutlineBell className="inline-block w-6 h-6" />
              </button>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    setIsLoggedIn(false); // Çıkış yap
                  } else {
                    setIsModalOpen(true); // Modal aç
                  }
                }}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded-full shadow-2xl bg-gray-300 hover:bg-sky-500 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                {isLoggedIn ? "Çıkış Yap" : "Giriş Yap"}{" "}
                {/* Buton metni giriş durumuna göre değişir */}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* BETA Mesajı */}
      {isVisible && message && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-sky-500 text-slate-200 p-4 rounded shadow-md z-50 transition-opacity duration-1000 opacity-100">
          {message}
        </div>
      )}

      {/* Modal Bileşeni */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <LoginRegisterForm
            onClose={() => setIsModalOpen(false)}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Modal>
      )}
    </div>
  );
};

export default Navbar2;
